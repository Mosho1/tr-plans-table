import React from 'react';

export default ({price}) => {
    const [big, small] = price.split('.');
    return (<div>
        <div>$<span>{big}</span><span>{small}</span>/Month</div>
        <div>Charged annually</div>
    </div>);
};
