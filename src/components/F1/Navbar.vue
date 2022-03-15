<template>
  <nav class="navbar navbar-expand-sm navbar-dark p-0 ps-2 pt-2">
    <div class="nav container-960 container-lg align-items-center">
      <div class="logo navbar-brand d-flex align-items-center">
        <img
          src="logo_.png"
          alt="Logo mccrush apps"
          width="48"
          height="48"
          class="m-0 ms-2 mt-1 me-2"
        />
        <span class="fw-bold pb-1">mccrush apps</span>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="navigation collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <a class="nav-link active" href="#apps">Приложения</a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link active" href="#services">Услуги</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#contacts">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  height: 64px;
}
</style>