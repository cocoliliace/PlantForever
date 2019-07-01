<template>
  <div>
    <div class="carousel">
      <img src="@/assets/1.jpg" class="carousel-img" />
      <div class="text-container">
        <div class="primary-text">We are PlantForever</div>
        <div class="secondary-text">Your first tree is free</div>
        <div class="secondary-text">Free planting in Edmonton area</div>
        <div class="buttons-container">
          <router-link :to="{ name: 'TreeRegistration' }" class="primary-button">Get A Tree</router-link>
          <router-link :to="{ name: 'Donate' }" class="secondary-button">Donate Funds</router-link>
        </div>
      </div>
    </div>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id vehicula eros, quis sagittis orci. Nullam id risus eu erat laoreet mollis. Phasellus scelerisque porttitor risus, tempor pharetra ipsum pretium auctor. Morbi tincidunt est at odio semper, ut consequat leo convallis. Fusce imperdiet tellus et tincidunt fringilla. Maecenas pellentesque magna ut ultrices tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque et ligula dapibus, ultricies libero ut, ornare erat. Integer lacus nisi, lobortis a interdum vestibulum, mollis nec sapien. Mauris mattis mauris nec orci lacinia, ut elementum odio molestie. Aenean mollis augue nunc, sed malesuada lacus vehicula fermentum. Pellentesque lobortis faucibus congue. Nullam ante arcu, euismod sit amet laoreet ac, venenatis eu ante. Nam ac pulvinar lacus. Donec pharetra velit eu orci pellentesque dapibus. Maecenas et dui lectus.

      Nunc orci ligula, semper eget viverra sit amet, mollis sit amet felis. Mauris tristique sagittis porttitor. Pellentesque eu metus ut ante congue ultrices non eu est. Nullam volutpat fermentum felis in feugiat. Curabitur blandit mauris eu aliquam consectetur. Aenean lobortis orci non erat malesuada lacinia. Sed aliquam dolor in dui tincidunt, nec cursus lacus sodales. Fusce vestibulum est id ex fringilla, sit amet euismod magna volutpat. Sed porttitor metus sit amet diam convallis vulputate. Duis eget accumsan arcu, et auctor justo. Ut imperdiet viverra venenatis. Quisque a dapibus arcu, quis laoreet mauris. Proin vulputate hendrerit lectus a dapibus. Duis posuere neque velit, sed viverra dui ultricies sit amet. In in metus est. Suspendisse quis tempus purus.

      Nulla tempor erat rutrum consequat laoreet. Vestibulum in commodo arcu. Nunc tincidunt, felis ut molestie aliquam, velit libero interdum purus, quis auctor nulla magna at urna. Morbi in metus risus. Quisque et risus quis ipsum malesuada sodales. Donec tortor leo, fringilla id sapien porttitor, hendrerit laoreet diam. Nullam a neque quis orci vestibulum fringilla ac nec magna. Nulla nisl felis, vestibulum convallis consectetur quis, bibendum in urna. Morbi dapibus sapien sit amet sagittis pellentesque. Phasellus eu arcu vitae nisi viverra auctor. Sed laoreet quam ut est iaculis, ut tempor velit accumsan. Donec auctor urna sed ligula mollis auctor. Etiam ac eros ligula. Donec tincidunt fermentum neque, ac auctor justo pharetra ornare. Integer a dictum massa.

      Quisque auctor quam ac consectetur viverra. In blandit eros sit amet auctor porttitor. Proin consequat diam eget mauris ullamcorper, at commodo arcu consectetur. Sed porta vestibulum massa, quis posuere ipsum sodales sit amet. Nulla efficitur quis erat sed iaculis. Donec nec nunc dolor. Duis dictum lacus magna, quis aliquam diam pellentesque feugiat. Vivamus lobortis quam quis metus facilisis, non imperdiet diam ultrices. Aenean posuere, odio et consectetur dignissim, dolor nisi fermentum erat, eu vehicula elit nunc vitae magna. Integer lacinia, purus quis euismod maximus, massa nisi tristique lectus, blandit facilisis felis risus vel velit. Sed vulputate lectus ut erat viverra dapibus a non erat. Phasellus vestibulum auctor neque, id fermentum nisi. Suspendisse elementum est lacus. Ut venenatis, velit id tempus efficitur, dolor nulla elementum augue, viverra feugiat nunc odio eget dolor. Sed laoreet nisl a finibus tincidunt.

      Praesent molestie, nibh et maximus vehicula, metus ipsum pulvinar lorem, nec tristique dolor diam varius libero. Proin id volutpat nibh. Nunc posuere, lacus ac sagittis sagittis, ipsum leo interdum arcu, ut fermentum magna neque sed nulla. Suspendisse tortor nisi, egestas non orci non, pharetra condimentum metus. Phasellus ut venenatis tellus. Phasellus nisi dui, mollis id orci ac, placerat commodo risus. Maecenas fringilla laoreet lectus, rhoncus pharetra tellus ullamcorper eu. Etiam lectus massa, gravida quis nulla ut, efficitur euismod ex. Pellentesque maximus nibh lectus, ut ornare ante bibendum a. Suspendisse pharetra id neque in scelerisque. Sed elementum pretium lorem in facilisis. Aenean lacus justo, porttitor ut purus sit amet, sagittis auctor tellus. Maecenas vestibulum odio ac risus lacinia, sit amet rutrum sem bibendum. Mauris massa nibh, condimentum mattis tortor eget, malesuada dignissim sem. Praesent ac ex ac erat vestibulum condimentum.

      Phasellus eu sem a est pretium rhoncus. Donec sagittis sit amet orci a mattis. Nullam ut porttitor dolor. Morbi vel sapien pellentesque, vestibulum neque eget, egestas orci. Nullam commodo id nisi tristique ornare. Integer efficitur bibendum leo, in euismod eros. Phasellus in diam a lacus ultricies feugiat ac eget massa. Vestibulum pharetra risus in purus posuere sodales. Proin laoreet quam metus, elementum faucibus felis tempus eget. Duis luctus nisi eu nisi commodo, et tincidunt nisl mattis. Cras et sollicitudin est. Nulla pharetra mattis est eget pretium. Sed erat sem, maximus ac neque ut, faucibus accumsan diam. Duis a metus id eros porttitor ultrices efficitur eget ligula.
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="scss">
.carousel {
  .carousel-img {
    width: 100vw;
  }
  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -35%);
    .primary-text {
      color: white;
      font-size: 60px;
      font-weight: 700;
      text-shadow: 5px 5px 10px black;
    }
    .secondary-text {
      color: white;
      font-size: 50px;
      text-shadow: 5px 5px 10px black;
    }
  }
}
.buttons-container {
  display: flex;
  margin-top: 40px;
  width: 50%;
  justify-content: space-between;
}
</style>