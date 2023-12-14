import {Header, SideBar} from "../component/Index";

const Layout = ({children}) => {
    return (
        <div
            className='flex justify-between h-screen'
        >
            <div
                className='w-2/12 p-2 shadow-xl'
            >
                <SideBar/>
            </div>
            <div
                className='relative w-10/12 p-2 pt-12 bg-slate-50 rounded-l-md'
            >
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Layout;