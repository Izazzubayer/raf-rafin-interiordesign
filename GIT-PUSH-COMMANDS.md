# Git Push Instructions for ref-rafin

## Step 1: Fix Xcode License (Required First!)
```bash
sudo xcodebuild -license
```
- Enter your Mac password
- Press Space to scroll through the license
- Type `agree` when prompted

## Step 2: Initialize Git & Push to GitHub

Copy and paste these commands **one by one** in your terminal:

```bash
# Navigate to project directory
cd "/Users/izaz/Documents/interior design"

# Initialize git repository
git init

# Configure git with your email
git config user.email "izazzubayer@gmail.com"
git config user.name "Izaz Zubayer"

# Add all files to git
git add .

# Create initial commit
git commit -m "Initial commit: InteriorVista portfolio website with GSAP animations"

# Create the repository on GitHub and push
# (You'll need to create the repo on GitHub first, OR use GitHub CLI)
```

## Option A: Using GitHub Website (Recommended)

1. Go to https://github.com/new
2. Repository name: `ref-rafin`
3. Make it Public or Private (your choice)
4. **DON'T** check "Initialize with README"
5. Click "Create repository"
6. Then run these commands:

```bash
git branch -M main
git remote add origin https://github.com/izazzubayer/ref-rafin.git
git push -u origin main
```

## Option B: Using GitHub CLI (If installed)

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Login to GitHub
gh auth login

# Create repo and push in one command
gh repo create ref-rafin --public --source=. --remote=origin --push
```

## What Gets Pushed:

✅ Complete Next.js 14 project
✅ All 10 interior design images
✅ GSAP & Framer Motion animations
✅ All pages (Home, Portfolio, About, Contact)
✅ All components and styling
✅ TypeScript configuration
✅ Package.json with dependencies
✅ Tailwind configuration
✅ Documentation files

## If You Get Authentication Errors:

### For HTTPS (easier):
You'll be prompted for username and password/token:
- Username: `izazzubayer`
- Password: Use a Personal Access Token (not your GitHub password)
  - Create token: https://github.com/settings/tokens
  - Permissions needed: `repo` (full control)

### For SSH (if configured):
```bash
git remote set-url origin git@github.com:izazzubayer/ref-rafin.git
git push -u origin main
```

## After Pushing:

Your repository will be at:
🔗 https://github.com/izazzubayer/ref-rafin

You can then deploy to Vercel:
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy automatically!

---

**Remember: Fix the Xcode license FIRST, then run the git commands!**


