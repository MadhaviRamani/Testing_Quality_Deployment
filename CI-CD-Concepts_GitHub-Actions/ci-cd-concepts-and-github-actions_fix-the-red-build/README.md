# Fix the Red Build

(difficulty: 🔥🔥)

This project has a workflow in `.github/workflows/ci.yml`, but the pipeline is red. Your job is to find out why **from the logs on GitHub** and to fix it.

## Put the project on GitHub

GitHub Actions only runs for a project that lives in a GitHub repository, and the folder you downloaded has to be the **root** of that repository (the `.github` folder has to be at the top level).

1. Run `git init -b main` in the project folder.
2. Create a new **public** repository on GitHub (branch protection for free accounts only works in public repositories). Do not add a README, `.gitignore` or license.
3. Connect and push:
   ```sh
   git add .
   git commit -m "Initial commit"
   git remote add origin <url-of-your-repository>
   git push -u origin main
   ```
4. Open the **Actions** tab of your repository.

> 💡 The `.github` folder is hidden on macOS and Linux. Use `ls -a` in the terminal or enable hidden files in your editor.

## Tasks

1. Push the project to GitHub. The workflow fails.
2. Open the run, open the failed job and read the log. Find the first red step and read the error message to the end. Write down in one sentence what is wrong.
3. Fix the problem on a new branch, push it and open a pull request. Look at the check of the pull request.
4. The pipeline stops at the first failing step. There is more than one problem. Repeat steps 2 and 3 until the pull request is green. In total, there are **three** different problems, and each one fails in a different step.
5. After every fix, answer: could I have found this before I pushed? Which command would have shown it?

### Hints

- You only need to change what the log tells you to change. Do not change the workflow file.
- A failing step is often easier to understand on your machine. Run the command from the failed step locally.
- A lock file is part of the code. If it changes, commit it.

## Development

Install the dependencies with `npm i` first (Node.js 22.22 or newer is required). These are the scripts the pipeline uses, you can run all of them locally:

- `npm run test` runs the tests in the watch mode, `npm run test:run` runs them once
- `npm run check` checks the types (`tsc --noEmit`)
- `npm run build` compiles the project to `dist`
- `npm run coverage` runs the tests with a coverage report
