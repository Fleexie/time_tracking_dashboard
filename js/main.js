let timeFrame = "daily";

async function populate(){
    const reqURL = '/data.json';
    const request = new Request(reqURL)

    const response = await fetch(request)
    const data = await response.json()

    console.log(data)
    title(data)
    currentHours(data)
    lastWeekHours(data)
    label()
    activeButton()

}

populate()

function changeTimeframe(element){
    timeFrame = element.dataset.timeframe
    populate()
}


function title(data) {
    const titles = document.querySelectorAll(".card__title")
    for (let i = 0; i < data.length; i++) {
        titles[i].innerHTML = data[i]["title"];
    }
}
function currentHours(data){
    const current = document.querySelectorAll(".card__current")
    for (let i = 0; i < data.length; i++) {
        current[i].querySelector(".hours").innerHTML = data[i]['timeframes'][timeFrame]["current"];
    }
}
function lastWeekHours(data){
    const previous = document.querySelectorAll(".card__lastWeek")
    for (let i = 0; i < data.length; i++) {
        previous[i].querySelector(".hours").innerHTML = data[i]['timeframes'][timeFrame]["previous"];
    }
}
function label(){
    const label = document.querySelectorAll(".label");
    for (let i = 0; i < label.length; i++) {
        let newLabel;
        switch (timeFrame){
            case "daily":
                newLabel = "Yesterday"
                break
            case "weekly":
                newLabel = "Last Week"
                break
            case "monthly":
                newLabel = "Last Month"
                break
            default:
                newLabel = "Last Week"
        }
        label[i].innerHTML = newLabel;
    }
}

function activeButton(){
    btns = document.querySelectorAll("button")
    btns.forEach(btn =>{
        btn.classList.remove("active")
    })
    switch (timeFrame){
        case "daily":
            btns[0].classList.add("active")
            break
        case "weekly":
            btns[1].classList.add("active")
            break
        case "monthly":
            btns[2].classList.add("active")
            break
        default:
            btns[0].classList.add("active")
    }
}
