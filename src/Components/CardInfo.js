import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaCar } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs';
import { BsCalendar2Date } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import Table from './Table';
import Chart from './Chart';


const CardInfo = () => {
    return (
        <div>
            <div className='mt-10'>
                <div className="flex justify-end relative">
                    <input type="text" placeholder="Type here" className="input input-bordered shadow-2xl w-full max-w-xs" />
                    <div className='text-4xl absolute mr-2 top-1'><CiSearch></CiSearch></div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        <thead>
                            <div className='flex justify-around'>
                                <div className='flex border border-b-slate-300 p-4 mr-6'>
                                    <FaCar className='mt-1 text-2xl'></FaCar>
                                    <p className='ml-2 text-xl'>Car Number</p>
                                    <BsChevronDown className='mt-1 ml-4 text-2xl'></BsChevronDown>
                                </div>
                                <div className='flex'>
                                    <div className='flex border border-b-slate-300 p-4'>
                                        <BsCalendar2Date className='mt-1 text-2xl'></BsCalendar2Date>
                                        <p className='ml-2 text-xl'>Nov 20,2022</p>
                                        <BsChevronDown className='mt-1 ml-4 text-2xl'></BsChevronDown>
                                    </div>
                                    <div className='flex border border-b-slate-300 p-4'>
                                        <BiTimeFive className='mt-1 text-2xl'></BiTimeFive>
                                        <p className='ml-2 text-xl'>10 AM</p>
                                        <BsChevronDown className='mt-1 ml-4 text-2xl'></BsChevronDown>
                                    </div>
                                </div>
                                <button className='btn btn-secondary ml-6 mt-2 w-28'>Check</button>
                            </div>
                        </thead>
                    </table>
                </div>
            </div>
            <div>
                <Table></Table>
            </div>
            <div>
                <Chart></Chart>
            </div>
        </div>
    );
};

export default CardInfo;