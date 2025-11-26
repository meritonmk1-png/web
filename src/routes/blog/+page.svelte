<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { t } from "svelte-i18n";
    import { onMount } from "svelte";

    export let data;
    $: posts = data.posts;

    let visible = false;

    onMount(() => {
        visible = true;
    });
</script>

<div class="page-wrapper">
    <Navbar />

    <main class="blog-container">
        <div class="header" class:visible>
            <h1 class="title">{$t("blog.title")}</h1>
            <p class="subtitle">{$t("blog.subtitle")}</p>
        </div>

        <div class="posts-grid">
            {#each posts as post, i}
                <article
                    class="post-card"
                    class:visible
                    style="transition-delay: {i * 100}ms"
                >
                    <div class="post-content">
                        <div class="post-meta">
                            <span class="date">{post.meta.date}</span>
                            <span class="read-time">{post.meta.readTime}</span>
                        </div>
                        <h2 class="post-title">{post.meta.title}</h2>
                        <p class="post-excerpt">{post.meta.excerpt}</p>
                        <div class="tags">
                            {#each post.meta.tags as tag}
                                <span class="tag">#{tag}</span>
                            {/each}
                        </div>
                        <a href="/blog/{post.slug}" class="read-more">
                            {$t("blog.read_more")} <span class="arrow">→</span>
                        </a>
                    </div>
                </article>
            {/each}
        </div>

        <div class="back-home">
            <a href="/" class="home-link">{$t("blog.back_home")}</a>
        </div>
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

    .blog-container {
        padding: 8rem 2rem 4rem;
        max-width: 1200px;
        margin: 0 auto;
        min-height: 80vh;
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s ease;
    }

    .header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .title {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: 800;
        margin-bottom: 1rem;
        background: linear-gradient(to right, #fff, #aaa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        font-size: 1.2rem;
        color: var(--text-muted);
        max-width: 600px;
        margin: 0 auto;
    }

    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .post-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 2rem;
        transition: all 0.3s ease;
        opacity: 0;
        transform: translateY(20px);
        display: flex;
        flex-direction: column;
    }

    .post-card.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .post-card:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .post-meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-bottom: 1rem;
    }

    .post-title {
        font-size: 1.5rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .post-excerpt {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 1.5rem;
        line-height: 1.6;
        flex-grow: 1;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .tag {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        background: rgba(255, 255, 255, 0.05);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        transition: gap 0.3s ease;
    }

    .read-more:hover {
        gap: 0.75rem;
        text-decoration: underline;
    }

    .back-home {
        text-align: center;
        margin-top: 4rem;
    }

    .home-link {
        color: var(--text-muted);
        text-decoration: underline;
        transition: color 0.3s ease;
    }

    .home-link:hover {
        color: #fff;
    }

    @media (max-width: 768px) {
        .blog-container {
            padding: 6rem 1rem 2rem;
        }
    }
</style>
