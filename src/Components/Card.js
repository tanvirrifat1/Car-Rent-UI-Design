import React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

const Card = () => {
    return (
        <div className='ml-6'>
            <div className='text-start my-4'>
                <h2 className='text-3xl'>Todays Statistics</h2>
                <p className='font-semibold mt-2'>Tue, 14 Nov, 2022, 11.30 AM</p>
            </div>
            <div className="card  bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-between '>
                        <p className='font-bold'>Income</p>
                        <p>Today</p>
                    </div>
                    <p className="divider"></p>
                    <div className='flex justify-between font-semibold'>
                        <p className='text-4xl'>$9460.00</p>
                        <p className='text-red-600'>1.5% <FaArrowDown className='-mt-5 '></FaArrowDown></p>
                    </div>
                    <p className='mr-9'>Compared to $9940 yesterday</p>
                    <div className='flex justify-between font-semibold'>
                        <p>Last Week Income</p>
                        <p>$25415.00</p>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-200 shadow-xl mt-6">
                <div className="card-body">
                    <div className='flex justify-between '>
                        <p className='font-bold'>Experience</p>
                        <p>Today</p>
                    </div>
                    <p className="divider"></p>
                    <div className='flex justify-between font-semibold'>
                        <p className='text-4xl mr-8'>$5660.00</p>
                        <p className='text-green-500'>2.5% <FaArrowUp className='-mt-5 '></FaArrowUp></p>
                    </div>
                    <p className='mr-10'>Compared to $5240 yesterday</p>
                    <div className='flex justify-between font-semibold'>
                        <p>Last Week expences</p>
                        <p>$25415.00</p>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-200 shadow-xl mt-6">
                <div className="card-body">
                    <div className='flex justify-between '>
                        <p className='font-bold'>Hire vs Canceled</p>
                        <p>Today</p>
                    </div>
                    <p className="divider"></p>
                    <div className='flex justify-center '>
                        <div className="radial-progress text-purple-600" style={{ "--value": "100", "--size": "8rem", "--thickness": "1rem" }}></div>
                    </div>
                </div>
                <div className='py-4'>
                    <div className='flex justify-between '>
                        <div className='flex'>
                            <input type="radio" name="radio-1" className="radio radio-info" checked />
                            <p className='ml-3'>Total Hired</p>
                        </div>
                        <div className='flex'>
                            <p>54%</p>
                            <p className='ml-3'><FaArrowUp className='mt-1 text-green-600'></FaArrowUp></p>
                        </div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div className='flex'>
                            <input type="radio" name="radio-2" className="radio radio-secondary" checked />
                            <p className='ml-3'>Total Canceled</p>
                        </div>
                        <div className='flex '>
                            <p>20%</p>
                            <p className='ml-3'><FaArrowUp className='mt-1 text-green-600'></FaArrowUp></p>
                        </div>
                    </div>
                    <div className='flex justify-between mt-2'>
                        <div className='flex'>
                            <input type="radio" name="radio-3" className="radio radio-primary" checked />
                            <p className='ml-3'>Total Pending</p>
                        </div>
                        <div className='flex'>
                            <p>26%</p>
                            <p className='ml-3'><FaArrowDown className='mt-1 text-red-600'></FaArrowDown></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;