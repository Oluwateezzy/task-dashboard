# Task Management Dashboard
A React-based **Single Page Application (SPA)** that simulates a simplified dashboard for managing customer tasks.  
This project demonstrates state management, API integration, filtering, sorting, and updating tasks.

---

## Features
- Fetch tasks from a mock API using `json-server`
- Display tasks in a dashboard
- Filter tasks by **status** (Pending, In Progress, Completed)
- Sort tasks by **due date**
- View task details in a modal
- Update task status (state updates and mock API persistence)
- Responsive design for desktop and mobile
- Includes unit tests using **Jest** and **React Testing Library**

---

## Tech Stack
- **React** (Functional Components, Hooks)
- **TypeScript**
- **React Router** (for navigation)
- **Axios** (for API calls)
- **Styled Components** (for styling)
- **json-server** (for mocking API)
- **Vitest & React Testing Library** (for unit tests)

---

## Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Oluwateezzy/task-dashboard
cd task-dashboard
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Start Mock API Server
```sh
npx json-server --watch db.json --port 5000
```
- The API runs at http://localhost:5000
- Available Endpoints:
     - GET /tasks → Fetch all tasks
     - PATCH /tasks/:id → Update a task

### 4️⃣ Start the React App
```sh
npm run dev
```

## How to Use
- View Tasks: The dashboard lists all tasks.
- Filter & Sort: Use the dropdowns to filter by status or sort by due date.
- Task Details: Click a task to view more details.
- Update Task: Change task status using the dropdown.

## Design Decisions
- Component-Based Architecture:
  The application follows a modular design with reusable components:
  - SearchBar: Handles searching tasks by title/description.
  - TaskTable: Displays task list and handles loading states.
  - TaskModal: Provides a modal interface for viewing and updating tasks.

- State Management
  State is managed using React hooks (useState, useEffect). The task data is fetched and stored in local state.
    
- API Handling
  - Axios is used with a custom instance (lib/axiosInstance.ts) for better maintainability.
  - Mock API requests are simulated using json-server.

- Styling Approach
  - Styled Components is used for modular CSS.

## Design Decisions
- Mock API vs. Real Backend: A mock service is used instead of a backend for simplicity. In a production environment, an actual API would replace this.
- Minimal State Management Library: Instead of Redux or Zustand, React's built-in state is used to avoid unnecessary complexity.

## Running Tests
### Unit tests are written using Vitest and React Testing Library.
### To run unit tests:
```sh
npm test
```
