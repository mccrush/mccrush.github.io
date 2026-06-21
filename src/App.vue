<script setup>
import BlockMain from './modules/main/BlockMain.vue'
import Block_apps from './modules/apps/Block_apps.vue'
import BlockServices from './modules/services/BlockServices.vue'
//import BlockComputing from './modules/computing/BlockComputing.vue'
import BlockContacts from './modules/contacts/BlockContacts.vue'
</script>

<template>
  <div class="container-fluid p-0">
    <BlockMain />
    <Block_apps />
    <BlockServices />
    <!-- <BlockComputing /> -->
    <BlockContacts />
  </div>
</template>

<style lang="scss">
@import './scss/common';
</style>
