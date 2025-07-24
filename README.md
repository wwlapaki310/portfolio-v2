# Portfolio V2 🚀

Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This is a complete rewrite of my portfolio website with the following goals:
- **Unified Content**: Integrate works, resume, blog, and slides in one place
- **Performance First**: Fast loading, SPA-like navigation
- **GitHub Complete**: Everything managed within GitHub ecosystem
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX (Markdown + React Components)
- **Deployment**: GitHub Pages + GitHub Actions
- **Analytics**: Web Vitals monitoring

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── about/             # Resume/About page
│   ├── works/             # Projects gallery
│   ├── blog/              # Blog system
│   └── slides/            # Presentations
├── components/            # Reusable components
├── content/               # MDX content files
├── data/                  # JSON data files
└── lib/                   # Utility functions
```

## 🚦 Development Phases

### Phase 1: Foundation ✅
- [x] Next.js + TypeScript setup
- [x] Tailwind CSS configuration
- [x] GitHub Actions deployment
- [x] Basic layout components

### Phase 2: Core Content 🚧
- [ ] Resume page (PDF → MDX conversion)
- [ ] Works gallery with filtering
- [ ] Blog system (migrate from Hatena Blog)

### Phase 3: Advanced Features
- [ ] Slides presentation system
- [ ] Search & filtering functionality
- [ ] Advanced animations

### Phase 4: Optimization
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Analytics integration

## 🔗 Links

- **Current Portfolio**: https://wwlapaki310.github.io/
- **Development Site**: https://wwlapaki310.github.io/portfolio-v2/
- **Old Blog**: https://akisatooo.hatenablog.com/
- **Issues**: Track progress in [GitHub Issues](https://github.com/wwlapaki310/portfolio-v2/issues)

## 🚀 Getting Started

```bash
# Clone repository
git clone https://github.com/wwlapaki310/portfolio-v2.git
cd portfolio-v2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Migration Plan

1. **Develop**: Build features in `portfolio-v2` repository
2. **Test**: Verify functionality at Project Pages URL
3. **Migrate**: Move content to `wwlapaki310.github.io` repository
4. **Switch**: Update main portfolio URL

## 🎨 Design Principles

- **Performance**: Fast loading, optimized images, code splitting
- **Accessibility**: Semantic HTML, proper contrast, keyboard navigation
- **Mobile First**: Responsive design for all devices
- **Clean Code**: TypeScript, ESLint, organized structure

## 📊 Features

### Content Management
- MDX for rich content with React components
- JSON-based metadata for projects and posts
- Automatic RSS/Atom feed generation
- Tag-based categorization

### User Experience
- SPA-like navigation with Next.js routing
- Dark/light mode toggle
- Search functionality
- Progressive loading

### Developer Experience
- TypeScript for type safety
- Tailwind CSS for rapid styling
- GitHub Actions for CI/CD
- ESLint and Prettier for code quality

---

**Status**: 🚧 Under active development

Track the latest progress in [Issues](https://github.com/wwlapaki310/portfolio-v2/issues) and [Project Board](https://github.com/wwlapaki310/portfolio-v2/projects).
