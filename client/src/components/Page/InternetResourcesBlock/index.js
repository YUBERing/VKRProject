import React, {forwardRef} from 'react';
import './style.scss'
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import {useDispatch, useSelector} from "react-redux";
import {
    setRPDElectronicLibraries,
    setRPDInformation,
} from "../../../reducers/rpdReducer";
import TextArea from "../../TextArea";
import uniqid from "uniqid";

const InternetResourcesBlock = forwardRef((props, ref) => {
    const informationList = useSelector(state => state.rpd.currentInformation);

    const electronicLibrariesList = useSelector(state => state.rpd.currentElectronicLibraries);

    const dispatch = useDispatch();

    const setInformation = (value, index) => {
        const copyInformationList = informationList.slice();
        copyInformationList.splice(index, 1, value)
        dispatch(setRPDInformation(copyInformationList))
    }

    const onDelInformation = (index) => {
        const copyInformationList = informationList.slice();
        copyInformationList.splice(index, 1);
        dispatch(setRPDInformation(copyInformationList))
    }

    const setElectronicLibraries = (value, index) => {
        const copyElectronicLibrariesList = electronicLibrariesList.slice();
        copyElectronicLibrariesList.splice(index, 1, value)
        dispatch(setRPDElectronicLibraries(copyElectronicLibrariesList))
    }

    const onDelElectronicLibraries = (index) => {
        const copyElectronicLibrariesList = electronicLibrariesList.slice();
        copyElectronicLibrariesList.splice(index, 1);
        dispatch(setRPDElectronicLibraries(copyElectronicLibrariesList))
    }

    const onAddElectronicLibraries = () => {
        dispatch(
            setRPDElectronicLibraries([
                ...electronicLibrariesList,
                ''
            ])
        )
    }

    const onAddInformation = () => {
        dispatch(
            setRPDInformation([
                ...informationList,
                ''
            ])
        )
    }

    const getInformation = () => {
        return informationList.map(
            (item, index, array) => {
                return (
                    <TextArea
                        key={uniqid()}
                        value={item}
                        label={`${index + 1}.`}
                        onChange={setInformation}
                        onDel={onDelInformation}
                        index={index}
                        array={array}
                    />
                )
            }
        )
    }

    const getElectronicLibraries = () => {
        return electronicLibrariesList.map(
            (item, index, array) => {
                return (
                    <TextArea
                        key={uniqid()}
                        value={item}
                        label={`${index + 1}.`}
                        onChange={setElectronicLibraries}
                        onDel={onDelElectronicLibraries}
                        index={index}
                        array={array}
                    />
                )
            }
        )
    }

    return (
        <div className={'internet-resources'} ref={ref}>
            <div className={'internet-resources__header'}>
                8.  Перечень ресурсов информационно-телекоммуникационной сети «Интернет», необходимых для освоения дисциплины
            </div>
            <div className={'internet-resources__body'}>
                <div className={'internet-resources__information'}>
                    <div className={'internet-resources__subtitles'}>
                        Информационно-образовательные ресурсы:
                    </div>
                    <div className={'internet-resources__inputs'}>
                        {
                            getInformation()
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddInformation}
                    >
                        <AddIcon
                            className={'add-icon'}
                        />
                    </Button>
                </div>
                <div className={'internet-resources__electronic-libraries'}>
                    <div className={'internet-resources__subtitles'}>
                        Электронные библиотечные системы:
                    </div>
                    <div className={'internet-resources__inputs'}>
                        {
                            getElectronicLibraries()
                        }
                    </div>
                    <Button
                        label={'Добавить пункт'}
                        modif={'add'}
                        onClick={onAddElectronicLibraries}
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

export default InternetResourcesBlock;