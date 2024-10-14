const btn = document.querySelector('#hintBtn');
const p = document.getElementById("showHint");

btn.addEventListener("click", () => {
    fetch("http://localhost:3000/hint",
        { method: "GET" }
    )
        .then((result) => {
            return result.json();
        })
        .then(resJson => {
            console.log('resJson', resJson);
        })
        .catch(() => { });
});