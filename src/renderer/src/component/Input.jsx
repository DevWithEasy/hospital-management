import handleChange from "../utils/handleChange";

/* eslint-disable react/prop-types */
const Input = ({name,placeholder,value,setValue}) => {
    return (
        <input
            name={name}
            onChange={(e) => handleChange(e,value,setValue)}
            placeholder={placeholder}
            className="w-full p-2 placeholder:text-sm rounded"
        />
    );
};

export default Input;