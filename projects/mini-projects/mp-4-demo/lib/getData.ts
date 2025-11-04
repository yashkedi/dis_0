
const API_KEY=process .env.API_KEY;

export default async function getData(){
    const res =await fetch(`https://api.bigbookapi.com/search-books?api-key=${API_KEY}&query=books+about+wizards`)
    return res.json();
}