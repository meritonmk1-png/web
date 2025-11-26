<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { t } from "svelte-i18n";
    import { onMount } from "svelte";

    export let data;

    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

<div class="page-wrapper">
    <Navbar />

    <main class="article-container">
        <article class="article" class:visible>
            <header class="article-header">
                <div class="meta">
                    <span class="date">{data.date}</span>
                    <span class="separator">•</span>
                    <span class="read-time">{data.readTime}</span>
                </div>
                <h1 class="title">{data.title}</h1>
                <div class="tags">
                    {#each data.tags as tag}
                        <span class="tag">#{tag}</span>
                    {/each}
                </div>
            </header>

            <div class="content">
                <p class="lead">{data.excerpt}</p>
                <div class="body">
                    <svelte:component this={data.content} />
                </div>
            </div>

            <div class="article-footer">
                <a href="/blog" class="back-link">← {$t("blog.back_home")}</a>
            </div>
        </article>
    </main>

    <Footer />
</div>

<style>
    .page-wrapper {
        min-height: 100vh;
        background: var(--bg-dark);
        color: var(--text-dark);
        position: relative;
        overflow-x: hidden;
    }

    .article-container {
        padding: 8rem 2rem 4rem;
        max-width: 800px;
        margin: 0 auto;
        min-height: 80vh;
    }

    .article {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
    }

    .article.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .article-header {
        margin-bottom: 3rem;
        text-align: center;
    }

    .meta {
        display: flex;
        justify-content: center;
        gap: 1rem;
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .title {
        font-size: clamp(2rem, 4vw, 3.5rem);
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        background: linear-gradient(to right, #fff, #aaa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .tags {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.05);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
    }

    .content {
        font-size: 1.125rem;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.9);
    }

    .lead {
        font-size: 1.25rem;
        color: #fff;
        margin-bottom: 2rem;
        font-weight: 500;
    }

    .body {
        color: rgba(255, 255, 255, 0.8);
    }

    .article-footer {
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
    }

    .back-link {
        color: var(--text-muted);
        text-decoration: none;
        transition: color 0.3s ease;
        font-weight: 500;
    }

    .back-link:hover {
        color: #fff;
    }

    .not-found {
        text-align: center;
        padding: 4rem 0;
    }

    .not-found h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: #fff;
    }

    @media (max-width: 768px) {
        .article-container {
            padding: 6rem 1rem 2rem;
        }
    }
</style>
