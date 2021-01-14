document.addEventListener("DOMContentLoaded", appStart)
function appStart()
{   
    const mqueryMax439 = window.matchMedia("(max-width: 439px)");
    const mqueryMin440 = window.matchMedia("(min-width: 440px)");
    if (mqueryMax439.matches) //Jesli okno jest mniejsze od 439 to utworz menu
    {
        create_toggle_menu();
    }
    mqueryMax439.addEventListener("change",(e) => {
        if(e.matches)
        {
            create_toggle_menu();
        }
    });
    mqueryMin440.addEventListener("change", (e) => {
        if(e.matches)
        {
            delete_toggle_menu();
        }
    });
}
