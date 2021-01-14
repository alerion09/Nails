//GALLERY SCRIPT
document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    const queryMax439 = window.matchMedia("(max-width: 439px)");
    const querymin440andmax1023 = window.matchMedia("(min-width: 440px) and (max-width: 1023px)");
    const queryMin1024 = window.matchMedia("(min-width: 1024px)");
    if(queryMax439.matches)
    {
        create_toggle_menu();
    }
    queryMax439.addEventListener("change", (e) => {
        if (e.matches)
        {
            create_toggle_menu();
            create_gallery_columns(1);
        }
    });
    querymin440andmax1023.addEventListener("change", (e) => {
        if (e.matches)
        {   
            const icon_element = document.getElementById("menu_icon");
            create_gallery_columns(2);
            if (icon_element != null )
            {
                delete_toggle_menu();
            }
        }
    });
    queryMin1024.addEventListener("change", (e) => {
        if (e.matches)
        {
            create_gallery_columns(3);
        }
    });
}
