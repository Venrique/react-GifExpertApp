export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZKUeXn5sseneNqLtQeaVf4B6pwnDJOgR&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    console.log('Nueva petición a la API de gifs para: '+category);
    return gifs;
}