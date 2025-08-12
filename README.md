# HocGenAI News

A modern, responsive news application built with React, TypeScript, and Tailwind CSS.

## Features

- 📰 **Modern News Interface** - Clean and intuitive design for reading news articles
- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 📱 **Mobile-First** - Optimized for mobile users with touch-friendly interface
- 🔍 **Category Filtering** - Browse news by different categories (Technology, Business, Science, etc.)
- 📖 **Article Details** - Full article view with related articles
- ⚡ **Fast Loading** - Built with Vite for lightning-fast development and build times
- 🎯 **TypeScript** - Full type safety for better development experience

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lyse249/hocgenai.git
cd hocgenai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx     # Navigation header
│   └── NewsCard.tsx   # Article card component
├── pages/              # Page components
│   ├── NewsPage.tsx   # Home page with featured articles
│   ├── ArticleDetail.tsx # Individual article page
│   └── CategoryPage.tsx # Category filtered articles
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## Features in Detail

### Home Page
- Featured article showcase
- Latest news grid
- Category browsing
- Responsive design

### Article Detail Page
- Full article content
- Author information
- Publication date
- Read time estimation
- Related articles
- Social sharing options

### Category Pages
- Filtered articles by category
- Article count display
- Back navigation

### Navigation
- Sticky header
- Mobile-responsive menu
- Active page highlighting
- Search functionality (UI ready)

## Customization

### Adding New Categories
1. Update the navigation array in `src/components/Header.tsx`
2. Add category-specific articles to the mock data
3. Update the category grid in `src/pages/NewsPage.tsx`

### Styling
The application uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles using Tailwind classes

### API Integration
To integrate with a real API:
1. Replace mock data in the page components
2. Use Axios for API calls
3. Implement proper error handling
4. Add loading states

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue on GitHub.
