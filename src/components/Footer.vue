<template>

  <footer>
    <div class="footerHeader">
      <h2 class="footerName">
        Видео о нас
      </h2>
      <div class="footerButtons">
        <button class="footerLftBtn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="footerRghtBtn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div class="footerContent">
      <div class="footerContent__video">
        <!--        <video src="https://youtu.be/OYFOWAL1NlA"></video>-->
        <iframe src="https://www.youtube.com/embed/OYFOWAL1NlA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
      <div class="footerContent__video">
        <iframe src="https://www.youtube.com/embed/SOYBsly_yN8?start=2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>
    </div>
  </footer>

</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
$varFontFamilySF: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, serif;


footer {
  flex-shrink: 0;
  background-color: #F9F9F9;
  margin-bottom: 100px;
  padding: 70px 120px;

  @media (max-width: 1500.98px) {
    padding: 70px 100px;
  }

  @media (max-width: 1060.98px) {
    padding: 16px 50px;
    margin-bottom: 50px;
  }

  @media (max-width: 750.98px) {
    padding: 16px 10px;
    margin-bottom: 20px;
  }
}

.footerHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  .footerName {
    font-family: $varFontFamilySF;
    font-size: 36px;
    line-height: 43px;
    color: #222222;

  }

  .footerButtons {

    .footerLftBtn {
      width: 40px;
      height: 39px;
      border: 1px solid #E5E5E5;
      cursor: pointer;

      &:hover {
        opacity: 0.5;
      }
    }

    .footerRghtBtn {
      @extend .footerLftBtn;
    }
  }
}

.footerContent {
  display: flex;
  justify-content: space-between;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  .footerContent__video {
    width: 48%;
    height: 315px;

    @media (max-width: 990px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      height: 230px;
    }

    &:first-of-type {
      margin-right: 2%;

      @media (max-width: 990px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }

}


</style>