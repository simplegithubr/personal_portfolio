# Sagar Hussain Sheikh - Portfolio

A modern, responsive personal portfolio website built with **Next.js 14** and **Tailwind CSS**. Features a beautiful design with dark mode support, GitHub stats integration, and smooth animations.

## 🌸 Features

- ✨ Clean hero section with animated elements
- 🌙 **Dark Mode Toggle** - Switch between light and dark themes
- 📄 **Resume Download** - One-click resume PDF download
- 🎨 About section with personal introduction
- 💻 Skills section with categorized technologies
- 📁 Projects section with 16+ real projects
- 🐙 **GitHub Stats Widget** - Live GitHub activity display
- 📧 **Contact Form** - Working form with Formspree integration
- 📱 Fully responsive design
- 🎭 Smooth animations using Framer Motion
- 🌈 Soft pink theme with rounded cards
- ⚡ Optimized for performance and SEO
- 🚫 Custom 404 page

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Add your resume here
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with dark mode
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── not-found.tsx        # Custom 404 page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx     # Dynamic project detail page
│   └── components/
│       ├── Navbar.tsx           # Navigation with dark mode toggle
│       ├── Hero.tsx             # Hero section with resume download
│       ├── About.tsx            # About section
│       ├── Skills.tsx           # Skills section
│       ├── Projects.tsx         # Projects section
│       ├── GitHubStats.tsx      # GitHub activity widget
│       ├── Contact.tsx          # Contact form (Formspree)
│       └── Footer.tsx           # Footer
├── tailwind.config.ts           # Tailwind configuration
├── package.json
├── README.md
└── SETUP_GUIDE.md               # Setup instructions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Setup Checklist

### 1. Add Your Resume
- Create a PDF of your resume
- Name it `resume.pdf`
- Place it in the `public/` folder

### 2. Enable Contact Form
- Go to [Formspree.io](https://formspree.io/)
- Create a free account and new form
- Copy your form endpoint URL
- Update `src/components/Contact.tsx` with your Formspree ID

### 3. GitHub Stats
- Already configured for: `simplegithubr`
- To change, update `src/components/GitHubStats.tsx`

## 📄 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🛠️ Technologies Used

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (with dark mode)
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)
- **Forms:** Formspree
- **Stats:** GitHub Readme Stats

## 🎨 Features Breakdown

### Dark Mode
- Toggle button in navbar
- Persists user preference
- Smooth transitions

### GitHub Stats Widget
- Profile stats card
- Top programming languages
- Coding streak counter
- Auto-updates from GitHub

### Contact Form
- Name, email, message fields
- Form validation
- Success/error messages
- Formspree backend

### Resume Download
- Prominent button in hero section
- Direct PDF download
- Works offline

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Environment Variables (Optional)

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
NEXT_PUBLIC_GITHUB_USERNAME=simplegithubr
```

## 📝 Customization

### Update Personal Information

1. **Contact Info:** Edit `src/components/Contact.tsx` and `Footer.tsx`
2. **About Section:** Edit `src/components/About.tsx`
3. **Skills:** Edit `src/components/Skills.tsx`
4. **Projects:** Edit `src/components/Projects.tsx` and project pages
5. **GitHub Username:** Edit `src/components/GitHubStats.tsx`

### Change Colors

Edit `tailwind.config.ts` to customize the color palette:

```ts
colors: {
  pink: { /* ... */ },
  rose: { /* ... */ },
}
```

## 📊 Project Stats

- **16 Projects** showcased (Vercel + Streamlit + Backend)
- **7 Sections** (Home, About, Skills, Projects, GitHub Stats, Contact, Footer)
- **Dark Mode** support
- **100% Responsive**
- **SEO Optimized**

## 📄 License

This project is open source and available under the MIT License.

## 💖 Credits

Made with 💖 by **Sagar Hussain Sheikh**

### Connect With Me

- 🐙 [GitHub](https://github.com/simplegithubr)
- 💼 [LinkedIn](https://www.linkedin.com/in/sagar-hussain-sheikh-8441aa27b)
- 📧 [Email](mailto:smasooma934@gmail.com)

---

**Happy Coding!** ✨
