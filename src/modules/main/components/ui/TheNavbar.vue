<template>
  <nav class="navbar navbar-expand-sm p-0">
    <div class="container-960 container-lg align-items-center pt-2">
      <div class="logo d-flex align-items-center">
        <img
          src="/logo_.png"
          alt="Logo mccrush apps"
          width="48"
          height="48"
          class="m-0 mt-1 me-2"
        />
        <h5 class="fw-bold pt-1">mccrush apps</h5>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li v-for="item in menuItems" :key="item.href" class="nav-item me-2">
            <a
              class="nav-link btn btn-sm text-secondary ps-2 pe-2 pb-1"
              :href="item.href"
            >
              {{ item.title }}
            </a>
          </li>
          <li class="nav-item m-auto">
            <BtnSun
              v-if="theme === 'dark'"
              title="Переключить на светлую тему"
              @click="changeTheme"
            />
            <BtnMoon
              v-else
              title="Переключить на темную тему"
              @click="changeTheme"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { menuItems } from './../../../../data/menuItems'

import BtnSun from './../buttons/BtnSun.vue'
import BtnMoon from './../buttons/BtnMoon.vue'

export default {
  components: {
    BtnSun,
    BtnMoon
  },
  data() {
    return {
      menuItems,
      theme: localStorage.getItem('mc-theme') || 'dark'
    }
  },
  mounted() {
    this.setTheme()
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      this.setTheme()
    },
    setTheme() {
      document.documentElement.setAttribute('data-bs-theme', this.theme)
    }
  }
}
</script>


<style scoped>
/* .nav {
  height: 64px;
}

.nav-link {
  margin-right: 4px;
  border-radius: 8px;
  text-decoration: none;
}

.nav-link {
  text-decoration: none;
  transition: 0.1s ease-in-out;
}

.nav-link:hover,
.nav-link:active {
  box-shadow: inset 0px -1px 0px 0px rgb(50 67 93);
} */
</style>