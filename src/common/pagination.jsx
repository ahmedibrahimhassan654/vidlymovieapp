import React from 'react';
import propTypes from 'prop-types';

import _ from 'lodash';



const Pagination = (props) => {
    const { itemCount, pageSize, onPageChange, currentPage } = props;

    console.log(currentPage);

    const pagesCount = Math.ceil(itemCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link" href="/#" onClick={() => onPageChange(page)}>{page}</a>

                    </li>
                ))}

            </ul>
        </nav>
    );

};
Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired,
    currentPage:propTypes.number.isRequired
};
export default Pagination;

