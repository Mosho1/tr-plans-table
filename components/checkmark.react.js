import React from 'react';

export default ({color = '#616161', width = 15, height = 12, viewBox = `0 0 15 12`, name}) =>
    <svg viewBox={viewBox} className={name} width={width} height={height}>
        <g>
    		<rect transform="rotate(45 5.556866645812988,8.618085861206055)" height="3.4" width="6.7" y="6.9" x="2.1" fill={color}/>
    		<rect transform="rotate(-45 11,5.6)" height="3" width="9.1" y="4.1" x="6.6" fill={color}/>
        </g>
	</svg>;

export const __hotReload = true;
