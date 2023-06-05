import React from 'react';
import {createPortal} from "react-dom";
import Button from "../../Button";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const BackButton = () => {
    const getTop = () => {
        window.scrollTo({
                top: 0,
                behavior: 'smooth',
        })
    }

    return createPortal(
            <Button
                onClick={getTop}
                modif={'back'}
            >
                <KeyboardDoubleArrowUpIcon
                    className={'up-icon'}
                />
            </Button>,
        document.body
    );
};

export default BackButton;