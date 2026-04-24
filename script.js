async function buscarCotacao(moeda) {

    const url = `https://economia.awesomeapi.com.br/json/last/${moeda}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    
    
    
}

buscarCotacao("USD-BRL")