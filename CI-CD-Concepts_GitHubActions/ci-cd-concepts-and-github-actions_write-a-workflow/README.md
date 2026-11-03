# Write a Workflow

(difficulty: 🔥)

`text-utils` is a small TypeScript library with tests, a type check and a build. Your job is to write the pipeline for it.

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

1. Create `.github/workflows/ci.yml`. The workflow is called `CI` and runs on every push to `main` and on every pull request.
2. It has one job on `ubuntu-latest` with these steps, each with a `name`:
   1. check out the code
   2. set up Node.js 22 with the npm cache
   3. install the dependencies with `npm ci`
   4. check the types (`npm run check`)
   5. run the tests (`npm run test:run`)
   6. build the project (`npm run build`)
3. Push to `main` and open the run in the **Actions** tab. Open the job and look at the log of every step. Which step is the slowest?
4. Push a second commit and compare the time of the install step. Was the cache used?
5. Create a branch, break a test on purpose, push it and open a pull request. Look at the checks at the bottom of the pull request. Fix the test and watch the check turn green.
6. Add the status badge of the workflow to the top of this README. You find it in the Actions tab under the three dots of the workflow ("Create status badge").
7. **Bonus:** In the repository settings (`Settings` → `Branches`), add a rule for `main` that requires the status check of your job before merging. Try to merge the pull request with the broken test.

> 💡 If you get stuck: run the steps in the terminal first. If a step fails on your machine, it will fail in the pipeline too.

## Development

Install the dependencies with `npm i` first (Node.js 22.22 or newer is required). These are the scripts the pipeline uses, you can run all of them locally:

- `npm run test` runs the tests in the watch mode, `npm run test:run` runs them once
- `npm run check` checks the types (`tsc --noEmit`)
- `npm run build` compiles the project to `dist`
- `npm run coverage` runs the tests with a coverage report
