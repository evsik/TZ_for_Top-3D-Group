<template>
  <li class="b-mainNav__list">
    <a href="#" class="b-mainNav__link">
      {{ item.title }}
    </a>
  </li>
</template>

<script>
export default {
  name: "MainNav",

  props: {
    type: {
      type: String
    },
    item: {type: Object}
  },
}
</script>

<style lang="scss">
$varColorBlack: #000000;

.b-mainNav__list {
  list-style-type: none;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
    font-weight: bold;
  }

  .b-mainNav__link {
    text-decoration: none;
    font-family: Open Sans, serif;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: $varColorBlack;

  }
}

</style>