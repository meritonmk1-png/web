<script>
    import { onMount } from "svelte";

    let sectionRef;
    let visible = false;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    visible = true;
                }
            },
            { threshold: 0.2 },
        );

        if (sectionRef) observer.observe(sectionRef);

        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        let frameId;
        const handleMouseMove = (e) => {
            if (frameId) return;

            frameId = requestAnimationFrame(() => {
                // Normalize mouse position from -1 to 1
                const x = (e.clientX / window.innerWidth - 0.5) * 2;
                const y = (e.clientY / window.innerHeight - 0.5) * 2;
                mouseX = x * 20;
                mouseY = y * 20;
                frameId = null;
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            if (frameId) cancelAnimationFrame(frameId);
        };
    });

    const benefits = [
        { text: "one_point_of_contact", x: 15, y: 20, speed: 0.05, delay: 0 },
        { text: "fast_responses", x: 75, y: 15, speed: -0.08, delay: 100 },
        { text: "no_upselling", x: 10, y: 60, speed: 0.06, delay: 200 },
        { text: "clear_communication", x: 80, y: 55, speed: -0.05, delay: 300 },
        { text: "no_bureaucracy", x: 50, y: 85, speed: 0.08, delay: 400 },
    ];
</script>

<section class="section" bind:this={sectionRef}>
    <!-- Top Connector -->
    <div class="seam-connector">
        <div class="line"></div>
    </div>

    <!-- Live Background Orbs -->
    <div class="orbs">
        <div
            class="orb orb-1"
            style="transform: translate({mouseX * -1}px, {mouseY * -1}px)"
        ></div>
        <div
            class="orb orb-2"
            style="transform: translate({mouseX * 1.5}px, {mouseY * 1.5}px)"
        ></div>
    </div>

    <div class="container">
        <div class="content" class:visible>
            <h2>
                <span class="keyword">class</span> WhyMe
                <span class="keyword">extends</span>
                Partner <span class="brace">&lbrace;</span>
            </h2>
            <h3 class="comment">// A Direct Partner — Not a Large Agency</h3>
            <div class="code-block">
                <span class="keyword">constructor</span>()
                <span class="brace">&lbrace;</span><br />
                &nbsp;&nbsp;<span class="this">this</span>.focus =
                <span class="string">"business_value"</span>;<br />
                &nbsp;&nbsp;<span class="this">this</span>.complexity =
                <span class="val">null</span>;<br />
                <span class="brace">&rbrace;</span>
            </div>
        </div>

        <div class="gravity-field">
            {#each benefits as item}
                <div
                    class="floater"
                    class:visible
                    style="
                        left: {item.x}%;
                        top: {item.y}%;
                        transform: translateY({(scrollY * item.speed) % 60}px);
                        transition-delay: {item.delay}ms;
                    "
                >
                    <div class="dot-indicator"></div>
                    <span class="var-name">{item.text}</span>
                    <span class="val">: true</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .section {
        padding-top: 0; /* Connects to previous section */
        padding-bottom: 10rem;
        background: #050505;
        position: relative;
        overflow: hidden;
        color: #fff;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Fira Code", monospace; /* Code font for this section */
    }

    /* Seam Connector */
    .seam-connector {
        height: 60px;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        opacity: 0.6;
    }

    .seam-connector .line {
        width: 1px;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.1)
        );
    }

    /* Background Orbs - Optimized */
    .orbs {
        position: absolute;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
        transform: translateZ(0); /* Force hardware acceleration */
    }

    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(40px); /* Reduced blur */
        opacity: 0.15;
        will-change: transform;
        transition: transform 0.1s linear;
    }

    .orb-1 {
        width: 400px;
        height: 400px;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
        );
        top: -20%;
        left: -10%;
    }

    .orb-2 {
        width: 350px;
        height: 350px;
        background: radial-gradient(
            circle,
            rgba(100, 100, 255, 0.2) 0%,
            transparent 70%
        );
        bottom: -10%;
        right: -5%;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
        position: relative;
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .content {
        text-align: center;
        max-width: 800px;
        z-index: 10;
        opacity: 0;
        transform: scale(0.9);
        transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .content.visible {
        opacity: 1;
        transform: scale(1);
    }

    h2 {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: #e5c07b; /* Gold/Yellow for class name */
    }

    .keyword {
        color: #c678dd;
    } /* Purple */
    .brace {
        color: #abb2bf;
    }
    .this {
        color: #e06c75;
    } /* Red */
    .string {
        color: #98c379;
    } /* Green */
    .val {
        color: #d19a66;
    } /* Orange */

    h3.comment {
        font-size: 1.1rem;
        color: #5c6370;
        margin-bottom: 2rem;
        font-weight: 400;
        font-style: italic;
    }

    .code-block {
        text-align: left;
        display: inline-block;
        background: rgba(0, 0, 0, 0.3);
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        font-size: 1rem;
        line-height: 1.6;
        color: #abb2bf;
    }

    .gravity-field {
        position: absolute;
        inset: 0;
        pointer-events: none;
    }

    .floater {
        position: absolute;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.8rem 1.2rem;
        background: rgba(15, 15, 15, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px; /* More code-like, less rounded */
        backdrop-filter: blur(10px);
        opacity: 0;
        transition:
            opacity 0.8s ease,
            transform 0.1s linear;
        white-space: nowrap;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .floater.visible {
        opacity: 1;
        animation: float 6s ease-in-out infinite;
    }

    .dot-indicator {
        width: 6px;
        height: 6px;
        background: #61afef; /* Blue */
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(97, 175, 239, 0.5);
    }

    .var-name {
        font-size: 0.9rem;
        color: #e06c75; /* Red variable color */
    }

    .floater .val {
        font-size: 0.9rem;
        color: #d19a66; /* Orange boolean/value */
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 768px) {
        .section {
            padding-bottom: 6rem;
            min-height: auto;
        }

        .container {
            height: auto;
            flex-direction: column;
            gap: 3rem;
        }

        .gravity-field {
            position: relative;
            height: auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            inset: auto;
            width: 100%;
        }

        .floater {
            position: relative;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100%;
            justify-content: center;
            animation: none;
        }
    }
</style>
