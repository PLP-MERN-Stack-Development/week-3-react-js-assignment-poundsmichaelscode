https://vercel.com/olayenikan-michael-s-projects/task-manager-app/AVzjbqzmZCU1YdNtxAM7Cj8eFCwL





## 📝 PLP Task Manager

A responsive React application built using Vite and Tailwind CSS that demonstrates:

* ✅ Component architecture
* ✅ State management with hooks
* ✅ API integration
* ✅ Light/Dark theme using context
* ✅ Local storage persistence using a custom hook

---

### 📁 Project Structure

```
src/
├── components/        # Reusable UI components (Navbar, Footer, Layout)
├── hooks/             # Custom hooks (e.g., useLocalStorage)
├── pages/             # Route-based pages (Home, TaskManager, ApiViewer)
├── context/           # Theme context for dark mode
├── App.jsx            # Route definitions
├── main.jsx           # Entry point
├── index.css          # TailwindCSS styles
```

---

### 🚀 Getting Started

#### 1. Clone the repo


git clone https://github.com/your-username/plp-task-manager.git
cd plp-task-manager

#### 2. Install dependencies

npm install


#### 3. Start the development server


npm run dev


Open https://vercel.com/olayenikan-michael-s-projects/task-manager-app/AVzjbqzmZCU1YdNtxAM7Cj8eFCwL  to view the app.



### 🔧 Features

| Feature               | Description                                                             |
| --------------------- | ----------------------------------------------------------------------- |
| 🧱 Component Reuse    | Custom Button, Card, Navbar, Footer, Layout                             |
| 🧠 State Management   | React `useState`, `useEffect`, and `useContext` for theme control       |
| 💾 Local Storage Hook | Custom `useLocalStorage` hook to persist tasks                          |
| 🌐 API Integration    | Fetch and display data using `fetch()` from JSONPlaceholder             |
| 🎨 Dark Mode          | Toggle between light and dark mode with Tailwind's dark variant support |
| 📱 Responsive Design  | Built with mobile-first design principles using Tailwind CSS            |



### 🔍 Pages Overview

* **Home:** Welcome screen with a counter and navigation buttons
* **TaskManager:** Create, complete, delete, and filter tasks (with localStorage)
* **API Viewer:** View data fetched from an external API with search and loading states



### 🛠 Tech Stack

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Router](https://reactrouter.com/)
* [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)



### 🌗 Light/Dark Theme

Implemented using React Context and Tailwind's `dark` variant. The theme persists across sessions.



### 📄 License

This project is open-source and available under the [MIT License](LICENSE).







