let changeArea = document.getElementById("bgArea");
const btn = document.getElementById("changeButton");
let rgbDes = document.getElementById("colorDes");

btn.addEventListener("click",()=>{
    let rgb1 = Math.floor(Math.random()*255);
    let rgb2 = Math.floor(Math.random()*255);
    let rgb3 = Math.floor(Math.random()*255);
   let colorValue = 'rgb('+ rgb1 + ',' + rgb2 + ',' + rgb3 +')';
    changeArea.style.background = colorValue;
    rgbDes.innerHTML = colorValue;
})