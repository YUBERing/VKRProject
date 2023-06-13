import saveAs from 'file-saver';

export async function getFile(name, data) {
    try {
            const copyData = JSON.stringify(data);

            const response = await fetch(`http://localhost:5000/api/file-creator?data=${copyData}`)

            const blob = await response.blob();

            saveAs(blob, name + '.docx')
    }
    catch (e) {
        alert (e.response.data.message)
    }
}