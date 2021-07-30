setInterval(() => {
    let date = new Date();
    function ampm(){
    hrs = date.getHours();
    var ampm = ""
    if (hrs>12){
        ampm="pm";
        hrs = hrs % 12;
    }
    else {
        ampm="am";
    }
    let arr = [ampm,hrs]
    return arr;
    
}

    time = `${ampm()[1]} : ${date.getMinutes()} : ${date.getSeconds()} ${ampm()[0]}`;
    date_num = date.toLocaleDateString();
    document.getElementById("time").innerHTML = time;
    document.getElementById("time-2").innerHTML = time;
    document.getElementById("date").innerHTML = date_num;
    document.getElementById("date-2").innerHTML = date_num;
}, 1000);
