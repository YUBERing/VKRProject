import React from 'react';
import './style.scss'

const Button = (props) => {
    const {
        label,
        onClick,
        modif,
        children,
    } = props;

    const getMod = () => {
        switch (modif)
        {
            case 'add':
                return 'button_add'
            case 'close':
                return 'button_close'
            case 'back':
                return 'button_back'
            case 'menu':
                return 'button_menu'
            case 'dell':
                return 'button_dell'
            default:
                return ''
        }
    }

    return (
        <button onClick={onClick} className={`button ${getMod()}`}>
            {children}
            {label}
        </button>
    );
};

export default Button;