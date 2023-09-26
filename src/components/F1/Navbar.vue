<template>
  <nav class="navbar navbar-expand-sm navbar-dark p-0 pt-2">
    <div class="container-960 container-lg align-items-center">
      <div class="logo navbar-brand d-flex align-items-center">
        <img
          src="/logo_.png"
          alt="Logo mccrush apps"
          width="48"
          height="48"
          class="m-0 mt-1 me-2"
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
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <!-- <li class="nav-item">
            <a class="nav-link active" href="#apps">Приложения</a>
          </li> -->
          <li class="nav-item m-auto">
            <a class="nav-link active ps-2 pe-2 pb-1" href="#services"
              >Услуги</a
            >
          </li>
          <li class="nav-item m-auto">
            <a class="nav-link active ps-2 pe-2 pb-1" href="#contacts"
              >Контакты</a
            >
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

.nav-link {
  /* border: 1px solid; */
  margin-right: 4px;
  /* padding: 2px 8px 4px 8px; */
  border-radius: 8px;
  text-decoration: none;
}

.nav-link {
  text-decoration: none;
  transition: 0.1s ease-in-out;
}

.nav-link:hover,
.nav-link:active {
  background-color: #202b3c;
  box-shadow: inset 0px -1px 0px 0px rgb(50 67 93);
}
</style>