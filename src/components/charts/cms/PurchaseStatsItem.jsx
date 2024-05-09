import React from 'react';
import { Row, Card } from '@/components/reactdash-ui';
import { NavLink } from 'react-router-dom';

export default function PurchaseStatsItem(props) {
    
    const addcolor = props.color ? colors[props.color] : 'bg-indigo-100 text-indigo-500';

    return (
        <NavLink to={props.url}>
            <Card>
                <div className="flex flex-row">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full dark:bg-gray-900 dark:bg-opacity-20 relative text-center ${addcolor}`}>
                        {props.icon}
                    </div>
                    <div className="ltr:ml-3 rtl:mr-3">
                        <h2 className="self-center mb-1">{props.title}</h2>
                        <p className="text-xl font-semibold">{props.count}</p>
                    </div>
                </div>
            </Card>
        </NavLink>
    );
}