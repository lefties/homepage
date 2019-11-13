<script>
  import Marquee from "~component/Marquee.svelte";

  const links = [
    {
      author: "BBC News",
      date: "2006.12.06",
      title: "Left-handers \"think\" more quickly",
      url: "http://news.bbc.co.uk/2/hi/6212972.stm"
    },
    {
      author: "BBC News",
      date: "2005.02.07",
      title: "Left-handers have different view",
      url: "http://news.bbc.co.uk/2/hi/health/4242419.stm"
    },
    {
      author: "BBC News",
      date: "2004.12.08",
      title: "Left-handers \"better in fights\"",
      url: "http://news.bbc.co.uk/2/hi/health/4073775.stm"
    },
    {
      author: "BBC News",
      date: "2004.07.21",
      title: "Preferred hand \"set in the womb\"",
      url: "http://news.bbc.co.uk/2/hi/health/3912943.stm"
    }
  ];
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  section {
    padding: 1.75rem 1.5rem;
    max-width: 800px;
  }

  ul {
    font-size: 1rem;
    line-height: 1.55;

    li {
      &:not(:last-of-type) {
        margin-bottom: 1rem;
      }
    }

    a {
      color: $inc-blue-5;
      display: block;
      text-decoration: underline;
      transition: color 0.2s;

      &:hover {
        color: inherit;
      }
    }

    small {
      color: $inc-gray-6;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
</style>

<svelte:head>
	<title>About &middot; Lefty World</title>
</svelte:head>

<header class="header">
  <Marquee/>
  <h1>Articles about the lefty experience</h1>
</header>

<section>
  <ul>
    {#each links as link}
      <li>
        <a
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
          title={link.title}
        >{link.title}</a>
        <small>published {link.date} by {link.author}</small>
      </li>
    {/each}
  </ul>
</section>
