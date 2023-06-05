import React, {useLayoutEffect, useRef, useState} from 'react';
import './style.scss';
import CloseIcon from "@mui/icons-material/Close";
import Button from "../Button";
import {setRPDOrders} from "../../reducers/rpdReducer";
import {useDispatch, useSelector} from "react-redux";

const MIN_TEXTAREA_HEIGHT = 40.2;

const TextArea = (props) => {
    const {
        label,
        value,
        onChange,
        onDel,
        font,
        visual,
        index,
        children,
    } = props;


    const [field, setField] = useState(value);
    const textareaRef = useRef(null);

    useLayoutEffect(() => {
        textareaRef.current.style.height = "inherit";
        textareaRef.current.style.height = `${Math.max(
            textareaRef.current.scrollHeight,
            MIN_TEXTAREA_HEIGHT
        )}px`;
    }, [field])

    const getModFont = () => {
        switch (font)
        {
            case 'bold':
                return 'textarea_bold'
            case 'underline':
                return 'textarea_underline'
            case 'italic':
                return 'textarea_italic'
            default:
                return ''
        }
    }

    const getPlaceLabel = () => {
        switch (visual) {
            case 'up':
                return 'textarea_up'
            default:
                return ''
        }
    }

    const onChangeValue = () => {
        if (index === undefined) {
            onChange(field)
        }
        else {
            onChange(field, index)
        }
    }

    return (
        <div className={`textarea ${getPlaceLabel()}`}>
            {
                label &&
                <div className={`textarea__header`}>
                    {label}
                </div>
            }
            {
                children
            }
            <textarea
                value={field}
                ref={textareaRef}
                rows={1}
                onChange={(e) => {
                    setField(e.target.value)
                }}
                onBlur={onChangeValue}
                className={`textarea__field ${getModFont()}`}
            />
            { onDel !== undefined &&
                <Button
                    onClick={() => {onDel(index)}}
                    modif={'close'}
                >
                    <CloseIcon
                        className={'close-icon'}
                    />
                </Button>
            }
        </div>
    );
};

export default TextArea;