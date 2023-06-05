import React, {forwardRef} from 'react';
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {setRPDLaboratoryClasses} from "../../../reducers/rpdReducer";
import {useDispatch, useSelector} from "react-redux";
import TextArea from "../../TextArea";
import './style.scss';

const LaboratoryClassesBlock = forwardRef((props, ref) => {
    const laboratoryClassesList = useSelector(state => state.rpd.currentLaboratoryClasses);

    const dispatch = useDispatch();

    const setTask = (value, index) => {
        const copyLaboratoryClassesList = laboratoryClassesList.slice();

        copyLaboratoryClassesList[index] = value;
        dispatch(setRPDLaboratoryClasses(
            copyLaboratoryClassesList
        ));
    }

    const onAddLine = () => {
        const copyLaboratoryClassesList = [
            ...laboratoryClassesList,
            ''
        ];

        dispatch(setRPDLaboratoryClasses(
            copyLaboratoryClassesList
        ));
    }

    const onDelLine = () => {
        const copyLaboratoryClassesList = laboratoryClassesList.slice();

        copyLaboratoryClassesList.pop();
        dispatch(setRPDLaboratoryClasses(
            copyLaboratoryClassesList
        ));
    }

    const getLine = () => {
        return laboratoryClassesList.map(
            (item, index, array) => {
                return (
                    <div className={'line'}>
                        <div className={'cell'}>
                            6.2.{index + 1}
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={item}
                                onChange={setTask}
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
        <div className={'laboratory-classes'} ref={ref}>
            <div className={'laboratory-classes__header'}>
                6.2. Тематика и задания для лабораторных занятий
            </div>
            <div className={'laboratory-classes__body'}>
                <div className={'table'}>
                    {
                        getLine()
                    }
                </div>
            </div>
            <div className={'laboratory-classes__buttons'}>
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

export default LaboratoryClassesBlock;