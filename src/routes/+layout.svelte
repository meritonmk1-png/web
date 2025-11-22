<script>
	import "../app.css";
	import "$lib/i18n"; // Initialize i18n
	import { onMount } from "svelte";
	import { locale, waitLocale } from "svelte-i18n";
	import "@fontsource/inter/400.css";
	import "@fontsource/inter/500.css";
	import "@fontsource/inter/600.css";
	import "@fontsource/inter/700.css";
	import "@fontsource/outfit/700.css";
	import "@fontsource/outfit/800.css";

	let ready = false;

	// Wait for locale to load before rendering
	waitLocale().then(() => {
		ready = true;
	});

	onMount(() => {
		// Detect language preference from localStorage if available
		const savedLang = localStorage.getItem("language");
		if (savedLang && (savedLang === "en" || savedLang === "de")) {
			locale.set(savedLang);
		}
	});
</script>

{#if ready}
	<slot />
{:else}
	<div
		style="display: flex; align-items: center; justify-content: center; min-height: 100vh; background: #050505; color: #fff;"
	>
		Loading...
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
