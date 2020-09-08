function start () {
    
    const date = new Date();
    const segDeg = date.getSeconds() * 6;
    const minDeg = date.getMinutes() * 6 + (date.getSeconds() * 0.1);
    const horaDeg = date.getHours() * 30 + (date.getMinutes() * 0.5) ;
    
    console.log(minDeg);

    const relogioSeg = document.querySelector('.relogio #ponteiroSeg');
    relogioSeg.style.transform = `rotate(${segDeg}deg)`;

    const relogioMin = document.querySelector('.relogio #ponteiroMin');
    relogioMin.style.transform = `rotate(${minDeg}deg)`;

    const relogioHora = document.querySelector('.relogio #ponteiroHor');
    relogioHora.style.transform = `rotate(${horaDeg}deg)`;


    
    var loop = setInterval(() => {        
        
        relogioSeg.style.transform = `rotate(${removeDEG(relogioSeg.style.transform) + (360 / 60)}deg)`;
        relogioMin.style.transform = `rotate(${removeDEG(relogioMin.style.transform) + (360 / 60 / 60)}deg)`;

        relogioHora.style.transform = `rotate(${removeDEG(relogioHora.style.transform) + (360 / 60 / 60 / 12 )}deg)`;

        zeraPonteiro(relogioSeg);
        zeraPonteiro(relogioMin);
        zeraPonteiro(relogioHora);
        

    }, 1000);


    /**
     * Se o ponteiro chegar a 360 graus ele volta a 0
     * @param {Integer} ponteiro quantos graus o ponteiro se moveu
     */
    function zeraPonteiro(ponteiro) {

        if (ponteiro.style.transform === `rotate(360deg)`) {
            ponteiro.style.transform = `rotate(0deg)`;
        }

    }


}

/**
 * Remove o valor numérido da string e  retorna ponto flutuante
 * @param {String} value é o valor do atributo style.transform -> (rotate(0deg))
 */
var removeDEG = (value) => {
        
    value = value.replace("rotate(","");
    value = value.replace("deg", "");
    value = value.replace(")", "");
    
    console.log(value);

    return parseFloat(value);
}

start();