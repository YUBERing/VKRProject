import React, {forwardRef} from 'react';
import './style.scss';
import {useDispatch, useSelector} from "react-redux";
import Button from "../../Button";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import TextArea from "../../TextArea";
import {setRPDChapterContentPlan} from "../../../reducers/rpdReducer";
import uniqid from "uniqid";

const ContentPlanBlock = forwardRef((props, ref) => {
    const chapterPlanList = useSelector(state => state.rpd.currentChapterPlan);

    const chapterContentPlanList = useSelector(state => state.rpd.currentChapterContentPlan);

    const dispatch = useDispatch();

    const onAddChapterContent = (chapter) => {
        dispatch(
            setRPDChapterContentPlan(
                [
                    ...chapterContentPlanList,
                    {
                        chapter: chapter,
                        name: '',
                        description: '',
                    }
                ]
            )
        );
    }

    const onDelChapterContent = (index) => {
        const copyChapterContentPlanList = chapterContentPlanList.slice();
        copyChapterContentPlanList.splice(index, 1);
        dispatch(setRPDChapterContentPlan(copyChapterContentPlanList));
    }

    const setName = (value, index) => {
        const copyChapterContentPlanList = chapterContentPlanList.slice();
        copyChapterContentPlanList[index].name = value;
        dispatch(setRPDChapterContentPlan(copyChapterContentPlanList));
    }

    const setDescription = (value, index) => {
        const copyChapterContentPlanList = chapterContentPlanList.slice();
        copyChapterContentPlanList[index].description = value;
        dispatch(setRPDChapterContentPlan(copyChapterContentPlanList));
    }

    const getChapterContent = (chapter) => {
        return chapterContentPlanList.map(
            (item, index) => {
                if (item.chapter === chapter) {
                    return (
                        <div className={'chapter-content'} key={uniqid()}>
                            <div className={'chapter-content__buttons'}>
                                <Button
                                    onClick={() => {onDelChapterContent(index)}}
                                    modif={'close'}
                                >
                                    <CloseIcon
                                        className={'close-icon'}
                                    />
                                </Button>
                            </div>
                            <TextArea
                                label={'Название'}
                                value={item.name}
                                font={'bold'}
                                index={index}
                                onChange={setName}
                                visual={'up'}
                            />
                            <TextArea
                                label={'Описание'}
                                value={item.description}
                                index={index}
                                onChange={setDescription}
                                visual={'up'}
                            />
                        </div>
                    )
                }
            }
        )
    }

    const getChapter = () => {
        return chapterPlanList.map(
            (item, index) => {
                return (
                    <div className={'chapter'} key={uniqid()}>
                        <div className={'chapter__header'}>
                             Раздел {index+1}. {
                            item
                                ? item
                                : '...'
                        }
                        </div>
                        <div className={'chapter__body'}>
                            {getChapterContent(index)}
                        </div>
                        <Button
                            label={'Добавить пункт'}
                            modif={'add'}
                            onClick={() => {onAddChapterContent(index)}}
                        >
                            <AddIcon
                                className={'add-icon'}
                            />
                        </Button>
                    </div>
                )
            }
        )
    }

    return (
        <div className={'content-plan'} ref={ref}>
            <div className={'content-plan__header'}>
                5.2. Содержание
            </div>
            <div className={'content-plan__body'}>
                {
                    getChapter()
                }
            </div>
        </div>
    );
});

export default ContentPlanBlock;