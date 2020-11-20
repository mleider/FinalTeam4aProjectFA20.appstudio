btnSubmitRestaurantRegistration.onclick = function() {
  name = inptRestaurantInfoName.value
  address  = inptRestaurantInfoAddress.value
  city = inptRestaurantInfoCity.value
  state = inptRestaurantState.value
  zipcode  = inptRestaurantInfoZipCode.value
  phone_num = inptRestaurantInfoPhone.value
  owner_name  = inptRestaurantInfoOwnerName.value


    query = "UPDATE restaurant SET name = '" + name + "' , address = '" + address + "', city = '" + city + "', state = '" + state + "', zipcode = '" + zipcode + "', phone_num = '" + phone_num + "', owner_name = '" + owner_name + "' WHERE username  = '" + userName + "' AND    `PASSWORD`  = '" + password + "' " 
 req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
console.log(req.responseText)
console.log(userName)
console.log(password)

if (req.status == 200) {
    ChangeForm(restaurantHomepage)
  }
}
