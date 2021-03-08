<template>
  <div id="userinfoEditForm">
    <!-- Content Row -->
    <div class="vx-row">
      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full mt-4"
          label="รหัสผู้ใช้งาน"
          v-model="model.uid"
          v-validate="'required|alpha'"
          name="uid"
          :disabled="clickable"
        />
        <span class="text-danger text-sm" v-show="errors.has('uid')">{{
          errors.first("uid")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="ชื่อผู้ใช้งาน"
          v-model="model.name"
          v-validate="'required'"
          name="name"
        />
        <span class="text-danger text-sm" v-show="errors.has('name')">{{
          errors.first("name")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="ชื่อบัญชี"
          v-model="model.bank_name"
          v-validate="'required'"
          name="bank_name"
        />
        <span class="text-danger text-sm" v-show="errors.has('bank_name')">{{
          errors.first("bank_name")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="เลขบัญชี"
          v-model="model.bank_account"
          v-validate="'required'"
          name="bank_account"
        />
        <span class="text-danger text-sm" v-show="errors.has('bank_account')">{{
          errors.first("bank_account")
        }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full mt-4"
          label="เบอร์โทรศัพท์"
          v-model="model.phone"
          type="number"
          v-validate="'required|max:10'"
          name="phone"
        />
        <span class="text-danger text-sm" v-show="errors.has('phone')">{{
          errors.first("phone")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="สร้างเมื่อ"
          v-model="model.create_at"
          v-validate="'required'"
          name="createat"
        />
        <span class="text-danger text-sm" v-show="errors.has('createat')">{{
          errors.first("createat")
        }}</span>

        <vs-input
          class="w-full mt-4"
          label="เลขบัตรประชาชน"
          v-model="model.personal_code"
          v-validate="'required'"
          name="personal_code"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('personal_code')"
          >{{ errors.first("personal_code") }}</span
        >

        <vs-input
          class="w-full mt-4"
          label="ชื่อธนาคาร"
          v-model="model.bank_account_name"
          v-validate="'required'"
          name="bank_account_name"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('bank_account_name')"
          >{{ errors.first("bank_account_name") }}</span
        >
      </div>

      <div class="vx-col md:w-1/1 w-full">
        <vs-input
          class="w-full mt-4"
          label="อีเมลล์"
          v-model="model.email"
          type="email"
          v-validate="'required|email'"
          name="email"
        />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{
          errors.first("email")
        }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full mt-4"
          label="ประเภทรถ"
          v-model="model.cartype"
          type="email"
          v-validate="'required'"
          name="cartype"
        />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{
          errors.first("cartype")
        }}</span>
      </div>

      <div class="vx-col md:w-1/2 w-full">
        <vs-input
          class="w-full mt-4"
          label="ทะเบียนรถ"
          v-model="model.vehicle"
          type="text"
          v-validate="'required'"
          name="vehicle"
        />
        <span class="text-danger text-sm" v-show="errors.has('vehicle')">{{
          errors.first("vehicle")
        }}</span>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="mt-8 flex flex-wrap items-center justify-end">
          <vs-button
            class="ml-auto mt-2"
            @click="save_changes"
            :disabled="!validateForm"
            >บันทึก</vs-button
          >
          <!-- <vs-button class="ml-4 mt-2" type="border" color="warning" @click="reset_data">Reset</vs-button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { userRef, codeRef } from "../../../firebase/firebase";
export default {
  components: {
    vSelect
  },
  props: {},
  data() {
    return {
      tableData: [],
      model: {
        uid: this.$route.query.uid,
        phone: "",
        name: "",
        email: "",
        coderef: "",
        company_type: "",
        create_at: "",
        updateat: "",
        personal_code: "",
        img: "",
        bank_account: "",
        bank_account_name: "",
        bank_name: "",
        cartype: "",
        vehicle: ""
      },
      coderef2: ""
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
    async save_changes() {
      await this.confirmEditRecord();
    },
    confirmEditRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "success",
        title: "ยืนยันการแก้ไข",
        text: `คุณแน่ใจที่จะแก้ไข ${this.model.uid}`,
        accept: this.editRecord,
        acceptText: "แก้ไข",
        cancelText: "ยกเลิก"
      });
    },
    showEditSuccess() {
      this.$vs.notify({
        color: "success",
        title: "แก้ไขข้อมูลผู้ใช้งาน",
        text: "ข้อมูลผู้ใช้ถูกแก้ไขแล้ว"
      });
    },
    async editRecord() {
      await this.editData();
      await this.$router.back();
      await this.showEditSuccess();
    },
    async editData() {
      const type = await this.gettype();
      const uid = await this.$route.query.uid;
      // eslint-disable-next-line no-undef
      this.$vs.loading();
      await userRef
        .child(type)
        .child(uid)
        .update({
          name: this.model.name,
          email: this.model.email,
          phone: this.model.phone,
          create_at: this.model.create_at,
          bank_account: this.model.bank_account,
          personal_code: this.model.personal_code,
          bank_account_name: this.model.bank_account_name,
          bank_name: this.model.bank_name,
          cartype: this.model.cartype,
          vehicle: this.model.vehicle
        });
      this.$vs.loading.close();
    },
    reset_data() {
      this.tableData = [];
    },
    gettype() {
      if (this.$route.query.typeuser === "p") {
        return "Customer";
      } else if (this.$route.query.typeuser === "ut") {
        return "UniiTruck_Transport";
      } else if (this.$route.query.typeuser === "utc") {
        return "UniiTruck_C";
      } else {
        return "Customer";
      }
    },
    async getCustomerinfodata() {
      const type = await this.gettype();
      const uid = await this.$route.query.uid;
      // eslint-disable-next-line no-undef
      await userRef
        .child(type)
        .child(uid)
        .once("value", snapshot => {
          this.model.name = snapshot.val().name || "-";
          this.model.phone = snapshot.val().phone || "-";
          this.model.email = snapshot.val().email || "-";
          this.model.img = snapshot.val().profileImageUrl;
          this.model.company_type = snapshot.val().company_type || "-";
          this.model.create_at = snapshot.val().create_at || "-";
          this.model.updateat = snapshot.val().updated_at || "-";
          this.model.personal_code = snapshot.val().personal_code || "-";
          this.model.bank_account = snapshot.val().bank_account || "-";
          this.model.bank_account_name =
            snapshot.val().bank_account_name || "-";
          this.model.bank_name = snapshot.val().bank_name;
          this.model.cartype = snapshot.val().cartype;
          this.model.vehicle = snapshot.val().vehicle;
          // eslint-disable-next-line no-undef
          codeRef
            .child(type)
            .orderByChild("Uid")
            .equalTo(uid)
            .once("value", codesnapshot => {
              codesnapshot.forEach(codechild => {
                this.coderef2 = codechild.key;
              });
              this.model.coderef = this.coderef2 || "-";
            });
        });
    }
  },
  async mounted() {
    await this.getCustomerinfodata();
  }
};
</script>
