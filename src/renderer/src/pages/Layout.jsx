import {Header, SideBar} from "../component/Index";

const Layout = ({children}) => {
    return (
        <div
            className='flex justify-between h-screen'
        >
            <div
                className='w-3/12 sm:w-2/12 p-2 shadow-xl'
            >
                <SideBar/>
            </div>
            <div
                className='relative w-9/12 sm:w-10/12 p-2 pt-12 bg-slate-100'
            >
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Layout;