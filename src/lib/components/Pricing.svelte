<script>
    // VERSION: 2024-11-25-FIX-V2
    import { t } from "svelte-i18n";
    import { onMount } from "svelte";
    import { derived } from "svelte/store";

    let sectionRef;
    let visible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef) observer.observe(sectionRef);
        return () => observer.disconnect();
    });

    const plans = [
        {
            id: "launchpad",
            popular: false,
        },
        {
            id: "growth",
            popular: true,
        },
        {
            id: "scale",
            popular: false,
        },
    ];

    // Create a derived store for features to prevent duplication
    $: plansWithFeatures = plans.map((plan) => ({
        ...plan,
        features: $t(`pricing.${plan.id}.features`),
    }));
</script>

<section class="pricing-section" id="pricing" bind:this={sectionRef}>
    <div class="container">
        <div class="header" class:visible>
            <h2>{$t("pricing.headline")}</h2>
        </div>

        <div class="pricing-grid" class:visible>
            {#each plansWithFeatures as plan}
                <div class="pricing-card" class:popular={plan.popular}>
                    {#if plan.popular}
                        <div class="badge">
                            {$t(`pricing.${plan.id}.badge`)}
                        </div>
                    {/if}
                    <h3>{$t(`pricing.${plan.id}.title`)}</h3>
                    <div class="price">{$t(`pricing.${plan.id}.price`)}</div>
                    <p class="for">{$t(`pricing.${plan.id}.for`)}</p>
                    <ul class="features">
                        {#each plan.features as feature}
                            <li>
                                <span class="check">✓</span>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                    <div class="delivery">
                        {$t(`pricing.${plan.id}.delivery`)}
                    </div>
                    <a href="#contact" class="cta-btn">
                        {$t("nav.start_project")}
                    </a>
                </div>
            {/each}
        </div>

        <div class="addons" class:visible>
            <h3>Add-ons</h3>
            <div class="addon-list">
                <div class="addon-item">
                    <span class="addon-icon">🔧</span>
                    <span>{$t("pricing.addons.maintenance")}</span>
                </div>
                <div class="addon-item">
                    <span class="addon-icon">🤖</span>
                    <span>{$t("pricing.addons.custom_ai")}</span>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .pricing-section {
        padding: 8rem 0;
        background: #000;
        color: #fff;
        position: relative;
        overflow: hidden;
    }

    /* Animated Gradient Background */
    .pricing-section::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -25%;
        width: 800px;
        height: 800px;
        background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.15) 0%,
            transparent 70%
        );
        filter: blur(100px);
        animation: float 20s ease-in-out infinite;
        z-index: 0;
    }

    .pricing-section::after {
        content: "";
        position: absolute;
        bottom: -50%;
        right: -25%;
        width: 900px;
        height: 900px;
        background: radial-gradient(
            circle,
            rgba(236, 72, 153, 0.12) 0%,
            transparent 70%
        );
        filter: blur(100px);
        animation: float 25s ease-in-out infinite reverse;
        z-index: 0;
    }

    @keyframes float {
        0%,
        100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -30px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .header {
        text-align: center;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    h2 {
        font-family: "Outfit", sans-serif;
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: 800;
        margin-bottom: 1rem;
        line-height: 1.2;
    }

    .pricing-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        margin-bottom: 4rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.2s;
    }

    .pricing-grid.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .pricing-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        padding: 2.5rem;
        position: relative;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
        flex-direction: column;
        backdrop-filter: blur(10px);
        overflow: hidden;
    }

    .pricing-card::before {
        content: "";
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
        transition: left 0.6s ease;
        z-index: 1;
    }

    .pricing-card:hover::before {
        left: 100%;
    }

    .pricing-card:hover {
        transform: translateY(-12px) scale(1.02);
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    }

    .pricing-card.popular {
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 0 40px rgba(139, 92, 246, 0.2);
    }

    .pricing-card.popular:hover {
        border-color: rgba(139, 92, 246, 0.8);
        box-shadow: 0 30px 60px rgba(139, 92, 246, 0.4);
    }

    .badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        color: #000;
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    h3 {
        font-family: "Outfit", sans-serif;
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

    .price {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        font-family: "Outfit", sans-serif;
    }

    .for {
        color: rgba(255, 255, 255, 0.6);
        margin-bottom: 2rem;
        font-size: 0.95rem;
    }

    .features {
        list-style: none;
        padding: 0;
        margin: 0 0 2rem 0;
        flex-grow: 1;
    }

    .features li {
        padding: 0.75rem 0;
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .check {
        color: #4ade80;
        font-weight: 700;
        font-size: 1.2rem;
        flex-shrink: 0;
    }

    .delivery {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.85rem;
        margin-bottom: 1.5rem;
        font-style: italic;
        text-align: center;
    }

    .cta-btn {
        display: block;
        width: 100%;
        padding: 1rem 2rem;
        background: #fff;
        color: #000;
        border-radius: 8px;
        font-weight: 600;
        text-align: center;
        transition: all 0.3s ease;
    }

    .cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
    }

    .pricing-card.popular .cta-btn {
        background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
    }

    .addons {
        text-align: center;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.4s;
    }

    .addons.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .addons h3 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .addon-list {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .addon-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.8);
    }

    .addon-icon {
        font-size: 1.5rem;
    }

    @media (max-width: 768px) {
        .pricing-section {
            padding: 4rem 0;
        }

        .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .pricing-card {
            padding: 2rem;
        }

        .addon-list {
            flex-direction: column;
            gap: 1.5rem;
        }
    }
</style>
