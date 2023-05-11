
function MoveTo(option){
    option = option.lastElementChild.innerHTML;
    if (option == "Ratings") {
        document.getElementById("ratings").scrollIntoView({behavior: 'smooth'});
    }
    else {
        document.getElementById("Comments").scrollIntoView({behavior: 'smooth'});
    }
}

function display(option) {
    option = option.firstElementChild.innerHTML;
    if (option == "Rented Property Details") {
        window.open("PropDetail.html", "_self");
    }
    else if (option == "Landlord details") {
        window.open("LandlordDetailsForTenant.html", "_self");
    }
    else {
        
        window.open("previousLandLords.html", "_self");
    }
}