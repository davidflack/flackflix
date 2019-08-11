# [FlackFlix](https://flackflix.netlify.com)

An app for movie lovers to learn more about their favorite films from information provided by [The Movie Database](https://www.themoviedb.org/).

### Key Features

- Users can browse a vast catalogue of movies in the main categories "Now Playing," "Popular," and "Top Rated."
- Users can view details about specific movies, including: cast, crew, reviews, and more.
- Users can search the Movie Database using custom search queries

## Technology Stack

#### React

- Virtual DOM provides better performance than other alternatives, such as JQuery
- Built and maintained by Facebook, meaning there is a vast ammount of community support and documentation
- Hugely popular amongst front-end enginners. Plenty of libraries available to provide additional functionality.

#### Scss

- Visual hierarchy mimics the hierarchy of html/jsx tags
- Ability to use styling variables and mixins throughout the entire application.
- Provides separation of concerns relative to other CSS in JS libraries; styling happens in `.scss` files.

## External API's

#### [The Movie Database](https://www.themoviedb.org/)

- Developer API used to retrieve massive amounts of movie data
- Data from this API powers the entirety of FlackFlix

## Environment Variables

```
REACT_APP_API_KEY - This is an API key provided by the Movie Database. Learn more here: https://www.themoviedb.org/documentation/api
```

## Repository Structure

#### `flackflix/src/assets`

- Location for images used in the application

#### `flackflix/src/components`

- Contains React components used throughout the application.
- These components may appear in several different areas of the application. For example, `MovieList` is used to build the Popular, Top Rated, and Now Playing views. It also is used to build the "More like this" and "Recommended" sections of the movie details view.
- Each component directory contains an `index.js` file for functionality, and a `.scss` file for styling.
- Whenever necessary, each `index.js` file contains a `propTypes` object which delineates the necessary props for a component to function properly.

#### `flackflix/src/hooks`

- Contains any custom React Hooks

#### `flackflix/src/main-styles`

- Hub for the primary `.scss` files
- Includes global styles, variables, and imports of component styling folders.

#### `flackflix/src/variables`

- Contains variables used for ease of configuration, such as base URL's for movie poster images.

#### `flackflix/src/views`

- Hub for different sections of the application from a user's perspective. (Example: "This is where I can view a movie's cast list." "This is where I can see related movies." "This is where I can see movies in theaters now.")
- Components inside `flackflix/src/components` serve as the building blocks for the views.
- Whenever necessary, each `index.js` file contains a `propTypes` object which delineates the necessary props for a component to function properly.
