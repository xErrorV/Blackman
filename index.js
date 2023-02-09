document.body.onload = () => {
    if (Math.random() <= 0.2)
    {
        const img = document.createElement("img");

        img.src = "https://media.tenor.com/f9Ek6QJFnrkAAAAd/parse-black.gif";
        img.style.width = '100vw';
        img.style.height = '100vh';

        document.body.innerHTML = '';
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.append(img);
    }

}
