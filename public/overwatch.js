$(document).ready(function () {
    let count = 5;
    $(".btn-primary").click(function () {
        count -= 1;

        if (count <= 0) {

            document.getElementById("yes").disabled = true;
            document.getElementById("no").disabled = true;
            document.getElementById("myImage").src = array2[root].img;
            document.getElementById("button").className = 'show';
        }

    });

    $(".btn-secondary").click(function () {
        count -= 1;

        if (count <= 0) {
            document.getElementById("yes").disabled = true;
            document.getElementById("no").disabled = true;
            document.getElementById("myImage").src = array2[root].img;
            document.getElementById("button").className = 'show';
        }

    });
})


const root = 0;
function yesClick() {
    array2 = array2.splice(1, Math.ceil(array2.length / 2));
    console.log(array2);
    document.querySelector("h2").innerHTML = array2[root].hero;
}


function noClick() {
    array2 = array2.splice(Math.ceil(array2.length / 2), (array2.length - 1));
    console.log(array2);
    document.querySelector("h2").innerHTML = array2[root].hero;
    alert(count);
} 



















/*

 let array = [
 "A", 
 "B", 
 "D", 
 "H", 
 "P", 
 "6", 
 "7", 
 "Q", 
 "8", 
 "9", 
 "I", 
 "R", 
 "10", 
 "11", 
 "S", 
 "12", 
 "13", 
 "E", 
 "J", 
 "T", 
 "14", 
 "15", 
 "U", 
 "16", 
 "17", 
 "K", 
 "V", 
 "18", 
 "19", 
 "W", 
 "20", 
 "21", 
 "C", 
 "F", 
 "L", 
 "X", 
 "22", 
 "23", 
 "Y", 
 "24", 
 "25", 
 "M", 
 "Z", 
 "26", 
 "27", 
 "1", 
 "28", 
 "29", 
 "G", 
 "N", 
 "2", 
 "30", 
 "31", 
 "3", 
 "32", 
 "33", 
 "O", 
 "4", 
 "34",
 "35", 
 "5", 
 "36", 
 "37"
]

*/
