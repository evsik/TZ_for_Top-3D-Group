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
    <div class="b-userSlider">
      <div class="b-logo">
        <a href="/">
          <img src="../assets/logo.png" alt="logo">
        </a>
        <p class="b-logo__text">
          Ваш эксперт
          <br>
          на рынке 3D-техники
        </p>
      </div>
      <div class="b-yandexMarket">
        <a href="#">
          <img src="../assets/yandex.png" alt="yandexMarket">
        </a>
      </div>
      <div class="b-search">
        <form action="#">
          <input type="text" class="b-search__field" placeholder="Введите запрос, например, Formlabs Form 2"
          >
          <button class="btn-search" type="submit">
            Найти
          </button>
        </form>
      </div>
      <div class="b-userCabinet">
        <a href="#">
          <i class="fas fa-sign-in-alt">
            <p>Войти</p>
          </i>
        </a>
      </div>
      <div class="b-cart">
        <button class="btn-cart" id="toggle-cart" type="button" @click="catalogShown = !catalogShown">
          <i class="fas fa-shopping-cart"></i> Корзина пуста
        </button>
        <div class="cart-block" v-if="catalogShown">
          <p>
            Что-то в корзине
          </p>
        </div>
      </div>
    </div>
    <nav class="b-mainNav">
      <ul>
        <MainNav
            v-for="item of $store.state.mainNavItems"
            :key="item.title"
            :item="item"
        />
      </ul>
    </nav>
    <hr>
    <nav class="b-servicesNav">
      <ul>
        <DropMenu
            v-for="item of $store.state.dropMenuItems"
            :key="item.title"
            :item="item"
        />
      </ul>
      <i class="fas fa-bars" v-on:click="isActive = !isActive"></i>
      <ul class="hoverMediaMenu" v-bind:class="{ slideInLeft: isActive }">
        <DropMenu
            v-for="item of $store.state.dropMenuItems"
            :key="item.title"
            :item="item"
        />
      </ul>
    </nav>
  </header>

</template>

<script>
import DropMenu from "@/components/DropMenu";
import MainNav from "@/components/MainNav";

export default {
  name: "Header",

  components: {
    DropMenu,
    MainNav
  },

  data() {
    return {
      catalogShown: false,
      dropMenu: false,
      isActive: false
    }
  }
}
</script>

<style lang="scss">
$varColorBlack: #000000;

.b-header {
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.16);

}

.b-contactsSlider {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #FED600;
  padding: 9px 120px;

  @media (max-width: 1500.98px) {
    justify-content: center;
    padding: 16px 100px;
  }

  @media (max-width: 1060.98px) {
    padding: 16px 50px;
    flex-direction: column;
  }

  @media (max-width: 750.98px) {
    padding: 16px 10px;
    flex-direction: column;
  }

  .b-contactsSlider__connections {
    display: flex;

    @media (max-width: 1269.98px) {
      justify-content: center;
      margin-bottom: 10px;
    }

    @media (max-width: 750.98px) {
      flex-direction: column;
    }

    .b-contactsSlider__cities {
      border: none;
      font-family: Open Sans, serif;
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      color: $varColorBlack;
      margin-right: 20px;

      @media (max-width: 750.98px) {
        margin-right: 0;
      }

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
      align-self: center;

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

      @media (max-width: 1060.98px) {
        margin-left: 0;
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

      @media (max-width: 1060.98px) {
        margin-left: 0;
        align-self: center;
      }
    }

    @media (max-width: 1060.98px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

  }
}

.b-userSlider {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;

  @media (max-width: 1500.98px) {
    padding: 16px 100px;
  }

  @media (max-width: 1060.98px) {
    padding: 16px 50px;
  }

  @media (max-width: 550.98px) {
    justify-content: space-evenly;
  }

}

.b-logo {
  display: flex;

  a {

  }

  .b-logo__text {
    font-family: Open Sans, serif;
    font-style: italic;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    align-self: center;
    margin-left: 16px;
  }

  @media (max-width: 1050.98px) {
    margin-bottom: 10px;
  }
}

.b-yandexMarket {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 5px 12px;

  @media (max-width: 1050.98px) {
    margin-bottom: 10px;
  }
}

.b-search {
  @media (max-width: 900.98px) {
    width: 100%;
  }

  form {
    position: relative;

    .b-search__field {
      width: 521px;
      height: 44px;
      border: 1px solid #BDBDBD;
      border-radius: 4px;
      padding-left: 10px;

      //&::placeholder {
      //  color: rebeccapurple;
      //}

      @media (max-width: 900.98px) {
        width: 100%;
      }

      @media (max-width: 700.98px) {
        &::placeholder {
          color: transparent;
        }
      }
    }


    .btn-search {
      position: absolute;
      bottom: 4px;
      right: 3px;
      height: 36px;
      width: 75px;
      border: 2px solid #D2001C;
      background-color: transparent;
      border-radius: 4px;
      cursor: pointer;

      color: #D2001C;
      font-family: Open Sans, serif;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
    }
  }

  @media (max-width: 1050.98px) {
    margin-bottom: 10px;
  }
}

.b-userCabinet {


  a {
    color: #D2001C;
    text-decoration: none;

    i {
      display: flex;
      font-size: 22px;

      p {
        margin-left: 10px;
        font-family: Open Sans, serif;
        font-weight: 600;
        font-size: 13px;
        color: #222222;
        align-self: center;
      }
    }
  }

  @media (max-width: 1050.98px) {
    margin-bottom: 10px;
  }
}

.b-cart {
  position: relative;

  .btn-cart {
    cursor: pointer;
    width: 160px;
    height: 36px;
    background: #D2001C;
    border: none;
    border-radius: 4px;
    font-family: Open Sans, serif;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: #FFFFFF;
  }

  .cart-block {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.62);
    border-radius: 5px;
    box-sizing: border-box;
    right: 0;
    top: 130%;
    position: absolute;
    background-color: white;
    padding: 20px;
    color: $varColorBlack;
    width: 300px;
    height: 300px;
    overflow-y: scroll;
  }

  @media (max-width: 1050.98px) {
    margin-bottom: 10px;
  }
}

.b-mainNav {
  padding: 16px 120px;

  ul {
    display: flex;
    justify-content: space-between;

    @media (max-width: 990.98px) {
      flex-direction: column;
    }
  }

  @media (max-width: 1500.98px) {
    padding: 16px 100px;
  }

  @media (max-width: 1060.98px) {
    padding: 16px 50px;
  }
}

.b-servicesNav {
  @extend .b-mainNav;
  position: relative;

  ul {
    display: flex;
    justify-content: space-between;

    .b-servicesNav__hoverNav {
      position: absolute;
      display: none;
    }

    @media (max-width: 990px) {
      display: none;
    }
  }

  .fa-bars {
    cursor: pointer;
    display: none;

    @media (max-width: 990px) {
      display: block;
    }
  }

  .hoverMediaMenu {
    flex-direction: column;
    position: absolute;
    left: -200px;
    display: none;

    .b-servicesNav__link {
      i {
        transform: rotate(-90deg);
      }
    }

    .b-servicesNav__list {
      margin-bottom: 5px;

      .b-servicesNav__link {
        i {
          transform: rotate(-90deg);
        }
      }

      .hover {
        padding-top: 0;
        padding-left: 115px;
      }
    }

    @media (max-width: 990px) {
      display: flex;
    }
  }
}

.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(196%);
    transform: translateX(196%);
  }
}

@keyframes slideInLeft {
  0% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    visibility: visible;
  }
  100% {
    -webkit-transform: translateX(196%);
    transform: translateX(196%);
  }
}

</style>