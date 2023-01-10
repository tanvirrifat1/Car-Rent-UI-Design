import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'


const Chart = () => {

    const data = [
        {
            name: 'Jan',
            uv: 2000,
        },
        {
            name: 'Feb',
            uv: 1500,
        },
        {
            name: 'March',
            uv: 2000,
        },
        {
            name: 'April',
            uv: 2080,
        },
        {
            name: 'May',
            uv: 1890,
        },
        {
            name: 'Jun',
            uv: 1990,
        },
        {
            name: 'july',
            uv: 1790,
        },
    ];


    return (
        <div>
            <div className='flex justify-around'>
                <h1 className='mb-10 text-start text-3xl '>Earning Summary</h1>
                <p className='font-semibold'>Jan 2022- July 2022</p>
                <p className='font-semibold'>Last 7 Month</p>
                <p className='font-semibold'>Some Period last Year</p>
            </div>
            <AreaChart width={1100} height={450} data={data}>
                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
            </AreaChart>
        </div>
    );
};

export default Chart;