import React, {useState} from "react";

type Props = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function Input({value, onChange}: Props) {

    return (
        <input
            className={'text-gray-700 placeholder:text-gray-700 bg-gradient-to-b from-cyan-500 to-blue-500 border-solid border-2 border-amber-500/75'}
            placeholder="Insert your message"
            value={value}
            onChange={(e) => {
                onChange(e)
            }
            }
        />
    );
}

export default Input;
