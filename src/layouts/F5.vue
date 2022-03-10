<template>
  <div class="f5">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-3 pe-2 pb-3">
      <h3 id="contacts">Контакты</h3>
      <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-success border-bottom-0 p-1">
          WhatsApp
        </div>
        <div class="rounded-bottom my-border-success font-monospace p-1">
          <a
            class="link-git"
            href="tel:79069404069"
            target="_blank"
            title="Позвонить"
            >+79069404069</a
          >
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-blue border-bottom-0 p-1">
          Telegram
        </div>
        <div class="rounded-bottom my-border-blue font-monospace p-1">
          <a
            class="link-git"
            href="https://t.me/mccrush"
            target="_blank"
            title="Открыть в Телеграме"
            >mccrush</a
          >
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-yellow border-bottom-0 p-1">
          Email
        </div>
        <div class="rounded-bottom my-border-yellow font-monospace p-1">
          <a
            class="link-git"
            href="mailto:mccrush@mail.ru"
            target="_blank"
            title="Написать письмо"
            >mccrush@mail.ru</a
          >
        </div>
      </div>

      <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-gray border-bottom-0 p-1">GitHub</div>
        <div class="rounded-bottom my-border-gray font-monospace p-1">
          <a
            class="link-git"
            href="https://github.com/mccrush"
            target="_blank"
            title="Открыть в новой вкладке"
            >mccrush</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Navbar from '../components/F5/Navbar.vue'

export default {
  components: {}
}
</script>

<style scoped>
.f5 {
  background: rgba(29, 38, 53, 1);
}

.my-border-success {
  border: 1px solid var(--bs-green);
}

.my-border-blue {
  border: 1px solid var(--bs-blue);
}

.my-border-yellow {
  border: 1px solid var(--bs-yellow);
}

.my-border-gray {
  border: 1px solid var(--bs-gray-200);
}

.link-git {
  color: #f2f2f2;
  text-decoration: none;
}

.link-git:hover {
  text-decoration: underline;
}
</style>