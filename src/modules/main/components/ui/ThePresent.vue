<template>
  <div
    class="present container-960 d-flex align-items-center justify-content-around m-auto row">
    <div
      class="present-left d-flex align-items-center justify-content-center h-100 col-12 col-sm-7 col-md-6">
      <div class="fade-in-bottom pb-5 mb-5">
        <h1 class="display-5 fw-bold lh-1">
          Fullstack-разработка
          <span class="text-success font-monospace">Vue</span
          ><span class="font-monospace">/</span
          ><span class="text-success font-monospace">Supabase</span>
          для автоматизации бизнеса
        </h1>
        <div class="font-monospace mt-4">
          <span
            class="border border-warning text-warning rounded-0 p-1 ps-2 pe-2 me-2"
            >CRM</span
          >
          <span
            class="border border-success text-success rounded-0 p-1 ps-2 pe-2 me-2"
            >ERP</span
          >
        </div>
      </div>
    </div>
    <div
      class="fade-in-top present-right d-none d-sm-flex align-items-center h-100 col-sm-5 col-md-6">
      <img
        src="/images/1f/pair-programming.svg"
        alt="mccrush apps - разработка веб-приложений"
        class="mb-5" />
    </div>
  </div>
</template>

<style scoped>
.present {
  height: calc(100vh - 70px);
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