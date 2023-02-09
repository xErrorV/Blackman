const propability = 0.2; // 20%

document.body.onload = () => {
    if (Math.random() <= propability);
    {
        const audio = new Audio(chrome.runtime.getURL('assets/audio.ogg'));
        const image = document.createElement("img");

        image.src = chrome.runtime.getURL('assets/parse-black.gif');
        image.style.width = '100vw';
        image.style.height = '100vh';

        audio.loop = true;
        audio.muted = "muted";
        audio.play();

        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.innerHTML = '';

        document.body.append(image);
    }
}