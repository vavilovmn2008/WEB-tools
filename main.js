import { writeOutput, writeDiffOutput } from './output.js';
import getDateDiff from './calcDateDiff.js';
const form = document.getElementById('dateDiffForm')

form.onsubmit = (event) => {
    event.preventDefault()


    const formData =new FormData(event.target)

    const dateFrom = formData.get('dateFrom')
    const dateTo = formData.get('dateTo')

    if(!dateFrom || !dateTo) {
        writeOutput ('Ошибка');


        return
    }


    writeDiffOutput (getDateDiff(dateFrom, dateTo))

   };


