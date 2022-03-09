<template>
  <div class="present d-flex align-items-center justify-content-around">
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
        <h1 class="display-2 fw-bold lh-1">mccrush apps</h1>
        <p class="fs-4 fw-light lh-1">разработка веб-приложений</p>
        <div class="font-monospace mt-4">
          <span class="border border-warning rounded-3 p-1 ps-2 pe-2 me-2"
            >JavaScript</span
          >
          <span class="border border-success rounded-3 p-1 ps-2 pe-2 me-2"
            >Vue.js</span
          >
        </div>
      </div>
    </div>
    <div class="present-right d-flex align-items-center h-100 w-50">
      <img
        src="images/1f/pair-programming.svg"
        alt="Разработка веб-приложений"
      />
    </div>
  </div>
</template>

<style scoped>
.present {
  height: calc(100vh - 64px);
}

/* .present-left,
.present-right {
  width: 420px;
  height: 520px;
} */
</style>