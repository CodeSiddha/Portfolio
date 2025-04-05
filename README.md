# Portfolio Website

A modern portfolio website built with Next.js for the frontend and Node.js for the backend.

## Features

- Responsive design that works on all devices
- Modern UI with Tailwind CSS
- Server-side rendering with Next.js
- Backend API with Express
- Contact form functionality
- Sections for showcasing skills, projects, and professional information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

### Development

1. Start the frontend development server:
```bash
npm run dev
```

2. Start the backend server (in a separate terminal):
```bash
cd server
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

1. Build the frontend:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Customization

### Personal Information

- Edit your personal information in the components
- Update the project details in `src/components/Projects.tsx`
- Modify skills in `src/components/Skills.tsx`
- Change your contact information in `src/components/Footer.tsx`

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the theme in `tailwind.config.js`
2. Editing the global styles in `src/styles/globals.css`
3. Changing component-specific styles directly in the component files

### Adding Content

- Add new projects by updating the projects array in `src/components/Projects.tsx`
- Add new skills by updating the skills array in `src/components/Skills.tsx`

## Deployment

### Frontend (Next.js)

You can deploy the Next.js app to platforms like Vercel or Netlify with minimal configuration.

### Backend (Express)

Deploy the Node.js backend to platforms like Heroku, Railway, or any cloud provider that supports Node.js.

## License

MIT 