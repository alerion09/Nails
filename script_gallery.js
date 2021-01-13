//GALLERY SCRIPT
document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    if (window.matchMedia("(max-width: 439px)").matches) //Jesli okno jest mniejsze od 439 to utworz menu
    {
        create_toggle_menu();
        console.log("menu js start");
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
    
    // window.onresize = function() //Funkcja wywolywana podczas zmiany rozmiaru okna
    // {   
    //     const icon_element = document.getElementById("menu_icon");
    //     if  (window.matchMedia("(max-width: 439px)").matches) 
    //     {                                                                              
    //         create_gallery_columns(1);
    //         if (icon_element == null & (window.matchMedia("(max-width: 439px)").matches))
    //         {
    //             create_toggle_menu();
    //         }
    //     }
    //     else if (window.matchMedia("(min-width: 440px) and (max-width: 1023px)").matches)
    //     {                                                                               
    //         create_gallery_columns(2);
    //         if (icon_element != null & window.matchMedia("(min-width: 440px) and (max-width: 1023px)").matches)
    //         {
    //             delete_toggle_menu();
    //         }
    //     }
    //     else if (window.matchMedia("(min-width: 1024px)").matches)
    //     {   
    //         create_gallery_columns(3);
    //     }
    // }
}
