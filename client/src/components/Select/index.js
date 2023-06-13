import React, {useState} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import {
    setRPDCompetence,
    setRPDCurriculum,
    setRPDDirection,
    setRPDDiscipline, setRPDFormLearning, setRPDOrderNumber, setRPDPlannedOutcomes,
    setRPDPracticalTraining,
    setRPDProfile, setRPDQualification, setRPDScopeContactWork, setRPDScopeDiscipline, setRPDSemesters,
    setRPDYears
} from "../../reducers/rpdReducer";
import {getProfile} from "../../action/getProfile";
import {getYears} from "../../action/getYears";
import {getCurriculum} from "../../action/getCurriculum";
import {getDiscipline} from "../../action/getDisipline";
import {getStandart} from "../../action/getStandart";
import {getQualification} from "../../action/getQualification";
import {getCompetencies} from "../../action/getComptencies";
import {getSemester} from "../../action/getSemester";
import {getDispInf} from "../../action/getDispInf";
import {getFormLearning} from "../../action/getFormLearning";
import {setDelCurriculum, setDelDirection, setDelProfile, setDelYears} from "../../reducers/deleteCurriculumReducer";

const Select = (props) => {
    const {
        label,
        list,
        type,
        array,
        index,
        value,
    } = props;

    const profile = useSelector(state => state.rpd.currentProfile);

    const direction = useSelector(state => state.rpd.currentDirection);

    const curricula = useSelector(state => state.rpd.currentCurriculum);

    const plannedOutcomes = useSelector(state => state.rpd.currentPlannedOutcomes);

    const scopeDiscipline = useSelector(state => state.rpd.currentScopeDiscipline);

    const scopeContactWork= useSelector(state => state.rpd.currentScopeContactWork);

    const del_direction = useSelector(state => state.deleteCurriculum.currentDirection);

    const del_profile = useSelector(state => state.deleteCurriculum.currentProfile);

    const dispatch = useDispatch();

    const setOption = () => {
        const copyList = list.slice();

        switch (type) {
            case 'direction':
                copyList.unshift({
                    code_direction: '',
                    name_direction: '',
                    }
                );

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item.name_direction}
                        </option>
                )
            case 'profile':
                copyList.unshift(['', '']);

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item[1]}
                        </option>
                )
            case 'years':
                copyList.unshift('');

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} key={i}>
                            {item}
                        </option>
                )
            case 'curriculum':
                copyList.unshift({
                    codeCurricula: '',
                    form_of_training: "",
                    idPd: '',
                    nameCurricula: "",
                    number_educational_standard: '',
                    statement: "",
                    type_of_education: "",
                    yearStartTraining: '',
                });

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item.nameCurricula}
                        </option>
                )
            case 'discipline':
                copyList.unshift('');

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} key={i}>
                            {item}
                        </option>
                )
            case 'competence':
                copyList.unshift('');

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} key={i}>
                            {item}
                        </option>
                )
            case 'del-direction':
                copyList.unshift({
                        code_direction: '',
                        name_direction: '',
                    }
                );

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item.name_direction}
                        </option>
                )
            case 'del-profile':
                copyList.unshift(['', '']);

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item[1]}
                        </option>
                )
            case 'del-years':
                copyList.unshift('');

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} key={i}>
                            {item}
                        </option>
                )
            case 'del-curriculum':
                copyList.unshift({
                    codeCurricula: '',
                    form_of_training: "",
                    idPd: '',
                    nameCurricula: "",
                    number_educational_standard: '',
                    statement: "",
                    type_of_education: "",
                    yearStartTraining: '',
                });

                return copyList.map(
                    (item, i) =>
                        <option className={'select__option'} value={JSON.stringify(item)} key={i}>
                            {item.nameCurricula}
                        </option>
                )
            default:
                return list.map(
                    (item, i) =>
                        <option className={'select__option'} key={i}>
                            {item}
                        </option>
                )
        }
    }

    const setDis = async (value, type) => {
        switch(type) {
            case 'direction':
                dispatch(setRPDDirection(JSON.parse(value)));
                dispatch(setRPDProfile(['...','...']));
                dispatch(setRPDYears('...'));
                dispatch(setRPDCurriculum({
                    codeCurricula: '...',
                    form_of_training: "",
                    idPd: '',
                    nameCurricula: "",
                    number_educational_standard: '...',
                    statement: "",
                    type_of_education: "",
                    yearStartTraining: '',
                }));
                dispatch(setRPDDiscipline('...'));
                dispatch(setRPDOrderNumber({
                    number: '...',
                    data: '...',
                    description: '...',
                }));
                dispatch(setRPDQualification('...'));
                dispatch(setRPDFormLearning('...'))
                dispatch(setRPDCompetence([]));
                dispatch(setRPDPlannedOutcomes({
                    know: [''],
                    be_able: [''],
                    own: [''],
                    master: [
                        ['...', '...']
                    ],
                }));
                dispatch(setRPDSemesters([]));
                dispatch(setRPDScopeDiscipline({
                    totalCredits: 0,
                    totalHours: 0,
                    classroomClasses: 0,
                    lectures: 0,
                    laboratory: 0,
                    practical: 0,
                    independent: 0,
                    formCertification: [''],
                }));
                dispatch(setRPDScopeContactWork({
                    lectures: 0,
                    laboratory: 0,
                    consultation: 0,
                    test: 0,
                    exam: 0,
                    course: 0,
                    all: 0,
                }));
                await dispatch(await getProfile(JSON.parse(value)));
                break;
            case 'profile':
                dispatch(setRPDProfile(JSON.parse(value)));
                dispatch(setRPDYears('...'));
                dispatch(setRPDCurriculum({
                    codeCurricula: '...',
                    form_of_training: "",
                    idPd: '',
                    nameCurricula: "",
                    number_educational_standard: '...',
                    statement: "",
                    type_of_education: "",
                    yearStartTraining: '',
                }));
                dispatch(setRPDDiscipline('...'));
                dispatch(setRPDOrderNumber({
                    number: '...',
                    data: '...',
                    description: '...',
                }));
                dispatch(setRPDQualification('...'));
                dispatch(setRPDFormLearning('...'))
                dispatch(setRPDCompetence([]));
                dispatch(setRPDPlannedOutcomes({
                    know: [''],
                    be_able: [''],
                    own: [''],
                    master: [
                        ['...', '...']
                    ],
                }));
                dispatch(setRPDSemesters([]));
                dispatch(setRPDScopeDiscipline({
                    totalCredits: 0,
                    totalHours: 0,
                    classroomClasses: 0,
                    lectures: 0,
                    laboratory: 0,
                    practical: 0,
                    independent: 0,
                    formCertification: [''],
                }));
                dispatch(setRPDScopeContactWork({
                    lectures: 0,
                    laboratory: 0,
                    consultation: 0,
                    test: 0,
                    exam: 0,
                    course: 0,
                    all: 0,
                }));
                await dispatch(await getYears(direction.code_direction, JSON.parse(value)));
                break;
            case 'years':
                dispatch(setRPDYears(value));
                dispatch(setRPDCurriculum({
                    codeCurricula: '...',
                    form_of_training: "",
                    idPd: '',
                    nameCurricula: "",
                    number_educational_standard: '...',
                    statement: "",
                    type_of_education: "",
                    yearStartTraining: '',
                }));
                dispatch(setRPDDiscipline('...'));
                dispatch(setRPDOrderNumber({
                    number: '...',
                    data: '...',
                    description: '...',
                }));
                dispatch(setRPDQualification('...'));
                dispatch(setRPDFormLearning('...'))
                dispatch(setRPDCompetence([]));
                dispatch(setRPDPlannedOutcomes({
                    know: [''],
                    be_able: [''],
                    own: [''],
                    master: [
                        ['...', '...']
                    ],
                }));
                dispatch(setRPDSemesters([]));
                dispatch(setRPDScopeDiscipline({
                    totalCredits: 0,
                    totalHours: 0,
                    classroomClasses: 0,
                    lectures: 0,
                    laboratory: 0,
                    practical: 0,
                    independent: 0,
                    formCertification: [''],
                }));
                dispatch(setRPDScopeContactWork({
                    lectures: 0,
                    laboratory: 0,
                    consultation: 0,
                    test: 0,
                    exam: 0,
                    course: 0,
                    all: 0,
                }));
                await dispatch(await getCurriculum(direction.code_direction, profile[0], value));
                break;
            case 'curriculum':
                dispatch(setRPDCurriculum(JSON.parse(value)));
                dispatch(setRPDDiscipline('...'));
                dispatch(setRPDCompetence([]));
                dispatch(setRPDPlannedOutcomes({
                    know: [''],
                    be_able: [''],
                    own: [''],
                    master: [
                        ['...', '...']
                    ],
                }));
                dispatch(setRPDSemesters([]));
                dispatch(setRPDScopeDiscipline({
                    totalCredits: 0,
                    totalHours: 0,
                    classroomClasses: 0,
                    lectures: 0,
                    laboratory: 0,
                    practical: 0,
                    independent: 0,
                    formCertification: [''],
                }));
                dispatch(setRPDScopeContactWork({
                    lectures: 0,
                    laboratory: 0,
                    consultation: 0,
                    test: 0,
                    exam: 0,
                    course: 0,
                    all: 0,
                }));
                await dispatch(await getDiscipline(JSON.parse(value)));
                await dispatch(await getStandart(JSON.parse(value)));
                await dispatch(await getQualification(JSON.parse(value)));
                await dispatch(await getFormLearning(JSON.parse(value)));
                break;
            case 'discipline':
                dispatch(setRPDDiscipline(value));
                await dispatch(await getCompetencies(plannedOutcomes, curricula.codeCurricula, value))
                await dispatch(await getSemester(curricula.codeCurricula, value))
                await dispatch(await getDispInf(scopeContactWork, scopeDiscipline, curricula.codeCurricula, value))
                break;
            case 'competence':
                const copyArray = array.slice();
                copyArray[index].codeCompetence = value;
                dispatch(setRPDPracticalTraining(copyArray));
                break;
            case 'del-direction':
                dispatch(setDelDirection(JSON.parse(value)));
                dispatch(setDelProfile(['','']))
                dispatch(setDelYears(''));
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
                await dispatch(await getProfile(JSON.parse(value)));
                break;
            case 'del-profile':
                dispatch(setDelProfile(JSON.parse(value)));
                dispatch(setDelYears(''));
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
                await dispatch(await getYears(del_direction.code_direction, JSON.parse(value)));
                break;
            case 'del-years':
                dispatch(setDelYears(value));
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
                await dispatch(await getCurriculum(del_direction.code_direction, del_profile[0], value));
                break;
            case 'del-curriculum':
                dispatch(setDelCurriculum(JSON.parse(value)));
                break;
            default:
                return null;
        }
    }

    return (
        <div className={'select'}>
            {
                label &&
                <div className={'select__label'}>
                    {label}
                </div>
            }
            <select
                className={'select__input'}
                value={value}
                onChange={(e) => setDis(e.target.value, type)}
            >
                {
                    setOption()
                }
            </select>
        </div>
    );
};

export default Select;