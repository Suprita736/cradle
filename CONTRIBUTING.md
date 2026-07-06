# Contributing

First of all, thank you for your interest in contributing to **Cradle**! 🎉

Cradle is a collection of small ideas, experiments, lightweight prototypes, and geeky projects built for learning, exploration, and sharing. Whether you're fixing a bug, improving documentation, adding a new project, or enhancing an existing one, every contribution is appreciated.

Please take a few minutes to read these guidelines before getting started.

---

# Code of Conduct

By participating in this project, you agree to follow our.

Please be respectful, constructive, and welcoming to everyone in the community.

---

# Ways to Contribute

You can contribute in many ways, including:

* 🐞 Fixing bugs
* ✨ Adding new projects or experiments
* 📖 Improving documentation
* 🎨 Enhancing UI/UX
* ⚡ Performance improvements
* 🛠️ Refactoring existing code
* 💡 Suggesting new ideas and features

Every contribution, no matter how small, is valuable.

---

# Before You Start

Before beginning work on an issue, please:

* Search existing issues to avoid duplicate work.
* Read the project documentation.
* Request assignment if required by the maintainers.
* Wait for the issue to be assigned before starting.
* Work on only one issue at a time.
* Keep your Pull Request focused on a single feature or fix.

For major features or architectural changes, please open an issue first to discuss your proposal.

---

# Getting Started

## 1. Fork the Repository

Click the **Fork** button at the top-right of the GitHub repository.

---

## 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/cradle.git
cd cradle
```

---

## 3. Create a New Branch

Always create a new branch before making changes.

```bash
git checkout -b feature/your-feature-name
```

Examples:

```text
feature/add-weather-widget
feature/new-project-showcase
fix/project-card-alignment
docs/update-contributing-guide
```

---

## 4. Run the Project

Since Cradle is a static website, you can either:

Open the `index.html` file directly in your browser.

or start a local development server:

```bash
python -m http.server 8000
```

Then visit:

```
http://localhost:8000
```

Some individual projects may have their own setup instructions. Please refer to the README inside that project folder.

---

# Repository Structure

```
Cradle/
│
├── data/
│   └── projects.json
│
├── projects/
│   ├── ai-ml/
│   ├── devtools/
│   ├── games/
│   └── productivity/
│
├── scripts/
│   └── generate-projects.js
│
├── README.md
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── index.html
├── script.js
└── style.css
```

---

# Adding a New Project

If you are adding a new project:

* Place it inside the appropriate category under `projects/`.
* Include a `README.md` explaining:

  * Project overview
  * Features
  * Installation (if needed)
  * Usage instructions
* Keep projects self-contained.
* Include dependency files if required (`package.json`, `requirements.txt`, etc.).
* Ensure the project can be run using the provided instructions.

---

# Coding Guidelines

Please follow the existing coding style throughout the repository.

* Write clean, readable, and maintainable code.
* Use meaningful file and variable names.
* Keep code modular whenever possible.
* Avoid unnecessary changes unrelated to your contribution.
* Remove unused code before submitting.
* Update documentation whenever your changes affect usage or functionality.

---

# Documentation Guidelines

Documentation is just as important as code.

You can contribute by:

* Improving explanations
* Fixing grammar or spelling
* Updating outdated information
* Adding missing setup instructions
* Providing examples where helpful

---

# Commit Message Guidelines

Use clear and descriptive commit messages.

Examples:

```text
feat: add portfolio project card

fix: resolve mobile navigation issue

docs: add contributing guidelines

style: improve landing page spacing

refactor: simplify project filtering logic
```

Avoid commit messages like:

```text
update

changes

fix

misc
```

---

# Testing

Before submitting your Pull Request:

* Verify the project runs correctly in your browser.
* Check that your changes do not break existing functionality.
* Test responsive layouts if you modified the UI.
* Ensure links and documentation render correctly.

---

# Pull Request Guidelines

Before opening a Pull Request, make sure that:

* Your branch is up to date.
* Your changes are focused on a single issue.
* Documentation has been updated if required.
* The project runs successfully after your changes.

Your Pull Request should include:

* A clear description of the changes.
* The motivation behind the changes.
* Any testing performed.
* Reference to the related issue using:

```text
Fixes #<issue_number>
```

If your Pull Request contains UI changes, please include screenshots.

---

# Reporting Bugs

When reporting a bug, please include:

* A clear description of the issue.
* Steps to reproduce.
* Expected behavior.
* Actual behavior.
* Browser and operating system.
* Screenshots or console logs, if applicable.

Providing detailed information helps maintainers reproduce and resolve issues more efficiently.

---

# Suggesting Features

Feature suggestions are always welcome.

Please include:

* The problem your feature solves.
* Your proposed solution.
* Possible alternatives.
* Additional context or examples.

---

# Need Help?

If you have any questions before contributing, feel free to open an issue or start a discussion.

The maintainers and community are happy to help.

---

# Thank You

Thank you for taking the time to contribute to **Cradle**.

Your contributions help make this repository a better place for learning, experimentation, and collaboration.

Happy Coding! 🚀
