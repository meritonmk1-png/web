<script>
    import { t } from "svelte-i18n";
    import { locale } from "svelte-i18n";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

    let scrolled = false;
    let mobileMenuOpen = false;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 20;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function setLanguage(lang) {
        if (!browser) return;
        locale.set(lang);
        localStorage.setItem("language", lang);
        mobileMenuOpen = false;
    }

    function closeMenu() {
        mobileMenuOpen = false;
    }

    function scrollToSection(e, id) {
        e.preventDefault();
        closeMenu();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
</script>

<nav class="navbar" class:scrolled>
    <div class="container">
        <a href="/" class="logo">meriton.selimi.tech/</a>

        <div class="nav-links" class:open={mobileMenuOpen}>
            <a href="#pricing" on:click={(e) => scrollToSection(e, "#pricing")}
                >{$t("nav.pricing")}</a
            >
            <a href="#contact" on:click={(e) => scrollToSection(e, "#contact")}
                >{$t("nav.contact")}</a
            >

            <div class="language-switcher">
                <button
                    class="lang-btn"
                    class:active={$locale === "en"}
                    on:click={() => setLanguage("en")}>EN</button
                >
                <button
                    class="lang-btn"
                    class:active={$locale === "de"}
                    on:click={() => setLanguage("de")}>DE</button
                >
            </div>
        </div>

        <a
            href="#contact"
            class="cta-btn"
            on:click={(e) => scrollToSection(e, "#contact")}
            >{$t("nav.start_project")}</a
        >

        <button
            class="mobile-toggle"
            on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        padding: 1.5rem 0;
        transition: all 0.3s ease;
        background: linear-gradient(
            to bottom,
            rgba(5, 5, 5, 0.95) 0%,
            rgba(5, 5, 5, 0.7) 100%
        );
        backdrop-filter: blur(10px);
    }

    .navbar.scrolled {
        background: rgba(5, 5, 5, 0.98);
        backdrop-filter: blur(20px);
        padding: 1rem 0;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
    }

    .container {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
    }

    .logo {
        font-family: "Fira Code", monospace;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        letter-spacing: -0.01em;
        transition: all 0.3s ease;
        flex-shrink: 0;
        position: relative;
    }

    .logo::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #8b5cf6, #ec4899);
        transition: width 0.3s ease;
    }

    .logo:hover {
        opacity: 1;
        color: #fff;
    }

    .logo:hover::after {
        width: 100%;
    }

    .nav-links {
        display: flex;
        gap: 2.5rem;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .nav-links a {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.95rem;
        font-weight: 500;
        transition: color 0.2s ease;
        position: relative;
        white-space: nowrap;
    }

    .nav-links a::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: #fff;
        transition: width 0.3s ease;
    }

    .nav-links a:hover {
        color: #fff;
        opacity: 1;
    }

    .nav-links a:hover::after {
        width: 100%;
    }

    .language-switcher {
        display: flex;
        gap: 0.5rem;
        padding: 0.25rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        flex-shrink: 0;
    }

    .lang-btn {
        padding: 0.5rem 1rem;
        background: transparent;
        color: rgba(255, 255, 255, 0.5);
        border: none;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: "Inter", sans-serif;
    }

    .lang-btn:hover {
        color: rgba(255, 255, 255, 0.8);
        background: rgba(255, 255, 255, 0.05);
    }

    .lang-btn.active {
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
    }

    .cta-btn {
        padding: 0.75rem 1.75rem;
        background: #fff;
        color: #000;
        border-radius: 8px;
        font-size: 0.95rem;
        font-weight: 600;
        transition: all 0.3s ease;
        flex-shrink: 0;
        white-space: nowrap;
    }

    .cta-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
        opacity: 1;
    }

    .mobile-toggle {
        display: none;
    }

    @media (max-width: 1024px) {
        .container {
            padding: 0 2rem;
        }
        .nav-links {
            gap: 2rem;
        }
        .nav-links a {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 1.5rem;
            gap: 1rem;
        }

        .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            max-width: 300px;
            height: 100vh;
            background: rgba(5, 5, 5, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 6rem 2rem;
            gap: 2rem;
            transition: right 0.3s ease;
            justify-content: flex-start;
            border-left: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-links.open {
            right: 0;
        }

        .nav-links a {
            font-size: 1.1rem;
            width: 100%;
        }

        .language-switcher {
            width: 100%;
            justify-content: center;
        }

        .mobile-toggle {
            display: flex;
            flex-direction: column;
            gap: 5px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1001;
            padding: 0.5rem;
        }

        .mobile-toggle span {
            width: 24px;
            height: 2px;
            background: #fff;
            transition: all 0.3s ease;
            border-radius: 2px;
        }

        .cta-btn {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 0 1rem;
        }
        .logo {
            font-size: 0.9rem;
        }
    }
</style>
