document.addEventListener("DOMContentLoaded", appStart)
var bool = true;
function appStart()
{   
    
    console.log("menu js start");
    if (window.matchMedia("(max-width: 439px)").matches)
    {   
        var complete_menu = document.getElementById("complete_menu"); //Tworzenie elementu li w menu
        var new_element = document.createElement("LI");
        new_element.setAttribute("id","menu_icon");
        complete_menu.insertBefore(new_element, complete_menu.childNodes[0]);

        var menu_icon = document.getElementById("menu_icon"); //tworzenie elementu img w nowym elemencie li
        var new_icon = document.createElement("img");
        new_icon.src="./img/menu.png";
        new_icon.id="menu_icon_img";
        menu_icon.appendChild(new_icon);

        toggle_menu();
        menu_icon.addEventListener("click", toggle_menu, false);  
    }
}
function toggle_menu()
{   
    if (bool)
    {
        var menu = document.getElementsByClassName("menu");
        var j = 0;
        do    //Zmiana klasy menu na hide_menu i czyszczenie zawartosci
        {   
            menu[j].className = "hide_menu";   
        }while (menu.length>0)
        console.log(bool);
    }
    else
    {
        console.log(bool);
        var hide_menu = document.getElementsByClassName("hide_menu");
        var v = 0;
        do    //Zmiana klasy menu na hide_menu i czyszczenie zawartosci
        {   
            hide_menu[v].className = "menu";   
        }while (hide_menu.length>0)
    }
    bool = !bool; 
}