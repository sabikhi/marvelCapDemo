// transformData.js
const { getAllCharacters, getComicsCount } = require('./marvelApi.js');

async function transformData() {
  try {
    const characters = await getAllCharacters();

    const transformedData = [];
    var i=0;
    for (const character of characters) {
      const comicsCount = await getComicsCount(character.id);
      i++;
      const characterData = {
        SrNo: i,
        name: character.name,
        comicsCount: comicsCount,
      };
      transformedData.push(characterData);
    }

    return transformedData;
  } catch (error) {
    console.error('Error transforming data:', error.message);
    throw error;
  }
}

async function main() {
  try {
    const transformedData = await transformData();

    // Assuming you want to write the data to a JSON file named 'output.json'
    const fs = require('fs');
    fs.writeFileSync('output.json', JSON.stringify(transformedData, null, 2));

    console.log('Data transformed and saved to output.json');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}



// Execute the main function
main();
