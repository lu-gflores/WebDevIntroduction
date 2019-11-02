function validateContact () {
	var name = document.forms["contactInfo"]["name"].value;
	var email = document.forms["contactInfo"]["email"].value;
	var phone = document.forms["contactInfo"]["phone"].value;
	var inquiry = document.forms["contactInfo"]["inquiry"].value;
	var info = document.forms["contactInfo"]["info"].value;
	var choice1 = document.forms["contactInfo"]["choice1"].value;
	var choice2 = document.forms["contactInfo"]["choice2"].value;
	
	
	if (name == "") {
		alert("Please enter your name");
		return false;
	}
	if (email == "") {
		alert("Please enter your email");
		return false;
	}
	if (phone == "") {
		alert("Please enter your phone number");
		return false;
	} else {
		
		alert("Information sent, we will contact you as soon as possible, thank your feedback!");
		
		}

	return false;
}