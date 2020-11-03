function create_gallery_columns (number) //Tworzenie wyznaczonej ilosci kolumn w Galerii ze zdjeciami
{   
    var first_column = document.getElementById("gallery_first_column");
    var second_column = document.getElementById("gallery_second_column");
    var third_column = document.getElementById("gallery_third_column");

    if (number == 1)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails."><img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails."><img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails.">';
        second_column.innerHTML = "";
        third_column.innerHTML = "";
    }
    else if(number == 2)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails."><img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails.">';
        second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails.">';
        third_column.innerHTML = "";
    }
    else if (number == 3)
    {
        first_column.innerHTML = '<img src="./img/g1.jpg" alt="Nails."><img src="./img/g5.jpg" alt="Nails."><img src="./img/g6.jpg" alt="Nails."><img src="./img/g4.jpg" alt="Nails.">';
        second_column.innerHTML = '<img src="./img/g3.jpg" alt="Nails."><img src="./img/g7.jpg" alt="Nails."><img src="./img/g8.jpg" alt="Nails."><img src="./img/g9.jpg" alt="Nails."><img src="./img/g10.jpg" alt="Nails."><img src="./img/g2.jpg" alt="Nails.">';
        third_column.innerHTML = '<img src="./img/g11.jpg" alt="Nails."><img src="./img/g12.jpg" alt="Nails."><img src="./img/g13.jpg" alt="Nails."><img src="./img/g14.jpg" alt="Nails."><img src="./img/g15.jpg" alt="Nails.">';
    }
    else
    {
        console.log("Function gallery columns error. Wrong argument.");
    }
}
// function display_gallery() //Wyświetlanie galerii 
// {
//     if (window.matchMedia("(max-width: 439px)").matches)
//     {
//         create_gallery_columns(1);
//     }
//     else if (window.matchMedia("(min-width: 440px) and (max-width: 1023px)").matches)
//     {
//         create_gallery_columns(2);
//     }
//     else
//     {
//         create_gallery_columns(3);
//     } 
// }
function toggle_menu() //Funkcja przelaczajaca klase menu na widoczna i niewidoczna
{   
    var menu = document.getElementsByClassName("menu");
    if (bool)
    {
        for (var i = 0; i < menu.length; i++) 
        {
            menu[i].style.display = "none";
        }
    }
    else
    {
        for (var j = 0; j < menu.length; j++) 
        {
            menu[j].style.display = "initial";
        }
    }
    bool = !bool; //Zmiana wartosci boolean na przeciwna
}
function create_toggle_menu() //Funkcja tworzaca interaktywne menu
{       
    bool = true;
        var complete_menu = document.getElementById("complete_menu"); //Tworzenie elementu li w menu
        var new_element = document.createElement("LI");
        new_element.id="menu_icon";
        complete_menu.insertBefore(new_element, complete_menu.childNodes[0]);

        var menu_icon = document.getElementById("menu_icon"); //tworzenie elementu img w nowym elemencie li
        var new_icon = document.createElement("img");
        new_icon.src="./img/menu.png";
        new_icon.id="menu_icon_img";
        menu_icon.appendChild(new_icon);

        toggle_menu();
        menu_icon.addEventListener("click", toggle_menu, false);  
}
function delete_toggle_menu() //Funkcja usuwajaca interaktywne menu
{
        var li_menu_icon = document.getElementById("menu_icon");
        li_menu_icon.remove();
        bool=false;
        toggle_menu();  
}