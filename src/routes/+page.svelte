<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import ProblemSolution from "$lib/components/ProblemSolution.svelte";
    import WhyMe from "$lib/components/WhyMe.svelte";
    import Portfolio from "$lib/components/Portfolio.svelte";
    import Pricing from "$lib/components/Pricing.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import SEO from "$lib/components/SEO.svelte";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</svelte:head>

<!-- SEO Meta Tags -->
<SEO />

<Navbar />
<Hero />
<ProblemSolution />
<WhyMe />
<Portfolio />
<Pricing />
<Contact />
<Footer />
