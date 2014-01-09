/*
 * Progress Bar Magic
 * A project by the Honourable Cassidy Williams.
 * Actually she's just a regular person.
 * But hey, she made it.
 * Here's her website: cassidoo.co
 * Her Github: github.com/cassidoo
 *
 * And make sure you have jQuery when you use this.
 * */

function pbmagic(id, type, progress, total)
/* id = the id of the bar
 *  type = type of progress bar
 *  progress = progress so far
 *  total = value of 100% of the bar
 * */
{
    var bar = document.getElementById(id);
    $("#" + id).addClass(type);
    bar.innerHTML = '<div class="level"></div>';
    var levelBar = $("#" + id + " .level");

    var level = (progress / total) * 100;

    // Valid type values: "", battery
    switch(type)
    {
        case "battery":
            levelBar.css('width', level + '%');
            if(level > 65)
            {
                levelBar.addClass("high");
            }
            else if(level >= 35)
            {
                levelBar.addClass("medium");
            }
            else
            {
                levelBar.addClass("low");
            }
            ;
            break;
        default:
        // I'll make a default bar that's moderately attractive
    }
}
