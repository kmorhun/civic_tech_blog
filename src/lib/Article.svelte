<script>
    let { week, title, reading, imgsrc, imgalt, reflection_url, article_url, show_reading} = $props()
</script>

<div class="col-lg-8 px-0">
    <article class="mb-5">
      <p class="text-uppercase text-muted">Week {week}</p>
      <h3>{title}</h3>
      {#if show_reading}
        <p class="text-muted">
          Reading: <a href={article_url}>{@html reading}</a>
        </p>
      {/if}
      <img
        src={imgsrc}
        class="img-fluid rounded mb-3"
        style="max-width: 50%;"
        alt={imgalt}
      >
      <div>
        <a href={reflection_url} class="btn btn-primary">View Reflection</a>
      </div>
    </article>
</div>