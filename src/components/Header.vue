<template>
  <header class="b-header">
    <div class="b-contactsSlider">
      <div class="b-contactsSlider__connections">
        <select name="cities" class="b-contactsSlider__cities">
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Москва">Москва</option>
        </select>

      </div>
      <div class="b-contactsSlider__links">

      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: "Header",
}
</script>

<style lang="scss">

.b-header {
  padding: 0 120px;
  display: flex;
  justify-content: space-between;

  .b-contactsSlider__cities {
    border: none;
    font-family: Open Sans,serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
  }
}

</style>