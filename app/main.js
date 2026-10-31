const lista = document.getElementById("list-zgloszenia");

let zgloszenia = [];
let tablicaID = 1;

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

    if(liczba == 0)
    {
        const tekst = document.createElement("li");
        tekst.textContent = "Lista jest obecnie pusta".
        lista.appendChild(tekst);
    }
}
// usunięcie zgłoszenia
function usunZgloszenie(event)
{
    const element = event.currentTarget.closest('li');
    if(element)
        element.remove();

    liczbaZgloszen();
}

function zmianaStatusu(event)
{
    zgloszenia.status = event.target.value;
}
// dodawanie zgłoszenia
document.getElementById("form-zgloszenia-JS").addEventListener("submit", function(event)
{
    event.preventDefault();
    let zgloszenie = 
    {
        id: tablicaID,
        tytul: document.getElementById("form-title").value.trim(),
        opis: document.getElementById("form-description").value.trim(),
        priorytet: document.getElementById("form-priority").value,
        status: "new"
    };

    zgloszenia.push(zgloszenie);

    const noweZgloszenie = document.createElement('li');
    noweZgloszenie.textContent = zgloszenie.id + ". " + zgloszenie.tytul + ": " + zgloszenie.opis + " | " + zgloszenie.priorytet + " ";

    const status = document.createElement ("select");
    status.addEventListener('change', zmianaStatusu)
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

    zgloszenie.id++;

    liczbaZgloszen();
    document.getElementById("form-title").value = '';
    document.getElementById("form-description").value = '';
});
