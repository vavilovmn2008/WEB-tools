import { writeOutput, writeDiffOutput } from './output.js';
import getDateDiff from './calcDateDiff.js';
import pic from './bundler.png';
import audio from './audio.mp3';
import './scss/main.scss';
import pick from 'lodash/pick'

console.log(audio)
console.log(pic);
console.log(pick);

const form = document.getElementById ('calcDate')

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


