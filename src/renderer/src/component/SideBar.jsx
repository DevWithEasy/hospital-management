import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { IoMdBook } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const SideBar = () => {
    const sidebar=[
        {
            path : '/dashboard',
            title : 'Dashboard',
            icon : <IoHomeOutline/>,
        },
        {
            path : '/patients',
            title : 'Patients',
            icon : <HiOutlineUsers/>,
        },
        {
            path : '/reciptions',
            title : 'Reciptions',
            icon : <LuUsers2/>,
        },
        {
            path : '/doctors',
            title : 'Doctors',
            icon : <FaUserDoctor/>,
        },
        {
            path : '/appointments',
            title : 'Appoinments',
            icon : <IoMdBook/>,
        },
        {
            path : '/payments',
            title : 'Payments',
            icon : <MdOutlinePayment />,
        },
        {
            path : '/Invoices',
            title : 'Invoices',
            icon : <LiaFileInvoiceSolid/>,
        },
        {
            path : '/settings',
            title : 'Settings',
            icon : <IoSettingsOutline />,
        },
    ]
    return (
        <div
            className='flex flex-col'
        >
            {
                sidebar.map((s,i)=>
                <NavLink
                    key={i}
                    to={s.path}
                    className='p-2 flex items-center space-x-2'
                >
                    <div className='text-teal-500'>
                        {s.icon}
                    </div>
                    <span className='text-gray-600'>{s.title}</span>
                </NavLink>)
            }
        </div>
    );
};

export default SideBar;