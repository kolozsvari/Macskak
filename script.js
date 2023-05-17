function kiir() {
    fetch("https://catfact.ninja/fact")
    .then(adat => adat.json())
    .then(res => {
        for (const item of res ["data"]){
        document.getElementById("teny").innerHTML += `<li>${item ["fact"]}</li>)`;
        }
    })
}