import React from 'react';

interface InputFieldProps {
    title: string,
    handleSubmit: () => void,
    handleInput: (str: string) => void
}

const InputField: React.FC<InputFieldProps> = ({title, handleSubmit, handleInput}) => {
    return (
        <label>
            <input
                placeholder='new todo'
                value={title}
                onChange={(e) => handleInput(e.target.value)} />
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    )
}

export default InputField