/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: null,
    name: "หน้าแรก",
    tag: "",
    tagColor: "warning",
    icon: "HomeIcon",
    i18n: "หน้าแรก",
    submenu: [
      {
        url: "/dashboard",
        name: "กระดานข้อมูล",
        slug: "/กระดานข้อมูล",
        i18n: "กระดานข้อมูล"
      }
      // {
      //   url: "/dashboard/chart",
      //   name: "กระดานข้อมูลแบบกราฟ",
      //   slug: "/กระดานข้อมูลแบบกราฟ",
      //   i18n: "กระดานข้อมูลแบบกราฟ"
      // }
      // {
      //   url: '/dashboard/analytics',
      //   name: 'Analytics',
      //   slug: 'dashboard-analytics',
      //   i18n: 'Analytics'
      // },
      // {
      //   url: '/dashboard/ecommerce',
      //   name: 'eCommerce',
      //   slug: 'dashboard-ecommerce',
      //   i18n: 'eCommerce'
      // }
    ]
  },
  {
    header: "Manage user data & price",
    icon: "Edit3Icon",
    i18n: "Manage user data & price",
    items: [
      {
        url: null,
        name: "จัดการข้อมูลผู้ใช้งาน",
        tag: "",
        tagColor: "warning",
        icon: "UserIcon",
        i18n: "จัดการข้อมูลผู้ใช้งาน",
        submenu: [
          {
            url: "/pages/addc",
            name: "เพิ่ม Collector (C)",
            slug: "pages-addc",
            i18n: "เพิ่ม Collector (C)"
          },
          {
            url: "/pages/adduc",
            name: "เพิ่ม Unii Center (UC)",
            slug: "pages-adduc",
            i18n: "เพิ่ม Unii Center (UC)"
          }
          // {
          //   url: "/pages/addagent",
          //   name: "เพิ่ม AGENT",
          //   slug: "pages-addagent",
          //   i18n: "เพิ่ม AGENT"
          // },
          // {
          //   url: "/pages/addmd",
          //   name: "เพิ่ม MD",
          //   slug: "pages-addmd",
          //   i18n: "เพิ่ม MD"
          // },
          // {
          //   url: "/pages/editprice",
          //   name: "แก้ไข ราคากลาง",
          //   slug: "pages-editprice",
          //   i18n: "แก้ไข ราคากลาง"
          // }
        ]
      }
    ]
  }
  // {
  //   header: "Instant Trading",
  //   style: "color:red",
  //   icon: "ShoppingCartIcon",
  //   i18n: "Instant Trading",
  //   items: [
  //     {
  //       url: null,
  //       name: "รายการซื้อ-ขายทันที",
  //       tag: "",
  //       tagColor: "warning",
  //       icon: "ShoppingCartIcon",
  //       i18n: "รายการซื้อ-ขายทันที",
  //       submenu: [
  //         {
  //           url: "/pages/transectionorder",
  //           name: "รายการซื้อ-ขายทันที (รอรับสินค้า)",
  //           slug: "pages-transectionorder",
  //           i18n: "รายการซื้อ-ขายทันที (รอรับสินค้า)"
  //         },
  //         {
  //           url: "/pages/TransectionOrder_History",
  //           name: "รายการซื้อ-ขายทันที (ย้อนหลัง)",
  //           slug: "pages-TransectionOrder_History",
  //           i18n: "รายการซื้อ-ขายทันที (ย้อนหลัง)"
  //         },
  //         {
  //           url: "/pages/TransectionOrder_Cancel",
  //           name: "รายการซื้อ-ขายทันที (ยกเลิก)",
  //           slug: "pages-TransectionOrder_Cancel",
  //           i18n: "รายการซื้อ-ขายทันที (ยกเลิก)"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   header: "Shop List",
  //   icon: "ShoppingCartIcon",
  //   i18n: "Shop List",
  //   items: [
  //     {
  //       url: null,
  //       name: "รายการร้านรับซื้อ",
  //       tag: "",
  //       tagColor: "warning",
  //       icon: "ShoppingCartIcon",
  //       i18n: "รายการร้านรับซื้อ",
  //       submenu: [
  //         {
  //           url: "/pages/StoreOrder",
  //           name: "รายการร้านรับซื้อ (รอรับสินค้า)",
  //           slug: "pages-StoreOrder",
  //           i18n: "รายการร้านรับซื้อ (รอรับสินค้า)"
  //         },
  //         {
  //           url: "/pages/StoreOrderHistory",
  //           name: "รายการร้านรับซื้อ (ย้อนหลัง)",
  //           slug: "pages-StoreOrderHistory",
  //           i18n: "รายการร้านรับซื้อ (ย้อนหลัง)"
  //         },
  //         {
  //           url: "/pages/StoreOrderCancel",
  //           name: "รายการร้านรับซื้อ (ยกเลิก)",
  //           slug: "pages-StoreOrderCancel",
  //           i18n: "รายการร้านรับซื้อ (ยกเลิก)"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   header: "For Sale",
  //   icon: "ShoppingCartIcon",
  //   i18n: "For Sale",
  //   items: [
  //     {
  //       url: null,
  //       name: "ประกาศขาย",
  //       tag: "",
  //       tagColor: "warning",
  //       icon: "ShoppingCartIcon",
  //       i18n: "ประกาศขาย",
  //       submenu: [
  //         {
  //           url: "/pages/CustomerPlaceOrderRequest_Data",
  //           name: "รายการประกาศขาย",
  //           slug: "pages-CustomerPlaceOrderRequest_Data",
  //           i18n: "รายการประกาศขาย"
  //         },
  //         {
  //           url: "/pages/CustomerRequest",
  //           name: "รายการประกาศขายทันที",
  //           slug: "pages-CustomerRequest",
  //           i18n: "รายการประกาศขายทันที"
  //         },
  //         {
  //           url: "/pages/StoreTable",
  //           name: "รายการตั้งขาย (รอการตอบรับ)",
  //           slug: "pages-StoreTable",
  //           i18n: "รายการตั้งขาย (รอการตอบรับ)"
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   header: "ETC.",
  //   icon: "Edit3Icon",
  //   i18n: "ETC.",
  //   items: [
  //     {
  //       url: "/pages/chat",
  //       name: "ประวัติการสนทนา",
  //       icon: "MessageSquareIcon",
  //       i18n: "ประวัติการสนทนา"
  //     },
  //     {
  //       url: "/pages/applogs",
  //       name: "เงื่อนไขการใช้งาน",
  //       icon: "LayersIcon",
  //       i18n: "เงื่อนไขการใช้งาน"
  //     }
  //   ]
  // }
];
