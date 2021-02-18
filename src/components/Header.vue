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
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Акции
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            О нас
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Мероприятия
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Оплата и доставка
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Что с моим заказом?
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Гос. закупки
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Блог
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Мастер-классы
          </a>
        </li>
        <li class="b-mainNav__list">
          <a href="#" class="b-mainNav__link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
    <hr>
    <nav class="b-servicesNav">
      <ul>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            3D-принтеры <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            3D-сканеры <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Станки <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Роботы <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Образование <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Стоматологам <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Гаджеты <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Материалы <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            ПО <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Решения <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Учебный центр <i class="fas fa-chevron-down"></i>
          </a>
        </li>
        <li class="b-servicesNav__list">
          <a href="#" class="b-servicesNav__link">
            Услуги <i class="fas fa-chevron-down"></i>
          </a>
        </li>
      </ul>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      catalogShown: false
    }
  }
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

.b-userSlider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 120px;
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
}

.b-yandexMarket {
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 5px 12px;

}

.b-search {
  form {
    position: relative;

    .b-search__field {
      width: 521px;
      height: 44px;
      border: 1px solid #BDBDBD;
      border-radius: 4px;
      padding-left: 10px;

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

      color: #D2001C;
      font-family: Open Sans, serif;
      font-size: 13px;
      font-weight: 600;
      line-height: 18px;
    }
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
}

.b-mainNav {
  padding: 16px 120px;

  ul {
    display: flex;
    justify-content: space-between;

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
  }
}

.b-servicesNav {
  @extend .b-mainNav;

  ul {
    display: flex;
    justify-content: space-between;

    .b-servicesNav__list {
      list-style-type: none;

      .b-servicesNav__link {
        text-decoration: none;
        font-family: Open Sans, serif;
        font-size: 13px;
        font-weight: 700;
        line-height: 18px;
        color: $varColorBlack;
      }
    }
  }
}

</style>