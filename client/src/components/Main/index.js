import React, {useEffect, useRef, useState} from 'react';
import './style.scss'
import Page from "../Page";
import TitleBlock from "../Page/TitleBlock";
import Select from "../Select";
import {useDispatch, useSelector} from "react-redux";
import {getDirection} from "../../action/getDirection";
import AffirmativeBlock from "../Page/AffirmativeBlock";
import ObjectivesBlock from "../Page/ObjectivesBlock";
import BackButton from "./BackButton";
import PlannedOutcomesBlock from "../Page/PlannedOutcomesBlock";
import PlaceDisciplineBlock from "../Page/PlaceDisciplineBlock";
import NavigateMenu from "./NavigateMenu";
import ScopeDisciplineBlock from "../Page/ScopeDisciplineBlock";
import ScopeContactWorkBlock from "../Page/ScopeContactWorkBlock";
import ThematicPlanBlock from "../Page/ThematicPlanBlock";
import ContentPlanBlock from "../Page/ContentPlanBlock";
import PracticalTrainingBlock from "../Page/PracticalTrainingBlock";
import IndependentWorkBlock from "../Page/IndependentWorkBlock";
import LaboratoryClassesBlock from "../Page/LaboratoryClassesBlock";
import MethodRecommendBlock from "../Page/MethodRecommmendBlock";
import ReferencesBlock from "../Page/ReferencesBlock";
import InternetResourcesBlock from "../Page/InternetResourcesBlock";
import DescriptionMTBaseBlock from "../Page/DescriptionMTBaseBlock";
import Button from "../Button";
import Input from "../Input";
import {getFile} from "../../action/getFile";
import {setProfile} from "../../reducers/profileReducer";
import {setYears} from "../../reducers/yearsReducer";
import {setCurriculum} from "../../reducers/curriculumReducer";
import {setDiscipline} from "../../reducers/disciplineReducer";

const Main = () => {
    const listBlocks = [
        {
            label: 'Выбор дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Титульный блок',
            ref: useRef(null),
        },
        {
            label: 'Разработчики и рецензоры',
            ref: useRef(null),
        },
        {
            label: 'Цели и задачи дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Планируемые результаты обучения',
            ref: useRef(null),
        },
        {
            label: 'Место дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Объем дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Объем контактной работы',
            ref: useRef(null),
        },
        {
            label: 'Тематический план учебной дисциплины',
            ref: useRef(null),
        },
        {
            label: 'Содержание тематического плана',
            ref: useRef(null),
        },
        {
            label: 'Практическая подготовка',
            ref: useRef(null),
        },
        {
            label: 'Самостоятельная работа обучающихся',
            ref: useRef(null),
        },
        {
            label: 'Тематика и задания для лабораторных работ',
            ref: useRef(null),
        },
        {
            label: 'Методические рекомендации',
            ref: useRef(null),
        },
        {
            label: 'Перечень литературы',
            ref: useRef(null),
        },
        {
            label: 'Перечень интернет ресурсов',
            ref: useRef(null),
        },
        {
            label: 'Описание материально-технической базы',
            ref: useRef(null),
        },

    ]

    const curriculumList = useSelector(state => state.curriculum.currentCurriculum);
    const directionList = useSelector(state => state.direction.currentDirection);
    const disciplineList = useSelector(state => state.discipline.currentDiscipline);
    const profileList = useSelector(state => state.profile.currentProfile);
    const yearsList = useSelector(state => state.years.currentYears);
    const rpdData = useSelector(state => state.rpd);

    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const onCreateFile = (e) => {
        e.stopPropagation();
        getFile(name, rpdData);
    }

    useEffect(() => {
        async function getDataDirection() {
            await dispatch(
                await getDirection()
            );
        }

        dispatch(setProfile([]));
        dispatch(setYears([]));
        dispatch(setCurriculum([]));
        dispatch(setDiscipline([]));

        getDataDirection();
    }, [])

    const setNameFile = (value) => {
        setName(value)
    }

    return (
        <div className={'main'}>
            <div className={'main__curriculum'} ref={listBlocks[0].ref}>
                <div className={'main__name'}>
                    Выбор дисциплины
                </div>
                <Select
                    label={'Направление'}
                    list={directionList}
                    type={'direction'}
                    value={JSON.stringify(rpdData.currentDirection)}
                />
                <Select
                    label={'Направленность'}
                    list={profileList}
                    type={'profile'}
                    value={JSON.stringify(rpdData.currentProfile)}
                />
                <Select
                    label={'Год начала подготовки'}
                    list={yearsList}
                    type={'years'}
                    value={rpdData.currentYears}
                />
                <Select
                    label={'Учебный план'}
                    list={curriculumList}
                    type={'curriculum'}
                    value={JSON.stringify(rpdData.currentCurriculum)}
                />
                <Select
                    label={'Дисциплина'}
                    list={disciplineList}
                    type={'discipline'}
                    value={rpdData.currentDiscipline}
                />
            </div>
            <div className={'main__document'}>
                <Page>
                    <TitleBlock ref={listBlocks[1].ref}/>
                    <AffirmativeBlock ref={listBlocks[2].ref}/>
                    <ObjectivesBlock ref={listBlocks[3].ref}/>
                    <PlannedOutcomesBlock ref={listBlocks[4].ref}/>
                    <PlaceDisciplineBlock ref={listBlocks[5].ref}/>
                    <ScopeDisciplineBlock ref={listBlocks[6].ref}/>
                    <ScopeContactWorkBlock ref={listBlocks[7].ref}/>
                    <ThematicPlanBlock ref={listBlocks[8].ref}/>
                    <ContentPlanBlock ref={listBlocks[9].ref}/>
                    <PracticalTrainingBlock ref={listBlocks[10].ref}/>
                    <IndependentWorkBlock ref={listBlocks[11].ref}/>
                    <LaboratoryClassesBlock ref={listBlocks[12].ref}/>
                    <MethodRecommendBlock ref={listBlocks[13].ref}/>
                    <ReferencesBlock ref={listBlocks[14].ref}/>
                    <InternetResourcesBlock ref={listBlocks[15].ref}/>
                    <DescriptionMTBaseBlock ref={listBlocks[16].ref}/>
                </Page>
            </div>
            <div className={'main__field-file'}>
                <div className={'main__name'}>
                    Создание файла
                </div>
                <div className={'main__body'}>
                    <Input
                        value={name}
                        label={'Имя файла'}
                        onChange={setNameFile}
                        type={'text'}
                    />
                    <Button
                        label={'Создать файл'}
                        onClick={(e) => onCreateFile(e)}
                    />
                </div>
            </div>
            <NavigateMenu list={listBlocks}/>
            <BackButton/>
        </div>
    );
};

export default Main;