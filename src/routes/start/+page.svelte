<script>
    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";
    import { t } from "svelte-i18n";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    let step = 1;
    let direction = 1;
    let form = {
        name: "",
        email: "",
        services: [],
        budget: "",
        description: "",
    };
    let errors = {};
    let isSubmitting = false;

    const services = [
        { id: "web_design" },
        { id: "development" },
        { id: "seo" },
        { id: "ecommerce" },
        { id: "branding" },
        { id: "other" },
    ];

    const budgets = [
        { id: "small" },
        { id: "medium" },
        { id: "large" },
        { id: "enterprise" },
    ];

    function nextStep() {
        if (validateStep(step)) {
            direction = 1;
            step++;
        }
    }

    function prevStep() {
        direction = -1;
        step--;
    }

    function toggleService(id) {
        if (form.services.includes(id)) {
            form.services = form.services.filter((s) => s !== id);
        } else {
            form.services = [...form.services, id];
        }
        if (errors.services && form.services.length > 0) {
            errors.services = null;
        }
    }

    function validateStep(currentStep) {
        errors = {};
        if (currentStep === 1) {
            if (!form.name.trim()) errors.name = true;
            if (
                !form.email.trim() ||
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
            )
                errors.email = true;
        }
        if (currentStep === 2) {
            if (form.services.length === 0) errors.services = true;
            if (!form.budget) errors.budget = true;
        }
        return Object.keys(errors).length === 0;
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key]),
            )
            .join("&");
    };

    async function handleSubmit() {
        if (isSubmitting) return;
        isSubmitting = true;

        try {
            const submissionData = {
                ...form,
                services: form.services.join(", "),
                "form-name": "project-inquiry",
            };

            await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode(submissionData),
            });

            direction = 1;
            step = 5; // Success step
        } catch (error) {
            console.error("Submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            isSubmitting = false;
        }
    }
</script>

<!-- Hidden Netlify Form -->
<form name="project-inquiry" netlify netlify-honeypot="bot-field" hidden>
    <input type="text" name="name" />
    <input type="email" name="email" />
    <input type="text" name="services" />
    <input type="text" name="budget" />
    <textarea name="description"></textarea>
</form>

<div class="page-wrapper">
    <Navbar />

    <main class="funnel-container">
        <div class="orbs">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
        </div>

        <div class="content-wrapper">
            {#if step < 5}
                <div class="progress-bar">
                    <div
                        class="progress"
                        style="width: {(step / 4) * 100}%"
                    ></div>
                </div>

                <div class="step-indicator">
                    Step {step} of 4
                </div>
            {/if}

            <div class="form-container">
                {#key step}
                    <div
                        class="step-content"
                        in:fly={{
                            x: 50 * direction,
                            duration: 400,
                            delay: 200,
                        }}
                        out:fly={{ x: -50 * direction, duration: 400 }}
                    >
                        {#if step === 1}
                            <h1 class="title">{$t("funnel.step1.title")}</h1>
                            <p class="subtitle">
                                {$t("funnel.step1.subtitle")}
                            </p>

                            <div class="input-group">
                                <label for="name"
                                    >{$t("funnel.step1.name_label")}</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    bind:value={form.name}
                                    placeholder="John Doe"
                                    class="input-field"
                                    class:error={errors.name}
                                    on:input={() => (errors.name = null)}
                                />
                            </div>

                            <div class="input-group">
                                <label for="email"
                                    >{$t("funnel.step1.email_label")}</label
                                >
                                <input
                                    type="email"
                                    id="email"
                                    bind:value={form.email}
                                    placeholder="john@example.com"
                                    class="input-field"
                                    class:error={errors.email}
                                    on:input={() => (errors.email = null)}
                                />
                            </div>
                        {:else if step === 2}
                            <h1 class="title">{$t("funnel.step2.title")}</h1>
                            <p class="subtitle">
                                {$t("funnel.step2.subtitle")}
                            </p>

                            <div
                                class="options-grid"
                                class:error-border={errors.services}
                            >
                                {#each services as service}
                                    <button
                                        class="option-card"
                                        class:selected={form.services.includes(
                                            service.id,
                                        )}
                                        on:click={() =>
                                            toggleService(service.id)}
                                    >
                                        {$t(
                                            `funnel.step2.services.${service.id}`,
                                        )}
                                    </button>
                                {/each}
                            </div>

                            <h2 class="section-title">
                                {$t("funnel.step2.budget_title")}
                            </h2>
                            <div
                                class="options-grid small"
                                class:error-border={errors.budget}
                            >
                                {#each budgets as budget}
                                    <button
                                        class="option-card"
                                        class:selected={form.budget ===
                                            budget.id}
                                        on:click={() => {
                                            form.budget = budget.id;
                                            errors.budget = null;
                                        }}
                                    >
                                        {$t(
                                            `funnel.step2.budgets.${budget.id}`,
                                        )}
                                    </button>
                                {/each}
                            </div>
                        {:else if step === 3}
                            <h1 class="title">{$t("funnel.step3.title")}</h1>
                            <p class="subtitle">
                                {$t("funnel.step3.subtitle")}
                            </p>

                            <div class="input-group">
                                <textarea
                                    bind:value={form.description}
                                    placeholder={$t("funnel.step3.placeholder")}
                                    class="input-field textarea"
                                    rows="6"
                                ></textarea>
                            </div>
                        {:else if step === 4}
                            <h1 class="title">{$t("funnel.step4.title")}</h1>
                            <p class="subtitle">
                                {$t("funnel.step4.subtitle")}
                            </p>

                            <div class="review-card">
                                <div class="review-item">
                                    <span class="label"
                                        >{$t("funnel.step4.labels.name")}</span
                                    >
                                    <span class="value">{form.name}</span>
                                </div>
                                <div class="review-item">
                                    <span class="label"
                                        >{$t("funnel.step4.labels.email")}</span
                                    >
                                    <span class="value">{form.email}</span>
                                </div>
                                <div class="review-item">
                                    <span class="label"
                                        >{$t(
                                            "funnel.step4.labels.services",
                                        )}</span
                                    >
                                    <span class="value">
                                        {form.services
                                            .map((id) =>
                                                $t(
                                                    `funnel.step2.services.${id}`,
                                                ),
                                            )
                                            .join(", ")}
                                    </span>
                                </div>
                                <div class="review-item">
                                    <span class="label"
                                        >{$t(
                                            "funnel.step4.labels.budget",
                                        )}</span
                                    >
                                    <span class="value">
                                        {form.budget
                                            ? $t(
                                                  `funnel.step2.budgets.${form.budget}`,
                                              )
                                            : "Not specified"}
                                    </span>
                                </div>
                                {#if form.description}
                                    <div class="review-item full">
                                        <span class="label"
                                            >{$t(
                                                "funnel.step4.labels.description",
                                            )}</span
                                        >
                                        <span class="value"
                                            >{form.description}</span
                                        >
                                    </div>
                                {/if}
                            </div>
                        {:else if step === 5}
                            <div class="success-message">
                                <div class="success-icon">
                                    <svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                        ></path>
                                        <polyline points="22 4 12 14.01 9 11.01"
                                        ></polyline>
                                    </svg>
                                </div>
                                <h1 class="title">
                                    {$t("funnel.success.title")}
                                </h1>
                                <p class="subtitle">
                                    {$t("funnel.success.subtitle", {
                                        values: { name: form.name },
                                    })}
                                </p>
                                <a href="/" class="home-link"
                                    >{$t("funnel.success.return")}</a
                                >
                            </div>
                        {/if}
                    </div>
                {/key}
            </div>

            <div class="controls">
                {#if step > 1 && step < 5}
                    <button class="btn-secondary" on:click={prevStep}
                        >{$t("funnel.buttons.back")}</button
                    >
                {:else if step < 5}
                    <div></div>
                    <!-- Spacer -->
                {/if}

                {#if step < 4}
                    <button
                        class="btn-primary"
                        on:click={nextStep}
                        disabled={!validateStep(step)}
                    >
                        {$t("funnel.buttons.next")}
                    </button>
                {:else if step === 4}
                    <button
                        class="btn-primary"
                        on:click={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Sending..."
                            : $t("funnel.buttons.submit")}
                    </button>
                {/if}
            </div>
        </div>
    </main>
</div>

<style>
    .page-wrapper {
        min-height: 100vh;
        background: var(--bg-dark);
        color: var(--text-dark);
        position: relative;
        overflow-x: hidden;
    }

    .funnel-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8rem 2rem 4rem;
        position: relative;
        z-index: 1;
    }

    .content-wrapper {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        position: relative;
    }

    .progress-bar {
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        margin-bottom: 1rem;
        overflow: hidden;
    }

    .progress {
        height: 100%;
        background: #fff;
        transition: width 0.3s ease;
    }

    .step-indicator {
        text-align: right;
        font-size: 0.875rem;
        color: var(--text-muted);
        margin-bottom: 3rem;
    }

    .form-container {
        position: relative;
        min-height: 400px;
    }

    .step-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .title {
        font-size: clamp(2rem, 4vw, 3rem);
        margin-bottom: 1rem;
        background: linear-gradient(to right, #fff, #aaa);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        font-size: 1.125rem;
        color: var(--text-muted);
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: 1.5rem;
        margin: 2rem 0 1rem;
        color: #fff;
    }

    .input-group {
        margin-bottom: 2rem;
    }

    label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        color: var(--text-muted);
    }

    .input-field {
        width: 100%;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: #fff;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .input-field:focus {
        outline: none;
        border-color: #fff;
        background: rgba(255, 255, 255, 0.1);
    }

    .input-field.error {
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.1);
    }

    .textarea {
        resize: vertical;
        min-height: 150px;
    }

    .options-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 1rem;
        padding: 4px;
        border-radius: 12px;
        border: 1px solid transparent;
    }

    .options-grid.error-border {
        border-color: #ef4444;
        background: rgba(239, 68, 68, 0.05);
    }

    .options-grid.small {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .option-card {
        padding: 1rem;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: var(--text-muted);
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: center;
        font-weight: 500;
    }

    .option-card:hover {
        background: rgba(255, 255, 255, 0.08);
    }

    .option-card.selected {
        background: #fff;
        color: #000;
        border-color: #fff;
    }

    .review-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 2rem;
    }

    .review-item {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .review-item:last-child {
        border-bottom: none;
    }

    .review-item.full {
        flex-direction: column;
        gap: 0.5rem;
    }

    .review-item .label {
        color: var(--text-muted);
        font-size: 0.875rem;
    }

    .review-item .value {
        color: #fff;
        font-weight: 500;
        text-align: right;
    }

    .review-item.full .value {
        text-align: left;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 4rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .btn-primary,
    .btn-secondary {
        padding: 1rem 2rem;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-primary {
        background: #fff;
        color: #000;
        border: none;
    }

    .btn-primary:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
    }

    .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-secondary {
        background: transparent;
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-secondary:hover {
        border-color: #fff;
    }

    .success-message {
        text-align: center;
        padding: 4rem 0;
    }

    .success-icon {
        width: 80px;
        height: 80px;
        background: rgba(34, 197, 94, 0.1);
        color: #22c55e;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 2rem;
    }

    .home-link {
        display: inline-block;
        margin-top: 2rem;
        color: #fff;
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    /* Orbs Background */
    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(100px);
        opacity: 0.2;
        z-index: -1;
    }

    .orb-1 {
        top: -10%;
        left: -10%;
        width: 600px;
        height: 600px;
        background: #4f46e5;
    }

    .orb-2 {
        bottom: -10%;
        right: -10%;
        width: 500px;
        height: 500px;
        background: #ec4899;
    }

    @media (max-width: 768px) {
        .funnel-container {
            padding: 6rem 1rem 2rem;
        }

        .title {
            font-size: 2rem;
        }

        .controls {
            flex-direction: column-reverse;
            gap: 1rem;
        }

        .btn-primary,
        .btn-secondary {
            width: 100%;
        }
    }
</style>
