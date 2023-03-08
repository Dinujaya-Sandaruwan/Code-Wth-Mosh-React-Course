import "./App.css";
import React, { Component } from "react";

// import { getMovies } from "./services/fakeMovieService";
// import { getMovie } from "./services/fakeMovieService";
import MovieTable from "./components/movies";

class Movies extends Component {
	render() {
		return (
			<main className="container">
				<MovieTable></MovieTable>
			</main>
		);
	}
}

export default Movies;
