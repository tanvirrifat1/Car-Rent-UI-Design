import React from 'react';
import { FaBlogger, FaCarAlt, FaDashcube, FaVuejs, } from "react-icons/fa";
import { ImNotification } from "react-icons/im";
import { FiSettings } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { HiDocumentReport } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import Card from './Card';
import CardInfo from './CardInfo';


const Pages = () => {
    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-5 gap-5'>
                <div className=''>
                    <ul className="menu p-4 h-full bg-fuchsia-900 text-white">
                        <div>  <li className='text-4xl'><a><FaVuejs></FaVuejs>CAR RENT</a></li></div>
                        <div className='mt-4'>
                            <li className='bg-purple-500 rounded-xl'><a><FaDashcube></FaDashcube> DashBoard</a></li>
                            <li className=''><a><FaCarAlt></FaCarAlt> Drivers</a></li>
                            <li className=''><a><FaBlogger></FaBlogger>Bookings</a></li>
                            <li className=''><a><ImNotification></ImNotification>Notifications</a></li>
                            <li className=''><a><FiSettings></FiSettings>Settings</a></li>
                        </div>
                        <div>
                            <p className='text-start ml-4 mt-10'>Report</p>
                            <li className='mt-3'><a><MdOutlinePayment></MdOutlinePayment>Payment details</a></li>
                            <li className=''><a><AiOutlineTransaction></AiOutlineTransaction>Transactions</a></li>
                            <li className=''><a><HiDocumentReport></HiDocumentReport>Car reports</a></li>
                        </div>
                        <div className='btn mt-[280px]'><FiLogOut className='mr-4 text-xl'></FiLogOut> logout</div>
                    </ul>
                </div>
                <div className=''>
                    <Card></Card>
                </div>
                <div className='col-span-3'>
                    <CardInfo></CardInfo>
                </div>
            </div>
        </div>
    );
};

export default Pages;