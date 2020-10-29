//GALLERY SCRIPT
document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    if (window.matchMedia("(max-width: 439px)").matches)
    {
        create_gallery_columns(1);
    }
    else if (window.matchMedia("(min-width: 440px) and (max-width: 1023px)").matches)
    {
        create_gallery_columns(2);
    }
    else
    {
        create_gallery_columns(3);
    } 
    window.onresize = function() // Wywolanie funkcji zmiany kolumn przy kazdorazowej zmianie rozmiaru okna
    {
        if (window.matchMedia("(max-width: 439px)").matches)
        {
            create_gallery_columns(1);
        }
        else if (window.matchMedia("(min-width: 440px) and (max-width: 1023px)").matches)
        {
            create_gallery_columns(2);
        }
        else
        {
            create_gallery_columns(3);
    }       
    }
    
}

function create_gallery_columns (number) //Tworzenie wyznaczonej ilosci kolumn w Galerii ze zdjeciami
{   
    console.log("Function create gallery columns start.");
    var first_column = document.getElementById("gallery_first_column");
    var second_column = document.getElementById("gallery_second_column");
    var third_column = document.getElementById("gallery_third_column");

    if (number == 1)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails."><img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails."><img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails.">';
        second_column.innerHTML = "";
        third_column.innerHTML = "";
        console.log("Function create gallery columns work. Number of columns: "+number);
    }
    else if(number == 2)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails."><img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails.">';
        second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails.">';
        third_column.innerHTML = "";
        console.log("Function create gallery columns work. Number of columns: "+number);
    }
    else if (number == 3)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails.">';
        second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails.">';
        third_column.innerHTML = '<img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails.">';
        console.log("Function create gallery columns work. Number of columns: "+number);
    }
    else
    {
        console.log("Function gallery columns error. Wrong argument.");
    }
}
