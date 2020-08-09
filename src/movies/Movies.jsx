import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService.js';
import { getGenres } from '../services/fakeGenreService';

import Pagination from '../common/pagination';
import { paginate } from '../utils/paginate.js';
import ListGroup from '../common/listGroup';
import MoviesTable from './MoviesTable';

class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1
    };
    componentDidMount() {
        const genres = [{ _id: '', name: 'all Genres' }, ...getGenres()];


        this.setState({ movies: getMovies(), genres });
    }


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

    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    };

    handleSort = (path) => {
        console.log(path);
    };

    render() {
        const { length: count } = this.state.movies;
        const { currentPage, pageSize, movies: AllMovies, genres, selectedGenre } = this.state;
        if (count === 0)
            return <p>there is no movie yet on database </p>;
        //filter
        const filtered = selectedGenre && selectedGenre._id
            ? AllMovies.filter((m) => m.genre._id === selectedGenre._id) : AllMovies;
        //paginate movies 
        const movies = paginate(filtered, currentPage, pageSize);

        return (
            <div className='row'>
                <div className='col-3'>
                    <ListGroup
                        items={genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}

                    />
                </div>
                <div className='col'>
                    <p>the number of movies equal {filtered.length}</p>

                    <MoviesTable
                        movies={movies}
                        onDelete={this.deleteMovie}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemCount={filtered.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}

                    />
                </div>
            </div >


        );
    }
}

export default Movies;