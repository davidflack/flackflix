export const baseUrl = "https://api.themoviedb.org/3/movie";
export const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${
  process.env.REACT_APP_API_KEY
}&language=en-US&query=`;
export const posterUrl = "https://image.tmdb.org/t/p/w342";
export const backdropUrl = "https://image.tmdb.org/t/p/w1280";
export const headshotUrl = "https://image.tmdb.org/t/p/w185";
export const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
};
export const groupByCrewDept = dept => crewList =>
  crewList.reduce((objectsByKeyValue, obj) => {
    const value = obj[dept];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
