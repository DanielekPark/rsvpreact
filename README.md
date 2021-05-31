# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

React Rsvp

This is a rvsp application to help keep track of invited guests, however it was targeted to be used for front end and not have any data sent to a database. It keeps track of the names of guests when submitted and provides visual feedback on the guests that are confirmed and unconfirmed.

The original project was from https://teamtreehouse.com/home , which utilized React's class based components. This project utilizes React hooks, and has similar features in functionality and some CSS differences compared to the original (colors of the buttons and background image was changed). Furthermore it is able to edit, add, and remove guests based off button clicks. When the checkbox is checked it can hide guests that didn't respond.

Some of the differences between the original and this repository, is when editing a guest name the guest name is displayed on the input field on the picture while the original project provides an input field where the guest name was. Another difference with the original project is when typing into the top input field it displays a preview of where the name will be placed, while this project doesn't provide that feature. With this website it receives CSS styling which sets the guest tiles to visibility hidden, with the original it sets the guest style to display: none.

One of the challenges with this site was that I was unable to implement was providing an input field with the guest name when the edit button was clicked. This feature will be implemented in the future, however to have a editing feature the top input field is used instead to edit names.

There were some bugs that were encountered, such as attempting to delete the name of guest while editing, and when trying to edit a guest name and then moving to edit another name of a guest. Please see lines 62 and 72 of App.js. In order to address these issues the function was exited and a alert box was displayed. Please follow this link if you are unfamiliar with alert boxes. https://www.w3schools.com/jsref/met_win_alert.asp

To run the project please make sure Node Js and NPM is installed, afterwards please follow these steps:
On Mac open the terminal, or if you're using a Windows open the command prompt type the following commands:
cd react_rsvp (react_rsvp is the file you downloaded or cloned)
npm install
npm start

I hope these descriptions and instructions are helpful HAPPY CODING!!!
