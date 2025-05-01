# 🧪 Git Workflow with GitKraken (main, staging, dev + feature branches)

This tutorial guides you through a standard Git workflow using GitKraken with the `main`, `staging`, and `dev` branches.

---

## 🔧 Branch Structure

- `main`: Production-ready code
- `staging`: Pre-release testing
- `dev`: Active development
- `feature/*`: Short-lived branches for new work

---

## ✅ 1. Checkout the `dev` Branch

1. Open GitKraken
2. In the **left panel**, find the `dev` branch
3. Right-click → **Checkout `dev`**

---

## 🪄 2. Create a New Feature Branch

1. Click the `+ Branch` button (top toolbar)
2. Name the new branch `feature/<your-feature-name>`
3. Confirm the base branch is `dev`
4. Click **Create Branch** (and optionally **Checkout**)

---

## 💻 3. Make Changes and Commit

1. Work on your files
2. GitKraken will show modified files in the left panel
3. Stage changes
4. Write a commit message and commit

Repeat as needed.

---

## 🔁 4. Merge Feature Branch into `dev`

1. Checkout `dev`
2. Drag `feature/your-branch` onto `dev`
3. Select **Merge**
4. Resolve any merge conflicts if needed
5. Commit the merge

---

## ☁️ 5. Push Changes to Remote

1. Right-click `dev` → **Push**
2. Or click the push icon next to the branch

---

## 🚀 6. Promote Changes (Staging → Main)

After testing and review:

- Merge `dev` → `staging`
- Merge `staging` → `main`

Use drag-and-drop in GitKraken to perform merges.

---

## 🧼 7. Clean Up Feature Branch

1. Right-click on the feature branch
2. Select **Delete Branch (Local/Remote)**

---

## 🎯 Summary Workflow

```bash
dev → feature/new-thing → dev → staging → main
