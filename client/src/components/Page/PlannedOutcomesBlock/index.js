import React, {forwardRef} from 'react';
import './style.scss';
import TextArea from "../../TextArea";
import uniqid from "uniqid";
import {useDispatch, useSelector} from "react-redux";
import {setRPDPlannedOutcomes} from "../../../reducers/rpdReducer";
import AddIcon from "@mui/icons-material/Add";
import Button from "../../Button";
import Field from "../../Field";

const PlannedOutcomesBlock = forwardRef((props, ref) => {
    const plannedOutcomesList = useSelector(state => state.rpd.currentPlannedOutcomes);
    const dispatch = useDispatch();

    const setKnow = (value, index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.know.splice(index, 1, value)
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList))
    }

    const onDelKnow = (index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.know.splice(index, 1);
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
    }

    const onAddKnow = () => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.know.push('');
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
    }

    const setBeAble = (value, index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.be_able.splice(index, 1, value)
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList))
    }

    const onDelBeAble = (index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.be_able.splice(index, 1);
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
    }

    const onAddBeAble = () => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.be_able.push('');
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
    }

    const setOwn = (value, index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.own.splice(index, 1, value)
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList))
    }

    const onDelOwn = (index) => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.own.splice(index, 1);
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
    }

    const onAddOwn = () => {
        const copyPlannedOutcomesList = {};

        for (const key in plannedOutcomesList) {
            copyPlannedOutcomesList[key] = plannedOutcomesList[key]
        }

        copyPlannedOutcomesList.own.push('');
        dispatch(setRPDPlannedOutcomes(copyPlannedOutcomesList));
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

    const getMaster = () => {
        return plannedOutcomesList.master.map((item) => {
            return (
                <Field
                    key={uniqid()}
                    label={`${item[0]}:`}
                    value={item[1]}
                />
            )
        })
    }

    return (
        <div className={'planned-outcomes'} ref={ref}>
            <div className={'planned-outcomes__header'}>
                2. Перечень планируемых результатов обучения по дисциплине
            </div>
            <div className={'planned-outcomes__body'}>
                В результате освоения дисциплины обучающийся должен:
                <div className={'planned-outcomes__know'}>
                    <div className={'planned-outcomes__subtitles'}>
                        знать:
                    </div>
                    <div className={'planned-outcomes__values'}>
                        <div className={'planned-outcomes__inputs'}>
                            {
                                getItem(
                                    plannedOutcomesList.know,
                                    setKnow,
                                    onDelKnow,
                                )
                            }
                        </div>
                        <Button
                            label={'Добавить пункт'}
                            modif={'add'}
                            onClick={onAddKnow}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                    </div>
                </div>
                <div className={'planned-outcomes__be-able'}>
                    <div className={'planned-outcomes__subtitles'}>
                        уметь:
                    </div>
                    <div className={'planned-outcomes__values'}>
                        <div className={'planned-outcomes__inputs'}>
                            {
                                getItem(
                                    plannedOutcomesList.be_able,
                                    setBeAble,
                                    onDelBeAble,
                                )
                            }
                        </div>
                        <Button
                            label={'Добавить пункт'}
                            modif={'add'}
                            onClick={onAddBeAble}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                    </div>

                </div>
                <div className={'planned-outcomes__own'}>
                    <div className={'planned-outcomes__subtitles'}>
                        владеть:
                    </div>
                    <div className={'planned-outcomes__values'}>
                        <div className={'planned-outcomes__inputs'}>
                            {
                                getItem(
                                    plannedOutcomesList.own,
                                    setOwn,
                                    onDelOwn,
                                )
                            }
                        </div>
                        <Button
                            label={'Добавить пункт'}
                            modif={'add'}
                            onClick={onAddOwn}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                    </div>
                </div>
                <div className={'planned-outcomes__master'}>
                    <div className={'planned-outcomes__subtitles'}>
                        освоить компетенции:
                    </div>
                    <div className={'planned-outcomes__values'}>
                        {
                            getMaster()
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
);

export default PlannedOutcomesBlock;