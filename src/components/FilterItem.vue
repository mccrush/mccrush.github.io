<template>
  <a
    class="filter-item rounded-pill small ms-1 mt-2 me-1 p-2 ps-3 pe-3"
    :class="{ 'filter-active': filterType === type.type }"
    >{{ type.title }}</a
  >
</template>

<script>
export default {
  props: ['type', 'filterType']
}
</script>

<style scoped>
.filter-item {
  background-color: hsl(216deg 30% 18%) !important;
  border-bottom: 1px solid hsl(216deg 30% 28%);
  text-decoration: none;
  color: #f2f2f2;
  cursor: pointer;
  transition: 0.3s ease;
}

.filter-item:hover {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  background-color: hsl(216deg 30% 28%) !important;
}

.filter-active {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  background-color: hsl(216deg 30% 28%) !important;
}
</style>