const btn = document.getElementById("button-menu")
const menu = document.getElementById("menu-down")
let menu_active = false;

btn.addEventListener("click", () => {
    if(!menu_active){
        downMenu(menu);
    }else{
        upMenu(menu);
    }
})

async function downMenu(menu) {
    for(let i = -100; i <= 0; i+=5) {
        menu.style.top = `${i}vh`;
        await sleep(i*1000);
    }
    menu_active = true;
}

async function upMenu(menu) {
    for(let i = 0; i >= -100; i-=5) {
        menu.style.top = `${i}vh`;
        await sleep(i*1000);
    }
    menu_active = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}