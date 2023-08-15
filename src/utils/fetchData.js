
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '392b7e6392msh12f7f7471406556p1a34f4jsn5f8a738b5692',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '392b7e6392msh12f7f7471406556p1a34f4jsn5f8a738b5692',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}