import React, {forwardRef} from 'react';
import AddIcon from "@mui/icons-material/Add";
import Button from "../../Button";
import TextArea from "../../TextArea";
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";
import {setRPDPlaceDiscipline} from "../../../reducers/rpdReducer";
import './style.scss';

const PlaceDisciplineBlock = forwardRef((props, ref) => {
    const placeDiscipline = useSelector(state => state.rpd.currentPlaceDiscipline);
    const semestersList = useSelector(state => state.rpd.currentSemesters);

    const dispatch = useDispatch();

    const setBased = (value, index) => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.based.splice(index, 1, value)
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline))
    }

    const onDelBased = (index) => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.based.splice(index, 1);
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline));
    }

    const onAddBased = () => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.based.push('');
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline));
    }

    const setBasis = (value, index) => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.basis.splice(index, 1, value)
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline))
    }

    const onDelBasis = (index) => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.basis.splice(index, 1);
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline));
    }

    const onAddBasis = () => {
        const copyPlaceDiscipline = {};

        for (const key in placeDiscipline) {
            copyPlaceDiscipline[key] = placeDiscipline[key]
        }

        copyPlaceDiscipline.basis.push('');
        dispatch(setRPDPlaceDiscipline(copyPlaceDiscipline));
    }

    const getSemesters = () => {
        if (semestersList.length === 1) {
            return semestersList[0] + 'семестре'
        }

        if (semestersList.length > 1) {
            const string = semestersList.reduce((string, item, index, array) => {
                if (index === 0) {
                    return string + `${item}`;
                }
                if (index === array.length - 1) {
                    return string + ` и ${item}`;
                }
                if (index > 0) {
                    return string + `, ${item}`;
                }
            }, ['']);

            return string + ' семестрах'
        }

        return '...'
    }

    const getItem = (list, setItem, onDel) => {
        const copyList = list.slice();

        return copyList.map((item, index, array) => {
            return (
                <TextArea
                    key={uniqid()}
                    value={item}
                    onChange={setItem}
                    onDel={onDel}
                    index={index}
                    array={array}
                />
            )
        })
    }

    return (
        <div className={'place-discipline-block'} ref={ref}>
            <div className={'place-discipline-block__header'}>
                3. Место дисциплины в структуре ОП ВО
            </div>
            <div className={'place-discipline-block__body'}>
                <div className={'place-discipline-block__semesters'}>
                    Дисциплина относится к части учебного плана, формируемой участниками образовательных отношений. Изучается в <span>{getSemesters()}</span> обучения.
                </div>
                <div className={'place-discipline-block__based'}>
                    Изучение дисциплины основывается на ранее освоенных дисциплинах/практиках:
                    <div className={'place-discipline-block__inputs'}>
                        {
                            getItem(
                                placeDiscipline.based,
                                setBased,
                                onDelBased,
                            )
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddBased}
                    >
                        <AddIcon
                            className={'add-icon'}
                        />
                    </Button>
                </div>
                <div className={'place-discipline-block__basis'}>
                    Изучение дисциплины является основой для освоения последющих дисциплин/практик:
                    <div className={'place-discipline-block__inputs'}>
                        {
                            getItem(
                                placeDiscipline.basis,
                                setBasis,
                                onDelBasis,
                            )
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddBasis}
                    >
                        <AddIcon
                            className={'add-icon'}
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
});

export default PlaceDisciplineBlock;