import React, {useContext, useEffect} from 'react';
import './style.scss'

const Page = (props) => {
    const {
        children,
    } = props;

    return (
        <div className={'page'}>
            {children}
        </div>
    );
};

export default Page;