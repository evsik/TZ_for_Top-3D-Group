<template>
  <li class="b-servicesNav__list" v-on:mouseover="dropMenu = true" v-on:mouseleave="dropMenu = false">
    <div class="b-servicesNav__link">
      {{ item.title }} <i class="fas fa-chevron-down"></i>
    </div>
    <div class="hover" v-show="dropMenu">
      <a href="#" class="hover-link">
        SomeThing
      </a>
    </div>
  </li>
</template>

<script>

export default {
  name: "DropMenu",

  props: {
    type: {
      type: String
    },
    item: {type: Object}
  },

  data() {
    return {
      dropMenu: false,
    }
  }
}

</script>

<style lang="scss">
$varColorBlack: #000000;

.b-servicesNav__list {
  list-style-type: none;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  vertical-align: middle;

  .b-servicesNav__link {
    text-decoration: none;
    font-family: Open Sans, serif;
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    color: $varColorBlack;
    cursor: pointer;

    @media (max-width: 1269.98px) {
      font-size: 11px;
    }

    //&:hover + .hover {
    //  display: block;
    //}
  }

  .hover {
    position: absolute;
    transform: translate3d(0px, 0px, 0px);
    top: 0px;
    left: 0px;
    will-change: transform;
    width: 100%;
    padding-top: 30px;
    //display: none;
  }
}


</style>