const humidityClass = document.querySelector('.huuumidity')
const Pweather = document.querySelector('.weather')
const header = document.querySelector('.header');
const Prosto = document.querySelector('.prosto')
const image = document.querySelector('.img'); 
const tempCard = document.querySelector('.temp_c'); 
const Wind = document.querySelector('.wind');
const Humidity = document.querySelector('.humidity')
const HApi = document.querySelector('.ApiH')
const box = document.querySelector('.circle');
const Container = document.querySelector('.container');

const btnVitebsk = document.querySelector('.btnVitebsk');
const btnBrest = document.querySelector('.btnBrest');
const btnMinsk = document.querySelector('.btnMinsk');
const btnMogilev = document.querySelector('.btnMogilev');
const btnGrodno = document.querySelector('.btnGrodno');
const btnGomel = document.querySelector('.btnGomel')

let city = 'Minsk'
let url = `http://api.weatherapi.com/v1/current.json?key=daebc8d0a3d64617ad0153304231402&aqi=no&q=` 
let tempC;

function fetchStart(){
    fetch(url + city) 
    .then(res => res.json()) 
    .then((res) => { 
        console.log(res.location.name);
         tempCard.innerText = `${res.current.temp_c}°С`; 
         image.src = 'https:' + res.current.condition.icon; 
         Wind.innerText = `${res.current.wind_kph}km/h`;
         HApi.innerText = `${res.current.humidity}%`;

        if(res.current.temp_c <= 0){
            box.style.boxShadow =  '10px 5px 5px 5px white';
        }else{
           /*  console.log('error white'); */
        }


        if(res.current.temp_c > 10){
            box.style.boxShadow = '10px 5px 5px 5px gold';
        }else{
            /* console.log('error gold'); */
        } 



        if(res.current.temp_c > 0  || res.current.temp_c <= 10){
            box.style.boxShadow = '10px 5px 5px 5px rgba(11, 93, 156, 0.616) '
        }else {
           /*  console.log = ('error rgba') */
        }
          
        
    })
}
fetchStart(url);

btnVitebsk.addEventListener('click', function(){
    city = btnVitebsk.value;
    btnVitebsk.classList.toggle('btnCity');
    btnVitebsk.classList.toggle('newBtnCity');
    btnGomel.classList.remove('newBtnCity');
    btnGomel.classList.add('btnCity');
    btnGrodno.classList.remove('newBtnCity');
    btnGrodno.classList.add('btnCity');
    btnBrest.classList.remove('newBtnCity');
    btnBrest.classList.add('btnCity');
    btnMinsk.classList.remove('newBtnCity');
    btnMinsk.classList.add('btnCity');
    btnMogilev.classList.remove('newBtnCity');
    btnMogilev.classList.add('btnCity');
    fetchStart()
})

btnBrest.addEventListener('click', function(){
    city = btnBrest.value;
    btnBrest.classList.toggle('btnCity');
    btnBrest.classList.toggle('newBtnCity');
    btnGomel.classList.remove('newBtnCity');
    btnGomel.classList.add('btnCity');
    btnGrodno.classList.remove('newBtnCity');
    btnGrodno.classList.add('btnCity');
    btnVitebsk.classList.remove('newBtnCity');
    btnVitebsk.classList.add('btnCity');
    btnMinsk.classList.remove('newBtnCity');
    btnMinsk.classList.add('btnCity');
    btnMogilev.classList.remove('newBtnCity');
    btnMogilev.classList.add('btnCity');
    fetchStart()
})

btnMinsk.addEventListener('click', function(){
    city = btnMinsk.value;
    btnMinsk.classList.toggle('btnCity')
    btnMinsk.classList.toggle('newBtnCity');
    btnGomel.classList.remove('newBtnCity');
    btnGomel.classList.add('btnCity');
    btnGrodno.classList.remove('newBtnCity');
    btnGrodno.classList.add('btnCity');
    btnBrest.classList.remove('newBtnCity');
    btnBrest.classList.add('btnCity');
    btnVitebsk.classList.remove('newBtnCity');
    btnVitebsk.classList.add('btnCity');
    btnMogilev.classList.remove('newBtnCity');
    btnMogilev.classList.add('btnCity');
    fetchStart()
})

btnMogilev.addEventListener('click', function(){
    city = btnMogilev.value;
    btnMogilev.classList.toggle('btnCity');
    btnMogilev.classList.toggle('newBtnCity');
    btnGomel.classList.remove('newBtnCity');
    btnGomel.classList.add('btnCity');
    btnGrodno.classList.remove('newBtnCity');
    btnGrodno.classList.add('btnCity');
    btnBrest.classList.remove('newBtnCity');
    btnBrest.classList.add('btnCity');
    btnMinsk.classList.remove('newBtnCity');
    btnMinsk.classList.add('btnCity');
    btnVitebsk.classList.remove('newBtnCity');
    btnVitebsk.classList.add('btnCity');
    fetchStart()
})

btnGrodno.addEventListener('click', function(){
    city = btnGrodno.value;
    btnGrodno.classList.toggle('btnCity');
    btnGrodno.classList.toggle('newBtnCity');
    btnGomel.classList.remove('newBtnCity');
    btnGomel.classList.add('btnCity');
    btnVitebsk.classList.remove('newBtnCity');
    btnVitebsk.classList.add('btnCity');
    btnBrest.classList.remove('newBtnCity');
    btnBrest.classList.add('btnCity');
    btnMinsk.classList.remove('newBtnCity');
    btnMinsk.classList.add('btnCity');
    btnMogilev.classList.remove('newBtnCity');
    btnMogilev.classList.add('btnCity');
    fetchStart()
})

btnGomel.addEventListener('click', function(){
    city = btnGomel.value;
    btnGomel.classList.toggle('btnCity');
    btnGomel.classList.toggle('newBtnCity');
    btnVitebsk.classList.remove('newBtnCity');
    btnVitebsk.classList.add('btnCity');
    btnGrodno.classList.remove('newBtnCity');
    btnGrodno.classList.add('btnCity');
    btnBrest.classList.remove('newBtnCity');
    btnBrest.classList.add('btnCity');
    btnMinsk.classList.remove('newBtnCity');
    btnMinsk.classList.add('btnCity');
    btnMogilev.classList.remove('newBtnCity');
    btnMogilev.classList.add('btnCity');
    fetchStart()
})




