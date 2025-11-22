<script>
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";

    let mounted = false;
    let mouseX = 0;
    let mouseY = 0;

    onMount(() => {
        mounted = true;

        let frameId;
        const handleMouseMove = (e) => {
            if (frameId) return;

            frameId = requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                mouseX = x * 20;
                mouseY = y * 20;
                frameId = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    });
</script>

<section class="hero" id="home">
    <!-- Gradient Orbs -->
    <div class="orbs">
        <div
            class="orb orb-1"
            style="transform: translate({mouseX * -1.5}px, {mouseY * -1.5}px)"
        ></div>
        <div
            class="orb orb-2"
            style="transform: translate({mouseX * 2}px, {mouseY * 2}px)"
        ></div>
        <div
            class="orb orb-3"
            style="transform: translate({mouseX * -1}px, {mouseY * -1}px)"
        ></div>
        <div
            class="orb orb-4"
            style="transform: translate({mouseX * 1.5}px, {mouseY * 1.5}px)"
        ></div>
    </div>

    <!-- Grid Overlay -->
    <div class="grid-overlay"></div>

    <!-- Hero Content -->
    <div class="hero-content" class:visible={mounted}>
        <h1 class="glitch" data-text={$t("hero.headline")}>
            {$t("hero.headline")}
        </h1>

        <p class="lead">
            {$t("hero.subheadline")}
        </p>

        <div class="cta-group">
            <a href="#contact" class="btn-primary">
                <span>{$t("hero.cta_primary")}</span>
                <div class="arrow">→</div>
            </a>
        </div>

        <div class="eyebrow">{$t("value_prop.key_point")}</div>

        <div class="trust-indicators">
            <div class="indicator">
                <div class="icon">⚡</div>
                <span>7-Day Launch</span>
            </div>
            <div class="indicator">
                <div class="icon">🎯</div>
                <span>SEO Mastery</span>
            </div>
            <div class="indicator">
                <div class="icon">🤖</div>
                <span>AI Powered</span>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #050505;
        overflow: hidden;
        padding: 0 4rem;
        margin-top: 6rem; /* space for fixed navbar */
    }

    .orb-1 {
        width: 400px;
        height: 400px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
        );
        top: -10%;
        left: -10%;
    }

    .orb-2 {
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            rgba(100, 100, 255, 0.2) 0%,
            transparent 70%
        );
        bottom: -15%;
        right: -15%;
    }

    .orb-3 {
        width: 300px;
        height: 300px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.15) 0%,
            transparent 70%
        );
        top: 30%;
        right: 10%;
    }

    .orb-4 {
        width: 350px;
        height: 350px;
        background: radial-gradient(
            circle,
            rgba(150, 150, 255, 0.2) 0%,
            transparent 70%
        );
        bottom: 20%;
        left: 15%;
    }

    /* Removed complex morph animation to save CPU/GPU */

    /* Grid Overlay */
    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.015) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.015) 1px,
                transparent 1px
            );
        background-size: 100px 100px;
        mask-image: radial-gradient(
            circle at center,
            black 20%,
            transparent 70%
        );
        pointer-events: none;
    }

    /* Hero Content */
    .hero-content {
        position: relative;
        z-index: 10;
        max-width: 1000px;
        text-align: center;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .hero-content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .eyebrow {
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.3em;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 2rem;
        text-transform: uppercase;
    }

    h1 {
        font-size: clamp(2.5rem, 8vw, 6.5rem);
        font-weight: 800;
        color: #fff;
        margin-bottom: 2rem;
        line-height: 1.15;
        letter-spacing: -0.02em;
        position: relative;
        word-wrap: break-word;
        hyphens: auto;
    }

    /* Glitch Effect */
    .glitch {
        position: relative;
    }

    .glitch::before,
    .glitch::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .glitch:hover::before {
        animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
            infinite;
        color: #0ff;
        z-index: -1;
    }

    .glitch:hover::after {
        animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
        color: #f0f;
        z-index: -2;
    }

    @keyframes glitch-1 {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
        100% {
            transform: translate(0);
        }
    }

    @keyframes glitch-2 {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(2px, -2px);
        }
        40% {
            transform: translate(2px, 2px);
        }
        60% {
            transform: translate(-2px, -2px);
        }
        80% {
            transform: translate(-2px, 2px);
        }
        100% {
            transform: translate(0);
        }
    }

    .lead {
        font-size: clamp(1.1rem, 2vw, 1.4rem);
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.7);
        max-width: 700px;
        margin: 0 auto 3rem;
    }

    .lead strong {
        color: #fff;
        font-weight: 700;
    }

    /* CTAs */
    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-bottom: 4rem;
    }

    .btn-primary,
    .btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.2rem 3rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 4px;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        position: relative;
        overflow: hidden;
    }

    .btn-primary {
        background: #fff;
        color: #000;
    }

    .btn-primary .arrow {
        transition: transform 0.3s ease;
    }

    .btn-primary:hover .arrow {
        transform: translateX(5px);
    }

    .btn-primary:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(255, 255, 255, 0.2);
    }

    .btn-secondary {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: #fff;
    }

    .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-4px);
    }

    /* Trust Indicators */
    .trust-indicators {
        display: flex;
        justify-content: center;
        gap: 3rem;
    }

    .indicator {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.9rem;
        font-weight: 500;
    }

    .icon {
        font-size: 1.2rem;
    }

    /* Scroll Hint */
    .scroll-hint {
        position: absolute;
        bottom: 3rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.7rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
    }

    .line {
        width: 1px;
        height: 40px;
        background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.3)
        );
        animation: scroll-line 2s ease-in-out infinite;
    }

    @keyframes scroll-line {
        0%,
        100% {
            opacity: 0;
            transform: translateY(-10px);
        }
        50% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .hero {
            padding: 0 2rem;
        }
        .orb {
            filter: blur(60px);
        }
        .cta-group {
            flex-direction: column;
            gap: 1rem;
        }
        .btn-primary,
        .btn-secondary {
            width: 100%;
            justify-content: center;
        }
        .trust-indicators {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
