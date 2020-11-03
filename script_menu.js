document.addEventListener("DOMContentLoaded", appStart)
var bool = true;
function appStart()
{   
    console.log("menu js start");
    if (window.matchMedia("(max-width: 439px)").matches) //Jesli okno jest mniejsze od 439 to utworz menu
    {
        create_toggle_menu();
    }
    
    window.onresize = function() //Funkcja wywolywana podczas zmiany rozmiaru okna
    {   
        var icon_element = document.getElementById("menu_icon");
        if(icon_element == null & (window.matchMedia("(max-width: 439px)").matches))   //Gdy element ikony menu nie istnieje, a rozmiar jest mniejszy 
        {                                                                               //niz 439 wywolaj funkcje tworzaca iteraktywne menu 
            create_toggle_menu();
        }else if (icon_element != null & window.matchMedia("(min-width: 440px)").matches)//Gdy element ikony Istnieje, a rozmiar jest wiekszy
        {                                                                                  //niz 439 wywolaj funkcje usuwajaca iteraktywne menu
            delete_toggle_menu();
        }
    }
}
