import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        types: "number",
        name: "numberone",
        message: "kindly enter your frist no:"
    },
    {
        types: "number",
        name: "numbertwo",
        message: "kindly enter your second no:"
    },
    {
        types: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Selet Operator:"
    },
]);
const { numberone, numbertwo, operator } = answer;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    //     else if(operator === "-"){
    //         result = numberone - numbertwo
    //     }
    //     if(operator === "/"){
    //         result = numberone / numbertwo
    //     }
    //     if(operator === "*")
    // {
    //         result = numberone * numbertwo
    //     }
    console.log("Your result is:", result);
}
else {
    console.log("Kindly enter valid input");
}
