# Team Profile Directory

This repository contains my **React Class 1 Assignment**, completed in two versions as required:

- **AI Assisted Version**
- **Manual Version**

Both versions are built using **React + Vite** and demonstrate the core React concepts taught in Class 1, including component composition, props, the `children` prop, prop drilling, and reusable components.

---

# Project Structure

```
team_directory
│
├── AI VERSION
│   └── improved
│
├── manual version
│   └── manual
│
└── README.md
```

---

# Project Links

## Live Demos

### AI Version
https://team-directory-h0drd40i5-ayeshhh.vercel.app

### Manual Version
https://team-directory-92od-bdviyblve-ayeshhh.vercel.app

---

## Loom Walkthrough

[Watch Loom Video](https://www.loom.com/share/2cde967d57084025869c09b9c0b9c145)

---
# Technologies Used

- React
- Vite
- JavaScript (ES6)
- JSX
- CSS
- npm

---

# React Concepts Demonstrated

## Component Composition

The application is divided into reusable components.

```
App
│
├── Section
│
├── Card
│
├── TeamMember
│
└── SkillBadge
```

Each component has a single responsibility, making the project easier to organize, maintain, and reuse.

---

## Props

Props are used to pass data from parent components to child components.

Examples include:

- Name
- Role
- Age
- Skills
- Address
- Follow Button Function

This allows the same component to display different team members without rewriting code.

---

## Children Prop

The `Section` and `Card` components use the `children` prop.

Instead of knowing what content they contain, they simply render whatever is placed between their opening and closing tags.

Example:

```jsx
<Card>
  <TeamMember />
</Card>
```

Using `children` makes these wrapper components reusable for different content.

---

## Prop Drilling

The **Follow** button function is created in the `App` component.

It is passed through intermediate components until it reaches the `TeamMember` component, where it is executed when the button is clicked.

This demonstrates prop drilling without using React Context or state management.

---

## JSX Rules Followed

- Used `className` instead of `class`
- Used self-closing tags where required
- Returned a single root element from each component
- Used the `key` prop while rendering lists with `.map()`

---

# Running the Project

## AI Version

```bash
cd "AI VERSION/improved"
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Manual Version

```bash
cd "manual version/manual"
npm install
npm run dev
```

Runs on:

```
http://localhost:5174
```

(Vite automatically uses another port if 5173 is already in use.)

---

# Production Build

```bash
npm run build
npm run preview
```

---

# Folder Structure

```
src
│
├── components
│   ├── Card
│   ├── Section
│   ├── SkillBadge
│   └── TeamMember
│
├── data
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

