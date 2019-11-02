//function for 6-sided dice 
function diceRoll() {
	return Math.floor(Math.random()* 6) + 1;
	}

//function for playing Lucky Sevens
function playGame() {
	var gameMoney = Number(document.forms["game"]["gameMoney"].value); //player's money based on input
	var betMoney = gameMoney; //money used in game to keep track;
	var dice1 = 0; 
	var dice2 = 0;
	var sum = 0; //dice sum
	var total = 0;
	
	//steps 4,5,6 variables
	var rolls = 0; //rolls taken before money ran out
	var maxAmount = [gameMoney]; //stores the total amount of the player's money in the array
	var store = maxAmount[maxAmount.length-1];	//this stores the last element in the array, which will be used to keep track of the amount won
	var currentAmount = store + 4;//stores the current amount in the store array and increase by 4 should the player roll a 7
	var maxRolls = 0; //rolls taken at point of user held most money
	
	//if the user enters a value less or equal to 0, displays an alert.
	if (gameMoney <= 0) {
		alert("Please enter a value greater than 0");
		Number(document.forms["game"]["gameMoney"]).value;
		return false;
				}
	//Do while loop for the game to keep playing as long as there is money in the game
	do { 
		rolls++; //each dice roll increases the 'rolls' varible by 1
		dice1 = diceRoll(); //call function
		dice2 = diceRoll();
		sum= dice1+ dice2;
		
		//if the users rolls a 7, they earn $4
		if (sum == 7){
			betMoney=+4;
			var store = maxAmount[maxAmount.length-1];	//this stores the last element in the array, which will be used to keep track of the amount won
			var currentAmount = store + 4;//stores the current amount in the store array and increase by 4 should the player roll a 7
			maxAmount.push(currentAmount); //pushes the winnings on top of the maxAmount array
		} else { //if the user does not roll a 4, they lose $1
			betMoney--;
			var store = maxAmount[maxAmount.length-1];	//this stores the last element in the array, which will be used to keep track of the amount won
			var currentAmount = store - 1 ;//stores the current amount in the store array and increase by 4 should the player roll a 7
			maxAmount.push(currentAmount);//pushes the loss on top of the maxAmount array
			rolls = rolls++;
		}
	} while(betMoney > 0); //so long as there is money in the game, it will continue the loop
		total = Math.max.apply(Math, maxAmount); //accepts the maxAmount and passes it as an argument
		maxRolls = maxAmount.indexOf(total); 
		if (maxRolls < 1) {
			maxRolls= 0;
		}
		
/*		
first attempt loop
	} while (gameMoney > 0) {
		sum = dice1 + dice2;
		rolls++;
		if (sum != 7) {
			gameMoney =- 1;
		
		} else {
			gameMoney =+ 4;
			if (gameMoney > maxAmount){			
					maxAmount =+ (gameMoney - maxAmount);
					maxRolls = rolls;
				}
		
		}
	}		
	*/		
					
		
		document.getElementById("results").style.display = "block";
		document.getElementById("money").innerText = gameMoney;
		document.getElementById("rolls").innerText = rolls;
		document.getElementById("maxAmount").innerText = total;
		document.getElementById("maxRolls").innerText = maxRolls;
	
	return false; //displays results table to user in html
}