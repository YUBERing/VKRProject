import React, {forwardRef} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import Input from "../../Input";
import {setRPDScopeContactWork} from "../../../reducers/rpdReducer";

const ScopeContactWorkBlock = forwardRef((props, ref) => {
    const scopeContactWork = useSelector(state => state.rpd.currentScopeContactWork);
    const formLearning = useSelector(state => state.rpd.currentFormLearning);

    const dispatch = useDispatch();

    const setConsultation = (value) => {
        const copyScopeContactWork = {};

        for (const key in scopeContactWork) {
            copyScopeContactWork[key] = scopeContactWork[key];
        }

        copyScopeContactWork.consultation = value;
        copyScopeContactWork.all = Number(copyScopeContactWork.lectures) + Number(copyScopeContactWork.laboratory) + Number(copyScopeContactWork.test) + Number(copyScopeContactWork.exam) + Number(copyScopeContactWork.course) + Number(copyScopeContactWork.consultation);

        dispatch(setRPDScopeContactWork(copyScopeContactWork))
    }

    return (
        <div className={'scope-contact-work'} ref={ref}>
            <div className={'scope-contact-work__header'}>
                4.2. Объем контактной работы на 1 обучающегося
            </div>
            <div className={'scope-contact-work__body'}>
                <div className={'table'}>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Виды учебных занятий
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
                           Лекции
                        </div>
                        <div className={'cell'}>
                            {scopeContactWork.lectures}
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Лабораторные занятия
                        </div>
                        <div className={'cell'}>
                            {
                                scopeContactWork.laboratory
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Консультации
                        </div>
                        <div className={'cell'}>
                            <Input
                                value={scopeContactWork.consultation}
                                onChange={setConsultation}
                                type={'number'}
                            />
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Зачет
                        </div>
                        <div className={'cell'}>
                            {scopeContactWork.test}
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Экзамен
                        </div>
                        <div className={'cell'}>
                            {
                                scopeContactWork.exam
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Курсовой проект
                        </div>
                        <div className={'cell'}>
                            {
                                scopeContactWork.course
                            }
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Всего
                        </div>
                        <div className={'cell'}>
                            {
                                scopeContactWork.all
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ScopeContactWorkBlock;