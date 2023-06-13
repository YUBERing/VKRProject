import React, {forwardRef} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import TextArea from "../../TextArea";
import {setRPDScopeDiscipline} from "../../../reducers/rpdReducer";

const ScopeDisciplineBlock = forwardRef((props, ref) => {
    const scopeDiscipline = useSelector(state => state.rpd.currentScopeDiscipline);
    const formLearning = useSelector(state => state.rpd.currentFormLearning);

    const dispatch = useDispatch()

    const setIndependent = (value) => {
        const copyScopeDiscipline = {};

        for (const key in scopeDiscipline) {
            copyScopeDiscipline[key] = scopeDiscipline[key];
        }

        copyScopeDiscipline.independent = value;

        dispatch(setRPDScopeDiscipline(copyScopeDiscipline))
    }

    return (
        <div className={'scope-discipline'} ref={ref}>
            <div className={'scope-discipline__header'}>
                4. Объем дисциплины (модуля)
            </div>
            <div className={'scope-discipline__header'}>
                4.1. Объем дисциплины в зачетных единицах с указанием академических (астрономических) часов и виды учебной работы
            </div>
            <div className={'scope-discipline__body'}>
                <div className={'table'}>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Виды учебной работы
                        </div>
                        <div className={'cell'}>
                            {
                                formLearning &&
                                `${formLearning} форма`
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Общая трудоемкость в зачетных единицах
                        </div>
                        <div className={'cell'}>
                            {scopeDiscipline.totalCredits}
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Общая трудоемкость в часах
                        </div>
                        <div className={'cell'}>
                            {scopeDiscipline.totalHours}
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Аудиторные занятия в часах, в том числе:
                        </div>
                        <div className={'cell'}>
                            {
                                scopeDiscipline.classroomClasses
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Лекции
                        </div>
                        <div className={'cell'}>
                            {
                                scopeDiscipline.lectures
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Лабораторные занятия
                        </div>
                        <div className={'cell'}>
                            {
                                scopeDiscipline.laboratory
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Практическая подготовка
                        </div>
                        <div className={'cell'}>
                            {scopeDiscipline.practical}
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Самостоятельная работа в часах
                        </div>
                        <div className={'cell'}>
                            <TextArea
                                value={scopeDiscipline.independent}
                                onChange={setIndependent}
                            />
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Форма промежуточной аттестации
                        </div>
                        <div className={'cell'}>
                            {
                                scopeDiscipline.formCertification.reduce((string, item, index) => {
                                    if (index === 0) {
                                        return string + `${item}`
                                    }
                                    if (index > 0) {
                                        return string + `, ${item}`
                                    }
                                }, '')
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ScopeDisciplineBlock;