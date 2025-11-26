<script>
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";

    let sectionRef;
    let visible = false;
    let mouseX = 0;
    let mouseY = 0;
    let cardRefs = [];

    // Reveal elements on scroll
    let revealStates = {
        text1: false,
        text2: false,
        text3: false,
        cards: false,
        cta: false,
    };

    const features = [
        {
            key: "no_bureaucracy",
            delay: 0,
        },
        {
            key: "no_delays",
            delay: 0.1,
        },
        {
            key: "no_hidden_costs",
            delay: 0.2,
        },
        {
            key: "ai_first",
            delay: 0.3,
        },
    ];

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;

                    // Staggered reveal animation
                    setTimeout(() => (revealStates.text1 = true), 200);
                    setTimeout(() => (revealStates.text2 = true), 500);
                    setTimeout(() => (revealStates.text3 = true), 800);
                    setTimeout(() => (revealStates.cards = true), 1100);
                    setTimeout(() => (revealStates.cta = true), 1600);
                }
            },
            { threshold: 0.15 },
        );

        if (sectionRef) observer.observe(sectionRef);

        // Mouse parallax effect
        let frameId;
        const handleMouseMove = (e) => {
            if (frameId) return;

            frameId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                mouseX = x * 30;
                mouseY = y * 30;
                frameId = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener("mousemove", handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    });
</script>

<section class="section" bind:this={sectionRef}>
    <!-- Animated Gradient Background -->
    <div class="gradient-bg">
        <div
            class="gradient-orb orb-1"
            style="transform: translate({mouseX * -0.5}px, {mouseY * -0.5}px)"
        ></div>
        <div
            class="gradient-orb orb-2"
            style="transform: translate({mouseX * 0.8}px, {mouseY * 0.8}px)"
        ></div>
        <div
            class="gradient-orb orb-3"
            style="transform: translate({mouseX * -0.3}px, {mouseY * -0.3}px)"
        ></div>
    </div>

    <!-- Grid overlay -->
    <div class="grid-overlay"></div>

    <div class="container">
        <!-- Reveal Text -->
        <div class="reveal-content">
            <div class="reveal-line" class:visible={revealStates.text1}>
                <h2>{$t("why_me_full.line1")}</h2>
            </div>
            <div class="reveal-line" class:visible={revealStates.text2}>
                <h2 class="highlight">{$t("why_me_full.line2")}</h2>
            </div>
            <div class="reveal-line" class:visible={revealStates.text3}>
                <p class="subtitle">
                    {$t("why_me_full.subtitle")}
                </p>
            </div>
        </div>

        <!-- Feature Cards with 3D Effect -->
        <div class="cards-grid" class:visible={revealStates.cards}>
            {#each features as feature, i}
                <div
                    class="feature-card"
                    style="--delay: {feature.delay}s"
                    bind:this={cardRefs[i]}
                >
                    <div class="card-shine"></div>
                    <div class="card-content">
                        <h3>
                            {$t(`why_me_full.features.${feature.key}.title`)}
                        </h3>
                        <p>
                            {$t(
                                `why_me_full.features.${feature.key}.description`,
                            )}
                        </p>
                    </div>
                    <div class="card-border"></div>
                </div>
            {/each}
        </div>

        <!-- CTA with Magnetic Effect -->
        <div class="cta-container" class:visible={revealStates.cta}>
            <div class="cta-glow"></div>
            <a href="/start" class="cta-button">
                <span class="cta-text">{$t("why_me_full.cta.button")}</span>
                <span class="cta-arrow">→</span>
                <div class="cta-ripple"></div>
            </a>
            <p class="cta-note">{$t("why_me_full.cta.note")}</p>
        </div>
    </div>
</section>

<style>
    .section {
        position: relative;
        padding: 10rem 0;
        background: #000;
        overflow: hidden;
        color: #fff;
    }

    /* Animated Gradient Background */
    .gradient-bg {
        position: absolute;
        inset: 0;
        opacity: 0.4;
        z-index: 0;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        animation: morphing 20s ease-in-out infinite;
        transition: transform 0.5s ease-out;
    }

    .orb-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.6) 0%,
            transparent 70%
        );
        top: -10%;
        left: -10%;
        animation-delay: 0s;
    }

    .orb-2 {
        width: 700px;
        height: 700px;
        background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.5) 0%,
            transparent 70%
        );
        bottom: -15%;
        right: -15%;
        animation-delay: 7s;
    }

    .orb-3 {
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.5) 0%,
            transparent 70%
        );
        top: 40%;
        right: 20%;
        animation-delay: 14s;
    }

    @keyframes morphing {
        0%,
        100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
        }
        33% {
            transform: scale(1.1) rotate(120deg);
            border-radius: 40% 60% 50% 50%;
        }
        66% {
            transform: scale(0.9) rotate(240deg);
            border-radius: 60% 40% 60% 40%;
        }
    }

    .grid-overlay {
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
        background-size: 60px 60px;
        mask-image: radial-gradient(
            circle at center,
            black 30%,
            transparent 80%
        );
        pointer-events: none;
        z-index: 1;
    }

    .container {
        max-width: 1300px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        z-index: 2;
    }

    /* Reveal Content */
    .reveal-content {
        text-align: center;
        margin-bottom: 5rem;
        overflow: hidden;
    }

    .reveal-line {
        opacity: 0;
        transform: translateY(100px) rotateX(-20deg);
        transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        perspective: 1000px;
    }

    .reveal-line.visible {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
    }

    h2 {
        font-family: "Outfit", sans-serif;
        font-size: clamp(3rem, 7vw, 6rem);
        font-weight: 900;
        line-height: 1.1;
        margin-bottom: 0.5rem;
        letter-spacing: -0.04em;
    }

    .highlight {
        background: linear-gradient(
            135deg,
            #ec4899 0%,
            #8b5cf6 50%,
            #3b82f6 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradient-shift 3s ease infinite;
        background-size: 200% 200%;
    }

    @keyframes gradient-shift {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .subtitle {
        font-family: "Inter", sans-serif;
        font-size: clamp(1.1rem, 2vw, 1.4rem);
        color: rgba(255, 255, 255, 0.7);
        max-width: 700px;
        margin: 2rem auto 0;
        line-height: 1.6;
    }

    /* Cards Grid */
    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 5rem;
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .cards-grid.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .feature-card {
        position: relative;
        padding: 2.5rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 24px;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        animation: fadeInUp 0.8s ease-out forwards;
        animation-delay: calc(var(--delay));
        opacity: 0;
        backdrop-filter: blur(10px);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .feature-card:hover {
        transform: translateY(-12px) scale(1.02);
        background: rgba(255, 255, 255, 0.05);
    }

    .feature-card:hover .card-shine {
        opacity: 1;
        transform: translateX(100%);
    }

    .card-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        opacity: 0;
        transition: all 0.6s ease;
        pointer-events: none;
    }

    .card-content {
        position: relative;
        z-index: 1;
    }

    .feature-card h3 {
        font-family: "Outfit", sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        background: linear-gradient(
            135deg,
            #fff 0%,
            rgba(255, 255, 255, 0.7) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .feature-card p {
        font-family: "Inter", sans-serif;
        font-size: 0.95rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.65);
        margin: 0;
    }

    .card-border {
        position: absolute;
        inset: 0;
        border-radius: 24px;
        padding: 1px;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
        );
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    .feature-card:hover .card-border {
        opacity: 1;
    }

    /* CTA with Magnetic Effect */
    .cta-container {
        text-align: center;
        position: relative;
        opacity: 0;
        transform: scale(0.9);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .cta-container.visible {
        opacity: 1;
        transform: scale(1);
    }

    .cta-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 400px;
        background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.3) 0%,
            transparent 70%
        );
        filter: blur(60px);
        animation: pulse 3s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes pulse {
        0%,
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
        }
    }

    .cta-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 3.5rem;
        font-size: 1.15rem;
        font-weight: 700;
        font-family: "Outfit", sans-serif;
        background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        color: #fff;
        border-radius: 60px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(139, 92, 246, 0.4);
    }

    .cta-button:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 30px 80px rgba(139, 92, 246, 0.6);
        opacity: 1;
    }

    .cta-button:active {
        transform: translateY(-2px) scale(1.02);
    }

    .cta-arrow {
        font-size: 1.3rem;
        transition: transform 0.4s ease;
    }

    .cta-button:hover .cta-arrow {
        transform: translateX(8px);
    }

    .cta-ripple {
        position: absolute;
        inset: 0;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .cta-button:hover .cta-ripple {
        opacity: 1;
        animation: ripple 1.5s ease-out infinite;
    }

    @keyframes ripple {
        0% {
            transform: scale(0.8);
            opacity: 1;
        }
        100% {
            transform: scale(1.2);
            opacity: 0;
        }
    }

    .cta-note {
        margin-top: 1.5rem;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.5);
        font-family: "Inter", sans-serif;
        font-style: italic;
    }

    @media (max-width: 768px) {
        .section {
            padding: 6rem 0;
        }

        .reveal-content {
            margin-bottom: 3rem;
        }

        h2 {
            font-size: clamp(2.5rem, 10vw, 4rem);
        }

        .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            margin-bottom: 3rem;
        }

        .feature-card {
            padding: 2rem;
        }

        .cta-button {
            padding: 1.25rem 2.5rem;
            font-size: 1rem;
        }

        .gradient-orb {
            filter: blur(80px);
        }
    }
</style>
