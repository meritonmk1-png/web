# Agency Redesign - Portfolio Website

A modern, high-performance portfolio website built with SvelteKit, featuring AI integration capabilities and a multi-step project inquiry funnel.

## 🚀 Features

- **Modern Tech Stack**: SvelteKit + Vite for blazing-fast performance
- **Multi-language Support**: English and German translations via svelte-i18n
- **EmailJS Integration**: Direct email submissions from the contact funnel
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Responsive Design**: Mobile-first approach with smooth animations
- **Blog System**: Markdown-based blog with MDsveX
- **Project Funnel**: Multi-step form for project inquiries

## 📁 Project Structure

```
agency-redesign/
├── src/
│   ├── lib/
│   │   ├── components/      # Svelte components
│   │   │   ├── Contact.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── Portfolio.svelte
│   │   │   ├── Pricing.svelte
│   │   │   ├── ProblemSolution.svelte
│   │   │   ├── SEO.svelte
│   │   │   └── WhyMe.svelte
│   │   ├── i18n/            # Translations
│   │   │   ├── en.json
│   │   │   ├── de.json
│   │   │   └── index.js
│   │   └── utils/           # Utility functions
│   │       └── posts.js
│   ├── routes/              # SvelteKit routes
│   │   ├── blog/           # Blog pages
│   │   ├── start/          # Project inquiry funnel
│   │   ├── +layout.svelte  # Root layout
│   │   └── +page.svelte    # Homepage
│   └── posts/              # Blog posts (Markdown)
├── static/                 # Static assets
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── svelte.config.js
└── vite.config.js
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
   ```bash
   cd c:\Users\merit\Desktop\work\web\agency-redesign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📧 EmailJS Configuration

The project uses EmailJS for form submissions. Update credentials in:
- `src/routes/start/+page.svelte`

```javascript
const serviceID = "service_84dbgwp";
const templateID = "template_gqk8lso";
const publicKey = "HUbz31XN-IknC6Y2i";
```

## 🌐 Deployment

### Firebase
```bash
npm run build
firebase deploy
```

### Netlify
The project includes a `netlify.toml` configuration file. Simply connect your repository to Netlify.

## 📝 Adding Blog Posts

1. Create a new `.md` file in `src/posts/`
2. Add frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2025-01-01"
   excerpt: "Brief description"
   ---
   
   Your content here...
   ```

## 🎨 Customization

### Colors & Styling
Global CSS variables are defined in `src/routes/+layout.svelte`

### Translations
Edit `src/lib/i18n/en.json` and `src/lib/i18n/de.json`

### Pricing Plans
Update pricing information in `src/lib/i18n/en.json` under the `pricing` section

## 📦 Dependencies

### Core
- `svelte` - UI framework
- `@sveltejs/kit` - Application framework
- `vite` - Build tool

### Features
- `svelte-i18n` - Internationalization
- `@emailjs/browser` - Email service
- `mdsvex` - Markdown support for blog
- `svelte-meta-tags` - SEO meta tags

## 🔧 Configuration Files

- `svelte.config.js` - SvelteKit configuration
- `vite.config.js` - Vite build configuration
- `jsconfig.json` - JavaScript/TypeScript paths
- `netlify.toml` - Netlify deployment settings
- `firebase.json` - Firebase deployment settings

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 🤝 Support

For issues or questions, contact: meritonmk1@gmail.com

## 📄 License

Private project - All rights reserved © 2025 Meriton Selimi
