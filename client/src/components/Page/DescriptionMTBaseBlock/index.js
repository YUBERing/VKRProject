import React, {forwardRef} from 'react';
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import uniqid from "uniqid";
import TextArea from "../../TextArea";
import {useDispatch, useSelector} from "react-redux";
import {
    setRPDAnotherClassroom,
    setRPDClassroom,
    setRPDElectronicEquipments, setRPDEquipment,
    setRPDTypeElectronicEquipment
} from "../../../reducers/rpdReducer";
import './style.scss';

const DescriptionMTBaseBlock = forwardRef((props, ref) => {
    const classroomList = useSelector(state => state.rpd.currentClassroom)

    const anotherClassroom = useSelector(state => state.rpd.currentAnotherClassroom)

    const equipment = useSelector(state => state.rpd.currentEquipment);

    const typeElectronicEquipments = useSelector(state => state.rpd.currentTypeElectronicEquipment)

    const electronicEquipmentsList = useSelector(state => state.rpd.currentElectronicEquipments)

    const dispatch = useDispatch();

    const setSpecialAudit = (value, index) => {
        const copyClassroomList = classroomList.slice();

        copyClassroomList[index].specialAudit = value;
        dispatch(setRPDClassroom(copyClassroomList));
    }

    const setNumberAudit = (value, index) => {
        const copyClassroomList = classroomList.slice();

        copyClassroomList[index].numberAudit = value;
        dispatch(setRPDClassroom(copyClassroomList));
    }

    const setElectronicEquipment = (value, index) => {
        const copyElectronicEquipmentsList = electronicEquipmentsList.slice();

        copyElectronicEquipmentsList[index] = value;
        dispatch(setRPDElectronicEquipments(
            copyElectronicEquipmentsList
        ))
    }

    const setAnotherClassroom = (value) => {
        dispatch(setRPDAnotherClassroom(value));
    }

    const setEquipment = (value) => {
        dispatch(setRPDEquipment(value));
    }

    const setTypeElectronicEquipments = (value) => {
        dispatch(setRPDTypeElectronicEquipment(value));
    }

    const onAddClassroom = () => {
        const copyClassroomList = [
            ...classroomList,
            {
                specialAudit: '',
                numberAudit: '',
            }
        ];
        dispatch(setRPDClassroom(
            copyClassroomList
        ));
    }

    const onDelClassroom = () => {
        const copyClassroomList = classroomList.slice();

        copyClassroomList.pop();
        dispatch(setRPDClassroom(copyClassroomList));
    }

    const onAddEquipment = () => {
        const copyElectronicEquipmentsList = [
            ...electronicEquipmentsList,
            ''
        ];
        dispatch(setRPDElectronicEquipments(
            copyElectronicEquipmentsList
        ));
    }

    const onDelEquipment = () => {
        const copyElectronicEquipmentsList = electronicEquipmentsList.slice();

        copyElectronicEquipmentsList.pop();
        dispatch(setRPDElectronicEquipments(
            copyElectronicEquipmentsList
        ))
    }

    const getClassroom = () => {
        return classroomList.map(
            (item, index, array) => {
                return (
                    <div className={'line'} key={uniqid()}>
                        <div className={'cell'}>
                            {index + 1}
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                key={uniqid()}
                                value={item.specialAudit}
                                onChange={setSpecialAudit}
                                index={index}
                                array={array}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                key={uniqid()}
                                value={item.numberAudit}
                                onChange={setNumberAudit}
                                index={index}
                                array={array}
                            />
                        </div>
                    </div>
                )
            }
        )
    }

    const getEquipment = () => {
        return electronicEquipmentsList.map(
            (item, index, array) => {
                return (
                    <div className={'line'} key={uniqid()}>
                        <div className={'cell'}>
                            {
                                index + 1
                            }
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                key={uniqid()}
                                value={item}
                                onChange={setElectronicEquipment}
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
        <div className={'description-mt-base'} ref={ref}>
            <div className={'description-mt-base__header'}>
                9. Описание материально-технической базы, необходимой для осуществления образовательного процесса по дисциплине
            </div>
            <div className={'description-mt-base__body'}>
                <div className={'description-mt-base__label'}>
                    Для проведения всех видов занятий по дисциплине необходимо следующее материально-техническое обеспечение:
                </div>
                <div className={'description-mt-base__classroom'}>
                    <div className={'table'}>
                        <div className={'line'}>
                            <div className={'cell'}>
                                № п/п
                            </div>
                            <div className={'cell'}>
                                Специализированные аудитории и классы
                            </div>
                            <div className={'cell'}>
                                Номер аудитории
                            </div>
                        </div>
                        {
                            getClassroom()
                        }
                        <div className={'line'}>
                            <div className={'cell'}>

                            </div>
                            <div className={'cell'}>
                                <TextArea
                                    key={uniqid()}
                                    value={anotherClassroom}
                                    onChange={setAnotherClassroom}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'description-mt-base__buttons'}>
                        <Button
                            label = {'Добавить строку'}
                            onClick = {onAddClassroom}
                            modif = {'add'}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                        <Button
                            label = {'Удалить последнюю строку'}
                            onClick = {onDelClassroom}
                            modif = {'dell'}
                        >
                            <CloseIcon
                                className={'close-icon'}
                            />
                        </Button>
                    </div>
                </div>
                <div className={'description-mt-base__equipment'}>
                    <div className={'table'}>
                        <div className={'line'}>
                            <div className={'cell'}>
                                Учебное оборудование
                            </div>
                        </div>
                        <div className={'line'}>
                            <div className={'cell'}>

                            </div>
                            <div className={'cell'}>
                                <TextArea
                                    key={uniqid()}
                                    value={equipment}
                                    onChange={setEquipment}
                                />
                            </div>
                        </div>
                        <div className={'line'}>
                            <div className={'cell'}>
                                № п/п
                            </div>
                            <div className={'cell'}>
                                <TextArea
                                    key={uniqid()}
                                    value={typeElectronicEquipments}
                                    onChange={setTypeElectronicEquipments}
                                />
                            </div>
                        </div>
                        {
                            getEquipment()
                        }
                    </div>
                    <div className={'description-mt-base__buttons'}>
                        <Button
                            label = {'Добавить строку'}
                            onClick = {onAddEquipment}
                            modif = {'add'}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                        <Button
                            label = {'Удалить последнюю строку'}
                            onClick = {onDelEquipment}
                            modif = {'dell'}
                        >
                            <CloseIcon
                                className={'close-icon'}
                            />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default DescriptionMTBaseBlock;