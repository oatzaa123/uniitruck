<template>
  <div id="userinfoEditForm">
    <vx-card title="ข้อมูลส่วนตัว C (Collector)">
      <!-- Content Row -->
      <div class="vx-row">
        <div class="vx-col md:w-1/1 w-full">
          <vs-input
            class="w-full mt-4"
            label="ชื่อ-นามสกุล"
            v-model="model.name"
            v-validate="'required'"
            name="name"
            placeholder="ชื่อ-นามสกุล"
          />
          <span class="text-danger text-sm" v-show="errors.has('name')">{{
            errors.first("name")
          }}</span>
        </div>

        <div class="vx-col md:w-1/3 w-full">
          <vs-input
            class="w-full mt-4"
            label="เบอร์โทรศัพท์"
            v-model="model.phone"
            type="number"
            v-validate="'required|max:10'"
            name="phone"
            placeholder="xx-xxxx-xxxx"
          />
          <span class="text-danger text-sm" v-show="errors.has('phone')">{{
            errors.first("phone")
          }}</span>
        </div>

        <div class="vx-col md:w-1/1 w-full">
          <vs-input
            class="w-full mt-4"
            label="อีเมลล์"
            v-model="model.email"
            type="email"
            v-validate="'required|email'"
            name="email"
            placeholder="admin@admin.com"
          />
          <span class="text-danger text-sm" v-show="errors.has('email')">{{
            errors.first("email")
          }}</span>
        </div>
        <!-- <div id="recaptcha-container"></div> -->
        <div class="vx-col md:w-1/3 w-full" style="margin-top:10px;">
          <label class="text-sm">เลือกเขตของท่าน</label> <br />
          <!-- <v-select label="text" :options="options" :value="options.value" :dir="$vs.rtl ? 'rtl' : 'ltr'" class="mb-4 md:mb-0" >
              {{options.text}}
          </v-select> -->
          <select
            v-model="selected"
            class="w-full mt-4"
            style="height: 35px;
            border-radius: 5px;
            border: 1px solid rgba(0, 0, 0, 0.2);"
          >
            <option
              v-for="option in options"
              :value="option.value"
              :key="option.key"
              >{{ option.text }}</option
            >
          </select>
        </div>
        <!-- Save & Reset Button -->
        <div class="vx-col w-full">
          <div class="mt-8 flex flex-wrap items-center justify-end">
            <vs-button
              class="ml-auto mt-2"
              @click="insertdata"
              :disabled="!validateForm"
              >เพิ่มและสร้างโค้ด</vs-button
            >
          </div>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { userRef, codeRef } from "../../../firebase/firebase";
import firebase from "firebase";
import moment from "moment";
export default {
  components: {
    vSelect
  },
  props: {},
  data() {
    return {
      model: {
        name: null,
        email: null,
        phone: null
      },
      newPostKey: "",
      selected: "NN1",
      options: [
        { text: "ภาคเหนือเขต1", value: "NN1" },
        { text: "ภาคเหนือเขต2", value: "NN2" },
        { text: "ภาคเหนือเขต3", value: "NN3" },
        { text: "ภาคอีสานเขต1", value: "NE1" },
        { text: "ภาคอีสานเขต2", value: "NE2" },
        { text: "ภาคอีสานเขต3", value: "NE3" },
        { text: "ภาคอีสานเขต4", value: "NE4" },
        { text: "ภาคอีสานเขต5", value: "NE5" },
        { text: "ภาคตะวันตก​เขต1", value: "WW1" },
        { text: "ภาคตะวันตก​เขต2", value: "WW2" },
        { text: "ภาคตะวันตก​เขต3", value: "WW3" },
        { text: "ภาคตะวันตก​ออก1", value: "EE1" },
        { text: "ภาคตะวันตก​ออก2", value: "EE2" },
        { text: "ภาคตะวันตก​ออก3", value: "EE3" },
        { text: "ภาคกลางเขต1", value: "MM1" },
        { text: "ภาคกลางเขต2", value: "MM2" },
        { text: "ภาคกลางเขต3", value: "MM3" },
        { text: "ภาคใต้เขต1", value: "SS1" },
        { text: "ภาคใต้เขต2", value: "SS2" },
        { text: "กรุงเทพมหานคร", value: "BKK" }
      ],
      otp: "",
      GetOTP: false
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any();
    },
    clickable() {
      // if something
      return true;
    }
  },
  methods: {
    async insertdata() {
      await this.confirmRecord();
    },
    // eslint-disable-next-line no-undef
    async createcodeRef() {
      let maxId = 1;
      let newId = 0;
      this.newPostKey = await userRef.child("UniiTruck_C_REF").push().key;
      await userRef
        .child("UniiTruck_C_REF")
        .child(this.newPostKey)
        .set({
          name: this.model.name,
          email: this.model.email,
          phone: this.model.phone,
          create_at: moment(Date()).format("YYYY-MM-DD hh:mm:ss")
        });

      await codeRef.child("UniiTruck_C_REF").once("value", snapshot => {
        snapshot.forEach(child => {
          if (child.key.startsWith(`UNIIUTC${this.selected}`)) {
            newId = child.key.substring(9, 13, child.key.length);
            maxId = parseInt(newId) + 1;
          }
        });
        const formattedNumber = `00${maxId}`.slice(-3);
        const codeid = `UNIIUTC${this.selected}${formattedNumber}`;
        codeRef
          .child("UniiTruck_C_REF")
          .child(codeid)
          .set({ Uid: this.newPostKey });
        this.$router.push("/pages/addc");
      });
    },
    confirmRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "success",
        title: "ยืนยันการสร้างโค้ด",
        text: "คุณแน่ใจที่จะสร้างโค้ด",
        accept: this.createRecord,
        acceptText: "ยืนยัน",
        cancelText: "ยกเลิก"
      });
    },
    showSuccess() {
      this.$vs.notify({
        color: "success",
        title: "ยืนยันการสร้างโค้ด",
        text: "โค้ดCถูกสร้างแล้ว"
      });
    },
    async createRecord() {
      this.$vs.loading();
      await this.createcodeRef();
      this.$vs.loading.close();
      await this.showSuccess();
      this.model = "";
    }
  }
};
</script>
