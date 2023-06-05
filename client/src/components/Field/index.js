import React from 'react';
import './style.scss';

const Field = (props) => {
    const {
        value,
        label,
        modif,
    } = props;

    const getMod = () => {
        switch (modif)
        {
            case 'bold':
                return 'field_bold'
            case 'underline':
                return 'field_underline'
            case 'italic':
                return 'field_italic'
            default:
                return ''
        }
    }

    return (
        <div className={'field'}>
            {
                label &&
                <div className={'field__label'}>
                    {label}
                </div>
            }
            <div className={`field__value ${getMod()}`}>
                {value}
            </div>
        </div>
    );
};

export default Field;