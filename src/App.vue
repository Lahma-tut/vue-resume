<template>
  <header>
    <div class="wrapper-header">
      <div class="content">
        <div class="content-top">
          <h1>Максим Прядкин</h1>
          <p>Фронтенд разработчик, Vue.js</p>
        </div>
        <div class="content-bottom">
          <div class="link-telegram">
            <img src="/src/assets/telegram-logo-thin-191716.svg" alt="telegram" width="33">
            <a href="https://t.me/maxpryadkin" target="_blank">maxpryadkin</a>
          </div>
          <div class="link-email">
            <img src="/src/assets/at-thin-svgrepo-com.svg" alt="email" width="33">
            <a href="mailto:lahma@yandex.ru" target="_blank">lahma@yandex.ru</a>
          </div>
        </div>
      </div>
      <div @click="doSomething" class="image">
        <img class="logo" src="/src/assets/zaeEEWR.jpg" alt="Логотип">
      </div>
    </div>
  </header>
  <main>
    <div class="wrapper-main">
      <div class="about">
        <h2>Обо мне</h2>
        <p>2010 году заинтересовался Web. Изучал как сделал сайт и нашел WordPress.</p>
        <p>2011 начинаю работать Seo специалистом. Разработкой занимаюсь как хобби.</p>
        <p>2020 изучаю JS и фреймворки хочу полностью уйти в разработку.</p>
        <p>Сейчас пишу на Vue.js ищу компанию для развития и долгосрочной работы. Хочу ходить в офис, общаться с коллегами, развиваться в программировании.</p>
      </div>
      <div class="portfolio">
        <h2>Портфолио</h2>
        <ul>
          <li>
            <img src="/src/assets/github-logo-code-open-sourse-oneline-svgrepo-com.svg" alt="github" width="36">
            <p><a href="https://github.com/lahma-tut" target="_blank">GitHub</a></p>
          </li>
        </ul>
      </div>
      <div class="jobs">
        <h2>Кем работал</h2>
        <ul>
          <li>
            <img src="/src/assets/drop-half-thin-svgrepo-com.svg" alt="email" width="36">
            <p>2019 - Н.В., SEO—специалист,
              <br>Менеджер проекта
              <br>"Премьер—Агро"
              <br>
              <i><a href="https://pr-agro.ru/" target="_blank">www.pr—agro.ru</a></i>
            </p>
          </li>
          <li>
            <img src="/src/assets/moth-svgrepo-com.svg" alt="email" width="36">
            <p>2014 — 2019, SEO—специалист
              <br>"ЗемлякоФФ защита растений"
              <br><i><a href="https://zzrc.ru/" target="_blank">www.zzrc.ru</a></i>
            </p>
          </li>
          <li>
            <img src="/src/assets/sketch-logo-thin-svgrepo-com.svg" alt="email" width="36">
            <p>2012—2014, SEO—специалист
              <br>"Evrone"
              <br><i><a href="https://evrone.ru/" target="_blank">www.evrone.ru</a></i>
            </p>
          </li>
          <li>
            <img src="/src/assets/snowflake-thin-svgrepo-com.svg" alt="email" width="36">
            <p>2011—2012, SEO—специалист
              <br>"Арктическая Лаборатория"
              <br><i><a href="https://arcticlab.ru/" target="_blank">www.arcticlab.ru</a></i>
            </p>
          </li>
        </ul>
      </div>
    </div>

  </main>
  <footer>
    <div class="wrapper-footer">
      <p>&copy; 2024 Vue.js Максим Прядкин</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'

const doSomething = () => confetti()

</script>