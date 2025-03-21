# Portfolio Web

## Overview
This repository contains the source code for my personal portfolio website. Built using React and Vite, it showcases my projects, skills, and experiences in a modern and responsive design.

## Features
- **Responsive Design:** Ensures optimal viewing experience across various devices.
- **Project Showcase:** Displays detailed information about my projects with links to their respective repositories.
- **About Me:** Provides an overview of my background, skills, and interests.
- **Contact Form:** Allows visitors to get in touch with me directly through the website.

## Technologies Used
- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Folder Structure
The project is organized as follows:

```
Portfolio_Web/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── README.md
├── eslint.config.js
├── package.json
├── tailwind.config.js
└── vite.config.js
```

- `public/`: Contains the static HTML file.
- `src/`: Main source code directory.
  - `assets/`: Images, icons, and other static assets.
  - `components/`: Reusable React components.
  - `pages/`: Individual pages like Home, About, Projects, Contact.
  - `App.jsx`: Root component that sets up routing.
  - `main.jsx`: Entry point of the application.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Project documentation.
- `eslint.config.js`: ESLint configuration file.
- `package.json`: Contains project metadata and dependencies.
- `tailwind.config.js`: Configuration for Tailwind CSS.
- `vite.config.js`: Configuration for Vite.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher) or yarn

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/krishSharma1810/Portfolio_Web.git
   cd Portfolio_Web
   ```

2. **Install dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server:**
   Using npm:
   ```bash
   npm run dev
   ```
   Or using yarn:
   ```bash
   yarn dev
   ```
   The application will be accessible at `http://localhost:3000`.

## Available Scripts

- **`npm run dev` or `yarn dev`:** Starts the development server.
- **`npm run build` or `yarn build`:** Builds the app for production.
- **`npm run preview` or `yarn preview`:** Previews the production build.
- **`npm run lint` or `yarn lint`:** Runs ESLint to check for code quality.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact [sharmakrish1810work@gmail.com](mailto:sharmakrish1810work@gmail.com).
