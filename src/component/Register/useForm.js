import { useState } from 'react'

const useForm = (initialValue) => {

    const [value, setvalue] = useState(initialValue);

    return [
        value,
        (event) => {
            setvalue({
                ...value,
                [event.target.name] : event.target.value,
            })
        },
    ];
};

export default useForm
