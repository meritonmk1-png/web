<script>
    import { t } from "svelte-i18n";

    let email = "";
    let subscribed = false;

    function handleSubscribe(e) {
        e.preventDefault();
        if (email) {
            // In production, this would connect to your email service
            console.log("Newsletter signup:", email);
            subscribed = true;
            email = "";
            setTimeout(() => (subscribed = false), 3000);
        }
    }
</script>

<footer class="footer">
    <div class="container">
        <!-- Newsletter Section -->
        <div class="newsletter-section">
            <div class="newsletter-content">
                <h3>Stay Updated</h3>
                <p>
                    Get tips on web development, AI automation, and exclusive
                    offers.
                </p>
            </div>
            <form class="newsletter-form" on:submit={handleSubscribe}>
                <input
                    type="email"
                    bind:value={email}
                    placeholder="Enter your email"
                    required
                    class="email-input"
                />
                <button type="submit" class="subscribe-btn">
                    {#if subscribed}
                        ✓ Subscribed
                    {:else}
                        Subscribe
                    {/if}
                </button>
            </form>
        </div>

        <!-- Main Footer Content -->
        <div class="footer-grid">
            <!-- Company Info -->
            <div class="footer-column">
                <div class="logo">
                    meriton.selimi.tech<span class="slash">/</span>
                </div>
                <p class="tagline">{$t("footer.built_with")}</p>
                <p class="description">
                    Professional web development and AI automation services.
                    Fast, reliable, and business-focused.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="footer-column">
                <h4>Quick Links</h4>
                <nav class="footer-links">
                    <a href="#services">{$t("nav.services")}</a>
                    <a href="#pricing">{$t("nav.pricing")}</a>
                    <a href="#contact">{$t("nav.contact")}</a>
                    <a href="#about">About</a>
                </nav>
            </div>

            <!-- Services -->
            <div class="footer-column">
                <h4>Services</h4>
                <nav class="footer-links">
                    <a href="#services">Web Development</a>
                    <a href="#services">AI Integration</a>
                    <a href="#services">SEO Optimization</a>
                    <a href="#pricing">Pricing</a>
                </nav>
            </div>

            <!-- Contact -->
            <div class="footer-column">
                <h4>Get in Touch</h4>
                <div class="contact-info">
                    <a href="mailto:meritonmk1@gmail.com" class="contact-link">
                        meritonmk1@gmail.com
                    </a>
                    <p class="location">📍 Based in Germany</p>
                    <p class="availability">
                        <span class="status-dot"></span>
                        Available for new projects
                    </p>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <p class="copyright">{$t("footer.copyright")}</p>
            <div class="footer-meta">
                <a href="#privacy">Privacy Policy</a>
                <span class="separator">•</span>
                <a href="#terms">Terms of Service</a>
                <span class="separator">•</span>
                <a href="#imprint">Imprint</a>
            </div>
        </div>
    </div>
</footer>

<style>
    .footer {
        background: linear-gradient(to bottom, #000, #0a0a0a);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.7);
        padding: 0;
        position: relative;
        overflow: hidden;
    }

    .footer::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 1200px;
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
    }

    .container {
        max-width: 1600px;
        margin: 0 auto;
        padding: 0 4rem;
    }

    /* Newsletter Section */
    .newsletter-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        padding: 4rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .newsletter-content h3 {
        font-size: 1.75rem;
        font-weight: 700;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    .newsletter-content p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.95rem;
        margin: 0;
    }

    .newsletter-form {
        display: flex;
        gap: 1rem;
        min-width: 400px;
    }

    .email-input {
        flex: 1;
        padding: 0.875rem 1.25rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        color: #fff;
        font-size: 0.95rem;
        transition: all 0.2s ease;
    }

    .email-input:focus {
        outline: none;
        border-color: #fff;
        background: rgba(255, 255, 255, 0.08);
    }

    .email-input::placeholder {
        color: rgba(255, 255, 255, 0.4);
    }

    .subscribe-btn {
        padding: 0.875rem 2rem;
        background: #fff;
        color: #000;
        border: none;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
    }

    .subscribe-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
    }

    /* Footer Grid */
    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1.5fr;
        gap: 4rem;
        padding: 4rem 0;
    }

    .footer-column h4 {
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        margin-bottom: 1.25rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .logo {
        font-family: "Courier New", monospace;
        font-size: 1.15rem;
        font-weight: 400;
        color: #fff;
        letter-spacing: 0.05em;
        margin-bottom: 0.75rem;
    }

    .slash {
        color: rgba(255, 255, 255, 0.4);
    }

    .tagline {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.5);
        margin: 0 0 1rem 0;
    }

    .description {
        font-size: 0.9rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
    }

    .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
    }

    .footer-links a {
        font-size: 0.95rem;
        color: rgba(255, 255, 255, 0.6);
        transition: color 0.2s ease;
        text-decoration: none;
    }

    .footer-links a:hover {
        color: #fff;
    }

    /* Contact Info */
    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .contact-link {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        font-size: 0.95rem;
        transition: color 0.2s ease;
    }

    .contact-link:hover {
        color: #fff;
    }

    .location {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.6);
        margin: 0;
    }

    .availability {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        margin: 0;
    }

    .status-dot {
        width: 8px;
        height: 8px;
        background: #4ade80;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }

    /* Bottom Bar */
    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .copyright {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.4);
        margin: 0;
    }

    .footer-meta {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .footer-meta a {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .footer-meta a:hover {
        color: #fff;
    }

    .separator {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.85rem;
    }

    /* Responsive */
    @media (max-width: 1024px) {
        .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .newsletter-form {
            min-width: 350px;
        }
    }

    @media (max-width: 768px) {
        .container {
            padding: 0 2rem;
        }

        .newsletter-section {
            flex-direction: column;
            align-items: flex-start;
            padding: 3rem 0;
        }

        .newsletter-form {
            min-width: 100%;
            flex-direction: column;
        }

        .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }

        .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .footer-meta {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
