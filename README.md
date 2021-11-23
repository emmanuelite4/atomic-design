# Getting Started with Create React App

An atomic design structure for react application

## Core tools

1. [React](https://reactjs.org/)
2. [Typescript](https://www.typescriptlang.org/)
3. [Storybook](https://storybook.js.org/)
4. [Tailwind](https://tailwindcss.com/)
5. [Redux](https://react-redux.js.org/)

## Architecture

Atomic Design Structure

## SRC folder structure

- [app](#app)
- [atoms](#atoms)
- [molecules](#molecules)
- [organisms](#organisms)
- [templates](#templates)
- [pages](#pages)

### App

The app folder contains App.tsx which is the entry point to the whole application. Also, it contains the application
main logic (redux), in the app folder, we have the following.

- App.tsx
- Store (redux store)
- Root Redux (redux reducer)
- All other slice (Slices for each feature)

### Atoms

Atom is the smallest independently existing elements. The following are the components are present in the atoms

- Button
- Input

### Molecules

The molecules component contains the combination of two or more components from atoms folder The following components
are present in the molecules.

- Search Field: which contains the Input and button components.

### Organisms

The organisms contain both atom and molecule components. It is where the app logic are implemented. The atoms and
molecules components do not contain any logic The organism contains the following component.

- LoginForm
- SignupForm

### Templates

The template contains

- LoginForm and page title
- SignupForm and page title

### Pages

The pages contain 2 or more templates.

- UserAuth (Login and Signup Templates).

## Commands

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `yarn run storybook`

To run storybook on the app Open [http://localhost:6006/] to view it in the browser.