import React, {forwardRef, useEffect} from 'react';
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    setRPDChapterContentPlan,
    setRPDChapterPlan,
    setRPDThematicPlan,
    setRPDThematicPlanTotal
} from "../../../reducers/rpdReducer";
import uniqid from "uniqid";
import TextArea from "../../TextArea";
import Input from "../../Input";

const ThematicPlanBlock = forwardRef((props, ref) => {
    const thematicPlanList = useSelector(state => state.rpd.currentThematicPlan);
    const thematicPlanTotal = useSelector(state => state.rpd.currentThematicPlanTotal);
    const chapterPlanList = useSelector(state => state.rpd.currentChapterPlan);
    const chapterContentPlanList = useSelector(state => state.rpd.currentChapterContentPlan);
    const scopeDiscipline = useSelector(state => state.rpd.currentScopeDiscipline);
    const dispatch = useDispatch();

    useEffect(() => {
        const copyThematicPlanTotal = {};

        for (let key in thematicPlanTotal) {
            copyThematicPlanTotal[key] = thematicPlanTotal[key];
        }

        copyThematicPlanTotal.total = `${scopeDiscipline.totalCredits}/${scopeDiscipline.totalHours}`

        dispatch(setRPDThematicPlanTotal(copyThematicPlanTotal));
    }, [scopeDiscipline])

    const setThematicPlanTotal = (array) => {
        const copyThematicPlanTotal = {};

        for (let key in thematicPlanTotal) {
            copyThematicPlanTotal[key] = thematicPlanTotal[key];
        }

        copyThematicPlanTotal.lectures = array.reduce(
            (sum, item) => sum + Number(item.lectures), 0
        );

        copyThematicPlanTotal.laboratory = array.reduce(
            (sum, item) => sum + Number(item.laboratory), 0
        );

        copyThematicPlanTotal.independentWork = Number(copyThematicPlanTotal.lectures) + Number(copyThematicPlanTotal.laboratory) + array.reduce(
            (sum, item) => sum + Number(item.independentWork), 0
        );

        dispatch(setRPDThematicPlanTotal(copyThematicPlanTotal));
    }

    const setChapterPlan = (list) => {
        const selectedThematicPlanList = list.map(
            item => item.name
        ).filter(
            item => item !== 'Экзамен' && item !== 'Зачет' && item !== 'Курсовой проект'
        );

        dispatch(setRPDChapterPlan(selectedThematicPlanList));
    }

    const setName = (value, index) => {
        const copyThematicPlanList = thematicPlanList.slice();

        copyThematicPlanList[index].name = value;
        dispatch(setRPDThematicPlan(copyThematicPlanList));
        setChapterPlan(copyThematicPlanList);
    }

    const setLectures = (value, index) => {
        const copyThematicPlanList = thematicPlanList.slice();

        copyThematicPlanList[index].lectures = value;
        const allHours =  Number(copyThematicPlanList[index].lectures) +  Number(copyThematicPlanList[index].laboratory) + Number(copyThematicPlanList[index].independentWork);

        const point = allHours * Number(scopeDiscipline.totalCredits) / Number(scopeDiscipline.totalHours);

        copyThematicPlanList[index].total = `${point.toFixed(2)}/${allHours}`;
        setThematicPlanTotal(copyThematicPlanList)
        dispatch(setRPDThematicPlan(copyThematicPlanList))

    }

    const setLaboratory = (value, index) => {
        const copyThematicPlanList = thematicPlanList.slice();

        copyThematicPlanList[index].laboratory = value;
        const allHours =  Number(copyThematicPlanList[index].lectures) +  Number(copyThematicPlanList[index].laboratory) + Number(copyThematicPlanList[index].independentWork);

        const point = allHours * Number(scopeDiscipline.totalCredits) / Number(scopeDiscipline.totalHours);

        copyThematicPlanList[index].total = `${point.toFixed(2)}/${allHours}`;
        setThematicPlanTotal(copyThematicPlanList)
        dispatch(setRPDThematicPlan(copyThematicPlanList))

    }

    const setIndependentWork = (value, index) => {
        const copyThematicPlanList = thematicPlanList.slice();

        copyThematicPlanList[index].independentWork = value;
        const allHours =  Number(copyThematicPlanList[index].lectures) +  Number(copyThematicPlanList[index].laboratory) + Number(copyThematicPlanList[index].independentWork);

        const point = allHours * Number(scopeDiscipline.totalCredits) / Number(scopeDiscipline.totalHours);

        copyThematicPlanList[index].total = `${point.toFixed(2)}/${allHours}`;
        setThematicPlanTotal(copyThematicPlanList);
        dispatch(setRPDThematicPlan(copyThematicPlanList))

    }

    const onAddLine = () => {
        const copyThematicPlanList = [
            ...thematicPlanList,
            {
                name: '',
                total: '0/0',
                lectures: 0,
                laboratory: 0,
                independentWork: 0,
            }
        ];
        dispatch(setRPDThematicPlan(
            copyThematicPlanList
        ));
        setChapterPlan(copyThematicPlanList);
        dispatch(
            setRPDChapterContentPlan(
                [
                    ...chapterContentPlanList,
                    {
                        chapter: chapterPlanList.length,
                        name: '',
                        description: '',
                    }
                ]
            )
        )
    }

    const onDelLine = () => {
        const copyThematicPlanList = thematicPlanList.slice();

        copyThematicPlanList.pop();
        setThematicPlanTotal(copyThematicPlanList);
        dispatch(setRPDThematicPlan(copyThematicPlanList));
        setChapterPlan(copyThematicPlanList);
        const copyChapterContentList = chapterContentPlanList.filter(item => item.chapter !== chapterPlanList.length - 1);

        dispatch(setRPDChapterContentPlan(copyChapterContentList));

    }

    const getLines = () => {
        return thematicPlanList.map((item, index, array) => {
            return (
                <div className={'line'} key={uniqid()}>
                    <div className={'cell'}>
                        {index+1}
                    </div>
                    <div className={'cell'}>
                        <TextArea
                            value={item.name}
                            onChange={setName}
                            index={index}
                            array={array}
                        />
                    </div>
                    <div className={'cell'}>
                        {item.total}
                    </div>
                    <div className={'cell'}>
                        <Input
                            value={item.lectures}
                            onChange={setLectures}
                            index={index}
                            type={'number'}
                        />
                    </div>
                    <div className={'cell'}>
                        <Input
                            value={item.laboratory}
                            onChange={setLaboratory}
                            index={index}
                            type={'number'}
                        />
                    </div>
                    <div className={'cell'}>
                        <Input
                            value={item.independentWork}
                            onChange={setIndependentWork}
                            index={index}
                            type={'number'}
                        />
                    </div>
                </div>
            )
        })
    }

    return (
        <div className={'thematic-plan'} ref={ref}>
            <div className={'thematic-plan__header'}>
                5. Содержание дисциплины, структурированное по темам (разделам), с указанием количества часов и видов занятий
            </div>
            <div className={'thematic-plan__header'}>
                5.1 Тематический план учебной дисциплины
            </div>
            <div className={'thematic-plan__body'}>
                <div className={'table'}>
                    <div className={'line__head'}>
                        <div className={'cell'}>
                            №
                        </div>
                        <div className={'cell'}>
                            Название раздела, темы
                        </div>
                        <div className={'cell'}>
                            Всего
                            з.е/час
                        </div>
                        <div className={'cell'}>
                            <div className={'line'}>
                                <div className={'cell__cell'}>
                                    Аудиторные занятия
                                </div>
                            </div>
                            <div className={'line'}>
                                <div className={'cell__cell'}>
                                    Лекц.
                                </div>
                                <div className={'cell__cell'}>
                                    Лаб.
                                </div>
                            </div>
                        </div>
                        <div className={'cell'}>
                            Самостоятельная работа
                        </div>
                    </div>
                    {
                        getLines()
                    }
                    <div className={'line'}>
                        <div className={'cell'}>

                        </div>
                        <div className={'cell'}>
                            Итого
                        </div>
                        <div className={'cell'}>
                            {thematicPlanTotal.total}
                        </div>
                        <div className={'cell'}>
                            {thematicPlanTotal.lectures}
                        </div>
                        <div className={'cell'}>
                            {thematicPlanTotal.laboratory}
                        </div>
                        <div className={'cell'}>
                            {thematicPlanTotal.independentWork}
                        </div>
                    </div>
                </div>
                <div className={'thematic-plan__buttons'}>
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
                <div className={'thematic-plan__alert'}>
                    {
                        thematicPlanTotal.independentWork !== scopeDiscipline.totalHours &&
                            '***Несовпадение данных. Проверьте итоговое кол-во часов и соотнесите с общей трудоемкостью в часах***'
                    }
                </div>
            </div>
        </div>
    );
});

export default ThematicPlanBlock;