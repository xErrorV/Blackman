let active = false;

document.addEventListener("click", main);
document.addEventListener("keypress", main);

function main() {
    if (Math.random() <= 0.01 && !active)   // 1%
    {   
        const audio = new Audio(chrome.runtime.getURL('assets/audio.ogg'));
        const image = new Image();

        image.src = chrome.runtime.getURL('assets/parse-black.gif');
        image.style.cssText = 'width:100vw;height:100vh';

        audio.loop = true;
        audio.play();

        document.body.style.cssText = "overflow:hidden;margin:0";
        document.body.innerHTML = '';
        document.body.append(image);
        
        active = true;
    }
}
