const Heading = ({children}) => {
    return (
        <h1
            className="text-xl mb-2 py-2 text-teal-500 border-b"
        >
            {children}
        </h1>
    );
};

export default Heading;