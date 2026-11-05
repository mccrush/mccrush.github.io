<script setup>
import IconGithub from './components/icons/IconGithub.vue'
import IconX from './components/icons/IconX.vue'
import IconTelegram from './components/icons/IconTelegram.vue'
import IconEmail from './components/icons/IconEmail.vue'
</script>

<template>
  <div class="f5 pb-3">
    <div
      id="contacts"
      class="container-960 row text-center border-top m-0 m-auto ps-2 pt-5 pe-2 pb-4">
      <div class="col-sm-4 col-md-6 d-none d-sm-block text-start">
        <h5>mccrush apps</h5>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center">
            <span>разработка веб-приложений</span>
          </li>
          <li class="d-flex align-items-center">
            <span>&copy; 2010–2026</span>
          </li>
        </ul>
      </div>

      <div class="col-12 col-sm-4 col-md-3 text-start">
        <h5>Социальные сети</h5>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center">
            <IconGithub />
            <a
              class="link-git link-offset-2"
              href="https://github.com/mccrush"
              target="_blank"
              title="Открыть GitHub"
              >GitHub</a
            >
          </li>
          <li class="d-flex align-items-center">
            <IconX />
            <a
              class="link-git link-offset-2"
              href="https://x.com/mccrush2027"
              target="_blank"
              title="Открыть X"
              >Twitter</a
            >
          </li>
        </ul>
      </div>

      <div class="col-12 col-sm-4 col-md-3 text-start mt-4 mt-sm-0">
        <h5>Контакты</h5>
        <ul class="list-unstyled">
          <li class="d-flex align-items-center">
            <IconTelegram />
            <a
              class="link-git link-offset-2"
              target="_blank"
              href="https://t.me/mccrush"
              title="Написать в Telegram"
              >Telegram</a
            >
          </li>
          <li class="d-flex align-items-center">
            <IconEmail />
            <a
              class="link-git link-offset-2"
              href="mailto:mccrush@mail.ru"
              target="_blank"
              title="Написать письмо"
              >mccrush@mail.ru</a
            >
          </li>
        </ul>
      </div>

      <div class="col-12 d-sm-none text-start mt-4">
        <h5>mccrush apps</h5>
        <p class="mb-2">разработка веб-приложений</p>
        <p class="text-muted small">&copy; 2010–2026</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.link-git {
  color: var(--text-color-light);
  padding-left: 8px;
  text-decoration: none;
}

.link-git:hover {
  text-decoration: underline;
}
</style>