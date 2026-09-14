<script>
    import Article from "$lib/Article.svelte";
    import articles from "../articles.json";
    import { resolve } from "$app/paths";

</script>

<div class="container my-5">
    <h1>Kateryna's Civic Technology Reading Journal</h1>
    {#each articles as a, i}
        <Article 
            week={i+1} 
            title={a.title}
            reading={a.reading}
            imgsrc={a.imgsrc}
            imgalt={a.imgalt}
            reflection_url={resolve(`/week${i + 1}_reflection`)}
            article_url={a.article_url}
        />
    {/each}
</div>