import React, { Component } from "react";
import { getMovie, getMovies } from "../services/fakeMovieService";
import Like from "./common/like";

class MovieTable extends Component {
	state = {
		movies: getMovies(),
		getmovie: getMovie(),
	};
	handleLike = (movie) => {
		const movies = [...this.state.movies];
		const index = movies.indexOf(movie);
		movies[index] = { ...movies[index] };
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};
	render() {
		return (
			<div className="m-10">
				<h5>Showing {this.state.movies.length} movie in the Database</h5>
				<table className="table ">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
							<th scope="col"></th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie, index) => {
							return (
								<tr key={index}>
									<th scope="row">{movie.title}</th>
									<td>{movie.genre.name}</td>
									<td>{movie.numberInStock}</td>
									<td>{movie.dailyRentalRate}</td>
									<td>
										<Like
											liked={movie.liked}
											onClick={() => this.handleLike(movie)}
										/>
									</td>
									<td>
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => {
												console.log(getMovie(movie._id)._id);
												const newMovies = [...this.state.movies];

												newMovies.splice(
													this.state.movies.findIndex((movie) => {
														return movie._id === getMovie(movie._id)._id;
													}),
													1
												);

												this.setState({ movies: newMovies });
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default MovieTable;
