document.body.onload = () => {
    const rng = Math.random();
    if (rng <= 0.3)
    {
        const img = document.createElement("img");
        img.src = "https://media.tenor.com/f9Ek6QJFnrkAAAAd/parse-black.gif";
        img.style.width = '100vw';
        img.style.height = '100vh';
        document.body.innerHTML = '';
        document.body.style.overflow = 'hidden';
        document.body.append(img);
    }
}
