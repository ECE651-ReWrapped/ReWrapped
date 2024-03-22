# Getting Started with Rewrapped:

Clone the code with your personal access token and run the following commands to get started.

## Available Scripts

In the project directory, you can run:

### `yarn`

To install all the relevant packages with correct version, use yarn alone as i would have locked all the package versions in yarn lock. Dont use npm or pnpm.

### .env

In order to properly setup the frontend repo to work with the backend repo please have the following information in your .env file within the ReWrapped source directory

```
REACT_APP_BUILD_TYPE=LOCAL
REACT_APP_API_LOCAL=YOUR_SERVER_URL
REACT_APP_SPOTIFY_CLIENT_ID="Spotify_Client_String"
REACT_APP_SPOTIFY_CLIENT_SECRET="Spotify_Client_Secret"
```

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
