const input = document.querySelector('.search_input');
const content_card = document.querySelector('.content_card');
let arr_filmes = [], section_card, section_img, link, img, section_cards = [];
input.addEventListener('input', () => {
    for (let i of section_cards) i.remove();
    fetch(`http://www.omdbapi.com/?apikey=650f5962&s=${input.value.toLowerCase()}&plot=full`)
    .then(response => response.json())
    .then(json => {
        console.log(json.Response);
        if (json.Response === 'True')
        {
            for (let i of json.Search) 
            {
                if (i.Poster != 'N/A')
                {
                    arr_filmes = [];
                    arr_filmes.push(i.Title);
                    for (let j of arr_filmes)
                    {
                        console.log(`Titulo da pesquisa: ${j}`);
                        section_card = document.createElement('section');
                        section_card.classList.add('card');
                        link = document.createElement('a');
                        section_img = document.createElement('section');
                        section_img.classList.add('card_img');
                        img = document.createElement('img');
                        section_img.appendChild(img);
                        link.appendChild(section_img);
                        section_card.appendChild(link);
                        content_card.appendChild(section_card);
                        img.setAttribute("src", i.Poster);
                        console.log(section_card);
                        section_cards.push(section_card);
                    }
                }
            }
        }
        else for (let i of section_cards) i.remove();
    })
    .catch((e) => console.log(e));
})