# Blog Management Guide

Your blog is now set up with **two options** for managing posts:

## Option 1: Decap CMS (Recommended for Non-Technical Users)

Decap CMS provides a user-friendly admin panel to create and edit blog posts.

### Setup Steps:

1. **Deploy to Netlify** (if not already):
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Deploy the site

2. **Enable Netlify Identity**:
   - Go to your Netlify dashboard
   - Navigate to **Site Settings > Identity**
   - Click **Enable Identity**

3. **Enable Git Gateway**:
   - In **Identity** settings, scroll to **Services**
   - Click **Enable Git Gateway**

4. **Invite Yourself as Admin**:
   - Go to **Identity** tab
   - Click **Invite users**
   - Enter your email
   - Check your email and accept the invitation
   - Set a password

### Using the CMS:

1. Visit: `https://your-site.netlify.app/admin/`
2. Log in with your credentials
3. Click **Blog** in the sidebar
4. Click **New Blog** to create a post
5. Fill in:
   - **Title**: Post title
   - **Publish Date**: When to publish
   - **Excerpt**: Short description
   - **Read Time**: e.g., "5 min read"
   - **Tags**: Add tags (click + to add each tag)
   - **Body**: Write your post in Markdown
6. Click **Publish** → **Publish now**

The CMS will automatically commit the changes to your GitHub repository and trigger a new build.

---

## Option 2: Manual Editing (For Developers)

### Creating a New Post:

1. Navigate to `src/posts/`
2. Create a new `.md` file (e.g., `my-new-post.md`)
3. Add frontmatter and content:

```markdown
---
title: Your Post Title
date: "2025-11-26"
excerpt: A brief description of your post.
tags:
  - Tag1
  - Tag2
readTime: 5 min read
---

## Your Content Here

Write your blog post content in Markdown format.

### Subheadings

- Bullet points
- **Bold text**
- *Italic text*
- [Links](https://example.com)

\`\`\`javascript
// Code blocks
const example = "code";
\`\`\`
```

4. Save the file
5. The post will automatically appear on your blog

### Editing Existing Posts:

1. Open the `.md` file in `src/posts/`
2. Edit the content
3. Save the file
4. Changes will be reflected immediately in development mode

### Deleting Posts:

1. Simply delete the `.md` file from `src/posts/`

---

## Post Frontmatter Fields

- **title**: (required) The post title
- **date**: (required) Publication date in "YYYY-MM-DD" format
- **excerpt**: (required) Short description for the blog index
- **tags**: (required) Array of tags
- **readTime**: (required) Estimated reading time (e.g., "5 min read")

---

## Markdown Features Supported

The blog supports full Markdown syntax:

- Headings (h1-h6)
- Bold, italic, strikethrough
- Links and images
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Blockquotes
- Tables
- And more!

---

## Tips

- **Images**: Upload images to `static/uploads/` and reference them as `/uploads/image.jpg`
- **Slugs**: The URL slug is automatically generated from the filename
- **Preview**: Use `npm run dev` to preview posts locally before deploying
- **Sorting**: Posts are automatically sorted by date (newest first)

---

## Troubleshooting

### Post not showing up?
- Check the frontmatter format (YAML syntax)
- Ensure the date is in "YYYY-MM-DD" format
- Verify the file is in `src/posts/` directory
- Restart the dev server

### CMS not loading?
- Ensure Netlify Identity is enabled
- Check that Git Gateway is enabled
- Verify you're logged in at `/admin/`

---

## Local Development

To test the CMS locally:

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify dev` (instead of `npm run dev`)
3. Visit: `http://localhost:8888/admin/`
