/* eslint-disable react/prop-types */
const Input_Search = ({type,query,setQuery}) => {
    return (
        <input
            type={type ? type : 'text'}
            value={query}
            placeholder="Search..."
            onChange={(e)=>setQuery(e.target.value)}
            className="w-1/2 p-2 bg-slate-50/90 text-sm border focus:outline-none rounded-md"
        />
    );
};

export default Input_Search;