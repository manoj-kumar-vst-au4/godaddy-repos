# GoDaddy Repositories Viewer

This project is a React-based web application that fetches and displays a list of repositories from GoDaddy's GitHub organization. Users can click on a repository to view more details, such as the description, programming language, forks, open issues, and watchers.

## 🚀 Features
- Fetches repository data from [GitHub API](https://api.github.com/orgs/godaddy/repos)
- Displays a list of repositories
- Provides detailed information on each repository
- Error handling and loading states
- Unit tests for API and components

## 📦 Tech Stack
- **React + Vite** → Fast development environment
- **React Router** → Client-side navigation
- **Axios** → API requests
- **Vitest & React Testing Library** → Unit tests
- **ESLint** → Code quality enforcement

---

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js (>= 16.0.0)**
- **npm (>= 8.0.0)**

### 1️⃣ Clone the repository
```sh
git clone https://github.com/manoj-kumar-vst-au4/godaddy-repos.git
cd godaddy-repos
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Start the development server
```sh
npm run dev
```
This will start a local server, typically at `http://localhost:5173/`.

### 4️⃣ Run Tests
```sh
npm run test
```

---

## 🎯 Design Decisions
1. **API abstraction**: API requests are moved to `api.js` for modularity.
2. **React Router**: Enables client-side navigation between repo list and details.
3. **Testing coverage**: API and UI components have unit tests.

---

## 📜 License
This project is licensed under the **MIT License**.



