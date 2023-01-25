let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let food3s = document.getElementById('food3');
let food4s = document.getElementById('food4');
let food5s = document.getElementById('food5');
let food6s = document.getElementById('food6');
let food7s = document.getElementById('food7');
let food8s = document.getElementById('food8');
let food9s = document.getElementById('food9');
let foods = document.getElementById('food');

food1s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food1.png')";
})

food2s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-9.jpg')";
})
food3s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-3.jpg')";
})
food4s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-4.jpg')";
})
food5s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-5.jpg')";
})
food6s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-6.jpg')";
})
food7s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-7.jpg')";
})
food8s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('menu-8.jpg')";
})
food9s.addEventListener('click', () => {
    foods.style.backgroundImage = "url('food.jpg')";
})



function myZone() {

    let opt = document.getElementById("select").value;
    switch (opt) {
        case "india":
            let date = new Date().toLocaleString('en-US', { dateStyle: "long", timeZone: 'Asia/Kolkata', timeStyle: 'full', hourCycle: 'h24' })
            document.getElementById("selected_zone").innerHTML = date;
            break;

        case "china":
            let date2 = new Date().toLocaleString('en-US', { dateStyle: "long", timeZone: 'Asia/Shanghai', timeStyle: 'full', hourCycle: 'h24' })
            document.getElementById("selected_zone").innerHTML = date2;
            break;

        case "newyork":
            let date3 = new Date().toLocaleString('en-US', { dateStyle: "long", timeZone: 'America/New_York', timeStyle: 'full', hourCycle: 'h24' })
            document.getElementById("selected_zone").innerHTML = date3;
            break;
        case "japan":
            let date4 = new Date().toLocaleString('en-US', { dateStyle: "long", timeZone: 'Asia/Tokyo', timeStyle: 'full', hourCycle: 'h24' })
            document.getElementById("selected_zone").innerHTML = date4;
            break;

    }
}

setInterval(myZone, 1000)