hmbrDonationSearch1.onclick=function(s){ 
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
                ChangeForm(AboutUsRestaurant)
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
                ChangeForm(DonationSearch2)      
                break      
      case "Restaurant Homepage":
                ChangeForm(restaurantHomepage)  
       } 
   } 
}

DonationSearch2.onshow=function(){
  query =  "SELECT DISTINCT date FROM DONATION"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
Date1 = JSON.parse(req.responseText)
drpDonationDateSearch1.clear()
for (i= 0; i<=Date1.length-1;i++)
drpDonationDateSearch1.addItem(Date1[i])
}


drpDonationDateSearch1.onclick=function(s){
  if(typeof(s)=="object") {
  return
} else {
  drpDonationDateSearch1.value = s
  query1 = "SELECT  p.name,d.food_type,d.date,r.name,r.address FROM pantry p  JOIN donation d on p.pantry_id = d.pantry_id JOIN restaurant r on d.restaurant_id = r.restaurant_id WHERE date = "+'"' +drpDonationDateSearch1.value+'"'
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query1)
  let message = ""
    results = JSON.parse(req.responseText) 
    console.log(results)
    for (i = 0; i <= results.length - 1; i++) {
        message = message + results[i][0] + "\n" 
      message = message + results[i][1] + "\n" 
      message = message + results[i][2] + "\n"  
      message = message + results[i][3] + "\n"  
      message = message + results[i][4] + "\n" + "\n"
        txtaDonationResults1.value = message

}
}
}