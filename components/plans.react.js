import React from 'react';
import jss from 'react-stylesheets';
import msg from './msg.js';

const {title, header, body} = msg;

export default jss({
    tbody: {
        tr: ['#f7f7f7', '#ececec', '#f7f7f7'].reduce((acc, c, i) => {
                acc[`&:nth-child(${i + 2})`] = {background: c};
                return acc;
            }, {})
    }
})(() => {
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>
                        <div>
                            <div>{header.guarantee.title}</div>
                            <div>{header.guarantee.text}</div>
                        </div>
                    </th>
                    {header.cols.map(({title, sub, desc, price, period, charge}, i) =>
                        <th key={i}>
                            <div>{title}</div>
                            <div>{desc}</div>
                        </th>
                    )}
                </tr>
            </thead>
            {body.map((bod, i) =>
                <tbody key={i}>
                    {bod.map(({text, tooltip, checks, cols = Array(3).fill(null)}, i) =>
                        <tr key={i}>
                            {[
                                <th>
                                    {text}
                                </th>,
                                ...cols.map((c, i) => <td key={i}>{c}</td>)
                            ]}
                        </tr>
                    )}
                </tbody>
            )}
        </table>
    </div>);
});

export const __hotReload = true
