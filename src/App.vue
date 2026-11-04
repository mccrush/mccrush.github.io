<script setup>
import BlockMain from './modules/main/BlockMain.vue'
import BlockApps from './modules/apps/BlockApps.vue'
import BlockDirections from './modules/directions/BlockDirections.vue'
import BlockServices from './modules/services/BlockServices.vue'
import BlockContacts from './modules/contacts/BlockContacts.vue'
</script>

<template>
  <div class="container-fluid p-0">
    <BlockMain />
    <BlockDirections />
    <BlockServices />
    <BlockApps />
    <BlockContacts />
  </div>
</template>

<style lang="scss">
@import './scss/common';
</style>
