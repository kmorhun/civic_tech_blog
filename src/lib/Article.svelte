<script>
    let { week, title, reading, imgsrc, imgalt, reflection_url, article_url } = $props()
</script>

<div class="col-lg-8 px-0">
    <article class="mb-5">
      <p class="text-uppercase text-muted">Week {week}</p>
      <h3>{title}</h3>
      <p class="text-muted">
        Reading: {@html reading}
      </p>
      <img
        src={imgsrc}
        class="img-fluid rounded mb-3"
        alt={imgalt}
      >

      <a href={reflection_url} class="btn btn-primary">View Reflection</a>

      <p>
        <a href={article_url}>Link to the reading or project</a>
      </p>
    </article>
</div>