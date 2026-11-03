# More Automation

(difficulty: 🔥🔥)

The workflow of this project works, but it does everything in one job. Make it better.

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

Change `.github/workflows/ci.yml` step by step. Push after every step and look at the result in the Actions tab.

1. **Separate jobs:** Split the job into three jobs: `check` (types), `test` and `build`. Every job needs the code, Node.js and the dependencies. What do you see in the Actions tab? Which jobs run at the same time?
2. **Dependencies between jobs:** `build` should only start when `check` and `test` have succeeded (`needs`). Break a test and look at what happens to `build`.
3. **Manual runs:** Add `workflow_dispatch` and start the workflow from the Actions tab with the button **Run workflow**.
4. **Artifacts:** `npm run coverage` creates a `coverage` folder. In the `test` job, run the tests with coverage and upload the folder as an artifact. In the `build` job, upload `dist`. Download an artifact from the run page.

## Development

Install the dependencies with `npm i` first (Node.js 22.22 or newer is required). These are the scripts the pipeline uses, you can run all of them locally:

- `npm run test` runs the tests in the watch mode, `npm run test:run` runs them once
- `npm run check` checks the types (`tsc --noEmit`)
- `npm run build` compiles the project to `dist`
- `npm run coverage` runs the tests with a coverage report
