# marvelCapDemo

Code Explanation
----------------

API and data layer
-------------

config.js - contains all configurations for the project
Key params to update

const publicKey = 'Your-Public-Key'; // Replace with your actual public key
const privateKey = 'Your-private-key'; // Replace with your actual private key
limit ->> This parameter is used to set a limit to the number of results the API fetches, Max limit set by Marvel is 100


marvelApi.js - contains code for API calls to marvel API
 The first function -- getAllCharacters -- pulls data on all Marvel characters (up to max of 100)
 second function -- getComicsCount -- for each character pull the count of comics

 transformData.js - transform outputs of character and comics count into a JSON file

 To execute the business logic and pull latest data from Marvel API. Do the following

Setup node environment and install all required packages as per package.json
bash >>    npm install axios md5 open

run business login
bash >> node transformData.js


 ----------------
UI Layer
-----------

index.html file within the code repo, provides a simple UI to reder the data from json into an HTML table. 

to launch this follow the steps below

To view the rendered table, you can use a simple web server. One easy way to do this is by using the http-server npm package. If you don't have it installed, you can install it using npm package manager:

npm install -g http-server

Then, navigate to the directory containing your HTML file and run:

http-server

Open your browser and go to http://localhost:8080 or another port specified in the console output. You should see your HTML file with the data table rendering the data.
 
