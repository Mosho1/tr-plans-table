import React from 'react';
import Checkmark from './checkmark.react';
import PlanPrice from './plan-price.react.js';

const blue = 'blue', orange = 'orange', purple = 'purple';
const colors = [blue, orange, purple];
const checkmarks = colors.map(c => <Checkmark width="25" height="20" color={c}/>);
const basic = checkmarks;
const premium = checkmarks.slice(0).fill(null, 0, 0);
const ultimate = checkmarks.slice(0).fill(null, 0, 1);

const buttons = [<button>SIGN UP</button>, <button>SUBSCRIBE NOW</button>, <button>SUBSCRIBE NOW</button>];

export default {
    title: 'Plans Overview: 30 Day Full Money-Back Guarantee',
    header: {
        guarantee: {
            title: '100% No-Risk Guarantee',
            text: 'If you are not fully satisfied, request to cancel within 30 days of your purchase and receive a full refund.'
        },
        cols: [{
            title: 'Basic',
            sub: 'Get to know TipRanks',
            desc: 'Free Membership',
            button: {
                text: 'SIGN UP'
            }
        }, {
            title: 'Premium',
            sub: 'For the individual investor,',
            desc: <PlanPrice price="29.95"/>,
            button: {
                text: 'SUBSCRIBE NOW'
            }
        }, {
            title: 'Ultimate',
            sub: 'For the professional investor',
            desc: <PlanPrice price="29.95"/>,
            button: {
                text: 'SUBSCRIBE NOW'
            }
        }].map((col, i) => {
            col.button = buttons[i];
            return col;
        })
    },
    body: [
        [
            {text: 'Top 25 Analysts', tooltip: ''},
            {text: 'View top ranked Wall St. analysts, financial bloggers, corporate insiders, and hedge fund managers', cols: basic},
            {text: 'Sort top experts by sector', cols: premium},
            {text: 'Adjust how experts are measured by time horizon and benchmarks', cols: ultimate}
        ], [
            {text: 'Top Stocks by Analysts/Insiders', tooltip: ''},
            {text: 'Highest rated stocks based on analyst ratings', cols: basic},
            {text: 'Sort by sentiment, market cap, and sector', cols: premium},
            {text: 'View top stocks by corporate insiders based on different trading strategies', cols: ultimate}
        ], [
            {text: 'Daily Recommendations', tooltip: ''},
            {text: 'View all recently rated stocks by Wall St. analysts', cols: basic},
            {text: 'Filter ratings by analysts, market cap and sector', cols: premium},
            {text: 'Adjust how experts are measured by time horizon and benchmarks', cols: ultimate}
        ], [
            {text: 'Trending Stocks', tooltip: ''},
            {text: 'Sort by best, worst, and most rated', cols: basic}
        ], [
            {text: 'Stock Pages', tooltip: ''},
            {text: 'Overview of analyst, hedge fund, insider, and blogger activity on each stock', cols: basic},
            {text: 'View all-analyst consensus and price target', cols: basic},
            {text: 'Access the top-analyst consensus and price target', cols: premium},
            {text: 'View most recent analyst ratings for every stock', cols: premium}
        ], [
            {text: 'Expert Pages', tooltip: ''},
            {text: 'On every analyst\'s profile, view his/her past ratings, overall success rate and average return', cols: basic}
        ], [
            {text: 'Access best performing experts covering similar stocks', cols: premium},
            {text: 'Set how experts are ranked by changing the benchmark and time horizon of ratings', cols: ultimate}
        ], [
            {text: 'Email ALerts', tooltip: ''},
            {text: 'On every analyst\'s profile, view his/her past ratings, overall success rate and average return', cols: [
                <span color={blue}>Receive alerts for 1 expert and 1 stock</span>,
                <span color={orange}>Receive alerts for 5 experts and 5 stocks</span>,
                <span color={purple}>Receive unlimited alerts</span>
            ]}
        ], [
            {text: 'Dashboard', tooltip: ''},
            {text: 'Manage, track and follow stocks in your portfolio', cols: [
                <span color={blue}>Create 1 portoflio</span>,
                <span color={orange}>Create 1 portfolio</span>,
                <span color={purple}>Create up to 5 portfolios</span>
            ]}
        ]
    ]



};

export const __hotReload = true;
