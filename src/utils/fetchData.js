export const exerciseOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'be765d5f60msh7f73ce27a249b73p18e152jsnab91f23d0032',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  
export const youtubeOptions = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'be765d5f60msh7f73ce27a249b73p18e152jsnab91f23d0032',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) =>{
const response = await fetch(url, options)
const data = await response.json()

return data
}