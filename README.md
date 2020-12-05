# Burger Map

Create-React-App to show burger locations on a Map.

Special thank's to [Ania Kubow's](https://github.com/kubowania) who provides the [burger-api](https://github.com/kubowania/burger-api) for this project.
You can find her video tutorial [here](https://www.youtube.com/watch?v=FLnxgSZ0DG4&feature=youtu.be) and visit the live API [here](https://my-burger-api.herokuapp.com/burgers).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Development

### MapBox

To get MapBox API running you need to register at https://www.mapbox.com/ and generate an api token.

copy dist env with command `cp .env.dist .env` and replace REACT_APP_MAPBOX_TOKEN with your generated token.

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

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
