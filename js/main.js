// Images url array 
var myArray = [
{
"display": "Betty Jean Jennings",
"url": "http://en.wikidpedia.org/wiki/Jean_Bartik"
},
{
"display": "Shafrira Goldwasswe",
"url": "http://en.wikidpedia.org/wiki/Shafi_Goldwasser"
},
{
"display": "Anuradha Annaswamy",
"url": "http://meche.mit.edu/people/faculty/aanna@mit.edu"
},
  {
"display": "Grace Hopper",
"url": "http://en.wikidpedia.org/wiki/Grace_Hopper"
},
  {
"display": "Valerie Taylor",
"url": "https://en.wikipedia.org/wiki/Valerie_Taylor_(computer_scientist)"
},
  {
"display": "Ellen Ochoa",
"url": "https://en.wikipedia.org/wiki/Ellen_Ochoa"
},
  {
"display": "Augusta Ada Lovelace King",
"url": "https://en.wikipedia.org/wiki/Ada_Lovelace"
},
  {
"display": "Katherine Johnson",
"url": "https://en.wikipedia.org/wiki/Katherine_Johnson"
},
  {
"display": "Kay McNulty",
"url": "https://en.wikipedia.org/wiki/Kathleen_Antonelli"
},
  {
"display": "Betty Snyder",
"url": "https://en.wikipedia.org/wiki/Betty_Holberton"
},
    {
"display": "Arati Prabhakar",
"url": "https://en.wikipedia.org/wiki/Arati_Prabhakar"
},
    {
"display": "Anita Borg",
"url": "https://en.wikipedia.org/wiki/Anita_Borg"
}
  
];

// Function to display urls in array above

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
    }
    document.getElementById("linksDisplay").innerHTML = out;
};