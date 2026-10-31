const lista = document.getElementById("list-zgloszenia");

let zgloszenie = 
{
    id: 1,
    tytul: "",
    opis: "",
    priorytet: "",
    status: ""
}

// obiektówka do utworzenia droplisty Status
let statusOpcje = [
    { value: "new", tekst: "Nowe"},
    { value: "doing", tekst: "W trakcie"},
    { value: "done", tekst: "Zrobione"}
]

//sprawdzenie liczby zgłoszeń
function liczbaZgloszen()
{
    let liczba = document.querySelectorAll("#list-zgloszenia li").length;
    document.getElementById("all_ctr-zgloszenia-js").textContent = liczba;
}
// usunięcie zgłoszenia
function usunZgloszenie(event)
{
    const element = event.currentTarget.closest('li');
    if(element)
        element.remove();

    liczbaZgloszen();
}

// dodawanie zgłoszenia
document.getElementById("form-zgloszenia-JS").addEventListener("submit", function(event)
{
    event.preventDefault();

    zgloszenie.tytul = document.getElementById("form-title").value.trim();
    zgloszenie.opis = document.getElementById("form-description").value.trim();
    zgloszenie.priorytet = document.getElementById("form-priority").value;

    const noweZgloszenie = document.createElement('li');
    noweZgloszenie.textContent = zgloszenie.id + ". " + zgloszenie.tytul + ": " + zgloszenie.opis + " | " + zgloszenie.priorytet + " ";

    const status = document.createElement ("select");

    statusOpcje.forEach(opcja => {
        const opcje = document.createElement("option");
    opcje.value = opcja.value;
    opcje.text = opcja.tekst;

    status.appendChild(opcje);
    });

    const btnDelete = document.createElement("button");
    btnDelete.type = 'button';
    btnDelete.textContent = "Usuń";
    btnDelete.addEventListener('click', usunZgloszenie);

    noweZgloszenie.appendChild(status);
    noweZgloszenie.appendChild(btnDelete);
    lista.appendChild(noweZgloszenie); 

    liczbaZgloszen();
    document.getElementById("form-title") = '';
    document.getElementById("form-description") = '';
});
