/*margin pushes away from other things
padding pushes it around within the element
border goes around the element*/


window.onload = function(){
    let regButton:HTMLButtonElement = document.querySelector("main > button");
    regButton.onclick = registerStudent;
}

function registerStudent(){
    if(isValid()){
        let nextStudent:Student = getStudent();
        displayStudent(nextStudent);
    }
    
}

function isValid():boolean{
    //validate all required elements
    let reqElems = document.querySelectorAll("main input[data-required]");
    let valid = true;
    for (let i = 0; i < reqElems.length; i++) {
        let currInput = <HTMLInputElement>reqElems[i];
        if(currInput.value.trim() == ""){
            //display error message
            let span = currInput.nextElementSibling;
            let msg = span.getAttribute("data-msg");
            span.innerHTML = msg;
            valid = false;
        }
    }
    return valid;
}
/**
 * Gets user input from the form and wraps it in a student object
 */
function getStudent():Student{
    let newStu = new Student();
    newStu.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    newStu.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;
    /*if(newStu.firstName.trim() == "" || newStu.lastName.trim() == ""){
        this.nextElementSibling.innerText = "Please enter a valid " + 
    }*/
    return newStu;
}

function displayStudent(currStudent:Student){
    let studentLi:HTMLLIElement = document.createElement("li");
    studentLi.innerText = currStudent.firstName + " " + currStudent.lastName;
    //remove an student from register when you click on them?
    studentLi.onclick = function(){
        let agree = confirm("Are you sure you want to delete?");
        if(agree){
            let currItem = <HTMLLIElement>this;
            currItem.remove();
        }
        
    }
    //Getting u.list and appending the new li
    
    document.querySelector("#roster > ul").appendChild(studentLi);
}

/**
 * Represents a CPTC Student
 */
class Student{
    firstName:String;
    lastName:String;
    dateOfBirth:Date;
}

//test code
let testStu:Student = new Student();
testStu.firstName = "Kelsey";
testStu.lastName = "Bonnicksen";
testStu.dateOfBirth = new Date(1995, 2, 6);