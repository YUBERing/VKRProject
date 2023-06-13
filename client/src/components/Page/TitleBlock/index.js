import React, {forwardRef} from 'react';
import './style.scss'
import {useSelector} from "react-redux";
import Field from "../../Field";

const TitleBlock = forwardRef((props, ref) => {
    const direction = useSelector(state => state.rpd.currentDirection);
    const profile = useSelector(state => state.rpd.currentProfile);
    const discipline = useSelector(state => state.rpd.currentDiscipline);
    const qualification = useSelector(state => state.rpd.currentQualification);

    return (
        <div className={'title-block'} ref={ref}>
            <div className={'title-block__header'}>
                <div className={'title-block__line'}>
                    МИНОБРНАУКИ РОССИИ
                </div>
                <div className={'title-block__line'}>
                    Федеральное государственное бюджетное образовательное учреждение
                    высшего образования
                </div>
                <div className={'title-block__line'}>
                    «Костромской государственный университет»
                </div>
                <div className={'title-block__line'}>
                    (КГУ)
                </div>
            </div>
            <div className={'title-block__title'}>
                <div className={'title-block__name'}>
                    РАБОЧАЯ ПРОГРАММА ДИСЦИПЛИНЫ
                </div>
                <Field
                    value={discipline}
                    modif={'bold'}
                />
                <Field
                    label={'Направление подготовки'}
                    value={`(${direction.code_direction}) ${direction.name_direction}`}
                    modif={'italic'}
                />
                <Field
                    label={'Направленность'}
                    value={`«${profile[1]}»`}
                    modif={'italic'}
                />
                <Field
                    label={'Квалификация (степень) выпускника:'}
                    value={qualification}
                    modif={'underline'}
                />
            </div>
            <div className={'title-block__footer'}>
                Кострома
            </div>
        </div>
    );
}
)
export default TitleBlock;