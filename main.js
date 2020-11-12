//Put numbers on the clock 
const numbers = [];
const inputNos = () => { //input numbers 1 -12 to array
    for(let i=0; i<12; i++) {
    numbers.push(i+1);
    }
}
inputNos()
console.log(numbers);

const createNos = () => { //input numbers to HTML as <p>
    numbers.forEach(element => {
        let newElement = document.createElement("p");
        newElement.id = element;
        newElement.innerHTML = element;
        document.getElementById("number-container").appendChild(newElement);
        let degs = element * 30;
        let degToRad = degs * (Math.PI)/180 //180 degrees = PI radians;
        let x = 100 * (Math.sin(degToRad) + 1); //x coordinate (width is 0 to 200%)
        let y = (-50 * Math.cos(degToRad)) + 50; //y coordinate (top is 0 to 100%)
        newElement.style.width = x + '%'; 
        newElement.style.top = y + '%';
    });
}
createNos();


//Set the ticking
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const digital = document.getElementById("time");
const monthDisplay = document.getElementById("digi-Month");
const dayDisplay = document.getElementById("digi-Day");


const setDate = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds/60) *360) + 90;
    const minsDegrees = ((minutes/60) *360) + 90;
    const HoursDegrees = ((hours/12) *360) +90;
    const digiTime = (scale) => {
        if (scale < 10) {
            return `0${scale}`;
        } else {
            return scale;
        }
    }
    const monthNames = () => {
        switch (month) {
            case 1:
                return 'Jan';
                break;
            case 2:
                return 'Feb';
                break;
            case 3:
                return 'Mar';
                break;
            case 4:
                return 'Apr';
                break;
            case 5:
                return 'May';
                break;
            case 6:
                return 'Jun';
                break;
            case 7:
                return 'Jul';
                break;
            case 8:
                return 'Aug';
                break;
            case 9:
                return 'Sep';
                break;
            case 10:
                return 'Oct';
                break;
            case 11:
                return 'Nov';
                break;
            case 12:
                return 'Dec';
                break;
            default:
                break;    
        }
    };
    
      
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${HoursDegrees}deg)`;

    digital.innerHTML = `<p>${digiTime(hours)}:${digiTime(minutes)}:${digiTime(seconds)}</p>`;
    
    monthDisplay.innerHTML = `<p>${monthNames()}</p>`;
    dayDisplay.innerHTML = `<p>${digiTime(day)}</p>`;

    console.log(`${hours} : ${minutes} : ${seconds}`);
    const date = `${digiTime(day)}/${digiTime(month)}/${year}`
    console.log(date);  
    console.log(monthNames());
};

setInterval(setDate, 1000);