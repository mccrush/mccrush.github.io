<script setup>
import { menuItems } from '@/data/data_menuItems'
</script>

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
              class="m-0 mt-1 me-2" />
            <h5 class="fw-bold pt-1">mccrush apps</h5>
          </div>
        </div>
        <div
          class="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center mt-2 mt-sm-0">
          <div class="d-flex justify-content-end align-items-center">
            <div v-for="item in menuItems" :key="item.href" class="me-2">
              <a
                class="list-inline-item btn btn-sm btn-dark rounded-0 border-top-0 border ps-2 pe-2 pb-1"
                :href="item.href">
                {{ item.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>