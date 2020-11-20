
hmbrMenu5.onclick=function(s){ 
               console.log(s)       
    if (typeof(s) == "object") { 
       return
    } else {
       switch(s) {
          case "Calendar":
              ChangeForm(Calendar)
                break
            case "How To Donate":
                ChangeForm(HowToDonate)
                break
            case "About Us":
                ChangeForm(AboutUs)
                break
         case "Map":
                ChangeForm(Maps)
                break
            case "Charities":
                ChangeForm(Charities)
                break
            case "Contact Us":
                ChangeForm(ContactUs)
                break      
         case "Donation Search":
                ChangeForm(DonationSearch)       
                break      
      case "Restaurant Homepage":
                ChangeForm(restaurantHomepage)  
       } 
   } 
}

let requestURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.2644695, -95.9647536&radius=5000&keyword=food+pantry&key=AIzaSyC0BgCoFeK4LNrY62p-WKS2Y-3mrFS6lRw"

function onXHRLoad() {  
  let message = ""   
  let apiData = JSON.parse(this.responseText)   
  for (i = 0; i <= apiData.results.length - 1; i++) {       
    console.log(`${apiData.results[i].name}`)     
    message = message + apiData.results[i].name + "\n"  + apiData.results[i].vicinity + "\n" + "\n"  
    }   
    txtaClosePantry.value = message 
   
   }
    
function callAPI(URL) {
  
    var xhttp = new XMLHttpRequest();  
    xhttp.open('GET', 'https://cors-anywhere.herokuapp.com/' + URL)   
    xhttp.addEventListener('load', onXHRLoad) 
    xhttp.send()
    }
btnPantrySearch.onclick=function() { 
// call the API calling code above
callAPI(requestURL)
}

/*
//Geolocation - this sample gets the current location
 //and displays a map of it. It also shows the current
 //speed and altitude.

 //Set up global variables
var gps;
let longitude = ""
let latitude = ""
lastRefresh=0;

btnPantrySearch.onclick=function(){
  // call the API calling code above
  options={timeout: 5000, maximumAge: 5000, enableHighAccuracy: true};
  gps=navigator.geolocation.watchPosition(onGeolocation, errorCallBack, options);
  callAPI(requestURL)
}
function errorCallBack(Error) {
 //unable to get the geolocation data
  NSB.MsgBox(Error.message  +  '\n'  +  "Show default map...");
  ShowMap(latitude1, longitude1);
}
 //This starts scanning the current location. It checks it every 5 seconds.
 //If it gets the data successfully, the handler function is called.
 //If not, errorCallBack is called.
  



function onGeolocation(location) {
 var s;
 longitude = location.coords.longitude
 latitude = location.coords.latitude
requestURL = "https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="  +   latitude  +  ","  +  longitude  +   "&radius=2000&keyword=food+pantry&key=AIzaSyC0BgCoFeK4LNrY62p-WKS2Y-3mrFS6lRw"

 console.log(longitude + "   " + latitude)
  s = "Longitude: " + location.coords.longitude  +  '\n';
  s = s  +  "Latitude: " + location.coords.latitude  +  '\n';
  s = s  +  "Speed: " + location.coords.speed  +  " ";
  s = s  +  "Altitude: " + location.coords.altitude  +  '\n';
  s = s  +  "Accuracy: " + location.coords.accuracy  +  " ";
  s = s  +  "Accuracy(altitude): " + location.coords.altitudeAccuracy  +  " "  +  '\n';
 //different browsers return the timestamp in different formats.
 //this converts it if necessary.
 /*
 if(IsNumeric(location.timestamp)) {
    gpsDate=new Date(location.timestamp);
 } else {
    gpsDate=location.timestamp;
  }
  TextArea1.value = s  +  "Timestamp: " + gpsDate;
  ShowMap(location.coords.latitude, location.coords.longitude);
}


}



function onXHRLoad() {
    let message = ""
    let apiData = JSON.parse(this.responseText) 
    console.log(apiData)
    for (i = 0; i <= apiData.results.length - 1; i++) {
        console.log(`${apiData.results[i].name}`)
        message = message + apiData.results[i].name + "\n"  + apiData.results[i].vicinity + "\n" + "\n"
    }
    txtaClosePantry.value = message
    
}

function callAPI(requestURL) {
console.log(requestURL)
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET',  requestURL)
    xhttp.addEventListener('load', onXHRLoad)
    xhttp.send()
}


btnPantrySearch.onclick=function(){
  // call the API calling code above
  callAPI(requestURL)
}


https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.2644695, -95.9647536&radius=5000&keyword=food+pantry&key=AIzaSyC0BgCoFeK4LNrY62p-WKS2Y-3mrFS6lRw
Maps.onshow=function(){
  
}
*/

