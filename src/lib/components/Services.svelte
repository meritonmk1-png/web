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
</script>

<section class="section" bind:this={sectionRef} id="services">
    <div class="container">
        <div class="header" class:visible>
            <h2>
                <span class="gradient"
                    >{$t("pricing.headline").split(".")[0]}</span
                ><br />
                {$t("pricing.headline").split(".").slice(1).join(".")}
            </h2>
            <p>
                Choose your launch speed. Scale when ready. No hidden fees. No
                hourly rates.
            </p>
        </div>

        <div class="grid" class:visible>
            <div class="card" style="--delay: 0ms">
                <div class="card-header">
                    <h3>{$t("pricing.launchpad.title")}</h3>
                    <div class="price">{$t("pricing.launchpad.price")}</div>
                    <div class="timeline">
                        ⚡ {$t("pricing.launchpad.delivery")}
                    </div>
                </div>

                <ul class="features">
                    {#each $t("pricing.launchpad.features") as feature}
                        <li><span class="check">✓</span> {feature}</li>
                    {/each}
                </ul>

                <a href="/start" class="btn">
                    <span>{$t("nav.start_project")}</span>
                    <div class="arrow">→</div>
                </a>
            </div>

            <div class="card featured" style="--delay: 150ms">
                <div class="badge">{$t("pricing.growth.badge")}</div>
                <div class="card-header">
                    <h3>{$t("pricing.growth.title")}</h3>
                    <div class="price">{$t("pricing.growth.price")}</div>
                    <div class="timeline">
                        🚀 {$t("pricing.growth.delivery")}
                    </div>
                </div>

                <ul class="features">
                    {#each $t("pricing.growth.features") as feature}
                        <li><span class="check">✓</span> {feature}</li>
                    {/each}
                </ul>

                <a href="/start" class="btn primary">
                    <span>{$t("nav.start_project")}</span>
                    <div class="arrow">→</div>
                </a>
            </div>

            <div class="card" style="--delay: 300ms">
                <div class="card-header">
                    <h3>{$t("pricing.scale.title")}</h3>
                    <div class="price">{$t("pricing.scale.price")}</div>
                    <div class="timeline">
                        ♾️ {$t("pricing.scale.delivery")}
                    </div>
                </div>

                <ul class="features">
                    {#each $t("pricing.scale.features") as feature}
                        <li><span class="check">✓</span> {feature}</li>
                    {/each}
                </ul>

                <a href="/start" class="btn">
                    <span>{$t("nav.start_project")}</span>
                    <div class="arrow">→</div>
                </a>
            </div>
        </div>

        <!-- Add-ons Section -->
        <div class="addons" class:visible>
            <h3>Add-ons</h3>
            <p>{$t("pricing.addons.maintenance")}</p>
            <p>{$t("pricing.addons.custom_ai")}</p>
        </div>
    </div>
</section>

<style>
    .section {
        padding: 10rem 0;
        background: #050505;
        position: relative;
    }

    .section::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
                circle at 30% 20%,
                rgba(255, 255, 255, 0.02) 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 70% 80%,
                rgba(255, 255, 255, 0.02) 0%,
                transparent 50%
            );
        pointer-events: none;
    }

    .container {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 4rem;
        position: relative;
        z-index: 2;
    }

    .header {
        text-align: center;
        margin-bottom: 6rem;
        opacity: 0;
        transform: translateY(30px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header.visible {
        opacity: 1;
        transform: translateY(0);
    }

    h2 {
        font-size: clamp(3rem, 7vw, 6rem);
        font-weight: 800;
        color: #fff;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        letter-spacing: -0.03em;
    }

    .gradient {
        background: linear-gradient(
            135deg,
            #fff 0%,
            rgba(255, 255, 255, 0.5) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .header p {
        font-size: 1.2rem;
        color: rgba(255, 255, 255, 0.6);
        max-width: 600px;
        margin: 0 auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
    }

    .card {
        position: relative;
        padding: 3rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: var(--delay);
    }

    .grid.visible .card {
        opacity: 1;
        transform: translateY(0);
    }

    .card:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(255, 255, 255, 0.2);
        /* Reduced shadow spread and blur */
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    }

    .card.featured {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(255, 255, 255, 0.2);
        transform: scale(1.02);
    }

    .grid.visible .card.featured {
        transform: scale(1.02) translateY(0);
    }

    .card.featured:hover {
        transform: scale(1.02) translateY(-8px);
    }

    .badge {
        position: absolute;
        top: -12px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0.4rem 1.2rem;
        background: #fff;
        color: #000;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
    }

    .card-header {
        margin-bottom: 2.5rem;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 1rem;
    }

    .price {
        font-size: 3rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 0.5rem;
        letter-spacing: -0.02em;
    }

    .timeline {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 500;
    }

    .features {
        list-style: none;
        margin-bottom: auto;
        padding-bottom: 2.5rem;
    }

    .features li {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .check {
        color: rgba(255, 255, 255, 0.6);
        font-weight: 700;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.2rem 2rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .btn .arrow {
        transition: transform 0.3s ease;
    }

    .btn:hover .arrow {
        transform: translateX(5px);
    }

    .btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateX(4px);
    }

    .btn.primary {
        background: #fff;
        color: #000;
        border-color: #fff;
    }

    .btn.primary:hover {
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
    }

    .addons {
        margin-top: 4rem;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        transition-delay: 0.5s;
    }

    .addons.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .addons h3 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: #fff;
    }

    .addons p {
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
        .section {
            padding: 6rem 0;
        }
        .container {
            padding: 0 2rem;
        }
        .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
        .card.featured {
            transform: scale(1);
        }
        .grid.visible .card.featured {
            transform: scale(1) translateY(0);
        }
    }
</style>
