import handleChange from "../utils/handleChange";

/* eslint-disable react/prop-types */
const Input = ({label,name,currentValue,value,setValue}) => {
    return (
        <div
            className="space-y-2"
        >
            <label className="text-gray-500 text-base">{label} :</label>
            <input
            name={name}
            value={currentValue}
            onChange={(e) => handleChange(e,value,setValue)}
            className="w-full p-2 placeholder:text-sm rounded"
        />
        </div>
    );
};

export default Input;