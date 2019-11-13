<script>
  import Navigation from "~component/Navigation.svelte";
  export let segment;
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  @include font-face(600, "../type/sans", "Lefty Sans");
  @include font-face(400, "../type/sans", "Lefty Sans");
  @include font-face(300, "../type/sans", "Lefty Sans");

  :global(app) {
    @include font-sans("Lefty Sans");
    background-color: $inc-gray-1;
    color: $inc-gray-8;
    min-height: 100vh;
    display: flex;
  }

  main {
    width: 100%;
  }

  :global(.header) {
    align-items: end;
    background-color: $inc-gray-1;
    border-bottom: 1px solid $inc-gray-3;
    display: flex;
    font-weight: 400;
    height: 6.5rem;
    padding: 1rem 1.5rem;
    position: sticky;
    top: 0;
    z-index: 1;

    h1 {
      font-size: 1.5rem;
      font-style: italic;
    }
  }
</style>

<Navigation {segment}/>

<main>
  <slot></slot>
</main>
