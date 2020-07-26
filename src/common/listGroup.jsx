import React from 'react';

// import PropTypes from 'prop-types'

function listGroup(props) {
    const { items, textProperty, valueProperty } = props;
    return (
        <ul class="list-group">
            {items.map(item =>
                <li key={item[valueProperty]} class="list-group-item">{item[textProperty]}</li>
            )}


        </ul>
    );
}

listGroup.defaultProps = {
    textProperty:'name',
    valueProperty:'_id'
};

export default listGroup;

