const p1 = document.getElementById('para1');
const p2 = document.getElementById('para2');
const p3 = document.getElementById('para3');

let count1 =0;
let count2 =0;
let count3 =0;

setInterval(()=>{

    if (count1<65) {

        count1 +=1;
    p1.innerText = count1 + "%";
        
    }
    else
    {

        clearInterval();
    }
},30);


setInterval(()=>{

    if (count3<90) {

        count3 +=1;
    p2.innerText = count3 + "%";
        
    }
    else
    {

        clearInterval();
    }
},23);


setInterval(()=>{

    if (count2<30) {

        count2 +=1;
    p3.innerText = count2 + "%";
        
    }
    else
    {

        clearInterval();
    }
},65);