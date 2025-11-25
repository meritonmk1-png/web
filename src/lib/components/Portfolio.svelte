<script>
    import { onMount } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { t } from "svelte-i18n";

    // Import videos
    import vid1 from "$lib/assets/24.11.2025_23.49.57_REC.mp4";
    import vid2 from "$lib/assets/24.11.2025_23.55.25_REC.mp4";
    import vid3 from "$lib/assets/24.11.2025_23.56.47_REC.mp4";
    import vid4 from "$lib/assets/24.11.2025_23.59.29_REC.mp4";
    import vid5 from "$lib/assets/25.11.2025_00.03.45_REC.mp4";

    const projects = [
        {
            id: 1,
            title: "app design",
            category: "app design & development",
            src: vid1,
            description:
                "complete app design & development of a mobile app for a startup called NutriGenius",
        },
        {
            id: 2,
            title: "website",
            category: "web design",
            src: vid2,
            description: "fresh website design for a consulting company",
        },
        {
            id: 3,
            title: "freelancer website",
            category: "web design",
            src: vid3,
            description:
                "Responsive and animated landing page for a freelancer",
        },
        {
            id: 4,
            title: "branding",
            category: "personal page",
            src: vid4,
            description:
                "Digital brand identity implementation for a freelancer",
        },
        {
            id: 5,
            title: "app development",
            category: "app development",
            src: vid5,
            description:
                "fully working app development of a mobile and web app",
        },
    ];

    // Track video elements and playing states for each project
    let videoElements = {};
    let playingStates = {};
    let hoveredProject = null;

    // Initialize playing states
    projects.forEach((project) => {
        playingStates[project.id] = false;
    });

    function togglePlay(projectId) {
        const video = videoElements[projectId];
        if (video) {
            if (video.paused) {
                video.play().catch((e) => console.log("Autoplay prevented", e));
                playingStates[projectId] = true;
            } else {
                video.pause();
                playingStates[projectId] = false;
            }
        }
    }

    function handleMouseEnter(projectId) {
        hoveredProject = projectId;
        const video = videoElements[projectId];
        if (video && video.paused) {
            video.play().catch((e) => console.log("Autoplay prevented", e));
        }
    }

    function handleMouseLeave(projectId) {
        hoveredProject = null;
        const video = videoElements[projectId];
        if (video && !playingStates[projectId]) {
            video.pause();
            video.currentTime = 0;
        }
    }
</script>

<section
    class="portfolio-section py-16 md:py-24 relative overflow-hidden"
    id="portfolio"
>
    <!-- Elegant Background Gradient Orbs -->
    <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none"
    >
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16" in:fade={{ duration: 600 }}>
            <div class="inline-block mb-4">
                <span class="section-badge">{$t("portfolio.badge")}</span>
            </div>
            <h2 class="section-title">{$t("portfolio.headline")}</h2>
            <p class="section-description">
                {$t("portfolio.description")}
            </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid">
            {#each projects as project, index (project.id)}
                <div
                    class="project-card"
                    role="button"
                    tabindex="0"
                    in:scale={{
                        duration: 500,
                        delay: index * 100,
                        easing: quintOut,
                    }}
                    on:mouseenter={() => handleMouseEnter(project.id)}
                    on:mouseleave={() => handleMouseLeave(project.id)}
                >
                    <!-- Video Container -->
                    <div class="video-container">
                        <!-- svelte-ignore a11y-media-has-caption -->
                        <video
                            bind:this={videoElements[project.id]}
                            src={project.src}
                            class="project-video"
                            loop
                            muted
                            playsinline
                            preload="metadata"
                            on:play={() => (playingStates[project.id] = true)}
                            on:pause={() => (playingStates[project.id] = false)}
                        ></video>

                        <!-- Video Overlay -->
                        <div
                            class="video-overlay"
                            class:playing={playingStates[project.id]}
                        >
                            <button
                                type="button"
                                class="play-button"
                                on:click|stopPropagation={() =>
                                    togglePlay(project.id)}
                                aria-label={playingStates[project.id]
                                    ? "Pause video"
                                    : "Play video"}
                            >
                                {#if playingStates[project.id]}
                                    <!-- Pause Icon -->
                                    <svg
                                        class="icon"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"
                                        />
                                    </svg>
                                {:else}
                                    <!-- Play Icon -->
                                    <svg
                                        class="icon"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                {/if}
                            </button>
                        </div>

                        <!-- Gradient Overlay for Text Readability -->
                        <div class="gradient-overlay"></div>
                    </div>

                    <!-- Project Info -->
                    <div class="project-info">
                        <div class="project-header">
                            <div>
                                <span class="project-number">0{project.id}</span
                                >
                                <span class="project-category"
                                    >{project.category}</span
                                >
                            </div>
                        </div>
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-description">{project.description}</p>
                    </div>

                    <!-- Shine Effect on Hover -->
                    <div class="shine-effect"></div>
                </div>
            {/each}

            <!-- Special "and so much more..." Card -->
            <div
                class="project-card code-card"
                role="button"
                tabindex="0"
                in:scale={{
                    duration: 500,
                    delay: projects.length * 100,
                    easing: quintOut,
                }}
            >
                <div class="code-container">
                    <div class="code-header">
                        <div class="code-dots">
                            <span class="dot red"></span>
                            <span class="dot yellow"></span>
                            <span class="dot green"></span>
                        </div>
                        <span class="code-title">portfolio.js</span>
                    </div>
                    <div class="code-content">
                        <pre><code
                                ><span class="code-comment"
                                    >{$t("portfolio.code_card.comment")}</span
                                >
<span class="code-keyword">const</span> <span class="code-variable"
                                    >possibilities</span
                                > = <span class="code-string">'infinite'</span>;

<span class="code-keyword">function</span> <span class="code-function"
                                    >explore</span
                                >() {"{"}
  <span class="code-keyword">return</span> <span class="code-string"
                                    >"and so much more..."</span
                                >;
{"}"}</code
                            ></pre>
                    </div>
                </div>

                <div class="project-info">
                    <h3 class="project-title code-title-text">
                        {$t("portfolio.code_card.title")}
                    </h3>
                    <p class="project-description">
                        {$t("portfolio.code_card.description")}
                    </p>
                </div>

                <!-- Pulse Effect -->
                <div class="pulse-effect"></div>
            </div>
        </div>
    </div>
</section>

<style>
    /* ========================================
       PORTFOLIO SECTION
       ======================================== */
    .portfolio-section {
        position: relative;
        background: linear-gradient(
            to bottom,
            transparent,
            rgba(0, 0, 0, 0.2),
            transparent
        );
    }

    /* Background Orbs */
    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        opacity: 0.08;
        pointer-events: none;
        animation: float 20s ease-in-out infinite;
    }

    .orb-1 {
        top: 10%;
        left: 5%;
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3),
            transparent
        );
        animation-delay: 0s;
    }

    .orb-2 {
        top: 50%;
        right: 10%;
        width: 400px;
        height: 400px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        animation-delay: 7s;
    }

    .orb-3 {
        bottom: 10%;
        left: 30%;
        width: 350px;
        height: 350px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.15),
            transparent
        );
        animation-delay: 14s;
    }

    @keyframes float {
        0%,
        100% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -30px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
    }

    /* Section Badge */
    .section-badge {
        display: inline-block;
        padding: 0.5rem 1.25rem;
        font-size: 0.875rem;
        font-weight: 500;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
        backdrop-filter: blur(10px);
    }

    /* Section Title */
    .section-title {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: -0.02em;
        margin-bottom: 1rem;
        background: linear-gradient(
            135deg,
            #ffffff 0%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(255, 255, 255, 0.4) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Section Description */
    .section-description {
        font-size: clamp(1rem, 2vw, 1.125rem);
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.6);
        max-width: 42rem;
        margin: 0 auto;
    }

    /* ========================================
       PROJECTS GRID
       ======================================== */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        margin-top: 3rem;
    }

    @media (min-width: 640px) {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .projects-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
        }
    }

    /* ========================================
       PROJECT CARD
       ======================================== */
    .project-card {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 1.25rem;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        backdrop-filter: blur(10px);
    }

    .project-card:hover {
        transform: translateY(-8px);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1);
    }

    /* ========================================
       VIDEO CONTAINER
       ======================================== */
    .video-container {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #000;
        overflow: hidden;
    }

    .project-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .project-card:hover .project-video {
        transform: scale(1.05);
    }

    /* Video Overlay */
    .video-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.3);
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .video-overlay.playing {
        opacity: 0;
    }

    .project-card:hover .video-overlay.playing {
        opacity: 1;
    }

    /* Play Button */
    .play-button {
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        backdrop-filter: blur(10px);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .play-button:hover {
        transform: scale(1.1);
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
    }

    .play-button .icon {
        width: 1.5rem;
        height: 1.5rem;
        color: #fff;
    }

    /* Gradient Overlay for Text */
    .gradient-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        pointer-events: none;
    }

    /* ========================================
       PROJECT INFO
       ======================================== */
    .project-info {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex-grow: 1;
    }

    .project-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
    }

    .project-number {
        display: inline-block;
        font-family: var(--font-mono, "Courier New", monospace);
        font-size: 0.75rem;
        font-weight: 600;
        padding: 0.25rem 0.625rem;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.375rem;
        color: rgba(255, 255, 255, 0.7);
        margin-right: 0.5rem;
    }

    .project-category {
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.5);
    }

    .project-title {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.3;
        color: #fff;
        transition: color 0.3s ease;
    }

    .project-card:hover .project-title {
        background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.7));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .project-description {
        font-size: 0.875rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.6);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    /* ========================================
       SHINE EFFECT
       ======================================== */
    .shine-effect {
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
        );
        transform: translateX(-100%) translateY(-100%) rotate(45deg);
        transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
    }

    .project-card:hover .shine-effect {
        transform: translateX(100%) translateY(100%) rotate(45deg);
    }

    /* ========================================
       RESPONSIVE ADJUSTMENTS
       ======================================== */
    @media (max-width: 640px) {
        .project-info {
            padding: 1.25rem;
        }

        .project-title {
            font-size: 1.125rem;
        }

        .play-button {
            width: 3.5rem;
            height: 3.5rem;
        }

        .play-button .icon {
            width: 1.25rem;
            height: 1.25rem;
        }
    }

    /* ========================================
       SPECIAL CODE CARD
       ======================================== */
    .code-card {
        background: linear-gradient(
            135deg,
            rgba(20, 20, 25, 0.9),
            rgba(10, 10, 15, 0.95)
        );
        border-color: rgba(100, 255, 100, 0.2);
        overflow: visible;
    }

    .code-card:hover {
        border-color: rgba(100, 255, 100, 0.4);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(100, 255, 100, 0.1);
    }

    .code-container {
        aspect-ratio: 16 / 9;
        background: #0a0a0f;
        border-radius: 0.75rem;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 1rem;
    }

    .code-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: rgba(30, 30, 35, 0.8);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    .code-dots {
        display: flex;
        gap: 0.5rem;
    }

    .dot {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        opacity: 0.8;
    }

    .dot.red {
        background: #ff5f56;
    }

    .dot.yellow {
        background: #ffbd2e;
    }

    .dot.green {
        background: #27c93f;
    }

    .code-header .code-title {
        font-family: var(--font-mono, "Courier New", monospace);
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.5);
    }

    .code-content {
        padding: 1.5rem;
        font-family: var(--font-mono, "Courier New", monospace);
        font-size: 0.875rem;
        line-height: 1.6;
        overflow-x: auto;
    }

    .code-content pre {
        margin: 0;
        color: #e4e4e7;
    }

    .code-content code {
        display: block;
        white-space: pre;
    }

    .code-comment {
        color: #6b7280;
        font-style: italic;
    }

    .code-keyword {
        color: #c678dd;
        font-weight: 600;
    }

    .code-variable {
        color: #e06c75;
    }

    .code-string {
        color: #98c379;
    }

    .code-function {
        color: #61afef;
    }

    .code-title-text {
        animation: glow-text 2s ease-in-out infinite;
    }

    @keyframes glow-text {
        0%,
        100% {
            text-shadow: 0 0 10px rgba(100, 255, 100, 0.3);
        }
        50% {
            text-shadow: 0 0 20px rgba(100, 255, 100, 0.5);
        }
    }

    /* Pulse Effect */
    .pulse-effect {
        position: absolute;
        inset: -2px;
        border-radius: 1.25rem;
        background: linear-gradient(
            135deg,
            rgba(100, 255, 100, 0.1),
            rgba(100, 200, 255, 0.1)
        );
        opacity: 0;
        animation: pulse-border 3s ease-in-out infinite;
        pointer-events: none;
        z-index: -1;
    }

    @keyframes pulse-border {
        0%,
        100% {
            opacity: 0;
            transform: scale(1);
        }
        50% {
            opacity: 0.3;
            transform: scale(1.02);
        }
    }

    .code-card:hover .pulse-effect {
        animation: pulse-border 2s ease-in-out infinite;
    }

    /* Typing animation for code content */
    .code-card:hover .code-content code {
        animation: typing 2s steps(40, end);
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
</style>
