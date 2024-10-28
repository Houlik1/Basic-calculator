document.getElementById("odeslat").addEventListener("click", vypocet);
function vypocet() {
  const first = document.getElementById("prvni").value;
  const second = document.getElementById("druhy").value;
  const prvni = Number(document.getElementById("prvni").value);
  const druhe = Number(document.getElementById("druhy").value);
  const volba = document.getElementById("select").value;
  let vysledek = 0;
  if (first == "") {
    vysledek = "nezapomen vyplnit kolonky";
  } else if (second == "") {
    vysledek = "nezapomen vyplnit kolonky";
  } else {
    if (volba == "soucet") {
      vysledek = prvni + druhe;
    }
    if (volba == "rozdil") {
      vysledek = prvni - druhe;
    }
    if (volba == "soucin") {
      vysledek = prvni * druhe;
    }
    if (volba == "podil") {
      if (druhe === 0) {
        vysledek = "Nemůžeš dělit nulou";
      } else {
        vysledek = prvni / druhe;
      }
    }
  }
  document.getElementById("vysledek").innerText = "Výsledek: " + vysledek;
  console.log(vysledek);
  document.getElementById("prvni").value = "";
  document.getElementById("druhy").value = "";
}
