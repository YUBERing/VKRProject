import React, {useState} from 'react';
import './style.scss'

const Input = (props) => {
    const {
        label,
        value,
        onChange,
        index,
        type,
    } = props;

    const [field, setField] = useState(value);

    const onChangeValue = () => {
        if (index === undefined) {
            onChange(field)
        }
        else {
            onChange(field, index)
        }
    }

    return (
        <div className={'input'}>
            {
                label &&
                <div className={'input__header'}>
                    {label}
                </div>
            }
            <input
                value={field}
                onChange={(e) => {
                    setField(e.target.value)
                }}
                onBlur={onChangeValue}
                className={'input__field'}
                type={type}
            />
        </div>
    );
};

export default Input;