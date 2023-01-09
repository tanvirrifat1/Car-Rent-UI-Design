import React from 'react';
import { BsFilter } from 'react-icons/bs';

const Table = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full p-10">
                <div className='flex justify-between'>
                    <h1 className='text-2xl font-semibold'>Live Car Status</h1>
                    <div className='flex'>
                        <BsFilter className='mt-1 ml-2 text-2xl'></BsFilter>
                        <h3 className='text-2xl font-semibold'> Filter </h3>
                    </div>
                </div>
                <table className="table w-full mt-4">
                    <thead>
                        <tr>

                            <th>No</th>
                            <th>Driver</th>
                            <th>Car no.</th>
                            <th>Status</th>
                            <th>Earning</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <p>01</p>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.freepik.com/free-photo/happy-satisfied-customer-just-bought-brand-new-car-vehicle-dealership_342744-720.jpg?w=1380&t=st=1673275859~exp=1673276459~hmac=7359469f29083a21f7d919fce8eaf779017277cdac3f06e25b55763fe2d6c724" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Alex Noman</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className=" text-xl">$6465</span>
                            </td>
                            <div className='flex mt-1'>
                                <input type="radio" name="radio-1" className="radio mt-5 bg-red-500" checked />
                                <td className='text-xl'>Completed</td>
                            </div>
                            <th>
                                <p className='text-xl'>$35.34</p>
                            </th>
                            <button className='btn btn-secondary'>Details</button>
                        </tr>
                        <tr>
                            <th>
                                <p>02</p>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.freepik.com/premium-photo/truck-driver-giving-thumbs-up-during-coronavirus-pandemic_53419-9469.jpg?w=1380" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Razib Rahman</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className=" text-xl">$5665</span>
                            </td>
                            <div className='flex mt-1'>
                                <input type="radio" name="radio-5" className="radio mt-5 bg-emerald-500" checked />
                                <td className='text-xl'>Pending</td>
                            </div>
                            <th>
                                <p className='text-xl'>$0.00</p>
                            </th>
                            <button className='btn btn-secondary'>Details</button>
                        </tr>
                        <tr>
                            <th>
                                <p>03</p>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://img.freepik.com/free-photo/happy-smiling-man-sitting-inside-car-showing-thumbs-up-handsome-guy-excited-about-his-new-vehicle-positive-face-expression_231208-823.jpg?w=1380&t=st=1673276929~exp=1673277529~hmac=c861ac8238b9ab5b8a3fc5d6ac4db6c332316164057b34baca3adf7c5d58363d" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Luke Lorton</div>
                                    </div>
                                </div>
                            </td>
                            <td>

                                <span className=" text-xl">$1755</span>
                            </td>
                            <div className='flex mt-1'>
                                <input type="radio" name="radio-3" className="radio mt-5 bg-purple-600" checked />
                                <td className='text-xl'>in Route</td>
                            </div>
                            <th>
                                <p className='text-xl'>$23.24</p>
                            </th>
                            <button className='btn btn-secondary'>Details</button>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;