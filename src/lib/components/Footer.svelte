<script>
    import { t } from "svelte-i18n";

    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-main">
                <div class="logo-section">
                    <div class="logo">meriton.selimi.tech/</div>
                    <p class="tagline">{$t("footer.built_with")}</p>

                    <div class="footer-links">
                        <a href="#pricing">{$t("nav.pricing")}</a>
                        <a href="#contact">{$t("nav.contact")}</a>
                        <a href="mailto:meritonmk1@gmail.com">Email</a>
                    </div>
                </div>

                <div class="right-section">
                    <div class="social-links">
                        <a
                            href="https://www.instagram.com/meriton.selimi.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path
                                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                                ></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"
                                ></line>
                            </svg>
                        </a>
                    </div>

                    <!-- Circuit Board Design -->
                    <div class="circuit-board">
                        <svg
                            viewBox="0 0 200 150"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <!-- Circuit paths -->
                            <path
                                class="circuit-line"
                                d="M 10 20 L 60 20 L 60 50"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                class="circuit-line"
                                d="M 60 50 L 100 50 L 100 80"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                class="circuit-line"
                                d="M 100 80 L 150 80"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                class="circuit-line"
                                d="M 30 100 L 80 100 L 80 70"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                class="circuit-line"
                                d="M 150 30 L 120 30 L 120 60"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                class="circuit-line"
                                d="M 180 120 L 140 120 L 140 90"
                                stroke="rgba(255,255,255,0.2)"
                                stroke-width="2"
                                fill="none"
                            />

                            <!-- Animated glowing lines -->
                            <path
                                class="glow-line glow-line-1"
                                d="M 10 20 L 60 20 L 60 50"
                                stroke="rgba(255,255,255,0.6)"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                            />
                            <path
                                class="glow-line glow-line-2"
                                d="M 60 50 L 100 50 L 100 80"
                                stroke="rgba(255,255,255,0.6)"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                            />

                            <!-- Circuit nodes -->
                            <circle
                                class="circuit-node"
                                cx="60"
                                cy="20"
                                r="3"
                                fill="rgba(255,255,255,0.4)"
                            />
                            <circle
                                class="circuit-node pulse-1"
                                cx="60"
                                cy="50"
                                r="4"
                                fill="rgba(255,255,255,0.6)"
                            />
                            <circle
                                class="circuit-node"
                                cx="100"
                                cy="50"
                                r="3"
                                fill="rgba(255,255,255,0.4)"
                            />
                            <circle
                                class="circuit-node pulse-2"
                                cx="100"
                                cy="80"
                                r="4"
                                fill="rgba(255,255,255,0.6)"
                            />
                            <circle
                                class="circuit-node"
                                cx="120"
                                cy="30"
                                r="3"
                                fill="rgba(255,255,255,0.4)"
                            />
                            <circle
                                class="circuit-node"
                                cx="80"
                                cy="100"
                                r="3"
                                fill="rgba(255,255,255,0.4)"
                            />

                            <!-- Chip components -->
                            <rect
                                class="chip"
                                x="95"
                                y="75"
                                width="10"
                                height="10"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                stroke-width="1"
                            />
                            <rect
                                class="chip"
                                x="55"
                                y="45"
                                width="10"
                                height="10"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                stroke-width="1"
                            />
                            <rect
                                class="chip"
                                x="115"
                                y="25"
                                width="10"
                                height="10"
                                fill="none"
                                stroke="rgba(255,255,255,0.3)"
                                stroke-width="1"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">{$t("footer.copyright")}</p>
                <div class="legal-links">
                    <a href="/imprint">{$t("footer.links.imprint")}</a>
                    <a href="/privacy">{$t("footer.links.privacy")}</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: #000;
        color: rgba(255, 255, 255, 0.7);
        padding: 4rem 0 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .footer-main {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3rem;
        flex-wrap: wrap;
    }

    .logo-section {
        flex: 1;
        min-width: 250px;
    }

    .logo {
        font-family: "Fira Code", monospace;
        font-size: 1.1rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: 0.75rem;
        letter-spacing: -0.02em;
    }

    .tagline {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.5);
        font-family: "Inter", sans-serif;
        margin-bottom: 1.5rem;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }

    .footer-links a {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        font-weight: 500;
        transition: color 0.2s ease;
        font-family: "Inter", sans-serif;
        position: relative;
    }

    .footer-links a::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: #fff;
        transition: width 0.3s ease;
    }

    .footer-links a:hover {
        color: #fff;
        opacity: 1;
    }

    .footer-links a:hover::after {
        width: 100%;
    }

    .right-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-end;
    }

    .social-links {
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
    }

    .social-links a {
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .social-links a:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }

    .social-links svg {
        width: 20px;
        height: 20px;
    }

    /* Circuit Board Styles */
    .circuit-board {
        width: 200px;
        height: 150px;
        opacity: 0.6;
    }

    .circuit-board svg {
        width: 100%;
        height: 100%;
    }

    .glow-line {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: draw-line 3s ease-in-out infinite;
    }

    .glow-line-1 {
        animation-delay: 0s;
    }

    .glow-line-2 {
        animation-delay: 1.5s;
    }

    @keyframes draw-line {
        0%,
        100% {
            stroke-dashoffset: 100;
            opacity: 0;
        }
        50% {
            stroke-dashoffset: 0;
            opacity: 1;
        }
    }

    .pulse-1,
    .pulse-2 {
        animation: pulse-node 2s ease-in-out infinite;
    }

    .pulse-2 {
        animation-delay: 1s;
    }

    @keyframes pulse-node {
        0%,
        100% {
            opacity: 0.4;
            r: 3;
        }
        50% {
            opacity: 1;
            r: 5;
        }
    }

    .chip {
        animation: chip-glow 3s ease-in-out infinite;
    }

    @keyframes chip-glow {
        0%,
        100% {
            stroke: rgba(255, 255, 255, 0.2);
        }
        50% {
            stroke: rgba(255, 255, 255, 0.6);
        }
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        gap: 2rem;
        flex-wrap: wrap;
    }

    .copyright {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        margin: 0;
        font-family: "Inter", sans-serif;
    }

    .legal-links {
        display: flex;
        gap: 2rem;
    }

    .legal-links a {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        transition: color 0.2s ease;
        font-family: "Inter", sans-serif;
    }

    .legal-links a:hover {
        color: rgba(255, 255, 255, 0.8);
        opacity: 1;
    }

    @media (max-width: 768px) {
        .footer {
            padding: 3rem 0 1.5rem;
        }

        .footer-main {
            flex-direction: column;
            gap: 2rem;
        }

        .right-section {
            align-items: flex-start;
        }

        .circuit-board {
            width: 150px;
            height: 112px;
        }

        .footer-links {
            gap: 1.25rem;
        }

        .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
        }

        .legal-links {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
