<template>
  <div class="container-fluid p-0">
    <F1 />
    <F3 />
    <F5 />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import F1 from './layouts/F1.vue'
import F3 from './layouts/F3.vue'
import F5 from './layouts/F5.vue'

export default {
  components: {
    F1,
    F3,
    F5
  }
}
</script>

<style>
body {
  color: #f2f2f2;
  background: rgb(46, 62, 86);
  background: radial-gradient(
    circle,
    rgba(46, 62, 86, 1) 0%,
    rgba(32, 43, 60, 1) 100%
  );
}

btn:focus,
.btn-close:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  box-shadow: none !important;
}

.container-960 {
  max-width: 960px;
}
</style>
  