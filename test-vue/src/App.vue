<template>
  <div id="app">
    <div id="nav">
      <k-tab>
        <k-tab-item
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :current="tab.current"
          @click="changeTab(index)"
        >
          <router-link :to="tab.path" class="app-link">{{ tab.name }}</router-link>
        </k-tab-item>
      </k-tab>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      tabs: [
        {
          id: 1,
          name: "Home",
          path: "/",
          current: true
        },
        {
          id: 2,
          name: "About",
          path: "/about",
          current: false
        }
      ]
    };
  },
  mounted() {
    this.tabs.forEach(tab => {
      if (tab.path === this.$route.path) {
        tab.current = true;
      } else {
        tab.current = false;
      }
    });
  },
  methods: {
    changeTab: function(tabIndex) {
      this.tabs.forEach(tab => (tab.current = false));
      this.tabs[tabIndex].current = true;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: red;
}

.app-link {
  display: block;
  text-decoration: none;
  width: 100%;
  height: 100%;
}
</style>
