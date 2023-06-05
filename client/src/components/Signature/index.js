import React from 'react';
import './style.scss'

const Signature = () => {
    return (
        <div className={'signature'}>
            <div className={'signature-field'}>
                ____________
            </div>
            <div className={'signature-label'}>
                <sup>подпись</sup>
            </div>
        </div>
    );
};

export default Signature;