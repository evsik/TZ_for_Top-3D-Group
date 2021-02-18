<template>
  <header class="b-header">
    <div class="b-contactsSlider">
      <div class="b-contactsSlider__connections">
        <select name="cities" class="b-contactsSlider__cities">
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Москва">Москва</option>
        </select>
        <div class="b-contactsSlider__tel">
          <p>
            <a href="tel:+78126135838">+7 (812) 613-58-38</a>
          </p>
        </div>
        <div class="b-contactsSlider__workTime">
          <p>
            Пн–пт 10:00–19:00, сб-вс 10:00–17:00
          </p>
        </div>
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

$varColorBlack: #000000;

.b-header {
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
}

.b-contactsSlider {

  .b-contactsSlider__connections {
    display: flex;

    .b-contactsSlider__cities {
      border: none;
      font-family: Open Sans, serif;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: $varColorBlack;
      margin-right: 20px;
    }

    .b-contactsSlider__tel {
      //margin-right: 20px;

      p {

        a {

          @extend .b-contactsSlider__cities;
          text-decoration: none;
        }
      }
    }

    .b-contactsSlider__workTime {

      p {
        @extend .b-contactsSlider__cities;
        margin-right: 0;
      }
    }
  }

}


</style>