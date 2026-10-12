const delay = (ms)=> new Promise(resolve=> setTimeout(resolve,ms));


async function fetchWeather() {
    await delay(500);
    return {temp: '27°c', condition: 'sunny'}

}
async function fetchPost(){
    await delay(1500);
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json();
}

async function fetchUser() {
    await delay(1000);
    const res= await fetch('https://jsonplaceholder.typicode.com/users/1');
    return res.json();
    
}
async function dashboard() {
 try{
    console.log("intialized all dashboard's components");
    console.time('Total time');

    const [userData, weatherData, postData
    ]= await Promise.all(
       [ fetchUser(),
        fetchWeather(),
        fetchPost()
        ]
    );


    console.timeEnd("Total time");
    console.log("\n==================Dashboard loaded==================");
    console.log(`user:    ${userData.name}`)
    console.log(`content:   Loaded ${postData.length} blog post`);
    console.log(`Weather:  ${weatherData.temp} and ${weatherData.condition}`)

    
}

catch(error){
    console.log("Dash board initialization got failed",error.message);
 }
}
dashboard();
console.log("Code execution reached the bottom of the script.")