import {Heading} from "../component/Index";
import {useNavigate} from 'react-router-dom';

const Floors = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Heading>Floors</Heading>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-200">
                        <tr>
                            <th scope="col" className="px-2 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-2 py-3">
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr 
                            onClick={()=>navigate(`/floor/fadhfakjsdfha`)}
                            className="bg-white border-b hover:bg-teal-50 cursor-pointer"
                        >
                            <td scope="row" className="p-2 whitespace-nowrap">
                                jdfadshfadsw
                            </td>
                            <td scope="row" className="p-2 whitespace-nowrap">
                                Apple MacBook Pro 17&quot;
                            </td>
                            <td className="p-2">
                                Silver
                            </td>
                            <td className="p-2">
                                01717642515
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Floors;