import React, {forwardRef} from 'react';
import './style.scss'

const ScopeContactWorkBlock = forwardRef((props, ref) => {
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
                            Консультации
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Зачет
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Экзамен
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Курсовой проект
                        </div>
                        <div className={'cell'}>
                            ...
                        </div>
                    </div>
                    <div className={'line'}>
                        <div className={'cell'}>
                            Всего
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

export default ScopeContactWorkBlock;