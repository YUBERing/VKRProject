import React, {forwardRef} from 'react';
import './style.scss'
import TextArea from "../../TextArea";
import {useDispatch, useSelector} from "react-redux";
import {setRPDGoal, setRPDOrders} from "../../../reducers/rpdReducer";
import Button from "../../Button";
import AddIcon from '@mui/icons-material/Add';
import uniqid from 'uniqid';

const ObjectivesBlock = forwardRef((props, ref) => {
    const goal = useSelector(state => state.rpd.currentGoal);
    const ordersList = useSelector(state => state.rpd.currentOrders);
    const dispatch = useDispatch();

    const setGoal = (value) => {
        dispatch(setRPDGoal(value))
    }

    const setOrder = (value, index) => {
        const copyOrdersList = ordersList.slice();
        copyOrdersList.splice(index, 1, value)
        dispatch(setRPDOrders(copyOrdersList))
    }

    const onAddOrder = () => {
        dispatch(setRPDOrders([...ordersList, '']))
    }

    const onDelOrder = (index) => {
        const copyOrdersList = ordersList.slice();
        copyOrdersList.splice(index, 1);
        dispatch(setRPDOrders(copyOrdersList));
    }

    const getPoint = () => {
        return ordersList.map((item, index, array) => {
            return (
                <TextArea
                    key={uniqid()}
                    value={item}
                    label={`${index+1}.`}
                    onChange={setOrder}
                    onDel={onDelOrder}
                    index={index}
                    array={array}
                />
            )
        })
    }

    return (
        <div className={'objectives-block'} ref={ref}>
            <div className={'objectives-block__header'}>
                1. Цели и задачи освоения дисциплины
            </div>
            <div className={'objectives-block__body'}>
                <div className={'objectives-block__goals'}>
                    <div className={'objectives-block__subtitles'}>
                        Цель дисциплины:
                    </div>
                    <TextArea
                        value={goal}
                        onChange={setGoal}
                        font={'italic'}
                    />
                </div>
                <div className={'objectives-block__objectives'}>
                    <div className={'objectives-block__subtitles'}>
                        Задачи дисциплины:
                    </div>
                    <div className={'objectives-block__orders'}>
                        <div className={'objectives-block__inputs'}>
                            {getPoint()}
                        </div>
                        <Button
                            label={'Добавить пункт'}
                            modif={'add'}
                            onClick={onAddOrder}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
)
export default ObjectivesBlock;