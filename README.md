# Team Profile Directory — React Class 1 Assignment

A React + Vite implementation of the Class 1 Team Profile Directory
assignment, submitted in two versions as required: one built with AI
assistance, one built manually. Both cover component composition, props,
the `children` prop, and prop drilling — **no `useState`**, since state
management is Class 2 material.

| Folder | Description |
|---|---|
| [`AI VERSION/improved`](./AI%20VERSION/improved) | Built with AI assistance |
| [`manual version/manual`](./manual%20version/manual) | Built manually, without AI assistance |

---

## Links

| | AI Version | Manual Version |
|---|---|---|
| **Live Demo (Vercel)** | \<paste-your-vercel-ai-link-here> | \<paste-your-vercel-manual-link-here> |
| **Loom Walkthrough** | \<paste-your-loom-link-here> | \<paste-your-loom-link-here> |

---

## Theory

### Component Composition
```
App
 └── Section (wrapper, uses children)
      └── Card (wrapper, uses children)
           └── TeamMember
                └── SkillBadge
```
Each component has one job. `Section` and `Card` don't know anything
about team members — they just render whatever is passed into them via
`children`. `TeamMember` doesn't know how it's wrapped — it receives
data through props and renders it. This is what makes `Card` reusable:
it could wrap anything, not just a `TeamMember`.

### Props — all 6 core JS types demonstrated
| Type | Example prop | Passed to |
|---|---|---|
| `string` | `name`, `role` | `TeamMember` |
| `number` | `age` | `TeamMember` |
| `boolean` | `isAdmin` | `TeamMember` |
| `array` | `skills` | `TeamMember` → mapped into `SkillBadge` |
| `object` | `address` | `TeamMember` |
| `function` | `onFollow` | `TeamMember` (called on button click) |

### The `children` Prop
`Card` and `Section` never declare what they wrap — they accept
`children` and render `{children}` wherever it belongs. That's what
makes `<Card><TeamMember /></Card>` work: whatever is nested between a
component's opening and closing tags becomes its `children`.

### Prop Drilling
`onFollow` is defined once in `App.jsx`, then passed down through
intermediate components to `TeamMember`, which calls it when Follow is
clicked — data/behavior defined at the top of the tree, threaded down to
where it's actually used.

> **Note:** in the AI version, `onFollow` is passed App → `Card` →
> `TeamMember`, with `Card` forwarding it along. Double-check the manual
> version follows the same two-layer path rather than passing `onFollow`
> straight from `App` to `TeamMember`, since that's what this section of
> the rubric is specifically checking for.

### JSX Rules Followed
- `className` instead of `class` (avoids clashing with the JS reserved word)
- Self-closing tags (`<img />`, `<input />`) — JSX requires every element to be explicitly closed
- One root element per component (or a Fragment `<>...</>`)
- `key` prop on every list item rendered via `.map()`, so React can track additions/removals efficiently

---

## Running either version

Both folders are independent Vite projects.

### AI-assisted version
```bash
cd "AI VERSION/improved"
npm install
npm run dev
```
Opens at `http://localhost:5173`

### Manual version
```bash
cd "manual version/manual"
npm install
npm run dev
```
Opens at `http://localhost:5174` (Vite auto-bumps the port if 5173 is
already taken by the AI version)

Do **not** open `index.html` directly from the file system — both
projects rely on Vite's dev server to compile JSX.

## Building for production

From inside either project folder:
```bash
npm run build
npm run preview
```

## Folder structure (same shape in both versions)
```
src/
├── components/
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── Card.css
│   ├── Section/
│   │   ├── Section.jsx
│   │   └── Section.css
│   ├── TeamMember/
│   │   ├── TeamMember.jsx
│   │   └── TeamMember.css
│   └── SkillBadge/
│       ├── SkillBadge.jsx
│       └── SkillBadge.css
├── data/
│   └── team.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
