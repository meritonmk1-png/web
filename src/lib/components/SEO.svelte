<script context="module">
    export const prerender = true;
</script>

<script>
    import { page } from "$app/stores";
    import { locale } from "svelte-i18n";

    export let title = "";
    export let description = "";
    export let keywords = "";
    export let image = "/og-image.jpg";
    export let type = "website";

    $: currentLocale = $locale || "en";
    $: siteUrl = "https://meriton.selimi.tech";
    $: currentUrl = `${siteUrl}${$page.url.pathname}`;

    // Enhanced SEO content per language
    const seoContent = {
        en: {
            siteName: "Meriton Selimi - Web Developer & AI Specialist",
            defaultTitle:
                "Professional Web Developer & AI Automation Expert Germany | Meriton Selimi",
            defaultDescription:
                "Expert SvelteKit web developer and AI automation specialist in Germany. Build fast, SEO-optimized websites with AI integration. Get your website in 7 days. Free consultation. €350-€950.",
            defaultKeywords:
                "web developer Germany, SvelteKit developer, AI automation expert, website development, AI integration, fast websites, SEO optimization, web development services Germany, cheap website developer, affordable web design, AI chatbot integration, website in 7 days, freelance web developer, Meriton Selimi",
            author: "Meriton Selimi",
            og: {
                locale: "en_US",
            },
        },
        de: {
            siteName: "Meriton Selimi - Webentwickler & KI-Experte",
            defaultTitle:
                "Professioneller Webentwickler & KI-Automatisierung Deutschland | Meriton Selimi",
            defaultDescription:
                "Experte für SvelteKit Webentwicklung und KI-Automatisierung in Deutschland. Schnelle, SEO-optimierte Websites mit KI-Integration. Website in 7 Tagen. Kostenlose Beratung. €350-€950.",
            defaultKeywords:
                "Webentwickler Deutschland, SvelteKit Entwickler, KI Automatisierung Experte, Website Entwicklung, KI Integration, schnelle Websites, SEO Optimierung, Webentwicklung Deutschland, günstiger Webentwickler, bezahlbares Webdesign, KI Chatbot Integration, Website in 7 Tagen, freiberuflicher Webentwickler, Meriton Selimi",
            author: "Meriton Selimi",
            og: {
                locale: "de_DE",
            },
        },
    };

    $: content = seoContent[currentLocale] || seoContent.en;
    $: pageTitle = title || content.defaultTitle;
    $: pageDescription = description || content.defaultDescription;
    $: pageKeywords = keywords || content.defaultKeywords;
</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>{pageTitle}</title>
    <meta name="title" content={pageTitle} />
    <meta name="description" content={pageDescription} />
    <meta name="keywords" content={pageKeywords} />
    <meta name="author" content={content.author} />
    <meta name="language" content={currentLocale} />

    <!-- Geographic targeting -->
    <meta name="geo.region" content="DE" />
    <meta name="geo.placename" content="Germany" />

    <!-- Mobile optimization -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#000000" />

    <!-- Canonical URL -->
    <link rel="canonical" href={currentUrl} />

    <!-- Alternate Language -->
    {#if currentLocale === "en"}
        <link rel="alternate" hreflang="de" href="{siteUrl}/de" />
        <link rel="alternate" hreflang="en" href="{siteUrl}/en" />
    {:else}
        <link rel="alternate" hreflang="en" href="{siteUrl}/en" />
        <link rel="alternate" hreflang="de" href="{siteUrl}/de" />
    {/if}
    <link rel="alternate" hreflang="x-default" href={siteUrl} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content={type} />
    <meta property="og:url" content={currentUrl} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content="{siteUrl}{image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content={content.og.locale} />
    <meta property="og:site_name" content={content.siteName} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={currentUrl} />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content="{siteUrl}{image}" />
    <meta name="twitter:creator" content="@meritonselimi" />

    <!-- Additional SEO -->
    <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <meta name="googlebot" content="index, follow" />
    <meta
        name="google-site-verification"
        content="l7mA3GcdH-05lkds1O5_PkNTfNSRbWKIWaWHhVQptl0"
    />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="general" />

    <!-- Structured Data - Organization -->
    {@html `
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "${content.siteName}",
            "description": "${pageDescription}",
            "url": "${siteUrl}",
            "email": "meritonmk1@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
            },
            "areaServed": ["DE", "EU", "Worldwide"],
            "priceRange": "€350-€950",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
                "https://www.instagram.com/meriton.selimi.tech/"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Launchpad Package",
                            "description": "5-page custom website, mobile responsive, basic SEO"
                        },
                        "price": "350",
                        "priceCurrency": "EUR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Growth Package",
                            "description": "Everything in Launchpad + CMS, Advanced SEO, AI Chatbot"
                        },
                        "price": "650",
                        "priceCurrency": "EUR"
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Scale Package",
                            "description": "Everything in Growth + Custom AI automation, Multi-language, Analytics"
                        },
                        "price": "950",
                        "priceCurrency": "EUR"
                    }
                ]
            }
        }
        <\/script>
    `}

    <!-- Structured Data - Person -->
    {@html `
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Meriton Selimi",
            "url": "${siteUrl}",
            "jobTitle": "Web Developer & AI Specialist",
            "worksFor": {
                "@type": "Organization",
                "name": "meriton.selimi.tech"
            },
            "sameAs": [
                "https://www.instagram.com/meriton.selimi.tech/"
            ],
            "knowsAbout": [
                "Web Development",
                "SvelteKit",
                "AI Automation",
                "SEO Optimization",
                "Chatbot Development"
            ]
        }
        <\/script>
    `}

    <!-- Structured Data - LocalBusiness -->
    {@html `
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "${content.siteName}",
            "image": "${siteUrl}${image}",
            "description": "${pageDescription}",
            "url": "${siteUrl}",
            "telephone": "",
            "email": "meritonmk1@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "DE"
            },
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            },
            "priceRange": "€350-€950"
        }
        <\/script>
    `}
</svelte:head>
