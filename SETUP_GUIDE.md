# Portfolio Setup Guide

## 🚀 Quick Setup

### 1. Add Your Resume

1. Create your resume as a PDF file
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. The download button in the Hero section will automatically work!

### 2. Enable Contact Form (Formspree)

The contact form uses Formspree to send emails. Here's how to set it up:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form/project
4. Copy your form endpoint URL (looks like `https://formspree.io/f/xyzkqwer`)
5. Open `src/components/Contact.tsx`
6. Replace `YOUR_FORMSPREE_ID` with your actual form ID:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### 3. GitHub Stats (Automatic)

The GitHub stats widgets automatically pull data from your GitHub profile:
- Username: `simplegithubr` (already configured)
- To change, update the URLs in `src/components/GitHubStats.tsx`

### 4. Update Social Links

All your social links are already configured:
- GitHub: https://github.com/simplegithubr
- LinkedIn: https://www.linkedin.com/in/sagar-hussain-sheikh-8441aa27b
- Email: smasooma934@gmail.com

To modify, edit these files:
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/GitHubStats.tsx`

## 🎨 Dark Mode

Dark mode is already enabled! Click the sun/moon icon in the navbar to toggle.

## 📊 Features Added

✅ Resume Download Button
✅ Dark Mode Toggle
✅ Working Contact Form (needs Formspree ID)
✅ GitHub Stats Widget
✅ Custom 404 Page
✅ Enhanced Animations
✅ SEO Optimized

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## 📝 Environment Variables (Optional)

No environment variables required, but you can add:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
NEXT_PUBLIC_GITHUB_USERNAME=simplegithubr
```

## 🎯 Next Steps

1. Add your actual resume PDF
2. Set up Formspree for contact form
3. Deploy to Vercel
4. Share your portfolio!

---

**Need help?** Check the README.md for more details!
