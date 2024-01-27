<template>
  <div class="f5">
    <div
      id="contacts"
      class="container-960 row text-center border-top m-0 m-auto ps-2 pt-5 pe-2 pb-3"
    >
      <!-- <h3 id="contacts">Контакты</h3> -->

      <div class="col-12 col-sm-6 text-start">
        <h5>Социальные сети</h5>
        <ui class="list-unstyled">
          <li class="d-flex align-items-center">
            <IconGithub />
            <a class="link-git" href="" target="_blank" title="Открыть GitHub"
              >GitHub</a
            >
          </li>
          <li class="d-flex align-items-center">
            <IconYoutube />
            <a class="link-git" href="" target="_blank" title="Открыть YouTube"
              >YouTube</a
            >
          </li>
        </ui>
      </div>

      <div class="col-12 col-sm-6 text-start mt-4 mt-sm-0">
        <h5>Контакты</h5>
        <ui class="list-unstyled">
          <li class="d-flex align-items-center">
            <IconTelegram />
            <a
              class="link-git"
              target="_blank"
              href="https://t.me/mccrush"
              title="Написать в Telegram"
              >Telegram</a
            >
          </li>
          <li class="d-flex align-items-center">
            <IconWhatsapp />
            <a
              class="link-git"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=89069404069"
              title="Написать в WhatsApp"
              >WhatsApp</a
            >
          </li>
          <li class="d-flex align-items-center">
            <IconEmail />
            <a
              class="link-git"
              href="mailto:mccrush@mail.ru"
              target="_blank"
              title="Написать письмо"
              >mccrush@mail.ru</a
            >
          </li>
        </ui>
      </div>

      <div class="col-12 text-start text-md-center text-muted small mt-5">
        mccrush apps &copy; 2024
      </div>

      <!-- <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-blue border-bottom-0 p-1">
          Telegram
        </div>
        <div class="rounded-bottom my-border-blue font-monospace p-1">
          <a
            class="link-git"
            target="_blank"
            href="https://t.me/mccrush"
            title="Написать в Telegram"
            >mccrush</a
          >
        </div>
      </div> -->

      <!-- <div class="col-12 col-sm-6 col-md-3 p-2">
        <div class="rounded-top my-border-success border-bottom-0 p-1">
          WhatsApp
        </div>
        <div class="rounded-bottom my-border-success font-monospace p-1">
          <a
            class="link-git"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=89069404069"
            title="Написать в WhatsApp"
            >89069404069</a
          >
        </div>
      </div> -->

      <!-- <div class="col-12 col-sm-6 col-md-3 p-2">
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
      </div> -->

      <!-- <div class="col-12 col-sm-6 col-md-3 p-2">
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
      </div> -->
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
.my-border-blue {
  border: 1px solid var(--bs-blue);
}

.my-border-success {
  border: 1px solid var(--bs-green);
}

.my-border-yellow {
  border: 1px solid var(--bs-yellow);
}

.my-border-gray {
  border: 1px solid var(--bs-gray-200);
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