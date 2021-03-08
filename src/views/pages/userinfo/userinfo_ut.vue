<template>
  <div id="data-list-list-view" class="data-list-container">
    <vs-table
      ref="table"
      multiple
      v-model="selected"
      pagination
      :max-items="itemsPerPage"
      search
      :data="tableData"
    >
      <div
        slot="header"
        class="flex flex-wrap-reverse items-center flex-grow justify-between"
      >
        <div
          class="flex flex-wrap-reverse items-center data-list-btn-container"
        ></div>
        <!-- <div class="cursor-pointer mb-4 mr-4 items-per-page-handler">
                <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                    <span class="mr-2">{{title}}</span>
                </div>
            </div> -->

        <vs-dropdown
          vs-trigger-click
          class="cursor-pointer mb-4 mr-4 items-per-page-handler"
        >
          <div
            class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
          >
            <span class="mr-2"
              >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
              {{
                tableData.length - currentPage * itemsPerPage > 0
                  ? currentPage * itemsPerPage
                  : tableData.length
              }}
              of {{ queriedItems }}</span
            >
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <vs-dropdown-menu>
            <vs-dropdown-item @click="itemsPerPage = 4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
        <vs-th sort-key="key">รหัสผู้ใช้งาน</vs-th>
        <vs-th sort-key="name">ชื่อ</vs-th>
        <vs-th sort-key="phone">เบอร์โทรศัพท์</vs-th>
        <vs-th sort-key="email">อีเมลล์</vs-th>
        <vs-th sort-key="personal_code">เลขบัตรประชาชน</vs-th>
        <vs-th sort-key="bank_account">เลขบัญชี</vs-th>
        <vs-th sort-key="bank_account_name">ชื่อบัญชี</vs-th>
        <vs-th sort-key="bank_name">ชื่อธนาคาร</vs-th>
        <vs-th sort-key="bank_name">ประเภทรถ</vs-th>
        <vs-th sort-key="bank_name">ทะเบียนรถ</vs-th>
        <!-- <vs-th sort-key="BuyingShop">เปิดร้านรับซื้อ</vs-th> -->
        <!-- <vs-th sort-key="BuyingShop">เปิดสิทธิ์ใช้งาน</vs-th> -->
        <vs-th sort-key="coderef">รหัสอ้างอิง</vs-th>
        <vs-th sort-key="createat">สร้างเมื่อ</vs-th>
        <vs-th>การกระทำ</vs-th>
      </template>

      <template slot-scope="{ data }">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.key }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.phone }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.email }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.personal_code }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.bank_account }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.bank_account_name }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.bank_name }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.cartype }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.vehicle }}
              </p>
            </vs-td>

            <!-- <vs-td>
              <vs-chip
                :color="getOrderStatusColor(tr.BuyingShop)"
                class="product-order-status"
                v-if="tr.BuyingShop"
                style="inline-size: max-content;"
                >เปิดแล้ว</vs-chip
              >
              <vs-chip
                :color="getOrderStatusColor(tr.BuyingShop)"
                class="product-order-status"
                v-else
                style="inline-size: max-content;"
                >ยังไม่ได้เปิด</vs-chip
              >
            </vs-td> -->

            <!-- <vs-td>
              <div @change="permission(tr.key, tr.role)">
                <vs-switch
                  color="success"
                  :id="`switch_${tr.key}`"
                  v-model="switch2"
                  :vs-value="`${tr.key}`"
                >
                  <span slot="on">เปิดสิทธิ์</span>
                  <span slot="off">ปิดสิทธิ์</span>
                </vs-switch> -->
            <!-- <p>{{ switch2 }}</p> -->
            <!-- </div>
            </vs-td> -->

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.coderef }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.createat }}</p>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <router-link
                :to="{
                  path: '/pages/userinfoEdit',
                  query: { typeuser: tr.type, uid: tr.key }
                }"
              >
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-primary stroke-current"
                />
              </router-link>

              <feather-icon
                icon="TrashIcon"
                svgClasses="w-5 h-5 hover:text-danger stroke-current"
                class="ml-2"
                @click.stop="confirmDeleteRecord(tr.key)"
              />
            </vs-td>
          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import { userRef, codeRef } from "../../../firebase/firebase";
import _ from "lodash";
export default {
  components: {},
  data() {
    return {
      selected: [],
      // products: [],
      itemsPerPage: 4,
      isMounted: false,
      tableData: [],
      arr: [],
      datasize: 0,
      thistype: "",
      isLoading: false,
      key: "",
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      switch2: []
    };
  },
  props: {
    typeuser: Object,
    type: {
      type: String
    },
    title: String
  },
  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    queriedItems() {
      return this.tableData.length;
    }
  },
  methods: {
    async confirmDeleteRecord(key) {
      this.key = key;
      await this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "ยืนยันการลบข้อมูล",
        // eslint-disable-next-line no-undef
        text: `คุณแน่ใจที่จะลบข้อมูล ${key}`,
        accept: this.deleteRecord,
        acceptText: "ลบ",
        cancelText: "ยกเลิก"
      });
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: "success",
        title: "ลบข้อมูลผู้ใช้งาน",
        text: "ข้อมูลผู้ใช้งานถูกลบแล้ว"
      });
    },
    async deleteRecord() {
      await this.deleteData();
      // await this.$router.back()
      await this.showDeleteSuccess();
    },
    async deleteData() {
      const key = this.key;
      console.log(key);
      const type = await this.gettype();
      this.$vs.loading();
      await userRef
        .child(type)
        .child(key)
        .remove();
      this.$vs.loading.close();
      this.getUsersData();
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
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
    async getUsersData() {
      // get type
      const type = await this.gettype();
      this.$vs.loading();
      await userRef.child(type).once("value", snapshot => {
        this.arr = [];
        snapshot.forEach(child => {
          // eslint-disable-next-line no-undef
          codeRef
            .child(type)
            .orderByChild("Uid")
            .equalTo(child.key)
            .once("value", codesnapshot => {
              let coderef2 = "";
              codesnapshot.forEach(codechild => {
                coderef2 = codechild.key;
              });
              this.arr.push({
                key: child.key,
                name: child.val().name,
                phone: child.val().phone,
                email: child.val().email,
                bank_account: child.val().bank_account,
                bank_account_name: child.val().bank_account_name,
                bank_name: child.val().bank_name,
                coderef: coderef2 || "-",
                createat: child.val().create_at,
                type: this.$route.query.typeuser,
                role: child.val().role,
                personal_code: child.val().personal_code,
                BuyingShop: child.val().BuyingShop,
                vehicle: child.val().vehicle,
                cartype: child.val().cartype
              });
              this.datasize = this.arr.length;
              this.tableData = _.sortBy(this.arr, a => a.coderef);
              this.checkData(this.tableData);
            });
        });
        this.$vs.loading.close();
      });
    },
    getOrderStatusColor(key) {
      if (key) return "success";
      else return "danger";
    },
    async permission(key, role) {
      let id = document.getElementById(`switch_${key}`);

      const type = await this.gettype();
      // alert(role);
      if (role == undefined || role == false) {
        // alert("true");
        this.$vs.loading();
        await userRef
          .child(type)
          .child(key)
          .update({
            role: true
          });
        this.$vs.loading.close();
      } else {
        // alert("false");
        this.$vs.loading();
        await userRef
          .child(type)
          .child(key)
          .update({
            role: false
          });
        this.$vs.loading.close();
      }
      await this.getUsersData();
      // await this.checkData();
      // console.log("id", key);
      // console.log("role", role);
    },
    async checkData(arr) {
      // console.log("arr1", arr);
      arr.forEach(item => {
        // console.log("item", typeof item.role);
        if (item.role == true && !this.switch2.includes(item.key)) {
          this.switch2.push(item.key);
        }
      });
      // console.log("switch", this.switch2);
    }
  },
  created() {
    this.getUsersData();
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {
    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          padding: 20px;
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
