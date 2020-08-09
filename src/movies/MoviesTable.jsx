
import React from 'react';
import Like from '../common/like';
const MoviesTable = (props) => {

    const { movies, onDelete, onLike } = props;
    return (
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
                                onClick={() => onLike(movie)}
                            />
                        </td>

                        <td>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => onDelete(movie)}>
                                Delete
                    </button>
                        </td>
                    </tr>

                ))}


            </tbody>
        </table >
    );
};

export default MoviesTable;
