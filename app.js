


var result = document.getElementById("result");

function display(number){
    result.value += number;

}
function calculation(){
    var final_number =result.value;
    var final_result = eval(final_number); 
    result.value = final_result;

}
function clearInput() {

    result.value = "";
}
function deleteLastCharacter() {
    var currentValue = result.value;
    result.value = currentValue.slice(0, -1);
}
