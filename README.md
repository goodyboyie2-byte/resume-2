# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design using TailwindCSS
- **Smooth Navigation**: Fixed header with smooth scrolling to sections
- **Interactive Components**: Hover effects and transitions for better UX
- **Sections Included**:
  - Hero section with introduction
  - About me section
  - Work experience timeline
  - Skills and technologies
  - Contact form and social links

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Update the following files with your information:

- **Hero Section** (`src/components/Hero.jsx`):
  - Your name (line 10)
  - Job title (line 14)
  - Bio (line 18)
  - Social links (GitHub, LinkedIn, Email)

- **About Section** (`src/components/About.jsx`):
  - About text (lines 12-28)
  - Quick facts (location, experience, education, etc.)

- **Experience Section** (`src/components/Experience.jsx`):
  - Add your work experience in the `experiences` array (lines 6-44)

- **Skills Section** (`src/components/Skills.jsx`):
  - Update skills in the `skillCategories` array (lines 6-24)

- **Contact Section** (`src/components/Contact.jsx`):
  - Update email address
  - Update LinkedIn and GitHub URLs
  - The contact form is ready for backend integration

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update fonts in `src/index.css`
- **Components**: Each component has its own file in `src/components/`

## Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        └── Contact.jsx
```

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository and deploy
- **Netlify**: Drag and drop the `dist` folder or connect to Git
- **GitHub Pages**: Use the `gh-pages` package
- **Any static hosting**: Upload the `dist` folder contents

## License

This project is open source and available for personal use.

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out.
