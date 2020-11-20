hmbrPantryRegistration.onclick=function(s){ 
               console.log(s)       
    if (typeof(s) == "object") { 
       return
    } else {
       switch(s) {
          case "Pantry Homepage":
              ChangeForm(PantryHomepage)
                break
            case "About Us":
                ChangeForm(AboutUs)
                break
            case "Pantry Needs":
                ChangeForm(PantryNeeds)
                break
            case "Donation Search":
                ChangeForm(DonationSearch)
       } 
   } 
}

btnSubmitPantryRegistration.onclick = function() {
  name = inptPantryInfoName.value
  address  = inptPantryInfoAddress.value
  city = inptPantryInfoCity.value
  zipcode  = inptPantryInfoZipCode.value
  phone_num = inptPantryInfoPhone.value
  contact_name  = inptPantryInfoContactName.value
  state  = inptPantryInfoState.value


    query = "UPDATE pantry SET name = '" + name + "' , address = '" + address + "', city = '" + city + "', state = '" + state + "', zipcode = '" + zipcode + "', phone_num = '" + phone_num + "', contact_name = '" + contact_name + "' WHERE username  = '" + userName + "' AND    `PASSWORD`  = '" + password + "' " 
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
console.log(req.responseText)
console.log(userName)
console.log(password)

if (req.status == 200) {
    ChangeForm(pantryHomepage)
  }
}
