import React, {useEffect, useState} from 'react';
import './style.scss'
import Select from "../../Select";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../Button";
import {deleteCurriculum} from "../../../action/deleteCurriculum";
import {setDelCurriculum, setDelDirection, setDelProfile, setDelYears} from "../../../reducers/deleteCurriculumReducer";
import {setDirection} from "../../../reducers/directionReducer";
import {setProfile} from "../../../reducers/profileReducer";
import {setYears} from "../../../reducers/yearsReducer";
import {setCurriculum} from "../../../reducers/curriculumReducer";
import {getDirection} from "../../../action/getDirection";

const DeleteCurriculumBlock = () => {
    const curriculumList = useSelector(state => state.curriculum.currentCurriculum);
    const directionList = useSelector(state => state.direction.currentDirection);
    const profileList = useSelector(state => state.profile.currentProfile);
    const yearsList = useSelector(state => state.years.currentYears);
    const delCurriculum = useSelector(state => state.deleteCurriculum);

    const [alert, setAlert] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        async function getDataDirection() {
            await dispatch(
                await getDirection()
            );
        }

        dispatch(setProfile([]));
        dispatch(setYears([]));
        dispatch(setCurriculum([]));

        getDataDirection();
    }, [])

    const onDeleteCurriculum = async () => {
        const response = await deleteCurriculum(delCurriculum.currentCurriculum.codeCurricula);

        setAlert(response);

        dispatch(setDelCurriculum({
            codeCurricula: '',
            form_of_training: "",
            idPd: '',
            nameCurricula: "",
            number_educational_standard: '',
            statement: "",
            type_of_education: "",
            yearStartTraining: '',
        }));
        dispatch(setDelYears(''));
        dispatch(setDelProfile(['','']));
        dispatch(setDelDirection({
            code_direction: '',
            name_direction: ''
        }));

        dispatch(setProfile([]));
        dispatch(setYears([]));
        dispatch(setCurriculum([]));
    }

    return (
        <div className={'delete-curriculum-block'}>
            <div className={'delete-curriculum-block__header'}>
                Удаление учебного плана
            </div>
            <div className={'delete-curriculum-block__body'}>
                <Select
                    label={'Направление'}
                    list={directionList}
                    type={'del-direction'}
                    value={JSON.stringify(delCurriculum.currentDirection)}
                />
                <Select
                    label={'Направленность'}
                    list={profileList}
                    type={'del-profile'}
                    value={JSON.stringify(delCurriculum.currentProfile)}
                />
                <Select
                    label={'Год начала подготовки'}
                    list={yearsList}
                    type={'del-years'}
                    value={delCurriculum.currentYears}
                />
                <Select
                    label={'Учебный план'}
                    list={curriculumList}
                    type={'del-curriculum'}
                    value={JSON.stringify(delCurriculum.currentCurriculum)}
                />
            </div>
            <div className={'delete-curriculum-block__buttons'}>
                <div className={'delete-curriculum-block__alert'}>
                    {alert}
                </div>
                <Button
                    label={'Удалить указанный учебный план'}
                    onClick={() => onDeleteCurriculum()}
                />
            </div>
        </div>
    );
};

export default DeleteCurriculumBlock;