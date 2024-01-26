<template>
  <div
    class="present container-960 d-flex align-items-center justify-content-around m-auto row"
  >
    <div
      class="present-left d-flex align-items-center justify-content-center h-100 col-12 col-sm-6"
    >
      <div class="fade-in-bottom pb-5 mb-5">
        <h1 class="display-5 fw-bold lh-1">разработка<br />веб-приложений</h1>
        <div class="font-monospace mt-4">
          <!-- <span class="border border-danger rounded-3 p-1 ps-2 pe-2 me-2"
            >HTML</span
          >
          <span class="border border-primary rounded-3 p-1 ps-2 pe-2 me-2"
            >CSS</span
          > -->
          <span class="border border-danger rounded-2 p-1 ps-2 pe-2 me-2"
            >HTML + CSS</span
          >
          <span class="border border-warning rounded-2 p-1 ps-2 pe-2 me-2"
            >JavaScript</span
          >
          <span class="border border-success rounded-2 p-1 ps-2 pe-2 me-2"
            >Vue.js</span
          >
        </div>
      </div>
    </div>
    <div
      class="fade-in-top present-right d-none d-sm-flex align-items-center h-100 col-sm-6"
    >
      <img
        src="/images/1f/pair-programming.svg"
        alt="mccrush apps - разработка веб-приложений"
        class="mb-5"
      />
    </div>
  </div>
</template>

<style scoped>
.present {
  height: calc(100vh - 70px);
  /* height: calc(100vh - 64px); */
}

.fade-in-top {
  -webkit-animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in-top 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
    both;
  animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>