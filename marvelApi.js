// marvelApi.js
const axios = require('axios');
const  { baseURL, limit, publicKey, privateKey, CHARACTERS_ENDPOINT, COMICS_ENDPOINT } = require('./config');
const md5 = require('md5');

const tms = new Date().getTime();
const mHash = md5(tms + privateKey + publicKey).toString();

 async function getAllCharacters() {
  const url = `${baseURL}${CHARACTERS_ENDPOINT}?limit=${limit}&apikey=${publicKey}&ts=${tms}&hash=${mHash}`;
  //console.log(url); // Line added for debuging
  const charactarId = 'xys';
  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}

 async function getAllComics() {
  const url = `${baseURL}${COMICS_ENDPOINT}?limit=${limit}&apikey=${publicKey}&ts=${tms}&hash=${mHash}`;

  try {
    const response = await axios.get(url);
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching comics:', error);
    throw error;
  }
}

// Function to get the quantity of comics for a specific character
async function getComicsCount(characterId) {
    const url = `${baseURL}/${CHARACTERS_ENDPOINT}/${characterId}/${COMICS_ENDPOINT}?limit=${limit}&apikey=${publicKey}&ts=${tms}&hash=${mHash}`;
     //console.log(url); // Line added for debuging
    try {
        const response = await axios.get(url);
        return response.data.data.total;
     }catch (error) {
      console.error(`Error fetching comics count for character ${characterId}:`, error.message);
      throw error;
    }
  }

// Exporting functions to make them available for import
module.exports = {
    getAllCharacters,
    getComicsCount,
  };