<script>
  export let segment;
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  .navigation {
    border-right: 1px solid $inc-gray-3;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding-bottom: 1rem;
    position: relative;
    text-align: right;
    width: 150px;

    &::after {
      width: 149px; height: 6.5rem;
      top: 0; left: 0;

      background-color: $inc-gray-1;
      content: "";
      position: fixed;
    }
  }

  .navigation__item {
    display: block;

    &:not(.logo) {
      color: $inc-gray-6;
      font-size: 0.8rem;
      padding: 0.25rem 1rem;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $inc-blue-5;
      }

      &.selected {
        color: $inc-gray-9;
        pointer-events: none;
      }
    }

    &.logo {
      @include hide-text;
      // background-color: $inc-gray-1;
      background-image: url("../logo.svg");
      background-position: center right;
      background-repeat: no-repeat;
      height: 5rem;
      margin-bottom: 2.2rem;
      position: sticky;
      top: 1rem;
      z-index: 1;

      &::after {
        width: 100%; height: 1px;
        bottom: -0.5rem; left: 0;

        background-color: $inc-gray-3;
        content: "";
        position: absolute;
      }
    }
  }

  .navigation__slider {
    width: 1px; height: 0;
    top: 0; left: -1px;

    background-color: $inc-gray-9;
    position: absolute;
    transition: top 0.2s;
  }
</style>

<nav class="navigation">
  <a
    class="{segment === undefined ? 'navigation__item logo selected' : 'navigation__item logo'}"
    href="."
    title="Back to Lefty homepage"
  >Home</a>

  <a
    class="{segment === 'about' ? 'navigation__item selected' : 'navigation__item'}"
    href="about"
    title="About Lefty"
  >About</a>

  <a
    class="{segment === 'blog' ? 'navigation__item selected' : 'navigation__item'}"
    href="blog"
    rel=prefetch
    title="Latest updates and ponderings about the Lefty experience"
  >Blog</a>

<!--   <a
    class="{segment === 'manifesto' ? 'navigation__item selected' : 'navigation__item'}"
    href="manifesto"
    title="Why Lefty exists"
  >Manifesto</a> -->

  <a
    class="{segment === 'frequently-asked-questions' ? 'navigation__item selected' : 'navigation__item'}"
    href="frequently-asked-questions"
    title="Who have questions? We have answers!"
  >FAQ</a>

<!--   <a
    class="{segment === 'memes' ? 'navigation__item selected' : 'navigation__item'}"
    href="memes"
    title="Connect with other lefties with classic humor"
  >Memes</a> -->

  <a
    class="{segment === 'profiles' ? 'navigation__item selected' : 'navigation__item'}"
    href="profiles"
    title="Interviews with neat lefties"
  >Profiles</a>

<!--   <a
    class="{segment === 'shop' ? 'navigation__item selected' : 'navigation__item'}"
    href="shop"
    title="Help keep this site running by purchasing something. Please."
  >Shop</a> -->

  <div id="navigation-slider" class="navigation__slider"/>
</nav>
