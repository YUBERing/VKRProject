import React from 'react';
import './style.scss'
import DeleteCurriculumBlock from "./DeleteCurriculumBlock";

const AdminPage = () => {

    return (
        <div className={'admin-page'}>
            <div className={'admin-page__header'}>
                <div className={'admin-page__log-name'}>
                    RPDFormsAdmin
                </div>
            </div>
            <div className={'admin-page__body'}>
                <DeleteCurriculumBlock/>
            </div>
            <div className={'admin-page__footer'}>
                Создано-Сделано
            </div>

        </div>
    );
};

export default AdminPage;