<template>
  <header class="b-header">
    <div class="b-contactsSlider">
      <div class="b-contactsSlider__connections">
        <div class="b-contactsSlider__cities">
          <select name="cities">
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Москва">Москва</option>
          </select>
        </div>
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
        <div class="b-contactsSlider__writeUs">
          <p>
            <a href="http://top3dshop.ru">
              Напишите нам
            </a>
          </p>
        </div>
        <div class="b-contactsSlider__mailToDir">
          <p>
            <a href="http://top3dshop.ru">
              Свяжитесь с директором
            </a>
          </p>
        </div>
        <div class="b-contactsSlider__socials">
          <ul>
            <li class="b-contactsSlider__socialsList">
              <a href="" class="b-contactsSlider__socialsLinks">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </li>
            <li class="b-contactsSlider__socialsList">
              <a href="" class="b-contactsSlider__socialsLinks">
                <i class="fab fa-skype"></i>
              </a>
            </li>
            <li class="b-contactsSlider__socialsList">
              <a href="" class="b-contactsSlider__socialsLinks">
                <i class="fas fa-phone-alt"></i>
              </a>
            </li>
          </ul>
        </div>
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
}

.b-contactsSlider {
  display: flex;
  justify-content: space-between;
  background-color: #FED600;
  padding: 9px 120px;

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

      select {
        @extend .b-contactsSlider__cities;
        margin-top: -2px;
        background-color: #FED600;
        margin-right: 0;

      }

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

  .b-contactsSlider__links {
    display: flex;
    justify-content: space-between;

    .b-contactsSlider__writeUs {
      font-family: Open Sans, serif;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: $varColorBlack;

      p {
        a {
          color: $varColorBlack;
          text-decoration: none;
        }
      }
    }

    .b-contactsSlider__mailToDir {
      @extend .b-contactsSlider__writeUs;
      margin-left: 35px;

      p {
        a {
          color: $varColorBlack;
          text-decoration: none;
        }
      }
    }

    .b-contactsSlider__socials {
      margin-left: 35px;
      align-self: flex-end;


      ul {
        display: flex;

        .b-contactsSlider__socialsList {
          list-style-type: none;
          margin-left: 20px;

          &:first-of-type {
            margin-left: 0;
          }

          .b-contactsSlider__socialsLinks {
            color: $varColorBlack;
          }
        }
      }
    }

  }
}


</style>