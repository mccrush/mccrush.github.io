<template>
  <div class="container-fluid p-0">
    <BlockMain />
    <BlockServices />
    <BlockComputing />
    <BlockContacts />
  </div>
</template>

<script>
import BlockMain from './modules/main/BlockMain.vue'
import BlockServices from './modules/services/BlockServices.vue'
import BlockComputing from './modules/computing/BlockComputing.vue'
import BlockContacts from './modules/contacts/BlockContacts.vue'

export default {
  components: {
    BlockMain,
    BlockServices,
    BlockComputing,
    BlockContacts
  }
}
</script>

<style lang="scss">
@import './scss/common';
</style>
  