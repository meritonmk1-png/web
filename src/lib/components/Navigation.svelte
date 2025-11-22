<script>
    import { page } from "$app/stores";

    let isOpen = false;

    const navItems = [
        { href: "/", label: "Home", icon: "home" },
        { href: "#services", label: "Services", icon: "layer-group" },
        { href: "#work", label: "Work", icon: "code" },
        { href: "#pricing", label: "Pricing", icon: "dollar-sign" },
        { href: "#contact", label: "Contact", icon: "paper-plane" },
    ];
</script>

<nav class="sidebar" class:expanded={isOpen}>
    <div class="logo">
        <span>M</span>
    </div>

    <ul class="nav-links">
        {#each navItems as item}
            <li>
                <a
                    href={item.href}
                    class:active={$page.url.pathname === item.href}
                    on:click={() => (isOpen = false)}
                >
                    <span class="icon">
                        <i class="fas fa-{item.icon}"></i>
                    </span>
                    <span class="text">{item.label}</span>
                </a>
            </li>
        {/each}
    </ul>

    <div class="sidebar-footer">
        <p>meriton.selimi.tech</p>
    </div>
</nav>

<style>
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: var(--sidebar-width);
        background-color: var(--bg-dark);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 2rem 0;
        transition: width var(--transition-slow);
        z-index: 1000;
        overflow: hidden;
        box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
    }

    .sidebar:hover {
        width: var(--sidebar-width-expanded);
    }

    .logo {
        text-align: center;
        font-weight: 800;
        font-size: 1.5rem;
        margin-bottom: 2rem;
        white-space: nowrap;
    }

    .nav-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        list-style: none;
    }

    .nav-links a {
        display: flex;
        align-items: center;
        padding: 1rem 1.8rem;
        color: #888;
        transition: all var(--transition-base);
        white-space: nowrap;
    }

    .nav-links a:hover,
    .nav-links a.active {
        color: #fff;
        background: rgba(255, 255, 255, 0.05);
        border-left: 3px solid var(--color-accent);
    }

    .icon {
        font-size: 1.2rem;
        min-width: 30px;
        text-align: center;
    }

    .text {
        margin-left: 1rem;
        opacity: 0;
        transform: translateX(-10px);
        transition: all var(--transition-base) 0.1s;
    }

    .sidebar:hover .text {
        opacity: 1;
        transform: translateX(0);
    }

    .sidebar-footer {
        text-align: center;
        font-size: 0.8rem;
        color: #555;
        opacity: 0;
        transition: opacity var(--transition-base);
    }

    .sidebar:hover .sidebar-footer {
        opacity: 1;
    }

    /* Mobile */
    @media (max-width: 768px) {
        .sidebar {
            position: fixed;
            bottom: 0;
            top: auto;
            left: 0;
            width: 100%;
            height: 60px;
            flex-direction: row;
            padding: 0;
            align-items: center;
            justify-content: space-around;
            box-shadow: 0 -4px 15px rgba(0, 0, 0, 0.1);
        }

        .sidebar:hover {
            width: 100%;
        }

        .logo,
        .sidebar-footer,
        .text {
            display: none !important;
        }

        .nav-links {
            flex-direction: row;
            justify-content: space-around;
            gap: 0;
        }

        .nav-links a {
            padding: 1rem;
            justify-content: center;
        }
    }
</style>
