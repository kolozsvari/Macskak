function kiir() {
    fetch("https://catfact.ninja/fact")
    .then(adat => adat.json())
    .then(res => {
        document.getElementById("teny").innerHTML = res["fact"];
    })
}