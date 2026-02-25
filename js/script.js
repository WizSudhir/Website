const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        toggle.innerText="☀️";
    } else {
        localStorage.setItem("theme","dark");
        toggle.innerText="🌙";
    }
});

window.addEventListener("load",()=>{
    const saved = localStorage.getItem("theme");

    if(saved==="light"){
        document.body.classList.add("light");
        toggle.innerText="☀️";
    }
});
