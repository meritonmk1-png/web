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

    // SEO content per language
    const seoContent = {
        en: {
            siteName: "Meriton Selimi - Web Developer & AI Specialist",
            defaultTitle:
                "AI-Driven Websites | SvelteKit Developer | Meriton Selimi",
            defaultDescription:
                "Professional web development and AI automation services. Fast websites, smart AI tools, and transparent pricing. Based in Germany.",
            defaultKeywords:
                "SvelteKit developer, web development Germany, AI automation, fast websites, SEO optimization",
            author: "Meriton Selimi",
            og: {
                locale: "en_US",
            },
        },
        de: {
            siteName: "Meriton Selimi - Webentwickler & KI-Experte",
            defaultTitle:
                "KI-gestützte Websites | SvelteKit Entwickler | Meriton Selimi",
            defaultDescription:
                "Professionelle Webentwicklung und KI-Automatisierung. Schnelle Websites, intelligente KI-Tools und transparente Preise. Aus Deutschland.",
            defaultKeywords:
                "SvelteKit Entwickler, Webentwicklung Deutschland, KI-Automatisierung, schnelle Websites, SEO Optimierung",
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
    <meta property="og:locale" content={content.og.locale} />
    <meta property="og:site_name" content={content.siteName} />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={currentUrl} />
    <meta property="twitter:title" content={pageTitle} />
    <meta property="twitter:description" content={pageDescription} />
    <meta property="twitter:image" content="{siteUrl}{image}" />

    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
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
            "telephone": "",
            "email": "meritonmk1@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "DE"
            },
            "areaServed": ["DE", "EU"],
            "priceRange": "€€",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": []
        }
        <\/script>
    `}
</svelte:head>
