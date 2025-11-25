<script>
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";

    let contactVisible = false;
    let contactRef;

    onMount(() => {
        if (contactRef) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        contactVisible = true;
                    }
                },
                { threshold: 0.3 },
            );

            observer.observe(contactRef);
            return () => observer.disconnect();
        }
    });
</script>

<section class="contact" id="contact" bind:this={contactRef}>
    <div class="container">
        <div class="content" class:visible={contactVisible}>
            <div class="badge">LET'S WORK</div>

            <h2>
                Ready to <span class="gradient">Defy Gravity</span>?
            </h2>

            <p class="subtitle">
                Stop dreaming. Start launching. Get your free proposal in 24
                hours.
            </p>

            <div class="cta-wrapper">
                <a href="mailto:meritonmk1@gmail.com" class="cta-button">
                    <span class="shimmer"></span>
                    <span class="text">{$t("nav.start_project")}</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M4 10h12M12 6l4 4-4 4"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </div>

            <div class="availability">
                <div class="status-dot"></div>
                <span
                    >Accepting new projects for {new Date().toLocaleString(
                        "default",
                        { month: "long" },
                    )}
                    {new Date().getFullYear()}</span
                >
            </div>
        </div>
    </div>
</section>

<style>
    .contact {
        padding: 12rem 0;
        background: #fff;
        position: relative;
        overflow: hidden;
    }

    .contact::before {
        content: "";
        position: absolute;
        inset: 0;
        background: radial-gradient(
                circle at 20% 30%,
                rgba(0, 0, 0, 0.02) 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 80% 70%,
                rgba(0, 0, 0, 0.02) 0%,
                transparent 50%
            );
        pointer-events: none;
    }

    .contact .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 4rem;
        position: relative;
        z-index: 2;
    }

    .content {
        text-align: center;
        opacity: 0;
        transform: translateY(40px);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .content.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .badge {
        display: inline-block;
        padding: 0.4rem 1.2rem;
        background: #000;
        color: #fff;
        border-radius: 20px;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.15em;
        margin-bottom: 2rem;
    }

    .contact h2 {
        font-size: clamp(3rem, 8vw, 6rem);
        font-weight: 800;
        color: #000;
        margin-bottom: 1.5rem;
        line-height: 1.1;
        letter-spacing: -0.03em;
    }

    .gradient {
        background: linear-gradient(135deg, #000 0%, rgba(0, 0, 0, 0.4) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        font-size: 1.3rem;
        color: #666;
        margin-bottom: 4rem;
        line-height: 1.6;
    }

    .cta-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 3rem;
    }

    .cta-button {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1.2rem 2.5rem;
        background: #000;
        color: #fff;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }

    .cta-button::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
        );
        transform: translateX(-100%);
        transition: transform 0.6s ease;
    }

    .cta-button:hover::before {
        transform: translateX(100%);
    }

    .shimmer {
        position: absolute;
        inset: -2px;
        background: linear-gradient(
            135deg,
            transparent 20%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 80%
        );
        opacity: 0;
        animation: shimmer 3s infinite;
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%) skewX(-15deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateX(200%) skewX(-15deg);
            opacity: 0;
        }
    }

    .cta-button .text {
        position: relative;
        z-index: 1;
    }

    .cta-button svg {
        position: relative;
        z-index: 1;
        transition: transform 0.3s ease;
    }

    .cta-button:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .cta-button:hover svg {
        transform: translateX(5px);
    }

    .availability {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem;
        background: rgba(0, 0, 0, 0.03);
        border-radius: 30px;
        color: #666;
        font-size: 0.9rem;
        font-weight: 500;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background: #22c55e;
        border-radius: 50%;
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
        }
        50% {
            opacity: 0.8;
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
        }
    }

    @media (max-width: 768px) {
        .contact {
            padding: 6rem 0;
        }
        .contact .container {
            padding: 0 2rem;
        }
    }
</style>
