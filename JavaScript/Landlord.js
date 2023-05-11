
function display(option) {
    option = option.lastElementChild.innerHTML;
    if (option == "Properties Uploaded") {
        window.open("PropertiesUploaded.html", "_self");
    }
    else if (option == "Properties Rented") {
       
    }
    else {
    }
}

function MoveTo(option){
    option = option.lastElementChild.innerHTML;
    if (option == "Ratings") {
        document.getElementById("ratings").scrollIntoView({behavior: 'smooth'});
    }
    else {
        document.getElementById("Comments").scrollIntoView({behavior: 'smooth'});
    }
}