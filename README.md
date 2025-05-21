# Scheduling Exam Timetable using CSP Solutions

## Overview

The project aims to create an exam schedule using Constraint Satisfaction Problem (CSP) solutions that accommodates the needs of all stakeholders. This schedule will address constraints such as:

- Allowing invigilators teaching a subject to be exempt from waiting for the exam room except the requested.
- Ensuring that each invigilator spends time in the exam room at least once a day as soon as possible.
- Guaranteeing that each student can only take one exam per day.

By using **CSP solutions**, this project aims to efficiently and effectively develop a timetable that meets the requirements of all parties involved in the examination process.

## Tech Stack

- **Frontend:**

    - **React:** A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
    - **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs without leaving your HTML.
    - **Shadcn/ui:** A collection of beautifully designed, accessible React components built with Radix UI and Tailwind CSS, enabling rapid development of consistent and customizable user interfaces.

- **Backend:**
    - **Laravel:** A PHP framework for web artisans, providing an elegant syntax and powerful tools for building robust applications.
    - **Inertia.js:** An adapter that connects your React frontend with your Laravel backend, enabling you to build modern single-page applications without the need for a separate API.

## Additional Tools

- **Docker:** A platform for developing, shipping, and running applications in lightweight, portable containers, ensuring consistency across development, testing, and production environments.
- **Figma:** A web-based design tool used for UI/UX design and prototyping, enabling collaboration among designers and stakeholders.
- **MySQL:** An open-source relational database management system used for storing and managing application data.
- **phpMyAdmin:** A free and open-source administration tool for MySQL, providing a web interface to manage MySQL databases.
- **Git:** A distributed version control system used for tracking changes in source code during software development.
- **GitHub:** A web-based platform for version control and collaboration, allowing multiple developers to work on projects simultaneously.
- **Visual Studio Code (VS Code):** A source-code editor made by Microsoft for Windows, Linux, and macOS, featuring support for debugging, syntax highlighting, intelligent code completion, snippets, and code refactoring.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mryeminaung/special-project-3001.git
    cd special-project-3001
    ```

2. Install dependencies:

    ```bash
    composer install
    npm install
    ```

3. Set up environment variables:

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

4. Configure your database settings in the `.env` file:

    ```env
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
    ```

5. Run migrations:

    ```bash
    php artisan migrate
    ```

6. Seeding database

    ```bash
    php artisan migrate:fresh --seed
    ```

7. Start the development server:
    ```bash
    composer run dev
    ```

## Usage

1. Access the application at `http://localhost:8000`.
2. Follow the instructions to create and manage exam schedules.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
