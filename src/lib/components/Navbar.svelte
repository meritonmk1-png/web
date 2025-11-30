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
            <a href="/blog">{$t("nav.blog")}</a>

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

        <div class="tech-stack">
            <div class="tech-icon" title="SvelteKit">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20.68 4.59a8.5 8.5 0 0 0-11.8-1.18l-5.5 4.28a8.5 8.5 0 0 0 1.06 14.27 8.5 8.5 0 0 0 11.8 1.18l5.5-4.28a8.5 8.5 0 0 0-1.06-14.27z"
                        fill="#FF3E00"
                    />
                    <path
                        d="M10.5 17.5a3.5 3.5 0 0 0 6.06-2.4 3.5 3.5 0 0 0-1.06-2.5l-5-5a3.5 3.5 0 0 0-6.06 2.4 3.5 3.5 0 0 0 1.06 2.5l5 5z"
                        fill="white"
                    />
                </svg>
            </div>
            <div class="tech-icon" title="Next.js">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 0 1-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 0 0 4.7344 7.1706l1.9002 2.8782.0971-.0633c.8763-.5536 1.8034-1.3616 2.4547-2.1402 1.0893-1.3015 1.8196-2.8576 2.1462-4.5732.0961-.6591.1078-.8538.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"
                    />
                </svg>
            </div>
            <div class="tech-icon" title="WordPress">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12.158 12.786L9.46 20.625c.806.237 1.657.366 2.54.366 1.047 0 2.051-.18 2.986-.51-.024-.038-.046-.078-.065-.12l-2.76-7.575zm-5.97-3.12c0-.93.144-1.804.4-2.64.69-1.822 2.07-3.31 3.85-4.07.47-.2.97-.35 1.49-.44.39-.07.79-.1 1.2-.1.41 0 .81.03 1.2.1.52.09 1.02.24 1.49.44 1.78.76 3.16 2.248 3.85 4.07.256.836.4 1.71.4 2.64 0 .93-.144 1.804-.4 2.64-.69 1.822-2.07 3.31-3.85 4.07-.47.2-.97.35-1.49.44-.39.07-.79.1-1.2.1-.41 0-.81-.03-1.2-.1-.52-.09-1.02-.24-1.49-.44-1.78-.76-3.16-2.248-3.85-4.07-.256-.836-.4-1.71-.4-2.64zm8.45 7.57l2.76-7.575c.24-.623.32-1.12.32-1.562 0-.403-.13-.686-.257-.88-.13-.195-.257-.326-.257-.506 0-.216.173-.417.432-.417h.022c-1.046-.96-2.448-1.548-3.997-1.548-2.065 0-3.88.96-5.04 2.448.142-.007.276-.01.39-.01.632 0 1.61-.077 1.61-.077.326-.02.365.46.04.5 0 0-.328.038-.693.058l2.204 6.554 1.324-3.97-1.002-2.584c-.326-.02-.635-.058-.635-.058-.326-.02-.288-.52.038-.5 0 0 .99.077 1.58.077.632 0 1.61-.077 1.61-.077.326-.02.365.46.04.5 0 0-.328.038-.693.058l2.188 6.505.604-2.018z"
                    />
                </svg>
            </div>
            <div class="tech-icon" title="Tailwind CSS">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                        fill="#06B6D4"
                    />
                </svg>
            </div>
        </div>

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

    .tech-stack {
        display: flex;
        gap: 0.75rem;
        align-items: center;
        padding: 0.5rem 1rem;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        flex-shrink: 0;
    }

    .tech-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        opacity: 0.6;
    }

    .tech-icon svg {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
    }

    .tech-icon:hover {
        opacity: 1;
        transform: translateY(-2px) scale(1.1);
    }

    .tech-icon[title="Next.js"] svg {
        color: #fff;
    }

    .tech-icon[title="WordPress"] svg {
        color: #21759b;
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
        .tech-stack {
            display: none;
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
