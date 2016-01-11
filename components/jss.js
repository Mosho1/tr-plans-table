import jss from 'react-stylesheets';

import postcssJs from 'postcss-js';
import nested from 'postcss-nested';

jss.config({
    parser: postcssJs.sync([ nested ])
});
