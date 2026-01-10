# Frontend Developer Test – Tree View & Kanban Board

This project is a complete solution for a **Frontend Developer practical test**, built using **React + TypeScript**.  
It demonstrates component-driven architecture, clean UI/UX, state management, drag-and-drop interactions, and responsive design.

---

## 🚀 Live Demo
👉 (Add your Vercel / Netlify deployed link here)

---

## 📦 Features Overview

### 🌳 Tree View Component
- Expand / collapse tree nodes
- Lazy loading of child nodes (simulated async API)
- Inline editing of node names
- Delete nodes with confirmation (entire subtree removal)
- Reusable and scalable tree data model
- Clean indentation & smooth UI interactions

---

### 🧩 Kanban Board Component
- Three default columns:
  - Todo
  - In Progress
  - Done
- Add & delete cards
- Inline card title editing
- Drag & drop support using **Dnd Kit**
- Preserves card order within columns
- Fully responsive layout (mobile + desktop)

---

## 🛠️ Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **@dnd-kit** (drag & drop)
- **CSS (modern, responsive, animated UI)**

---

## 🧠 Architecture

src/
│── components/
│ ├── TreeView.tsx
│ ├── KanbanBoard.tsx
│
│── App.tsx
│── main.tsx
│── style.css


- Component hierarchy is clean and reusable
- State managed locally using React hooks
- Easily extendable for API integration or global state

---
🌐 Deployment

This project is optimized for Vercel deployment.
https://frontend-test-solution-hv6t.vercel.app/


## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Virendra-Verma/frontend-test-solution.git
cd frontend-test-solution

2️⃣ Install dependencies
npm install

3️⃣ Run locally
npm run dev

4️⃣ Build for production
npm run build

