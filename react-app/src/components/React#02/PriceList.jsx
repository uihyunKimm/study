import React from 'react';

function PriceList(props) {
    const { prices } = props;
    return (
        <div>
            <h3>가격 목록</h3>
            {prices}
        </div>
    );
    };

export default PriceList;