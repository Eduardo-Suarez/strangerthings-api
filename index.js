

const url = "https://strangerthings-quotes.vercel.app/api/quotes";

let inyectQuote = document.querySelector("div");
let boton = document.querySelector("button");



function quotes() {
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        const author = data[0].author;
        const quote = data[0].quote;

        inyectQuote.innerHTML = `<h2>${author}</h2><p>"${quote}"</p>`;
        

        console.log(author);

    });

    
    }

    boton.addEventListener("click", quotes);

    

   

