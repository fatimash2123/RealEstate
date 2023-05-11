{

function next(){
    var s = document.getElementById("UserType").selectedOptions[0].value; 
    localStorage.setItem("option",s);
    window.open("bankinfo.html");
}


function register(){
    x= localStorage.getItem("option");
    if(x=="tenant"){
        window.open("tenantProfile.html");
    }
    else if(x=="Landlord") {
        window.open("LandlordProfile.html");
    }
}
}

function Info(){
    alert("Select \"become a member\" \nThen select any type of user ie Tenant or landlord \nThen register respective profive will be shown");
}

function displayReg(){
    window.open("Register.html","_self");
}