<template>
  <div id="page-user-edit">
    <vs-alert
      color="danger"
      title="User Not Found"
      :active.sync="user_not_found"
    >
      <span>User record with id: {{ $route.params.userId }} not found. </span>
      <span>
        <span>Check </span
        ><router-link
          :to="{ name: 'page-user-list' }"
          class="text-inherit underline"
          >All Users</router-link
        >
      </span>
    </vs-alert>

    <vx-card>
      <div
        slot="no-body"
        class="tabs-container px-6 pt-6"
        v-if="this.$route.query.typeuser !== 'ut'"
      >
        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <div>
            <vs-tab label="Account" icon-pack="feather" icon="icon-user">
              <div class="tab-text">
                <userinfoEditForm class="mt-4" :data="tableData" />
              </div>
            </vs-tab>
          </div>
        </vs-tabs>
      </div>
      <div slot="no-body" class="tabs-container px-6 pt-6" v-else>
        <vs-tabs v-model="activeTab" class="tab-action-btn-fill-conatiner">
          <div>
            <vs-tab label="Account" icon-pack="feather" icon="icon-user">
              <div class="tab-text">
                <userinfoutEditForm class="mt-4" :data="tableData" />
              </div>
            </vs-tab>
          </div>
        </vs-tabs>
      </div>
    </vx-card>
  </div>
</template>

<script>
import userinfoEditForm from "./userinfoEditForm";
import userinfoutEditForm from "./userinfo_ut_EditForm";
export default {
  components: {
    userinfoEditForm,
    userinfoutEditForm
  },
  data() {
    return {
      tableData: null,
      user_not_found: false,

      /*
        This property is created for fetching latest data from API when tab is changed

        Please check it's watcher
      */
      activeTab: 0
    };
  },
  watch: {
    activeTab() {
      this.fetch_user_data(this.$route.query.uid);
    }
  },
  methods: {},
  created() {}
};
</script>
