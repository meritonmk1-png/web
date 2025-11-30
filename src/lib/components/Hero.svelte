<script>
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";

    let mounted = false;
    let mouseX = 0;
    let mouseY = 0;

    // Reveal states
    let revealStates = {
        eyebrow: false,
        headline: false,
        lead: false,
        cta: false,
        indicators: false,
    };

    onMount(() => {
        // Staggered reveal
        setTimeout(() => {
            mounted = true;
            setTimeout(() => (revealStates.eyebrow = true), 200);
            setTimeout(() => (revealStates.headline = true), 500);
            setTimeout(() => (revealStates.lead = true), 900);
            setTimeout(() => (revealStates.cta = true), 1200);
            setTimeout(() => (revealStates.indicators = true), 1500);
        }, 100);

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
    <!-- Animated Gradient Background -->
    <div class="gradient-bg">
        <div
            class="gradient-orb orb-1"
            style="transform: translate({mouseX * -1}px, {mouseY * -1}px)"
        ></div>
        <div
            class="gradient-orb orb-2"
            style="transform: translate({mouseX * 1.5}px, {mouseY * 1.5}px)"
        ></div>
        <div
            class="gradient-orb orb-3"
            style="transform: translate({mouseX * -0.7}px, {mouseY * -0.7}px)"
        ></div>
    </div>

    <!-- Grid Overlay -->
    <div class="grid-overlay"></div>

    <!-- Hero Content -->
    <div class="hero-content">
        <div class="eyebrow" class:visible={revealStates.eyebrow}>
            {$t("value_prop.key_point")}
        </div>

        <h1
            class="glitch"
            class:visible={revealStates.headline}
            data-text={$t("hero.headline")}
        >
            {$t("hero.headline")}
        </h1>

        <p class="lead" class:visible={revealStates.lead}>
            {$t("hero.subheadline")}
        </p>

        <div class="cta-group" class:visible={revealStates.cta}>
            <a href="/start" class="btn-primary">
                <span>{$t("hero.cta_primary")}</span>
                <div class="arrow">→</div>
                <div class="btn-shine"></div>
            </a>
        </div>

        <div class="trust-indicators" class:visible={revealStates.indicators}>
            <div class="indicator">
                <div class="icon">⚡</div>
                <span>7-Day Launch</span>
            </div>
            <div class="indicator">
                <div class="icon">🎯</div>
                <span>SEO Optimized</span>
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
        min-height: 100dvh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
        overflow: hidden;
        padding: 80px 2rem 0;
        box-sizing: border-box;
    }

    /* Animated Gradient Background */
    .gradient-bg {
        position: absolute;
        inset: 0;
        opacity: 0.3;
        z-index: 0;
    }

    .gradient-orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
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
        top: -15%;
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
        bottom: -20%;
        right: -15%;
        animation-delay: 7s;
    }

    .orb-3 {
        width: 550px;
        height: 550px;
        background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.5) 0%,
            transparent 70%
        );
        top: 30%;
        right: 10%;
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

    /* Grid Overlay */
    .grid-overlay {
        position: absolute;
        inset: 0;
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.02) 1px,
                transparent 1px
            ),
            linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.02) 1px,
                transparent 1px
            );
        background-size: 80px 80px;
        mask-image: radial-gradient(
            circle at center,
            black 30%,
            transparent 70%
        );
        pointer-events: none;
        z-index: 1;
    }

    /* Hero Content */
    .hero-content {
        position: relative;
        z-index: 10;
        max-width: 1100px;
        text-align: center;
        padding: 2rem 0;
    }

    .eyebrow {
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.15em;
        color: rgba(255, 255, 255, 0.5);
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        font-family: "Inter", sans-serif;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .eyebrow.visible {
        opacity: 1;
        transform: translateY(0);
    }

    h1 {
        font-family: "Outfit", sans-serif;
        font-size: clamp(2.5rem, 7vw, 5.5rem);
        font-weight: 800;
        color: #fff;
        margin-bottom: 2rem;
        line-height: 1.1;
        letter-spacing: -0.03em;
        position: relative;
        word-wrap: break-word;
        text-wrap: balance;
        opacity: 0;
        transform: translateY(30px) scale(0.95);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    h1.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    /* Enhanced Glitch Effect */
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
        color: #8b5cf6;
        z-index: -1;
    }

    .glitch:hover::after {
        animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
            both infinite;
        color: #ec4899;
        z-index: -2;
    }

    @keyframes glitch-1 {
        0% {
            transform: translate(0);
            opacity: 0;
        }
        20% {
            transform: translate(-3px, 3px);
            opacity: 0.7;
        }
        40% {
            transform: translate(-3px, -3px);
            opacity: 0;
        }
        60% {
            transform: translate(3px, 3px);
            opacity: 0.7;
        }
        80% {
            transform: translate(3px, -3px);
            opacity: 0;
        }
        100% {
            transform: translate(0);
            opacity: 0;
        }
    }

    @keyframes glitch-2 {
        0% {
            transform: translate(0);
            opacity: 0;
        }
        20% {
            transform: translate(3px, -3px);
            opacity: 0.7;
        }
        40% {
            transform: translate(3px, 3px);
            opacity: 0;
        }
        60% {
            transform: translate(-3px, -3px);
            opacity: 0.7;
        }
        80% {
            transform: translate(-3px, 3px);
            opacity: 0;
        }
        100% {
            transform: translate(0);
            opacity: 0;
        }
    }

    .lead {
        font-family: "Inter", sans-serif;
        font-size: clamp(1.05rem, 2vw, 1.3rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.75);
        max-width: 750px;
        margin: 0 auto 3rem;
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .lead.visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Enhanced CTA */
    .cta-group {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(20px) scale(0.9);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .cta-group.visible {
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .btn-primary {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        padding: 1.25rem 3rem;
        font-size: 1.05rem;
        font-weight: 600;
        border-radius: 60px;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        overflow: hidden;
        background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
        color: #fff;
        font-family: "Inter", sans-serif;
        box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
    }

    .btn-primary .arrow {
        transition: transform 0.4s ease;
        font-size: 1.2rem;
    }

    .btn-primary:hover .arrow {
        transform: translateX(5px);
    }

    .btn-primary:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 30px 60px rgba(139, 92, 246, 0.5);
        opacity: 1;
    }

    .btn-shine {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: left 0.6s ease;
    }

    .btn-primary:hover .btn-shine {
        left: 100%;
    }

    /* Trust Indicators */
    .trust-indicators {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
        opacity: 0;
        transform: translateY(20px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .trust-indicators.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .indicator {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        padding: 0.75rem 1.5rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 50px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
    }

    .indicator:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
        color: #fff;
    }

    .icon {
        font-size: 1.3rem;
    }

    @media (max-width: 768px) {
        .hero {
            padding: 80px 1.5rem 0;
            min-height: 100dvh;
        }

        .hero-content {
            padding: 1rem 0;
        }

        .gradient-orb {
            filter: blur(70px);
        }

        .cta-group {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
        }

        .btn-primary {
            width: 100%;
            justify-content: center;
        }

        .trust-indicators {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
        }

        h1 {
            font-size: clamp(2.2rem, 9vw, 3.5rem);
        }

        .lead {
            font-size: 1.05rem;
        }
    }

    @media (max-width: 480px) {
        .eyebrow {
            font-size: 0.7rem;
        }

        .indicator {
            font-size: 0.9rem;
            padding: 0.6rem 1.2rem;
        }
    }
</style>
