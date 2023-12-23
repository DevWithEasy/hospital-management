/* eslint-disable react/prop-types */
const Button_Add = ({text,view,setView}) => {
    return (
        <button
                onClick={()=>setView(!view)}
                className='px-4 py-2 bg-teal-500 text-white rounded-md'
            >
                {text}
            </button>
    );
};

export default Button_Add;