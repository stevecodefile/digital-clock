function clock(){
    let setnow =new Date();
    let hours =setnow.getHours();
    let minute =setnow.getMinutes();
    let second = setnow.getSeconds();
    let time = `${hours}:${minute}:${second}`;

    document.getElementById('time').textContent = time;

}
setInterval(clock,1000);

clock();