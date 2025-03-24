<template>
  <div class="f5 pb-3">
    <div
      id="contacts"
      class="container-960 row text-center border-top m-0 m-auto ps-2 pt-5 pe-2 pb-4"
    >
      <!-- <h3 id="contacts">Контакты</h3> -->
      <div class="col-sm-4 col-md-6 d-none d-sm-block text-start">
        <h5>mccrush apps</h5>
        <p class="mb-2">разработка веб-приложений</p>
        <p class="small">&copy; 2024</p>
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
            <IconYoutube />
            <a
              class="link-git link-offset-2"
              href="https://www.youtube.com/@mccrush2027/videos"
              target="_blank"
              title="Открыть YouTube"
              >YouTube</a
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
            <IconWhatsapp />
            <a
              class="link-git link-offset-2"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=89069404069"
              title="Написать в WhatsApp"
              >WhatsApp</a
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
        <p class="text-muted small">&copy; 2010–2025</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconGithub from './components/icons/IconGithub.vue'
import IconYoutube from './components/icons/IconYoutube.vue'
import IconTelegram from './components/icons/IconTelegram.vue'
import IconWhatsapp from './components/icons/IconWhatsapp.vue'
import IconEmail from './components/icons/IconEmail.vue'

export default {
  components: {
    IconGithub,
    IconYoutube,
    IconTelegram,
    IconWhatsapp,
    IconEmail
  }
}
</script>

<style scoped>
[data-bs-theme='light'] .f5 {
  background: #212529;
  color: #dee2e6;
  border-top: none !important;
}

[data-bs-theme='light'] #contacts {
  border: none !important;
}

.link-git {
  color: var(--text-color-light);
  padding-left: 8px;
  text-decoration: none;
}

.link-git:hover {
  text-decoration: underline;
}
</style>