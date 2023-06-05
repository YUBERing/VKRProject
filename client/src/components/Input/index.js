import React from 'react';
import './style.scss'

const Input = (props) => {
    const {
        label,
        value,
        onChange,
    } = props;

    return (
        <div className={'input'}>
            {
                label &&
                <div className={'input__header'}>
                    {label}
                </div>
            }
            <input
                value={value}
                onChange={(e) => {onChange(e.target.value)}}
                className={'input__field'}
            />
        </div>
    );
};

export default Input;