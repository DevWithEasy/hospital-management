import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoSettingsOutline,IoPersonAddOutline  } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdBook } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { BsBuildings } from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";

const SideBar = () => {
    const sidebar=[
        {
            path : '/',
            title : 'Dashboar',
            icon : <IoHomeOutline/>,
        },
        {
            path : '/new_patient',
            title : 'New Patient',
            icon : <IoPersonAddOutline/>,
        },
        {
            path : '/patients',
            title : 'Patients',
            icon : <HiOutlineUsers/>,
        },
        {
            path : '/doctors',
            title : 'Doctors',
            icon : <FaUserDoctor/>,
        },
        {
            path : '/floors',
            title : 'Floors',
            icon : <BsBuildings/>,
        },
        {
            path : '/appointments',
            title : 'Appoinments',
            icon : <IoMdBook/>,
        },
        {
            path : '/medicines',
            title : 'Medicines',
            icon : <GiMedicines/>,
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
            className='flex flex-col space-y-2'
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