<script>
  // Create function to display number of days until August 13th
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  @keyframes marquee {
    0% {
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    96% {
      opacity: 1;
    }

    97% {
      opacity: 0;
    }

    to {
      transform: translateX(-50%);
    }
  }

  .marquee {
    top: 0; left: 0;

    background-color: $inc-black;
    color: $inc-gray-1;
    display: flex;
    overflow: hidden;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    position: absolute;
    transform: translateZ(0);
    white-space: nowrap;
    width: 100%;

    &::before,
    &::after {
      width: 1rem; height: 100%;

      content: "";
      display: block;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &::before {
      box-shadow: 0.25rem 0 1.25rem 0.25rem $inc-black;
      left: -1rem;
    }

    &::after {
      box-shadow: -0.25rem 0 1.25rem 0.25rem $inc-black;
      right: -1rem;
    }
  }

  .marquee__item {
    animation: marquee 15s linear infinite;
    padding-right: 1.5rem;
    opacity: 0;
    position: relative;

    &::before {
      content: "←";
      left: -1.1rem;
      position: absolute;
    }
  }
</style>

<aside class="marquee">
  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>

  <a
    class="marquee__item"
    href="celebration"
    title="International Left Handers Day"
  >
    International Left Handers Day is August 13th
  </a>
</aside>
