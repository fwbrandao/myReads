import React from 'react';
// import PropTypes from 'prop-types';

const Paginaton = props => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item active">
                    <button className="page-link">1</button>
                </li>
            </ul>
        </nav>
     );
};

export default Paginaton;