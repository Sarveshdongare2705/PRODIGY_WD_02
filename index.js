let h = 0 , m = 0 , s = 0 , ms = 0 ;
let timer;


let hour = document.getElementById('hour')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let msec = document.getElementById('msec')
let laps = document.getElementsByClassName('items')[0]

function start(){
    if(!timer){
        timer = setInterval(run, 10)
    }
}

function run(){
    const [hval, mval, sval, msval] = getTimer();
    hour.innerHTML = hval;
    min.innerHTML = mval;
    sec.innerHTML = sval;
    msec.innerHTML = msval;
    ms++              
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    if(m == 60){
        m = 0
        h++
    }
    
    if(h == 13){
        h = 1
    } 
}

function getTimer(){
    hval = h<10 ? '0'+h : h; 
    mval = m<10 ? '0'+m : m; 
    sval = s<10 ? '0'+s : s; 
    msval = ms<10 ? '0'+ms : ms; 
    return [hval , mval , sval , msval];
}


function pause(){
    stopTimer()  
}

function stopTimer(){
    clearInterval(timer)
    timer = false 
}

function reset(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    h = 0
    const [hval, mval, sval, msval] = getTimer();
    hour.innerHTML = hval;
    min.innerHTML = mval;
    sec.innerHTML = sval;
    msec.innerHTML = msval;
}


function restart(){
    if(timer){ 
        reset()
        start()
    }
    
}


function lap() {
    if(timer) {   
        let l = document.createElement("l")   
        l.className = "lap";
        [hv , mv , sv , msv] = getTimer() 
        l.innerHTML = `${hv} : ${mv} : ${sv} : ${msv}`
        laps.appendChild(l);
        console.log(laps); 
    }
}

function resetlap(){
    laps.innerHTML = "";
}
