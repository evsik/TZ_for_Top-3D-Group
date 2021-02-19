<template>
  <main>
    <div class="mainPhoto">
      <img src="../assets/MaskGroup.jpg" alt="MainPhoto">
    </div>
    <section class="b-mainSection">
      <div class="b-resumeBlock">
        <h2 class="b-resumeBlock__head">
          Твоя работа
          <br>
          в крупнейшем интеграторе
          <br>
          цифрового производства
        </h2>
        <button class="b-resumeBlock__btn">
          Отправить резюме
        </button>
        <p class="b-resumeBlock__agreement">
          Нажимая кнопку, вы соглашаетесь
          <br>
          на обработку персональных данных.
        </p>
      </div>
      <div class="b-blockAboutUs">
        <p class="b-blockAboutUs__textAboutUs">
          Top 3D Shop – лидер по продажам 3D-оборудования в России и странах СНГ. В 2018 мы стали <br>
          лучшим интегратором 3D оборудования по аддитивным технологиям и цифровому <br>
          производству по версии <a href="#">3D Print Awards</a>.
          <br>
          <br>
          За 6 лет работы более 10 000 клиентов по всей России и СНГ выбрали Top 3D Shop. В 2018 <br>
          наш оборот составил 600 млн. рублей, в компании работает более 100 сотрудников.
          <br>
          <br>
          Новая цель: 1 млрд торгового оборота в этом году и выход на международные рынки. Если вы <br>
          — целеустремленный специалист, готовый учиться новым навыкам и учить других, мыслите <br>
          не просто как исполнитель, а как владелец своего направления, то нам по пути!
        </p>
        <p class="b-blockAboutUs__textAboutUs__media">
          Top 3D&nbsp;Shop&nbsp;&mdash; лидер по&nbsp;продажам 3D-оборудования в&nbsp;России и&nbsp;странах СНГ. В&nbsp;2018&nbsp;мы
          стали
          лучшим интегратором 3D&nbsp;оборудования по&nbsp;аддитивным технологиям и&nbsp;цифровому
          производству по&nbsp;версии <a href="#">3D&nbsp;Print Awards</a>.
          <br>
          <br>
          За&nbsp;6&nbsp;лет работы более 10&nbsp;000 клиентов по&nbsp;всей России и&nbsp;СНГ выбрали Top 3D&nbsp;Shop.
          В&nbsp;2018
          наш оборот составил 600&nbsp;млн. рублей, в&nbsp;компании работает более 100&nbsp;сотрудников.
          <br>
          <br>
          Новая цель: 1&nbsp;млрд торгового оборота в&nbsp;этом году и&nbsp;выход на&nbsp;международные рынки. Если вы
          &mdash;&nbsp;целеустремленный специалист, готовый учиться новым навыкам и&nbsp;учить других, мыслите
          не&nbsp;просто как исполнитель, а&nbsp;как владелец своего направления, то&nbsp;нам по&nbsp;пути!
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss">
$varFontFamilySF: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, serif;

//@font-face {
//  font-family: "SF Pro Display";
//  font-weight: 400;
//  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
//}

//@font-face {
//  font-family: "SF Pro Text";
//  font-weight: 500;
//  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscotext-regular-webfont.woff");
//}

main {
  flex-grow: 1;
  padding: 70px 120px;

  @media (max-width: 1500.98px) {
    padding: 16px 100px;
  }

  @media (max-width: 1060.98px) {
    padding: 16px 50px;
  }

  @media (max-width: 750.98px) {
    padding: 16px 10px;
  }
}

.mainPhoto {

  img {
    width: 100%;
    height: auto;
  }
}

.b-mainSection {
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
  flex-wrap: wrap-reverse;
}

.b-resumeBlock {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .b-resumeBlock__head {
    font-family: $varFontFamilySF;
    font-weight: 400;
    text-align: left;
    font-size: 27px;
    line-height: 32px;
    margin-bottom: 40px;

    @media(max-width: 700px) {
      font-size: 23px;
    }
  }

  .b-resumeBlock__btn {
    font-family: $varFontFamilySF;
    color: white;
    width: 280px;
    height: 44px;
    border-radius: 4px;
    border: none;
    background-color: #D2001C;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.7px;
    margin-bottom: 20px;
    cursor: pointer;

    @media(max-width: 700px) {
      width: 180px;
    }

  }


  .b-resumeBlock__agreement {
    font-family: $varFontFamilySF;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.7px;
    color: #C4C4C4;
    text-align: left;

    @media(max-width: 700px) {
      font-size: 12px;
    }
  }
}

.b-blockAboutUs {
  margin-bottom: 20px;

  .b-blockAboutUs__textAboutUs {
    font-family: $varFontFamilySF;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    letter-spacing: -0.7px;
    color: #4D4D4D;

    @media (max-width: 990px) {
      font-size: 13px;
    }

    @media (max-width: 700px) {
      display: none;
    }

    a {
      color: red;
    }
  }

  .b-blockAboutUs__textAboutUs__media {
    @extend .b-blockAboutUs__textAboutUs;
    font-size: 13px;
    text-align: center;
    display: none;

    @media (max-width: 700px) {
      display: block;
    }
  }



}

</style>