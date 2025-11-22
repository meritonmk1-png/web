<script>
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";

    let sectionRef;
    let visible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef) observer.observe(sectionRef);
        return () => observer.disconnect();
    });

    const features = [
        {
            id: "delivery",
            title: "fast_delivery",
            desc: "// Days instead of weeks",
            val: '"7_days"',
            color: "#a5f3fc", // cyan
        },
        {
            id: "perf",
            title: "optimize_perf",
            desc: "// Clean code, instant load",
            val: "true",
            color: "#fde047", // yellow
        },
        {
            id: "ux",
            title: "clear_structure",
            desc: "// UX that converts",
            val: "100%",
            color: "#f9a8d4", // pink
        },
        {
            id: "ai",
            title: "ai_capabilities",
            desc: "// Chatbots & automation",
            val: "enabled",
            color: "#86efac", // green
        },
        {
            id: "price",
            title: "transparent_pricing",
            desc: "// No hidden fees",
            val: "0",
            color: "#c4b5fd", // purple
        },
    ];
</script>

<section class="section" bind:this={sectionRef}>
    <div class="bg-grid"></div>

    <div class="container">
        <div class="header" class:visible>
            <h2>
                <span class="comment"
                    >&lt;!-- {$t("differentiators.headline")} --&gt;</span
                ><br />
                Designed for Speed.<br />
                <span class="highlight">Engineered for Results.</span>
            </h2>
            <p class="lead">
                {$t("value_prop.body")}
            </p>
        </div>
    </div>

    <!-- Sliding Track -->
    <div class="slider-container" class:visible>
        <div class="slider-track">
            <!-- Double the items for seamless loop -->
            {#each [...features, ...features, ...features] as feature}
                <div class="code-card">
                    <div class="card-header">
                        <div class="dots">
                            <div class="dot red"></div>
                            <div class="dot yellow"></div>
                            <div class="dot green"></div>
                        </div>
                        <div class="filename">{feature.id}.ts</div>
                    </div>
                    <div class="card-body">
                        <div class="line">
                            <span class="keyword">const</span>
                            <span class="func" style="color: {feature.color}"
                                >{feature.title}</span
                            >
                            <span class="op">=</span>
                            <span class="brace">{"{"}</span>
                        </div>
                        <div class="line indent">
                            <span class="prop">status:</span>
                            <span class="val">{feature.val}</span><span
                                class="cursor">|</span
                            >
                        </div>
                        <div class="line">
                            <span class="brace">{"}"}</span>
                        </div>
                        <div class="comment-line">
                            {feature.desc}
                        </div>
                    </div>
                    <div class="glow" style="background: {feature.color}"></div>
                </div>
            {/each}
        </div>
    </div>

    <div class="container">
        <div class="outcome" class:visible>
            <div class="outcome-content">
                <span class="keyword">return</span>
                <span class="string"
                    >"A website that works for your business"</span
                >;
            </div>
        </div>
    </div>

    <!-- Connector to next section -->
    <div class="code-seam">
        <div class="line"></div>
        <div class="terminal-command">
            <span class="prompt">&gt;</span>
            <span class="cmd">git checkout why-me</span><span class="cursor"
                >_</span
            >
        </div>
        <div class="line"></div>
    </div>
</section>

<style>
    .section {
        padding-top: 8rem;
        padding-bottom: 0;
        background: #050505;
        position: relative;
        overflow: hidden;
        color: #fff;
        font-family: "Inter", sans-serif;
    }

    .bg-grid {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.03) 1px,
                transparent 1px
            );
        background-size: 50px 50px;
        mask-image: radial-gradient(
            circle at center,
            black 40%,
            transparent 80%
        );
        pointer-events: none;
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 2;
    }

    .header {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 4rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .comment {
        font-family: "Fira Code", monospace;
        font-size: 1rem;
        color: #666;
        display: block;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: clamp(2.5rem, 6vw, 4rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 2rem;
        letter-spacing: -0.02em;
    }

    .highlight {
        background: linear-gradient(
            135deg,
            #fff 0%,
            rgba(255, 255, 255, 0.5) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .lead {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.6;
    }

    /* Slider - Optimized */
    .slider-container {
        width: 100%;
        overflow: hidden;
        padding: 2rem 0;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.2s;
        /* Simplified mask to reduce composition cost */
        mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
        transform: translateZ(0); /* Hardware acceleration */
    }

    .slider-container.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .slider-track {
        display: flex;
        gap: 2rem;
        width: max-content;
        /* Slower animation to reduce paint frequency */
        animation: scroll 60s linear infinite;
        will-change: transform;
    }

    .slider-track:hover {
        animation-play-state: paused;
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-33.33% - 1rem));
        }
    }

    /* Code Card */
    .code-card {
        width: 300px;
        background: rgba(15, 15, 15, 0.9);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 0;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
        transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        flex-shrink: 0;
    }

    .code-card:hover {
        transform: translateY(-5px) scale(1.02);
        border-color: rgba(255, 255, 255, 0.3);
        z-index: 10;
        /* Reduced shadow complexity */
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    }

    .card-header {
        background: rgba(255, 255, 255, 0.03);
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .dots {
        display: flex;
        gap: 6px;
        margin-right: 1rem;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }
    .dot.red {
        background: #ef4444;
    }
    .dot.yellow {
        background: #f59e0b;
    }
    .dot.green {
        background: #22c55e;
    }

    .filename {
        font-family: "Fira Code", monospace;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.4);
    }

    .card-body {
        padding: 1.5rem;
        font-family: "Fira Code", monospace;
        font-size: 0.9rem;
        line-height: 1.6;
    }

    .line {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        white-space: nowrap;
    }

    .indent {
        padding-left: 1.5rem;
    }

    .keyword {
        color: #c678dd;
    } /* purple */
    .op {
        color: #56b6c2;
    } /* cyan */
    .brace {
        color: #abb2bf;
    }
    .prop {
        color: #e06c75;
    } /* red */
    .val {
        color: #98c379;
    } /* green */
    .string {
        color: #98c379;
    }

    .comment-line {
        color: #5c6370;
        margin-top: 1rem;
        font-style: italic;
        font-size: 0.85rem;
    }

    .cursor {
        display: inline-block;
        width: 2px;
        height: 1em;
        background: #528bff;
        margin-left: 2px;
        animation: blink 1s step-end infinite;
        vertical-align: middle;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .glow {
        position: absolute;
        top: 0;
        right: 0;
        width: 150px;
        height: 150px;
        background: var(--color);
        filter: blur(40px); /* Reduced from 80px */
        opacity: 0.1;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .code-card:hover .glow {
        opacity: 0.2;
    }

    /* Outcome */
    .outcome {
        text-align: center;
        margin-top: 2rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.4s;
    }

    .outcome.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .outcome-content {
        display: inline-block;
        padding: 1.5rem 3rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50px;
        font-family: "Fira Code", monospace;
        font-size: 1rem;
        color: #abb2bf;
    }

    /* Code Seam Connector */
    .code-seam {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 3rem;
        opacity: 0.6;
    }

    .code-seam .line {
        width: 1px;
        height: 60px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.3)
        );
    }

    .terminal-command {
        font-family: "Fira Code", monospace;
        font-size: 0.9rem;
        color: #abb2bf;
        background: rgba(0, 0, 0, 0.5);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .prompt {
        color: #98c379;
        margin-right: 0.5rem;
    }
    .cmd {
        color: #61afef;
    }

    @media (max-width: 768px) {
        .section {
            padding: 6rem 0 0 0;
        }

        .code-card {
            width: 260px;
        }

        .outcome-content {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
            white-space: normal;
        }
    }
</style>
