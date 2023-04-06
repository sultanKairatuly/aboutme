<template>
  <div class="container">
    <WorkList :works="works" />
  </div>
</template>

<script setup>
import WorkList from "src/components/WorkList.vue";
import { v4 as uuidv4 } from "uuid";

const works = [
  {
    name: "Обучалка",
    description:
      "Обучалка английскому, здесь есть все для того, чтобы освоить фундаменьальные знания английского языка",
    link: "https://jade-eclair-f16853.netlify.app/",
    adaptive: true,
    id: uuidv4(),
  },
  {
    name: "Книжный магазин",
    description: `Интернет магазин книг, работает фильтрация, сортировка по выбору, можно добавлять/удалять из корзины/избранных
    Есть пагинация, интерактива достаточно
    `,
    link: "https://lovely-profiterole-5876ff.netlify.app",
    adaptive: false,
    id: uuidv4(),
  },
  {
    name: "Музыкальное приложение",
    description: `Площадка для прослушивания песен, их здесь много и они довольно разные`,
    adaptive: false,
    link: "https://lovely-crisp-923cf5.netlify.app",
    id: uuidv4(),
  },
  {
    name: "Демо Вконтакте",
    description: `Демо версия Вконтакте, можно добавить пост, фото, статью, просматривать профили добавлять в друзья писать сообщения и т.д. Бэкенд на Firebase, фронтенд на Vue 3 js`,
    adaptive: true,
    link: "https://strong-tartufo-3e63fd.netlify.app",
    id: uuidv4(),
  },
];
</script>
