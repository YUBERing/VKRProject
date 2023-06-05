import React, {forwardRef} from 'react';
import './style.scss';
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import TextArea from "../../TextArea";
import {setRPDIndependentWork} from "../../../reducers/rpdReducer";

const IndependentWorkBlock = forwardRef((props, ref) => {
    const independentWorkList = useSelector(state => state.rpd.currentIndependentWork);

    const dispatch = useDispatch();

    const setSection = (value, index) => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList[index].section = value;
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const setTask = (value, index) => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList[index].task = value;
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const setHours = (value, index) => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList[index].hours = value;
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const setRecommendation = (value, index) => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList[index].recommendation = value;
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const setControl = (value, index) => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList[index].control = value;
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const onAddLine = () => {
        const copyIndependentWorkList = [
            ...independentWorkList,
            {
                section: '',
                task: '',
                hours: 0,
                recommendation: '',
                control: '',
            }
        ];

        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const onDelLine = () => {
        const copyIndependentWorkList = independentWorkList.slice();

        copyIndependentWorkList.pop();
        dispatch(setRPDIndependentWork(
            copyIndependentWorkList
        ));
    }

    const getLine = () => {
        return independentWorkList.map(
            (item, index, array) => {
                return (
                    <div className={'line'} key={uniqid()}>
                        <div className={'cell'}>
                            6.1.{index + 1}
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item.section}
                                onChange={setSection}
                                index={index}
                                array={array}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item.task}
                                onChange={setTask}
                                index={index}
                                array={array}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item.hours}
                                onChange={setHours}
                                index={index}
                                array={array}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item.recommendation}
                                onChange={setRecommendation}
                                index={index}
                                array={array}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item.control}
                                onChange={setControl}
                                index={index}
                                array={array}
                            />
                        </div>
                    </div>
                )
            }
        )
    }

    return (
        <div className={'independent-work'} ref={ref}>
            <div className={'independent-work__header'}>
                6. Методические материалы для обучающихся по освоению дисциплины
            </div>
            <div className={'independent-work__header'}>
                6.1. Самостоятельная работа обучающихся по дисциплине (модулю)
            </div>
            <div className={'independent-work__body'}>
                <div className={'table'}>
                    <div className={'line'}>
                        <div className={'cell'}>
                            № п/п
                        </div>
                        <div className={'cell'}>
                            Раздел (тема)  дисциплины
                        </div>
                        <div className={'cell'}>
                            Задание
                        </div>
                        <div className={'cell'}>
                            Часы
                        </div>
                        <div className={'cell'}>
                            Методические рекомендации по выполнению задания
                        </div>
                        <div className={'cell'}>
                            Форма контроля
                        </div>
                    </div>
                    {
                        getLine()
                    }
                </div>
            </div>
            <div className={'independent-work__buttons'}>
                <Button
                    label={'Добавить строку'}
                    onClick={onAddLine}
                    modif={'add'}
                >
                    <AddIcon
                        className={'add-icon'}
                    />
                </Button>
                <Button
                    label={'Удалить последнюю строку'}
                    onClick={onDelLine}
                    modif={'dell'}
                >
                    <CloseIcon
                        className={'close-icon'}
                    />
                </Button>
            </div>
        </div>
    );
});

export default IndependentWorkBlock;