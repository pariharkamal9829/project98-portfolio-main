# 🚀 DevOps Portfolio - Modern React Portfolio Website

A stunning, modern portfolio website built with React, TypeScript, and Framer Motion, showcasing DevOps engineering expertise with beautiful animations and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-cyan)

## ✨ Features

### 🎨 **Modern Design & Animations**
- **Animated Theme Toggler** - MagicUI-style theme transitions with center-spread effects
- **Framer Motion Animations** - Smooth page transitions, hover effects, and scroll reveals
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Glass Morphism Effects** - Modern UI with backdrop blur and gradient overlays
- **Interactive Elements** - Ripple effects, floating particles, and dynamic backgrounds

### 🌓 **Advanced Theme System**
- **Light/Dark Mode** - Seamless theme switching with persistent preferences
- **Circular Transition Effects** - Animated theme changes spreading from center
- **Sparkle Animations** - Beautiful particle effects during theme transitions
- **Custom CSS Variables** - Consistent theming across all components

### 📱 **Responsive Navigation**
- **Fixed Navigation Bar** - Smooth scrolling with active state indicators
- **Mobile Optimized** - Responsive design that works on all screen sizes
- **Route-based Navigation** - Clean URLs with React Router integration

### 🛠 **Tech Stack Showcase**
- **Technology Icons** - Interactive tech stack with hover animations
- **Skills Visualization** - Professional presentation of technical expertise
- **Project Statistics** - Dynamic counters showing experience metrics

### 📄 **Portfolio Sections**
- **Home Page** - Hero section with professional introduction
- **Resume Page** - Detailed work experience and skills
- **Portfolio Page** - Project showcase with live demos
- **Contact Page** - Professional contact form and information
- **Blog Section** - Technical articles and insights

## 🛠 Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development with full IntelliSense
- **Vite 5.4.1** - Lightning-fast build tool with HMR

### **Styling & UI**
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Framer Motion 11.5.4** - Production-ready motion library
- **Lucide React** - Beautiful, customizable icons

### **Routing & State**
- **React Router DOM 6.26.2** - Declarative routing for React
- **React Context API** - Global state management for themes

### **Development Tools**
- **ESLint** - Code linting with TypeScript support
- **PostCSS** - CSS processing with Tailwind integration
- **Bun** - Fast package manager and runtime

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **Bun** (recommended) or **npm/yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pariharkamal9829/project98-portfolio-main.git
   cd project98-portfolio-main
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start development server**
   ```bash
   # Using Bun
   bun dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📁 Project Structure

```
project98-portfolio-main/
├── public/                 # Static assets
│   ├── favicon.ico        # Website favicon
│   ├── placeholder.svg    # Placeholder images
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Images and media files
│   │   ├── profile-hero.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   └── project-3.jpg
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── FloatingElements.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── MouseParticles.tsx
│   │   ├── RippleEffect.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── TechIcon.tsx
│   ├── contexts/         # React Context providers
│   │   └── ThemeContext.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/             # Utility functions
│   │   └── utils.ts
│   ├── pages/           # Main page components
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── Portfolio.tsx
│   │   └── Resume.tsx
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

## 🎨 Customization

### **Personal Information**
Update your personal details in:
- `src/pages/Home.tsx` - Hero section content
- `src/pages/Resume.tsx` - Work experience and skills
- `src/pages/Contact.tsx` - Contact information

### **Theme Colors**
Modify theme colors in:
- `tailwind.config.ts` - Tailwind color palette
- `src/index.css` - CSS custom properties

### **Images**
Replace images in `src/assets/`:
- `profile-hero.jpg` - Your professional photo
- `project-*.jpg` - Your project screenshots

### **Tech Stack**
Update the technology icons in `src/pages/Home.tsx`:
```typescript
const techStack = [
  { 
    icon: <YourIcon size={40} />, 
    name: 'Technology Name', 
    color: '#HexColor' 
  },
  // Add more technologies...
];
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1024px+) - Full layout with all animations
- **Tablet** (768px - 1023px) - Adapted grid layouts
- **Mobile** (320px - 767px) - Stacked layouts and touch-friendly interactions

## 🎭 Animation Features

### **Theme Transitions**
- Center-spread circular transitions (1-second duration)
- Sparkle particle effects
- Wave overlay animations
- Smooth color interpolation

### **Page Animations**
- Scroll-triggered reveal animations
- Hover effects with spring physics
- Floating background particles
- Interactive ripple effects

### **Micro-interactions**
- Button hover states
- Icon animations
- Loading states
- Smooth page transitions

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy on push

### **Netlify**
1. Build the project: `bun run build`
2. Deploy `dist` folder to Netlify

### **GitHub Pages**
1. Install gh-pages: `bun add -D gh-pages`
2. Add deploy script to package.json
3. Run: `bun run deploy`

## 🔧 Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun preview          # Preview production build

# Code Quality
bun lint             # Run ESLint
bun type-check       # Run TypeScript checks

# Dependencies
bun install          # Install dependencies
bun add <package>    # Add new package
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Kamal Parihar** - DevOps Engineer
- 🌐 **Website**: [Your Portfolio URL]
- 💼 **LinkedIn**: [Your LinkedIn Profile]
- 🐱 **GitHub**: [@pariharkamal9829](https://github.com/pariharkamal9829)
- 📧 **Email**: [Your Email]

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Framer Motion** - For smooth animations
- **Tailwind CSS** - For utility-first styling
- **React Community** - For the amazing ecosystem
- **Vercel** - For seamless deployment

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by [Kamal Parihar](https://github.com/pariharkamal9829)
