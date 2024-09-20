<script setup>
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
const doSomething = () => confetti()
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="heading">
        <h1>Максим Прядкин</h1>
        <p>Frontend-разработчик / Vue.js</p>
      </div>
      <div class="link">
        <div class="telegram">
          <img src="/src/assets/telegram-logo-thin-191716.svg" alt="telegram" width="30">
          <a href="https://t.me/maxpryadkin" target="_blank">maxpryadkin</a>
        </div>

        <div class="email">
          <img src="/src/assets/at-thin-svgrepo-com.svg" alt="email" width="30">
          <a href="mailto:lahma@yandex.ru" target="_blank">lahma@yandex.ru</a>
        </div>

        <div class="github">
          <img src="/src/assets/github-logo-code-open-sourse-oneline-svgrepo-com.svg" alt="github" width="30">
          <a href="https://github.com/lahma-tut" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
    <span></span>
  </header>

  <main>
    <div class="jobs">
      <h2>Где работал</h2>
      <ul>
        <li>
          <img 
            src="/src/assets/drop-half-thin-svgrepo-com.svg" 
            alt="email" 
            width="30"
            >
          <p>ООО "Премьер-Агро" 2019-н.в.
            <br><a href="https://pr-agro.ru/" target="_blank">www.pr-agro.ru</a>
          </p>
        </li>
        <li>
          <img 
            src="/src/assets/moth-svgrepo-com.svg" 
            alt="email"
            width="30"
            >
          <p>
            ООО "ЗемлякоФФ защита растений" 2014-2019
            <br><a href="https://zzrc.ru/" target="_blank">www.zzrc.ru</a>
          </p>
        </li>
        <li>
          <img 
            src="/src/assets/sketch-logo-thin-svgrepo-com.svg" 
            alt="email" 
            width="30"
            >
          <p>
            ООО "Evrone" 2012-2014
            <br><a href="https://evrone.ru/" target="_blank">www.evrone.ru</a>
          </p>
        </li>
        <li>
          <img 
            src="/src/assets/snowflake-thin-svgrepo-com.svg" 
            alt="email" 
            width="30"
            >
          <p>ООО "Арктическая Лаборатория" 2011—2012
            <br><a href="https://arcticlab.ru/" target="_blank">www.arcticlab.ru</a>
          </p>
        </li>
      </ul>
    </div>
    <span></span>
  </main>

  <footer>
    <ul>
      <li>
        <img 
          src="/src/assets/download-svgrepo-com.svg" 
          alt="email" 
          width="30"
          >
        <a href="/Resume_Pryadkin_Maxim_VueJS_20.2024.pdf" download="Resume_Pryadkin_Maxim_VueJS">Скачать резюме</a>
      </li>
    </ul>
  </footer>
</template>