import React from 'react';
import _ from 'lodash';



const Pagination = (props) => {
    const { itemCount, pageSize } = props;

    const pagesCount =Math.ceil( itemCount / pageSize);
    console.log(pagesCount);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);


    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className="page-item">
                        <a className="page-link" href="/#">{page}</a>

                    </li>
                ))}

            </ul>
        </nav>
    );

};

export default Pagination;

