<script setup>
import { ref } from "vue";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

const doSomething = () => confetti();
const isVue = ref(false);
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="heading">
        <div class="image">
          <img src="/src/assets/logo-mp.png" alt="Максим Прядкин" />
        </div>
        <div class="name">
          <h1>Максим Прядкин</h1>
        </div>
        <div class="profession">
          <h2>Frontend-разработчик</h2>
          <button @click.prevent="doSomething" class="framework">Vue.js</button>
        </div>
      </div>

      <div class="link">
        <div class="telegram">
          <img src="/src/assets/telegram-logo-thin-191716.svg" alt="icon_telegram" width="30" />
          <a href="https://t.me/maxpryadkin" target="_blank">maxpryadkin</a>
        </div>

        <div class="email">
          <img src="/src/assets/at-thin-svgrepo-com.svg" alt="icon_email" width="30" />
          <a href="mailto:lahma@yandex.ru" target="_blank">lahma@yandex.ru</a>
        </div>

        <div class="github">
          <img
            src="/src/assets/github-logo-code-open-sourse-oneline-svgrepo-com.svg"
            alt="icon_github"
            width="30"
          />
          <a href="https://github.com/lahma-tut" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="jobs">
      <h2>Место Работы</h2>
      <ul>
        <li>
          <img src="/src/assets/bed-thin-svgrepo-com.svg" alt="email" width="30" />
          <p>Hotel Commerce 2024-2025 
            <br />
            <a href="https://hotcom.agency/" target="_blank">www.hotcom.agency</a>
          </p>
        </li>
        <li>
          <img src="/src/assets/drop-half-thin-svgrepo-com.svg" alt="email" width="30" />
          <p>Премьер Агро 2019-2024 
            <br />
            <a href="https://pr-agro.ru/" target="_blank">www.pr-agro.ru</a>
          </p>
        </li>
        <li>
          <img src="/src/assets/moth-svgrepo-com.svg" alt="email" width="30" />
          <p>ЗемлякоФФ защита растений 2014-2019
            <br />
            <a href="https://zzrc.ru/" target="_blank">www.zzrc.ru</a>
          </p>
        </li>
        <li>
          <img src="/src/assets/sketch-logo-thin-svgrepo-com.svg" alt="email" width="30" />
          <p>Evrone 2012-2013
            <br />
            <a href="https://evrone.ru/" target="_blank">www.evrone.ru</a>
          </p>
        </li>
        <li>
          <img src="/src/assets/snowflake-thin-svgrepo-com.svg" alt="email" width="30" />
          <p>Арктическая Лаборатория 2011—2012 
            <br />
            <a href="https://arcticlab.ru/" target="_blank">www.arcticlab.ru</a>
          </p>
        </li>
      </ul>
    </div>
  </main>

  <footer>
    <ul>
      <li>
        <img src="/src/assets/download-svgrepo-com.svg" alt="email" width="30" />
        <button @click.prevent="doSomething">Скачать резюме</button>
        <!--<a href="/Resume_Pryadkin_Maxim_VueJS_20.2024.pdf" download="Resume_Pryadkin_Maxim_VueJS">Скачать резюме</a> -->
      </li>
    </ul>
  </footer>
</template>
