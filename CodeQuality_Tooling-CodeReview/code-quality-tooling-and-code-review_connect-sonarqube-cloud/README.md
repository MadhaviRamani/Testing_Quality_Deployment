# Connect SonarQube Cloud

(difficulty: 🔥)

The order service is clean and tested, and its `ci.yml` checks formatting, types, tests and lint. Your job is to add SonarQube Cloud to your own repository.

## Put the project on GitHub

The folder you downloaded has to be the **root** of your repository (the `.github` folder has to be at the top level, `ls -a` shows it).

1. Run `git init -b main` in the project folder.
2. Create a new **public** repository on GitHub. Do not add a README, `.gitignore` or license.
3. Connect and push:
   ```sh
   git add .
   git commit -m "Initial commit"
   git remote add origin <url-of-your-repository>
   git push -u origin main
   ```

## Tasks

1. Push the project and wait until the `CI` workflow is green.
2. Connect the repository to SonarQube Cloud (steps below), but do **not** add the workflow yet. Open the project in SonarQube Cloud: what does it say?
3. Create `sonar-project.properties` in the root of the repository. It needs the organization key, the project key, the folder with the sources, the tests and the location of the coverage report (`sonar.javascript.lcov.reportPaths`). Tests must not be part of the sources: exclude them with `sonar.exclusions`. `src/types.ts` only contains types and has nothing to execute: leave it out of the coverage with `sonar.coverage.exclusions`.
4. Create `.github/workflows/sonar.yml`. It runs for every push to `main` and for pull requests (`opened`, `synchronize`, `reopened`). It checks out the code with `fetch-depth: 0`, sets up Node.js, installs the dependencies, runs `npm run coverage` and then runs `SonarSource/sonarqube-scan-action@v8` with the secret `SONAR_TOKEN`.
5. Push to `main` and open the first analysis in SonarQube Cloud. Look at the overview: coverage, issues, duplications, security hotspots. Is the quality gate green?
6. Create a branch, change something small (for example introduce an unused variable), push it and open a pull request. Where do you see the result of SonarQube Cloud on the pull request?
7. Add the quality gate as a **required status check** in the branch protection of `main` (`Settings` → `Branches`), as you learned in CI/CD Concepts and GitHub Actions.
8. **Bonus:** Add the quality gate badge to the README of your repository (`Information` → `Badges` in SonarQube Cloud).

## Connect the repository to SonarQube Cloud

SonarQube Cloud (formerly SonarCloud) is free for public repositories.

1. Open [sonarcloud.io](https://sonarcloud.io) and log in with your GitHub account.
2. Create an organization for your GitHub account (the free plan is enough) and import your repository.
3. When SonarQube Cloud asks for the **analysis method**, choose **With GitHub Actions** (CI-based analysis). If automatic analysis is switched on for the project, switch it off under `Administration` → `Analysis Method`. Automatic analysis cannot import test coverage.
4. Create a token in SonarQube Cloud (`My Account` → `Security`) and save it in your GitHub repository as a secret named `SONAR_TOKEN` (`Settings` → `Secrets and variables` → `Actions`).
5. Put the **organization key** and the **project key** of your project into `sonar-project.properties`.

## Development

Install the dependencies with `npm i` first (Node.js 22.22 or newer is required).

- `npm run test` runs the tests in the watch mode, `npm run test:run` runs them once
- `npm run coverage` runs the tests and writes a coverage report to `coverage` (`coverage/lcov.info` is the file SonarQube Cloud reads)
- `npm run check` checks the types
- `npm run lint` runs ESLint, including rules from `eslint-plugin-sonarjs` that are similar to SonarQube rules
- `npm run format` formats the code with Prettier, `npm run format:check` only checks it
