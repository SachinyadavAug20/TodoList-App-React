# React TodoList App

A clean, modern, and responsive TodoList application built with React, Vite, and Tailwind CSS. This project is a great example of a functional single-page application (SPA) and demonstrates core concepts in modern front-end web development.

![Final Preview](src/assets/5.gif)

---

## 📆 Progress History

### 29/11/25
![Final Preview](src/assets/5.gif)

### 26/11/25
![Preview 26 Nov](src/assets/4.gif)

### 24/11/25
![Preview 24 Nov](src/assets/3.gif)

### 23/11/25
![Preview 23 Nov](src/assets/2.png)

![Preview 23 Nov](src/assets/1.png)

---

## 🚀 Features

*   **Create, Read, Update, Delete (CRUD) Todos:** Easily add, edit, and delete your tasks.
*   **Mark as Complete:** Mark tasks as completed with a satisfying strikethrough effect.
*   **Persistent Storage:** Your todos are saved in the browser's local storage, so your tasks will be there when you return.
*   **Dark & Light Mode:** A sleek UI with a toggle for dark and light themes.
*   **Filter Tasks:** Option to show or hide completed tasks to keep your list organized.
*   **Responsive Design:** The application is fully responsive and works seamlessly on devices of all sizes, from mobile phones to desktops.

## 🛠️ Tech Stack

*   **Frontend:** [React.js](https://reactjs.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Unique ID Generation:** [uuid](https://www.npmjs.com/package/uuid)

### Running the Application

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173` (or the next available port). Open this URL in your browser to see the app in action.

## 📁 Project Structure

Here's a brief overview of the key files and directories in this project:

```
/
├── public/               # Static assets
├── src/
│   ├── assets/           # Project images and GIFs
│   ├── components/       # Reusable React components (e.g., Navbar)
│   ├── App.jsx           # Main application component and logic
│   ├── main.jsx          # Entry point of the React application
│   └── output.css        # Compiled Tailwind CSS file
├── .gitignore            # Files to be ignored by Git
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
└── README.md             # You are here!
```

## 📝 A Note on Assets

The current version of the navigation bar uses externally linked images for the logo and theme-toggle icons. For long-term stability and better performance, it is recommended to download these assets and serve them locally from the `src/assets` or `public` directory.


