<template>
  <div
    class="
      present
      container-960
      d-flex
      align-items-center
      justify-content-around
      m-auto
    "
  >
    <div
      class="
        present-left
        d-flex
        align-items-center
        justify-content-center
        h-100
        w-50
      "
    >
      <div class="pb-5">
        <h1 class="display-5 fw-bold lh-1">разработка<br />веб-приложений</h1>
        <div class="font-monospace mt-4">
          <span class="border border-warning rounded-3 p-1 ps-2 pe-2 me-2"
            >JavaScript</span
          >
          <span class="border border-success rounded-3 p-1 ps-2 pe-2 me-2"
            >Vue.js</span
          >
          <span class="border-purple rounded-3 p-1 ps-2 pe-2 me-2"
            >Bootstrap</span
          >
        </div>
      </div>
    </div>
    <div class="present-right d-flex align-items-center h-100 w-50">
      <img
        src="images/1f/pair-programming.svg"
        alt="mccrush apps - разработка веб-приложений"
      />
    </div>
  </div>
</template>

<style scoped>
.present {
  height: calc(100vh - 64px);
}

.border-purple {
  border: 1px solid var(--bs-purple);
}
</style>