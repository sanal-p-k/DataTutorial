# Data Tutorials Portfolio Website

A modern, responsive portfolio website for a Data Analytics expert showcasing expertise in Power BI, Tableau, SQL, and Python.

## Features

- Modern, clean design with data visualization theme
- Interactive dashboard showcase
- Responsive navigation
- Contact form with social media integration
- About section with metrics and expertise
- Services section with animated cards

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Hero Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Static assets (images, logos)
├── index.css      # Global styles
└── App.tsx        # Main application component
```

## Customization

The project uses Tailwind CSS for styling. Customize the design by modifying:

- `tailwind.config.js` for theme colors and configurations
- `src/index.css` for global styles
- Component files for layout and content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
