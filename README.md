# ecosystem Monorepo

## Project structure

- apps
  - `fe-participant-portal` - A portal for users to manage their profile and account settings.
- libs
  - `design-system` - The component library for ecosystem's design system, Design System.
## Software

### Required

- [yarn](https://yarnpkg.com/)
  - [@angular/cli](https://www.npmjs.com/package/@angular/cli)
  - [@nrwl/cli](https://www.npmjs.com/package/@nrwl/cli)

### Recommended

- [Visual Studio Code](https://code.visualstudio.com/)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
  - [Jest Runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)
  - [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Git workflow

### Commits

We follow the _Conventional Commits_ spec, enforced by [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky). For example, a commit message needs to look something like this:

```
feat(design-system-core): extend common behaviours
```

You can view the full [Conventional Commits spec](https://www.conventionalcommits.org/en/v1.0.0/) for more details.
