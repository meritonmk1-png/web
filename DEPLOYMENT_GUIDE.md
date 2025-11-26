# Netlify Deployment Guide with Blog Admin Setup

This guide will walk you through deploying your website to Netlify and setting up the blog admin panel.

## Step 1: Prepare Your Code

First, commit all your recent changes to git:

```bash
git add .
git commit -m "Add blog functionality with Decap CMS"
```

If you haven't already, push to GitHub:

```bash
# If you haven't set the remote yet:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

### Option A: Using Netlify CLI (Fastest)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

Follow the prompts:
- Choose "Create & configure a new site"
- Select your team
- Enter a site name (or leave blank for random)
- Build command: `npm run build`
- Publish directory: `.svelte-kit/netlify`
- Deploy the site

### Option B: Using Netlify Web Interface

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your repository
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.svelte-kit/netlify`
   - **Node version:** 18 (or leave default)
7. Click "Deploy site"

Wait for the deployment to complete (~2-3 minutes).

## Step 3: Enable Netlify Identity

Once your site is deployed:

1. Go to your site's dashboard on Netlify
2. Click on **"Site settings"** in the top navigation
3. In the left sidebar, click **"Identity"**
4. Click **"Enable Identity"**

### Configure Identity Settings:

1. Scroll to **"Registration preferences"**
   - Select **"Invite only"** (recommended for security)
   - Click "Save"

2. Scroll to **"External providers"** (optional)
   - You can enable Google, GitHub, etc. for login
   - For now, email login is sufficient

## Step 4: Enable Git Gateway

Still in the Identity settings:

1. Scroll down to **"Services"**
2. Click **"Enable Git Gateway"**
3. This allows the CMS to commit directly to your repository

## Step 5: Invite Yourself as Admin

1. In the top navigation, click **"Identity"** (not "Site settings")
2. Click **"Invite users"**
3. Enter your email address
4. Click **"Send"**

You'll receive an invitation email:
1. Open the email
2. Click **"Accept the invite"**
3. You'll be redirected to your site
4. Set a password for your admin account

## Step 6: Access Your Blog Admin

Now you can access the admin panel:

1. Visit: `https://YOUR-SITE-NAME.netlify.app/admin/`
2. Log in with the email and password you just created
3. You'll see the Decap CMS dashboard

## Step 7: Create Your First Post in the CMS

1. In the admin dashboard, click **"Blog"** in the left sidebar
2. Click **"New Blog"** button
3. Fill in the form:
   - **Title:** Your post title
   - **Publish Date:** Choose a date
   - **Excerpt:** Brief description (shows on blog index)
   - **Read Time:** e.g., "5 min read"
   - **Tags:** Click the field and press Enter after each tag
   - **Body:** Write your content in Markdown
4. Click **"Publish"** → **"Publish now"**

The CMS will:
- Create/update the markdown file in `src/posts/`
- Commit the change to your GitHub repo
- Trigger a new Netlify build automatically
- Your post will be live in ~2 minutes!

## Troubleshooting

### Can't access /admin/?
- Make sure you deployed the latest code with the admin panel files
- Check that the URL is correct: `https://YOUR-SITE.netlify.app/admin/`
- Clear your browser cache

### Identity not working?
- Verify Identity is enabled in Site Settings → Identity
- Check that Git Gateway is enabled
- Make sure you accepted the invitation email

### Posts not showing after publishing?
- Wait for the Netlify build to complete (check Deploys tab)
- The build usually takes 1-3 minutes
- Check the build logs for any errors

### CMS login redirects to wrong URL?
- This might happen in local development
- Make sure you're accessing the admin via the Netlify URL, not localhost

## Local Development with CMS

To test the CMS locally:

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Run the local dev server with Netlify:
```bash
netlify dev
```

3. Access the admin at:
```
http://localhost:8888/admin/
```

This sets up proper authentication locally.

## Important Notes

- **Always commit through the CMS** after initial setup to avoid conflicts
- **Or**, always commit manually via git - stick to one approach
- The CMS commits directly to your repository
- Each CMS change triggers a new Netlify build
- Build times: ~1-3 minutes per deployment

## Security Best Practices

1. Keep registration set to "Invite only"
2. Don't share your admin credentials
3. Regularly review who has access in Identity tab
4. Enable 2FA in your Netlify account settings

## Next Steps

After successful deployment:

1. ✅ Test the blog at `https://your-site.netlify.app/blog`
2. ✅ Create a few sample posts in the admin
3. ✅ Customize the CMS config if needed (`static/admin/config.yml`)
4. ✅ Add team members by inviting them in Identity
5. ✅ Set up a custom domain (optional) in Site settings → Domain management

---

## Quick Reference

- **Live Site:** `https://YOUR-SITE.netlify.app`
- **Blog:** `https://YOUR-SITE.netlify.app/blog`
- **Admin Panel:** `https://YOUR-SITE.netlify.app/admin/`
- **Netlify Dashboard:** `https://app.netlify.com`
- **Build Logs:** Netlify Dashboard → Deploys tab
