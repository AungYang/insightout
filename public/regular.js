$(document).ready(function () {
    let count = 4;
    $(".btn-primary").click(function(){
        count -= 1;

        if(count <=0){

        document.getElementById("yes").disabled = true;
        document.getElementById("no").disabled = true;
         document.getElementById("myImage").src = arr[root].img;
        document.getElementById("button").className = 'show';
        }

    });

    $(".btn-secondary").click(function() {
        count -= 1;

        if (count <= 0) {
            document.getElementById("yes").disabled = true;
            document.getElementById("no").disabled = true;
            document.getElementById("myImage").src = arr[root].img;
            document.getElementById("button").className = 'show';
        }

    });   
})


const root = 0;
function yesClick(){
    arr = arr.splice(1, Math.ceil(arr.length / 2));
    console.log(arr);
    document.querySelector("h2").innerHTML = arr[root].character;
}


function noClick() {
    arr = arr.splice(Math.ceil(arr.length / 2), (arr.length-1));
    console.log(arr);
    document.querySelector("h2").innerHTML = arr[root].character;
    alert(count);
}






