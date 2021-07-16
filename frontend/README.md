# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Steps
Redux is made up of actions, reducers, state and the store. Each thing does one specific task.
Dispatch is a function given to us by Redux, and lets us trigger actions.

The action contains a type, and a payload. The type is typically just a string with the name of the action. The payload contains data we need to know about. For example, we can’t deposit any money without knowing the amount

The store receives the action, and is in charge of holding the state. Think of it like a database, in a sense that it holds all our data in one place

The store is also in charge of updating the state based on the action and the current state which it does by using reducers.

A reducer sounds fancy but its just a function that takes the current state from the store, and the action. It combines things together and returns the new state.
it takes the old state and the action, does some work, and spits out the new state.

The store then saves this new state which is returned from the reducer and passes the state to the components. This causes them to re-render, displaying the new data.
1. install bootstrap
   npm install bootstrap & import in app.js
2. add react router for redux
   npm install react-router-dom
   app.js / 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
  wrap all ui elements ny <Router></Router>
3. Added Nav Bar
4. npm install axios 
Initialize axios (axiosInitialize.js) to communicate with backend api. https://www.digitalocean.com/community/tutorials/react-axios-react
  ~~Many projects on the web need to interface with a REST API at some stage in their development. Axios is a lightweight HTTP client based on the $http service within Angular.js v1.x and is similar to the native JavaScript Fetch API.~~
  5.Begin CRUD actions 
   Use of actions https://stackoverflow.com/questions/43831494/when-why-and-how-to-use-action-creators-in-redux
