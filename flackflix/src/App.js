import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./views/Landing";
import Popular from "./views/Popular";
import TopRated from "./views/TopRated";
import NowPlaying from "./views/NowPlaying";
import ErrorPage from "./views/ErrorPage";
import NavBar from "./components/NavBar";
import MovieDetails from "./views/MovieDetails";
import SearchResults from "./views/SearchResults";

import "./main-styles/App.scss";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Route path="/popular" render={props => <Popular {...props} />} />
        <Route path="/top-rated" render={props => <TopRated {...props} />} />
        <Route
          path="/now-playing"
          render={props => <NowPlaying {...props} />}
        />
        <Route
          path="/movie/:movieId"
          render={props => <MovieDetails {...props} />}
        />
        <Route
          path="/search/:searchQuery"
          render={props => (
            <SearchResults
              searchQuery={props.match.params.searchQuery}
              {...props}
            />
          )}
        />
        <Route path="*" render={props => <ErrorPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
