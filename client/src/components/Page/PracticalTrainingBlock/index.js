import React, {forwardRef} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import Select from "../../Select";
import TextArea from "../../TextArea";
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {setRPDPracticalTraining} from "../../../reducers/rpdReducer";
import uniqid from "uniqid";

const PracticalTrainingBlock = forwardRef((props, ref) => {
    const practicalTrainingList = useSelector(state => state.rpd.currentPracticalTraining);

    const competenceList = useSelector(state => state.rpd.currentCompetence);

    const dispatch = useDispatch();

    const setIndicatorCompetence = (value, index) => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList[index].indicatorCompetence = value;
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const setTaskContent = (value, index) => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList[index].taskContent = value;
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const setLectures = (value, index) => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList[index].lectures = value;
        copyPracticalTrainingList[index].total = Number(copyPracticalTrainingList[index].lectures) + Number(copyPracticalTrainingList[index].courseProject) + Number(copyPracticalTrainingList[index].laboratory);
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const setCourseProject = (value, index) => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList[index].courseProject = value;
        copyPracticalTrainingList[index].total = Number(copyPracticalTrainingList[index].lectures) + Number(copyPracticalTrainingList[index].courseProject) + Number(copyPracticalTrainingList[index].laboratory);
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const setLaboratory = (value, index) => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList[index].laboratory = value;
        copyPracticalTrainingList[index].total = Number(copyPracticalTrainingList[index].lectures) + Number(copyPracticalTrainingList[index].courseProject) + Number(copyPracticalTrainingList[index].laboratory);
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const onAddLine = () => {
        const copyPracticalTrainingList = [
            ...practicalTrainingList,
            {
                codeCompetence: '',
                indicatorCompetence: '',
                taskContent: '',
                total: 0,
                lectures: 0,
                courseProject: 0,
                laboratory: 0,
            }
        ];
        dispatch(setRPDPracticalTraining(
            copyPracticalTrainingList
        ));
    }

    const onDelLine = () => {
        const copyPracticalTrainingList = practicalTrainingList.slice();

        copyPracticalTrainingList.pop();
        dispatch(setRPDPracticalTraining(copyPracticalTrainingList));
    }

    const getLine = () => {
        const codeCompetenceList = competenceList.map(item => item.code)

        return practicalTrainingList.map(
            (item, index, array) => {
                return (
                    <div className={'line'} key={uniqid()}>
                        <div className={'cell'}>
                            <Select
                            list = {codeCompetenceList}
                            type = 'competence'
                            array = {array}
                            index = {index}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                            value = {`${item.codeCompetence}.`}
                            onChange = {setIndicatorCompetence}
                            index = {index}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value = {item.taskContent}
                                onChange = {setTaskContent}
                                index = {index}
                            />
                        </div>
                        <div className={'cell'}>
                            {item.total}
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value = {item.lectures}
                                onChange = {setLectures}
                                index = {index}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value = {item.courseProject}
                                onChange = {setCourseProject}
                                index = {index}
                            />
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value = {item.laboratory}
                                onChange = {setLaboratory}
                                index = {index}
                            />
                        </div>
                    </div>
                )
            }
        )
    }

    return (
        <div className={'practical-training'} ref={ref}>
            <div className={'practical-training__header'}>
                5.3. Практическая подготовка
            </div>
            <div className={'practical-training__body'}>
                <div className={'table'}>
                    <div className={'line__head'}>
                        <div className={'cell'}>
                            Код компетенции
                        </div>
                        <div className={'cell'}>
                            Индикатор компетенции
                        </div>
                        <div className={'cell'}>
                            Содрежание задания на практическую подготовку по выбранному виду деятельности
                        </div>
                        <div className={'cell'}>
                            <div className={'line'}>
                                <div className={'cell__cell'}>
                                    Число часов практической подготовки
                                </div>
                            </div>
                            <div className={'line'}>
                                <div className={'cell__cell'}>
                                    Всего
                                </div>
                                <div className={'cell__cell'}>
                                    Лекции
                                </div>
                                <div className={'cell__cell'}>
                                    Курсовой проект
                                </div>
                                <div className={'cell__cell'}>
                                    Лаб.раб
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        getLine()
                    }
                </div>
            </div>
            <div className={'practical-training__buttons'}>
                <Button
                    label = {'Добавить строку'}
                    onClick = {onAddLine}
                    modif = {'add'}
                >
                    <AddIcon
                        className={'add-icon'}
                    />
                </Button>
                <Button
                    label = {'Удалить последнюю строку'}
                    onClick = {onDelLine}
                    modif = {'dell'}
                >
                    <CloseIcon
                        className={'close-icon'}
                    />
                </Button>
            </div>
        </div>
    );
});

export default PracticalTrainingBlock;