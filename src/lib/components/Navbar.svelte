<script>
    import { onMount } from "svelte";

    let scrolled = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(
                    this.getAttribute("href"),
                );
                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        });

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    import { locale } from "svelte-i18n";

    function toggleLanguage() {
        const current = $locale;
        const next = current === "en" ? "de" : "en";
        locale.set(next);
        localStorage.setItem("language", next);
    }
</script>

<nav class="nav" class:scrolled>
    <div class="container">
        <a href="/" class="logo">
            meriton.selimi.tech<span class="slash">/</span>
        </a>

        <div class="nav-links">
            <!-- Enhanced Language Toggle -->
            <div class="lang-toggle-wrapper">
                <span class="globe-icon">🌐</span>
                <button
                    class="lang-option"
                    class:active={$locale === "en"}
                    on:click={() => {
                        locale.set("en");
                        localStorage.setItem("language", "en");
                    }}
                >
                    EN
                </button>
                <span class="separator">|</span>
                <button
                    class="lang-option"
                    class:active={$locale === "de"}
                    on:click={() => {
                        locale.set("de");
                        localStorage.setItem("language", "de");
                    }}
                >
                    DE
                </button>
            </div>
            <a href="#services">Services</a>
            <a href="#contact" class="cta-btn">Start Project</a>
        </div>
    </div>
</nav>

<style>
    .nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        padding: 1rem 0;
        transition: all 0.3s ease;
        background: rgba(5, 5, 5, 0.85); /* always slightly dark */
        backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav.scrolled {
        background: rgba(5, 5, 5, 0.95);
        backdrop-filter: blur(20px);
    }

    .lang-toggle-wrapper {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        margin-right: 1rem;
    }
    .globe-icon {
        font-size: 1.1rem;
    }
    .lang-option {
        background: rgba(255, 255, 255, 0.15);
        border: none;
        color: #fff;
        padding: 0.35rem 0.6rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.85rem;
        transition:
            background 0.2s,
            color 0.2s;
    }
    .lang-option:hover {
        background: rgba(255, 255, 255, 0.25);
    }
    .lang-option.active {
        background: #fff;
        color: #000;
    }
    .separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
    }

    .container {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-family: "Courier New", monospace;
        font-size: 1rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 0.05em;
        transition: color 0.3s ease;
    }

    .logo:hover {
        color: #fff;
    }

    .slash {
        color: rgba(255, 255, 255, 0.4);
    }

    .nav-links {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .nav-links a {
        font-size: 0.9rem;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.6);
        transition: color 0.2s ease;
        letter-spacing: 0.02em;
        position: relative;
    }

    .nav-links a:not(.cta-btn)::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        transition: width 0.3s ease;
    }

    .nav-links a:not(.cta-btn):hover::after {
        width: 100%;
    }

    .nav-links a:hover {
        color: #fff;
    }

    .cta-btn {
        padding: 0.6rem 1.5rem;
        background: #fff;
        color: #000 !important;
        border-radius: 4px;
        font-weight: 600;
        transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
    }

    .cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1.25rem;
        }
        .nav-links {
            gap: 1rem;
        }
        .nav-links a:not(.cta-btn) {
            display: none;
        }
        .logo {
            font-size: 0.85rem;
            z-index: 1001;
            max-width: 140px; /* Limit width to ensure button has space */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block; /* Required for ellipsis */
        }
        .cta-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
            white-space: nowrap;
        }
    }
</style>
