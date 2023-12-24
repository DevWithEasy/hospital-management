/* eslint-disable react/prop-types */
import { TbMoodEmpty } from "react-icons/tb";
import useUserStore from "../store/userStore";
import '../assets/loading_mini.css'

/* eslint-disable no-unused-vars */
const NoDataFound = ({data}) => {
    const {loading} = useUserStore()
    return (
        <div
            className="py-10 flex justify-center"
        >
            {
                loading && data.length === 0 ?
                <div
                    className="flex flex-col items-center"
                >
                    <div className="loader"></div>
                    <p
                        className="text-gray-500 animate-pulse"
                    >
                        Please wait...
                    </p>
                </div>
                :
                !loading && data.length === 0 ?
                <div
                    className="flex flex-col items-center space-y-2"
                >
                    <TbMoodEmpty size={40}
                        className="text-red-500"
                    />
                    <p
                        className="text-gray-400 text-lg font-mono italic"
                    >
                        Sorry not found any data.
                    </p>
                    
                </div>
                :
                ''
            }
        </div>
    );
};

export default NoDataFound;