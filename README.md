Interactive Product Tour Builder

Overview

The Interactive Product Tour Builder is a React-based web application that allows users to create and explore interactive product tours. It features a landing page to welcome users, a tour page to view step-by-step tours with animations, and an editor page to create new tour steps. The application is styled with Tailwind CSS and includes animations powered by Framer Motion for an engaging user experience.

Features


Landing Page: A welcoming page with a call-to-action to explore the tour or build a new one, featuring smooth animations.

Tour Page: Displays tour steps with images, titles, and descriptions, with navigation buttons and animations for step transitions.

Editor Page: Allows users to add new tour steps with a form and preview them in a vertical timeline.

Responsive Design: Built with Tailwind CSS to ensure a responsive and modern UI across devices.

Animations: Uses Framer Motion for smooth transitions and interactive effects.

Project Structure

project/
├── src/
│   ├── components/
│   │   ├── Button.jsx           # Reusable button component
│   │   ├── Editor.jsx           # Editor page to add and preview tour steps
│   │   ├── LandingPage.jsx      # Landing page with hero section
│   │   ├── TourPage.jsx         # Tour page to view steps
│   │   └── TourStepCard.jsx     # Reusable component to display a tour step
│   ├── context/
│   │   └── TourContext.jsx      # Context for managing tour steps
│   ├── utils/
│   │   └── constants.js         # Default tour steps
│   ├── App.jsx                  # Main app component with routing
│   └── index.jsx                # Entry point
├── index.html                   # HTML template with Tailwind CSS CDN
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # Project documentation (this file)

Prerequisites


Node.js: Version 14 or higher.

npm: Comes with Node.js, used for package management.

Setup Instructions


Clone the Repository (if applicable): If you have this project in a Git repository, clone it:

git clone <repository-url>
cd project



Install Dependencies: Install the required npm packages:

npm install

The project depends on:


react and react-dom for the React framework.

react-router-dom for routing.

framer-motion for animations.

prop-types for type checking.



Run the Development Server: Start the app using Vite:

npm run dev

Open http://localhost:5173 in your browser to view the app.

Usage

Pages


Landing Page (/):
Welcome page with a hero section.

Features an "Explore Now" button to view the tour and a "Build Your Tour" link to go to the editor.

Includes smooth animations for the heading, paragraph, and buttons.
[Screenshot]( ScreenShots/Landing-page.png)



Tour Page (/tour):

Displays tour steps one at a time with navigation buttons ("Previous", "Next", "Finish").

Each step includes an image, title, and description, with animations for transitions.
[Screenshot](ScreenShots/tour1.png)
[Screenshot](ScreenShots/tour2.png)


Editor Page (/editor):

Form to add new tour steps (title, image URL, description).
Live preview of added steps in a vertical timeline.

"View Full Tour" link to see the tour in the TourPage.
[Screenshot](ScreenShots/editor.png)






Technologies Used

React: JavaScript library for building the UI.

React Router: For client-side routing.
Tailwind CSS: Utility-first CSS framework for styling (via CDN).
Framer Motion: For animations and transitions.
Vite: Build tool and development server.

Contributing

Fork the repository (if applicable).

Create a new branch for your feature or bugfix:

git checkout -b feature/your-feature-name

Make your changes and commit them:

git commit -m "Add your feature description"

Push to your branch:

git push origin feature/your-feature-name

Create a pull request to the main repository.

License

This project is licensed under the Apache License. See the LICENSE file for details (if applicable)
