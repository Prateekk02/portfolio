# Portfolio

This repository contains a personal portfolio website built using Next.js and TypeScript. The application showcases projects, skills, and experiences, providing a comprehensive overview of professional accomplishments.

## Overview

The portfolio is designed to provide a responsive and interactive user experience. It includes sections such as:

- Introduction

- About

- Projects

- Skills

- Contact

The live version of the portfolio is available at: https://www.prateekkumar.dev

## Features
### Responsive Design
-  Ensures compatibility across various devices and screen sizes.

### Interactive UI 
- Engaging user interface with smooth transitions and animations.

### Project Showcase 
- Detailed display of projects with descriptions and links (live & deployed).

### Blogs
- List of blogs which I have written across platforms related to tech and latest trends in AI. 

### Resources and Snippets
- List of all the resources (youtube channels, documentations, research papers, white papers) which I follow to learn new tech stacks and acquire knowledge.

- Code snippets to obtain pre build UI components, Machine learning Colab templates etc. 

### Contact Form
- Allows visitors to send messages directly through the website.
- For each message send, I receive an email notification.

## Tech Stack
- <b>Framework</b> : Next.js
- <b>Language</b> : TypeScript
- <b>Styling</b> : Tailwind CSS & Framer motion
- <b>Database</b> : Prisma & PostgreSQL
- <b>Deployment</b> : Vercel
- <b>Domain</b> : Cloudflare
- <b>Email Notification</b> : Resend  

## Getting Started
To run this project locally, follow these steps:

1. <b>Clone this repository</b>   

    ```bash
        git clone https://github.com/Prateekk02/portfolio.git
        cd portfolio 
    ```
2. <b>Install dependencies</b>
    ```bash
        npm install
    ```

3. <b>Run the development server</b>

    ```bash 
        npm run dev
    ```
4. <b>Open the application</b>

    Navigate to http://localhost:3000 in your browser to view the website.

## Project Structure

The repository is organized as follows:

- app/: Contains the main application components and pages.

- components/: Reusable UI components used throughout the application.

- data/: Static data such as project details and personal information.

- hooks/: Custom React hooks for state management and other functionalities.

- lib/: Utility functions and libraries.

- prisma/: Prisma schema and database configurations.

- public/: Static assets like images and fonts.

- styles/: Global and component-specific styles.

- README.md: Project documentation.

- package.json: Project metadata and scripts.

# Deployment

The application is deployed on Vercel. For deployment, ensure that the Vercel CLI is installed and configured:

```bash
vercel login
vercel
```

Follow the prompts to deploy the application.

# Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository.

2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:
   ```bash
   git commit -m 'Add YourFeature'
   ```

4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

# License

This project is licensed under the MIT License.
