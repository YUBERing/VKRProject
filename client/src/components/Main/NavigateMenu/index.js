import React, {useEffect, useRef, useState} from 'react';
import './style.scss';
import {createPortal} from "react-dom";
import Button from "../../Button";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import uniqid from "uniqid";

const NavigateMenu = (props) => {
    const {
        list
    } = props;

    const [isOpen, setOpen] = useState(false);
    const refMenu = useRef(null);

    useEffect(() => {
            const handleClick = (event) => {
                if (refMenu.current && !refMenu.current.contains(event.target)) {
                    setOpen(false);
                }
            }

            document.addEventListener('click', handleClick);
            return () => {
                document.removeEventListener('click', handleClick)
            }
        },
        [refMenu])

    const onClickItem = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop - 80,
            behavior: 'smooth',
        })
        setOpen(!isOpen);
    }

    const onOpenMenu = () => {
        setOpen(!isOpen);
    }

    const getList = () => {
        return list.map((item) => {
            return (
                <div
                    className={'navigate-menu__item'}
                    key={uniqid()}
                    onClick={() => onClickItem(item.ref)}
                >
                    {item.label}
                </div>
            )
        })
    }

    return createPortal(
        <div className={'navigate-menu'} ref={refMenu}>
            <Button
                modif={'menu'}
                onClick={onOpenMenu}
            >
                <MenuOpenIcon
                    className={'menu-icon'}
                />
            </Button>
            {
                isOpen &&
                <div className={'navigate-menu__list'}>
                    {getList()}
                </div>
            }
        </div>,
        document.body
    );
};

export default NavigateMenu;