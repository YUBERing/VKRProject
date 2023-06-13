import React, {forwardRef} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../Button";
import {
    setRPDAffirmative,
    setRPDDevelopers,
    setRPDReviewer
} from "../../../reducers/rpdReducer";
import TextArea from "../../TextArea";
import uniqid from "uniqid";
import Signature from "../../Signature";

const AffirmativeBlock = forwardRef((props, ref) => {
    const discipline = useSelector(state => state.rpd.currentDiscipline);
    const direction = useSelector(state => state.rpd.currentDirection);
    const developersList = useSelector(state => state.rpd.currentDevelopers);
    const reviewer = useSelector(state => state.rpd.currentReviewer);
    const affirmative = useSelector(state => state.rpd.currentAffirmative);
    const orderNumber = useSelector(state => state.rpd.currentOrderNumber);

    const dispatch = useDispatch();

    const onAddDevelopers = () => {
        dispatch(setRPDDevelopers([...developersList, '']))
    }

    const onDelDeveloper = (index) => {
        const copyDevelopersList = developersList.slice();
        copyDevelopersList.splice(index, 1);
        dispatch(setRPDDevelopers(copyDevelopersList));
    }

    const setDeveloper = (value, index) => {
        const copyDevelopersList = developersList.slice();
        copyDevelopersList.splice(index, 1, value)
        dispatch(setRPDDevelopers(copyDevelopersList))
    }

    const setReviewer = (value) => {
        dispatch(setRPDReviewer(value))
    }

    const setAffirmative = (value) => {
        dispatch(setRPDAffirmative(value))
    }

    const getDevelopers = () => {
     return developersList.map((item, index, array) => {
         return (
             <TextArea
                 key={uniqid()}
                 value={item}
                 onChange={setDeveloper}
                 onDel={onDelDeveloper}
                 index={index}
                 array={array}
             >
                 <Signature/>
             </TextArea>
         )
     })
    }

    return (
        <div className={'affirmative-block'} ref={ref}>
            <div className={'affirmative-block__order'}>
                Рабочая программа дисциплины <span>{discipline} </span>
                разработана в соответствии с
                Федеральным государственным образовательным стандартом <span>{`(${direction.code_direction}) ${direction.name_direction}`}, </span>
                утв. приказом Министерства образования и науки РФ от {`${orderNumber.data} N ${orderNumber.number}`}
            </div>
            <div className={'affirmative-block__section'}>
                Разработал:
                <div className={'affirmative-block__developers'}>
                    <div className={'affirmative-block__inputs'}>
                        {getDevelopers()}
                    </div>
                    <Button
                        label={'Добавить разработчика'}
                        modif={'add'}
                        onClick={onAddDevelopers}
                    >
                        <AddIcon
                            className={'add-icon'}
                        />
                    </Button>
                </div>
            </div>
            <div className={'affirmative-block__section'}>
                Рецензент:
                <div className={'affirmative-block__reviewer'}>
                    <TextArea
                        value={reviewer}
                        onChange={setReviewer}
                    >
                        <Signature/>
                    </TextArea>
                </div>
            </div>
            <div className={'affirmative-block__section'}>
                УВТЕРЖДЕНО: <br/>
                Протокол заседания кафедры № __ от _____________ г.<br/>
                Заведующий кафедрой {''}:
                <div className={'affirmative-block__affirmative'}>
                    <TextArea
                        value={affirmative}
                        onChange={setAffirmative}
                    >
                        <Signature/>
                    </TextArea>
                </div>
            </div>
        </div>
    );
}
)
export default AffirmativeBlock;