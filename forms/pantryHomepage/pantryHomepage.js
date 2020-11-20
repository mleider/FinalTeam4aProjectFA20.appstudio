hmbrPantryMenu.onclick=function(s){ 
               console.log(s)       
    if (typeof(s) == "object") { 
       return
    } else {
       switch(s) {
          case "Pantry Homepage":
              ChangeForm(pantryHomepage)
                break
            case "About Restaurant to Pantry":
                ChangeForm(AboutUsPantry)
                break
            case "Pantry Donation Search":
                ChangeForm(DonationSearch)
       } 
   } 
}
