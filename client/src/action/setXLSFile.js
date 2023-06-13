import axios from 'axios'

export const setXLSFile = async (file) => {
        const formData = new FormData();

        formData.append('file', file)

        const response = await axios.post(`http://25.68.145.51:8085/7`, formData);

        if (response.data) {
                return 'Файл(ы) загружен(ы) усппешно';
        }
        return 'Ошибка при загрузке файлов. Проверьте формат отправляемых файлов или их содержимое.'
}