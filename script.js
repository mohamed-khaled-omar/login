const currentYear=document.getElementById('year');
currentYear.innerText = new Date().getFullYear();
//scrollspy
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
target: '#main-nav'
})
var settingsmenu =document.querySelector(".settings-menu");

var darkbtn=document.getElementById("dark-btn");
function settingsMenuToggle()
{
    settingsmenu.classList.toggle("settings-menu-height")
}

darkbtn.onclick=function()
{
    darkbtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
      
    if(localStorage.getItem("theme")== "light")
    {
        localStorage.setItem("theme","dark");
    }
    else
    {
    localStorage.setItem("theme","light");
    }
}

if(localStorage.getItem("theme")== "light")
{
    darkbtn.classList.remove("dark-btn-on");
    darkbtn.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")== "dark")
{
    darkbtn.classList.add("dark-btn-on");
    darkbtn.classList.add("dark-theme");
}
else
{
    localStorage.getItem("theme","light");
}