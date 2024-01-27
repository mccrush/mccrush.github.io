<template>
  <nav class="navbar p-0">
    <div class="container-960 container-lg pt-2">
      <div class="row">
        <div class="col-12 col-sm-6">
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
        </div>
        <div
          class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center mt-2 mt-sm-0"
        >
          <div class="d-flex justify-content-end align-items-center">
            <div v-for="item in menuItems" :key="item.href" class="me-2">
              <a
                class="list-inline-item btn btn-sm ps-2 pe-2 pb-1"
                :href="item.href"
              >
                {{ item.title }}
              </a>
            </div>
            <div class="list-inline-item">
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
            </div>
          </div>
        </div>
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
      localStorage.setItem('mc-theme', this.theme)
      this.setTheme()
    },
    setTheme() {
      document.documentElement.setAttribute('data-bs-theme', this.theme)
    }
  }
}
</script>