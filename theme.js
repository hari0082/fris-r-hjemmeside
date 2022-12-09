// light/dark mode

const themeSwitch = document.getElementById("dark-btn")
let rootelement = document.documentElement.classList

themeSwitch.addEventListener("click", function(){
    if (rootelement.contains("light")){
        rootelement.remove("light")
        rootelement.add("dark")
        localStorage.setItem("siteTheme", "dark")
    }
    else {
        rootelement.remove("dark")
        rootelement.add("light")
        localStorage.setItem("siteTheme", "light")
    }
})

if (localStorage.getItem("siteTheme")){
    if(rootelement.contains("light")){
        rootelement.remove("light")
    }

    let theme = localStorage.getItem("siteTheme")
    rootelement.add(theme)
}
