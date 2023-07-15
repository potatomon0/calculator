//javascript30 for 30
//30 programs/projects for js
let screen = document.querySelector(".screen");
//--querySelector: Navigate to an HTML tag by the class name and by the class name
const uploadToScreen = (number)  =>{
    //--Once clicked/initialized, the num_key to Display it's value to the Display
    screen.append(number);
}
const clearDisplay = () => {
    //calling .innerHTML allow you to change the text ini that element
    screen.innerHTML = "";
};
//----Functions should be short and simple, preferable one task a time
const calculation = (x, y, sign) => {
    console.log(sign)
    //x is the first/previous number
    //y is the second/next number
    //sign is the operation to perform
    if (sign === "+") {
        //parseInt convert string to integer
        //Each if statement convert str into int then perform mathematic operation
        console.log('2')
        screen.innerHTML = parseInt(x) + parseInt(y);
    }else if (sign === "*") {
        screen.innerHTML = parseInt(x) * parseInt(y);
    }else if (sign === "/") {
        screen.innerHTML = parseInt(x) / parseInt(y);
    }else if (sign === "-") {
        screen.innerHTML = parseInt(x) - parseInt(y);
    }
    else {
        alert("something not right");
    }
};
const splitInput = () => {
    let nput = screen.textContent;
    console.log(nput);
    //using if statement to determine what mathematic operation user want to do
    if(nput.includes("*")) {
        //split user input: "1 + 2" into: "1","2"
        let solve = nput.split("*"); 
        //console.log("input:", solve);  
        //call func calculation with the user input that was split into an array
        //Ex: ["1","2"]
        calculation(solve[0], solve[1], "*")
    }
    else if(nput.includes("-")){
        let solve = nput.split("-");
        calculation(solve[0],solve[1],"-");
    }
    else if(nput.includes("+")){
        let solve = nput.split("+");
        calculation(solve[0],solve[1],"+");
    }
    else if(nput.includes("/")){
        let solve = nput.split("/");
        calculation(solve[0],solve[1],"/");
    }
}
