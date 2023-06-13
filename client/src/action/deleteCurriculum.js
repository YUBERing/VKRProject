import axios from 'axios';

export const deleteCurriculum = async (codeCurriculum) => {
    try{
        const response = await axios.get(`http://25.68.145.51:8085/delete-curricula?code=${codeCurriculum}`)

        return 'Учебный план удален'
    }
    catch (e) {
        return 'Произошла ошибка. Пожалуйста укажите существующий учебный план'
    }
}