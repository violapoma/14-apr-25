/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY! length 36
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]


// Function to fill the table with jobs; 
// myArray = array that contains the jobs that i'm considering
function fillTable(myArray) {
    let myTable = document.getElementById("allJobTable");

    for (let i = 0; i < myArray.length; i++) {
      
      let row = myTable.insertRow();
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      cell1.innerHTML = myArray[i].title;
      cell2.innerHTML = myArray[i].location;
    }
}

//loading the table with all jobs
window.addEventListener('load', function() { fillTable(jobs); } );


//Function to search for jobs based on title OR location, meaning that one fild can be empty if, for example, I'm open to travel in order to get a job, or that I'm flexible on the job type if I can't move from my area
function searchJobs() {

  let title = document.getElementById("jobTitle").value;
  let location = document.getElementById("jobLocation").value;

  // Convert title and location to lowercase for case insensitive search
  const lowerTitle = title.toLowerCase();
  const lowerLocation = location.toLowerCase();

  // Filter jobs based on title and location; filter returns an array of jobs that match the criteria
  const result = jobs.filter(job => 
    job.title.toLowerCase().includes(lowerTitle) && 
    job.location.toLowerCase().includes(lowerLocation)
  );
  
  if (result.length == 0) {
    // alert("No results found, please try again");
    noResultFound();
  }
  
    // Filling table with results
    let resultTable = document.getElementById("allJobTable");

    resultTable.innerHTML = ""; // Clear the original table
    resultTable.innerHTML = "<tr><th>Job's title</th><th>Location</th></tr>"; // Add headers back
    fillTable(result);

}


//function to clear the input fields and return to the original table
function clearFields() {
  
  //if the user gets confused by two x buttons, the clear button will close the overlay too
  if(document.getElementById("overlay")!= null) 
    closeOverlay();
 
  document.getElementById("jobTitle").value = "";
  document.getElementById("jobLocation").value = "";
  let table = document.getElementById("allJobTable");
  fillTable(jobs);
 }
  

 function noResultFound() {
  let displayedTable = document.getElementById("allJobTable");
  displayedTable.style.display = "none"; // Hide the table

  let overlay = document.createElement("div");
  overlay.id = "overlay";
  let targetDiv = document.getElementById("divTable");
  targetDiv.appendChild(overlay); // Append the overlay to the target div

  let newDiv = document.createElement("div");
  newDiv.className = "overlayContent";
  newDiv.innerHTML = "<p> 👩‍💻 </p>";
  newDiv.innerHTML += "<h2>🤷‍♀️ <span>No results found</span> 🤷</h2>";

  newDiv.innerHTML += "<button id='closeOverlay' onclick = 'closeOverlay()'><i class='fa-solid fa-xmark'></i></button>";
  overlay.appendChild(newDiv);

 }

function closeOverlay() {
  let overlay = document.getElementById("overlay");
  overlay.innerHTML = "";
  overlay.style.display = "none";
  overlay.remove(); // Remove the overlay from the DOM
  
  fillTable(jobs);
  let displayedTable = document.getElementById("allJobTable");
  displayedTable.style.display = ""; // Show the table
  clearFields();
}