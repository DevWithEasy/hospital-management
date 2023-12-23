import { useState } from "react";
import { Heading, Input_Search } from "../component/Index";

const Invoices = () => {
    const [query, setQuery] = useState('')
    return (
        <div
            className='space-y-2'
        >
            <Heading>Invoices</Heading>

            <Input_Search {...{
                query, setQuery
            }} />

        </div>
    );
};

export default Invoices;