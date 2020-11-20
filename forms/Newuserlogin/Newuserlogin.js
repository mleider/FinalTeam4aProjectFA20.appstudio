btnNewRestaurantAccount.onclick = function() {
  userName = inptNewUsername.value
  password = inptNewPassword.value
  if (password == inptPasswordConfirmation.value) {

    query = "INSERT INTO restaurant (username,`PASSWORD`) VALUES ('" + userName + "','" + password + "')"
    console.log(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
  } else {
    lblErrorPassword.textContent = "Passwords do not match, try again!"
    inptNewUsername.value = ""
    inptNewPassword.value = ""
  }
  if (req.status == 200) {
    ChangeForm(restaurantInfo)
  }
}


btnNewPantryAccount.onclick = function() {
  userName = inptNewUsername.value
  password = inptNewPassword.value
  if (password == inptPasswordConfirmation.value) {
    query = "INSERT INTO pantry (username,`PASSWORD`) VALUES ('" + userName + "','" + password + "')"
    console.log(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
    ChangeForm(pantryHomepage)
  } else {
    lblErrorPassword.textContent = "Passwords do not match, try again!"
    inptNewUsername.value = ""
    inptNewPassword.value = ""
  }
  if (req.status == 200) {
    ChangeForm(pantryInfo)
  }
}