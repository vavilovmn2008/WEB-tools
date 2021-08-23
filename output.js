const paragraph= document.getElementById('output')

export function writeOutput (outputValue) {
    paragraph.innerHTML = outputValue;
}
export function writeDiffOutput ({years, months, days}) {
    writeOutput (`
    Лет: ${years}
    Месяцев: ${months}
    Дней: $ {days}
    `)
}