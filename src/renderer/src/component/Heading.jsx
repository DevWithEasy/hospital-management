const Heading = ({children}) => {
    return (
        <h1
            className="text-xl py-2 text-teal-500 border-b"
        >
            {children}
        </h1>
    );
};

export default Heading;