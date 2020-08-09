
import React from 'react';
import Like from '../common/like';
const MoviesTable = (props) => {

    const { movies, onDelete, onLike ,onSort} = props;
    return (
        <table className="table table-hover " >
            <thead>
                <tr>
                    <th scope="col" onClick={()=>onSort('title')}>title</th>
                    <th scope="col" onClick={()=>onSort('genre')}>genre</th>
                    <th scope="col" onClick={()=>onSort('stock')}>Stock</th>
                    <th scope="col" onClick={()=>onSort('rate')}>Rate</th>
                    <th scope="col" onClick={()=>onSort('publishDate')}>publishDate</th>
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
