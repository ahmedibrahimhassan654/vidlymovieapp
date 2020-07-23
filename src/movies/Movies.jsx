import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import Like from '../common/like';
import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate.js';

class Movies extends Component {
    state = {
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    };
    deleteMovie = (movie) => {
        const newmovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: newmovies });
    };
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize,movies:AllMovies } = this.state;
        if (count === 0)
            return <p>there is no movie yet on database </p>;

        //paginate movies 
        const movies = paginate(AllMovies,currentPage,pageSize)

        return (
            <React.Fragment>
                <p>the number of movies equal {count}</p>
                <table className="table table-hover " >
                    <thead>
                        <tr>
                            <th scope="col">title</th>
                            <th scope="col">genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col">publishDate</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <th scope="row" >{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>{movie.publishDate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                </td>

                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => this.deleteMovie(movie)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>

                        ))}


                    </tbody>
                </table >
                <Pagination
                    itemCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}

                />
            </React.Fragment>

        );
    }
}

export default Movies;