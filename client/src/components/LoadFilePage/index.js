import React, {useState} from 'react';
import Input from "../Input";
import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import './style.scss';
import {setXLSFile} from "../../action/setXLSFile";

const LoadFilePage = () => {
    const [flag, setFlag] = useState(false);
    const [url, setURL] = useState('');
    const [dragEnter, setDragEnter] = useState(false);
    const [alert, setAlert] = useState('');

    const onLoadFileOnURL = () => {

    }

    const fileUpload = (e) => {
        setAlert('');
        const files = [...e.target.files]
        files.forEach(item => setXLSFile(item));
    }

    const setActiveDrag = () => {
        if(!flag) {
            return 'load-file-button_active'
        }
        return null
    }

    const setActiveURL = () => {
        if(flag) {
            return 'load-file-button_active'
        }
        return null
    }

    const onDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(true);
    }

    const onDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragEnter(false);
    }

    const onDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setAlert('');
        const files = [...event.dataTransfer.files]
        files.forEach(async (item) => {
            const response = await setXLSFile(item);

            setAlert(response);
        });
        setDragEnter(false);
    }

    return (
        <div className={'load-file-page'}>
            <div className={'load-file-page__body'}>
                <div className={'load-file-page__buttons'}>
                    <div className={`load-file-button ${setActiveDrag()}`} onClick={() => {setFlag(false)}}>
                        Файлы
                    </div>
                    <div className={`load-file-button ${setActiveURL()}`} onClick={() => {setFlag(true)}}>
                        URL
                    </div>
                </div>
                {
                    flag
                        ?
                        <div className={'load-file-page__url'}>
                            <Input
                                value={url}
                                label={'URL:'}
                                onChange={setURL}
                            />
                            <Button
                                label={'Загрузить файл'}
                                onClick={onLoadFileOnURL}
                            />
                        </div>
                        :
                        <div className={'load-file-page__drag'}>
                            <div className={'load-file-drag__header'}>
                                Файлы
                            </div>
                            {
                                !dragEnter ?
                                    <div className={'load-file-drag__body'} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragEnter}>
                                        <label htmlFor={'upload-input'} className={'upload-label'}>
                                            <AddIcon
                                                className={'add-icon'}
                                            />
                                            <div className={'label'}>
                                                Для загрузки файлов нажми или перетащи их сюда
                                            </div>
                                        </label>
                                        <input multiple={true} onChange={(e) => fileUpload(e)} type={'file'} id={'upload-input'} className={'upload-input'}/>
                                    </div>
                                    :
                                    <div className={'load-file-drag__area'} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={onDragEnter} onDrop={onDrop}>
                                        Перетащите файлы сюда
                                    </div>
                            }
                        </div>
                }
            </div>
            <div className={'load-file-page__alert'}>
                {alert}
            </div>
        </div>
    );
};

export default LoadFilePage;