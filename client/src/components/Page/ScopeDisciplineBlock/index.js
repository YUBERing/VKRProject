import React, {forwardRef} from 'react';
import './style.scss';

const ScopeDisciplineBlock = forwardRef((props, ref) => {
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
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Общая трудоемкость в зачетных единицах
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Общая трудоемкость в часах
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Аудиторные занятия в часах, в том числе:
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Лекции
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Лабораторные занятия
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Практическая подготовка
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Самостоятельная работа в часах
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Форма промежуточной аттестации
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ScopeDisciplineBlock;