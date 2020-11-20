let userName = ""
let password = ""
let query= ""
let req= ""
let results = ""


btnRestaurantsubmit.onclick=function(){
  userName = inptUserName.value
  password = inptPassword.value
  query = "SELECT username, `Password` FROM restaurant WHERE username ="+'"' +inptUserName.value+'"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
    results = JSON.parse(req.responseText)
    console.log(results[0][0])
    console.log(results[0][1])
  if ((userName == results[0][0]) && (password == results[0][1]))
    ChangeForm(restaurantHomepage)
  else { 
    lblError.hidden = false
    lblError.textContent = "That login is not recognised. Please try again."
    inptUserName.value = ""
    inptPassword.value = ""
  }
}


btnPantrysubmit.onclick=function(){
  userName = inptUserName.value
  password = inptPassword.value
  query = "SELECT username, `Password` FROM pantry WHERE username ="+'"' +inptUserName.value+'"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=amj88804&pass=RDJ!&database=375groupa4&query=" + query)
    results = JSON.parse(req.responseText)
    console.log(results[0][0])
    console.log(results[0][1])
  if ((userName == results[0][0]) && (password == results[0][1]))
    ChangeForm(pantryHomepage)
  else { 
    lblError.hidden = false
    lblError.textContent = "That login is not recognised. Please try again."
    inptUserName.value = ""
    inptPassword.value = ""
  }
}


btnNewUser.onclick=function(){
  ChangeForm(Newuserlogin)
}


