import React, {forwardRef} from 'react';
import AddIcon from "@mui/icons-material/Add";
import Button from "../../Button";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import TextArea from "../../TextArea";
import {setRPDReferencesAdditional, setRPDReferencesMain} from "../../../reducers/rpdReducer";
import './style.scss'

const ReferencesBlock = forwardRef((props, ref) => {
    const referencesMainList = useSelector(state => state.rpd.currentReferencesMain);

    const referencesAdditionalList = useSelector(state => state.rpd.currentReferencesAdditional);

    const dispatch = useDispatch();

    const setRefMain = (value, index) => {
        const copyReferencesMainList = referencesMainList.slice();
        copyReferencesMainList.splice(index, 1, value)
        dispatch(setRPDReferencesMain(copyReferencesMainList))
    }

    const onDelRefMain = (index) => {
        const copyReferencesMainList = referencesMainList.slice();
        copyReferencesMainList.splice(index, 1);
        dispatch(setRPDReferencesMain(copyReferencesMainList))
    }

    const setRefAdditional = (value, index) => {
        const copyReferencesAdditionalList = referencesAdditionalList.slice();
        copyReferencesAdditionalList.splice(index, 1, value)
        dispatch(setRPDReferencesAdditional(copyReferencesAdditionalList))
    }

    const onDelRefAdditional = (index) => {
        const copyReferencesAdditionalList = referencesAdditionalList.slice();
        copyReferencesAdditionalList.splice(index, 1);
        dispatch(setRPDReferencesAdditional(copyReferencesAdditionalList))
    }

    const onAddRefAdditional = () => {
        dispatch(
            setRPDReferencesAdditional([
                ...referencesAdditionalList,
                ''
            ])
        )
    }

    const onAddRefMain = () => {
        dispatch(
            setRPDReferencesMain([
                ...referencesMainList,
                ''
            ])
        )
    }

    const getRefMain = () => {
        return referencesMainList.map(
            (item, index, array) => {
                return (
                    <TextArea
                        key={uniqid()}
                        value={item}
                        label={`7.1.${index + 1}.`}
                        onChange={setRefMain}
                        onDel={onDelRefMain}
                        index={index}
                        array={array}
                    />
                )
            }
        )
    }

    const getRefAdditional = () => {
        return referencesAdditionalList.map(
            (item, index, array) => {
                return (
                    <TextArea
                        key={uniqid()}
                        value={item}
                        label={`7.2.${index + 1}.`}
                        onChange={setRefAdditional}
                        onDel={onDelRefAdditional}
                        index={index}
                        array={array}
                    />
                )
            }
        )
    }

    return (
        <div className={'references'} ref={ref}>
            <div className={'references__header'}>
                7. Перечень основной и дополнительной литературы, необходимой для освоения дисциплины
            </div>
            <div className={'references__body'}>
                <div className={'references__main'}>
                    <div className={'references__subtitles'}>
                        a) основная:
                    </div>
                    <div className={'references__inputs'}>
                        {
                            getRefMain()
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddRefMain}
                    >
                        <AddIcon
                            className={'add-icon'}
                        />
                    </Button>
                </div>
                <div className={'references__additional'}>
                    <div className={'references__subtitles'}>
                        б) дополнительная:
                    </div>
                    <div className={'references__inputs'}>
                        {
                            getRefAdditional()
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddRefAdditional}
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

export default ReferencesBlock;