import { writeOutput, writeDiffOutput } from './output.js';
import getDateDiff from './calcDateDiff.js';
import {viewDiv} from './calcButton.js';
import audio from './Martin_Jacoby_Yiruma_-_River_Flows_in_You_48080718.mp3';
import './css/main.css';
import './script';


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

   document.addEventListener('click',viewDiv);
  

