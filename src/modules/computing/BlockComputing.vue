<template>
  <div class="f4">
    <div class="container-960 row text-center m-0 m-auto ps-2 pt-5 pe-2 pb-5">
      <h3 id="computing">Услуги настройки ПК</h3>

      <div class="col-12 d-md-none m-auto p-0 pt-3">
        <div class="shadow rounded-2 p-2">
          <div
            v-for="comp in computing"
            :key="comp.id"
            class="d-flex justify-content-between m-3"
          >
            <div class="text-start pe-2">
              {{ comp.title }}
              <button
                v-if="comp.desc"
                type="button"
                class="btn btn-sm ms-1 p-0 ps-2 pe-2"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                :data-bs-content="comp.desc"
              >
                ?
              </button>
            </div>
            <div>{{ comp.price }}&nbsp;₽</div>
          </div>
        </div>
      </div>

      <div class="col-md-6 d-none d-md-block p-0 pt-3">
        <div class="shadow rounded-2 p-2">
          <div
            v-for="comp in computing.slice(0, 4)"
            :key="comp.id"
            class="d-flex justify-content-between m-3"
          >
            <div class="text-start pe-2">
              {{ comp.title }}
              <button
                v-if="comp.desc"
                type="button"
                class="btn btn-sm ms-1 p-0 ps-2 pe-2"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                :data-bs-content="comp.desc"
              >
                ?
              </button>
            </div>
            <div>{{ comp.price }}&nbsp;₽</div>
          </div>
        </div>
      </div>

      <div class="col-md-6 d-none d-md-block p-0 pt-3">
        <div class="shadow rounded-2 p-2">
          <div
            v-for="comp in computing.slice(4)"
            :key="comp.id"
            class="d-flex justify-content-between m-3"
          >
            <div class="text-start pe-2">
              {{ comp.title }}
              <button
                v-if="comp.desc"
                type="button"
                class="btn btn-sm ms-1 p-0 ps-2 pe-2"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                :data-bs-content="comp.desc"
              >
                ?
              </button>
            </div>
            <div>{{ comp.price }}&nbsp;₽</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computing } from '../../data/computing'
import { Popover } from 'bootstrap'

export default {
  data() {
    return {
      computing
    }
  },
  mounted() {
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    )
    const popoverList = [...popoverTriggerList].map(
      popoverTriggerEl => new Popover(popoverTriggerEl)
    )
  }
}
</script>

<style scoped>
/* .f4 {
  background: var(--bg-color-dark);
  background: radial-gradient(
    circle,
    var(--bg-color-light) 0%,
    var(--bg-color-dark) 100%
  );
} */
</style>