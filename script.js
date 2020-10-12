document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    window.onresize = function() // Wywolanie funkcji zmiany kolumn przy kazdorazowej zmianie rozmiaru okna
    {
        if (window.matchMedia("(max-width: 1023px)").matches)
        {
            create_two_gallery_columns();
        }
        else
        {
            create_three_gallery_columns();
        }     
    }
    
}

function create_two_gallery_columns () //Przeksztalcanie trzech kolum w dwie w Galerii ze zdjeciami
{   
    console.log("ctwogc start");
    var first_column = document.getElementById("gallery_first_column");
    var second_column = document.getElementById("gallery_second_column");
    var third_column = document.getElementById("gallery_third_column");

    first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails."><img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails.">';
    second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails.">';
    third_column.innerHTML = "";

}
function create_three_gallery_columns () //Przeksztalcanie trzech kolum w dwie w Galerii ze zdjeciami
{   
    console.log("cthreegc start");
    var first_column = document.getElementById("gallery_first_column");
    var second_column = document.getElementById("gallery_second_column");
    var third_column = document.getElementById("gallery_third_column");
    
    first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails.">';
    second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails.">';
    third_column.innerHTML = '<img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails.">';
}
