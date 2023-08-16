let kural = document.getElementById("kural");
let kural_num = document.getElementById("k-num");
let count = 0;

//fetch data one by one from api while clicking next button 
function load(){
    count++;
    async function data(num){
        var data1 = await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);
        var data2 = await data1.json();
        kural.innerHTML = `
        <div class = "main-kural">
        <span class="sub-title">Kural: </span>${data2.line1}<br>${data2.line2}
        </div>
        <div class = "chapter">
        <span class="sub-title">Chapter: </span>${data2.chap_tam}
        </div>
        <div class = "section">
        <span class="sub-title">Section: </span>${data2.sect_tam}
        </div>
        <div class = "tam-exp">
        <span class="sub-title">Explanation: </span>${data2.tam_exp}
        </div>
        `
        kural_num.innerHTML = `<span class="sub-title">Kural No: </span>${data2.number}`
        
    }
    data(count)
}

//to get previous data in the api by clicking previous button
function loadminus(){
    if(count >= 1){
    count--;
    console.log(count)
    async function data1(num1){
        var data1 = await fetch(`https://api-thirukkural.vercel.app/api?num=${num1}`);
        var data2 = await data1.json();
        kural.innerHTML = `
        <div class = "main-kural">
        <span class="sub-title">Kural: </span>${data2.line1}<br>${data2.line2}
        </div>
        <div class = "chapter">
        <span class="sub-title">Chapter: </span>${data2.chap_tam}
        </div>
        <div class = "section">
        <span class="sub-title">Section: </span>${data2.sect_tam}
        </div>
        <div class = "tam-exp">
        <span class="sub-title">Explanation: </span>${data2.tam_exp}
        </div>
        `
        kural_num.innerHTML = `<span  class="sub-title">Kural No: </span>${data2.number}`
    }
    data1(count)
    } 
    
}







    