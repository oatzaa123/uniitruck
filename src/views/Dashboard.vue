<template>
  <div id="dashboard">
    <div class="vx-row">
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="ผู้ใช้งานทั้งหมด (ALL)"
          :subtitle="count.all + ''"
          icon="UsersIcon"
        >
          <div style="text-align: -webkit-right; height:38px">
            <!-- <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'p' } }"
            > -->
            <!-- <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              > -->
            <!-- </router-link> -->
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="ผู้ใช้งานทั่วไป (P)"
          :subtitle="count.p + ''"
          icon="UsersIcon"
          color="success"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'p' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="รถรับซื้อทั่วไป (T)"
          :subtitle="count.ut + ''"
          icon="TruckIcon"
          color="warning"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo_ut', query: { typeuser: 'ut' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div>
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="ร้านรับซื้อทั่วไป (C)"
          :subtitle="count.utc + ''"
          icon="ShoppingBagIcon"
          color="danger"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'utc' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div>
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="แฟรนไชส์ร้านรับซื้อทั่วไป (CF)"
          subtitle="0"
          icon="ShoppingBagIcon"
          color="primary"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'cf' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="โรงงานรับซื้อทั่วไป (F)"
          subtitle="0"
          icon="PackageIcon"
          color="success"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'f' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div> -->
      <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="UNII CENTER (UC)"
          :subtitle="count.utuc + ''"
          icon="CreditCardIcon"
          color="primary"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'utuc' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div>
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="AGENT"
          :subtitle="count.ag + ''"
          icon="CreditCardIcon"
          color="success"
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'ag' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card
          title="MD"
          :subtitle="count.md + ''"
          icon="CreditCardIcon"
          color="warning"
          icon-right
        >
          <div style="text-align: -webkit-right">
            <router-link
              :to="{ path: '/pages/userinfo', query: { typeuser: 'md' } }"
            >
              <vs-button
                icon-pack="feather"
                icon="icon-chevrons-right"
                icon-after
                class="shadow-md lg:mt-0 mt-4"
                type="flat"
                color="#5a328e"
                >ดูเพิ่มเติม</vs-button
              >
            </router-link>
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card
          title="รายการซื้อขายที่สำเร็จ (PtoT)"
          :subtitle="count.transectionhistoryPtoT + ''"
          icon="InboxIcon"
          color="danger"
          icon-right
        >
          <div style="text-align: -webkit-right">
            
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card
          title="รายการซื้อขายที่สำเร็จ (TtoC)"
          :subtitle="count.transectionhistoryTtoC + ''"
          icon="InboxIcon"
          color="warning"
          icon-right
        >
          <div style="text-align: -webkit-right">
           
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card
          title="รายการรับซื้อที่สำเร็จ (PtoT)"
          :subtitle="count.TransactionBuyingShopHistoryPtoT + ''"
          icon="InboxIcon"
          color="primary"
          icon-right
        >
          <div style="text-align: -webkit-right">
          </div>
        </vx-card>
      </div> -->
      <!-- <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card
          title="รายการรับซื้อที่สำเร็จ (TtoC)"
          :subtitle="count.TransactionBuyingShopHistoryTtoC + ''"
          icon="InboxIcon"
          color="success"
          icon-right
        >
          <div style="text-align: -webkit-right">
          </div>
        </vx-card>
      </div> -->
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import apexChatData from "./charts-and-maps/charts/apex-charts/apexChartData";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import {
  userRef,
  transectionhistoryRef,
  TransactionBuyingShopHistoryRef,
  TransactionBuyingShopOrderRef
} from "../firebase/firebase";
import firebase from "firebase";
export default {
  name: "home",
  // beforeCreate() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       console.log("user id: ", firebase.auth().currentUser.email);
  //       if (user.email) {
  //         console.log("if");
  //       } else {
  //         this.$router.back();
  //       }
  //     } else {
  //       this.$vs.notify({
  //         title: "Error",
  //         text: "คุณไม่มีสิทธิ์เข้าถึง กรุณาเข้าสู่ระบบ",
  //         iconPack: "feather",
  //         icon: "icon-alert-circle",
  //         color: "danger"
  //       });
  //       this.$router.replace("/pages/login");
  //     }
  //   });
  // },
  data() {
    return {
      count: {
        p: 0,
        utc: 0,
        ut: 0,
        utuc: 0,
        all: 0,
        transectionhistoryPtoT: 0,
        transectionhistoryTtoC: 0,
        TransactionBuyingShopHistoryPtoT: 0,
        TransactionBuyingShopHistoryTtoC: 0
      },
      apexChatData
    };
  },
  components: {
    StatisticsCardLine,
    VueApexCharts
  },
  methods: {
    getDataP() {
      return userRef.child("Customer").once("value");
    },
    getDataUTC() {
      return userRef.child("UniiTruck_C").once("value");
    },
    getDataUTUC() {
      return userRef.child("UniiTruck_UC").once("value");
    },
    getDataUT() {
      return userRef.child("UniiTruck_Transport").once("value");
    },
    async getAllUser() {
      const p = await this.getDataP();
      const utc = await this.getDataUTC();
      const ut = await this.getDataUT();
      const utuc = await this.getDataUTUC();
      // console.log("test P", uc);

      this.count.p = await p.numChildren();
      this.count.utc = await utc.numChildren();
      this.count.ut = await ut.numChildren();
      this.count.utuc = await utuc.numChildren();
      this.count.all = this.count.p + this.count.ut + this.count.utc;
    }
  },
  async mounted() {
    await this.getAllUser();
  },
  props: {
    iconRight: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "primary"
    },
    icon: {
      type: String
    }
  }
};
</script>
<style scoped lang="scss">
#dashboard {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
