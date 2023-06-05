import React, {forwardRef} from 'react';
import './style.scss';

const MethodRecommendBlock = forwardRef((props, ref) => {
    return (
        <div className={'method-recommend'} ref={ref}>
            <div className={'method-recommend__header'}>
                6.3. Методические рекомендации для выполнения курсового проекта
            </div>
            <div className={'method-recommend__body'}>
                ***<br/>
                Данный блок заполняется преподавателем самостоятельно в созданном документе
                <br/>***
            </div>
        </div>
    );
});

export default MethodRecommendBlock;