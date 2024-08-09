// function seyHello(){
//     return "hello";
// }

seyHello = function(){
    return "hello";
}

// (() => console.log("Hello"))()




// setTimeout(() => {
//     console.log("hello")
// },2000)

// setInterval(() => {
//     console.log("interval")
// },2000)

// fetch("https://api.github.com/users/dineshyadav2412")
// .then(response => response.json())
// .then(data => {
//     console.log(data.name);
//     console.log(data.twitter_username);
//     console.log(data.followers_url);
//     console.log(data.bio);
    
// })
let key = 'cec9173c64451d5db474e83446c27c1a'

fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${key}`)
.then(response => response.json())
.then(data => {
    console.log(data.main);
    console.log(data.wind);

    
})
