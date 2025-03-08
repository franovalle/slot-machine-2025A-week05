var playersCash = 1000



document.querySelector('#min').addEventListener('click', playSlots)
function playSlots() {
	let slotone = slotReturn()
	let slottwo = slotReturn()
	let slotthree = slotReturn()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)
	if (slotone === slottwo && slotone === slotthree && slottwo === slotthree) {
		increaseFive();


	}
	else {
		decreaseFive();

	}
}


function slotReturn() {
	var randomSlot = Math.floor(Math.random() * 5);


	return randomSlot
}
document.querySelector('#max').addEventListener('click', playSlotsAgain)
function playSlotsAgain() {
	let slotone = slotReturnAgain()
	let slottwo = slotReturnAgain()
	let slotthree = slotReturnAgain()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)
	if (slotone === slottwo && slotone === slotthree && slottwo === slotthree) {
		increaseFifty();

	}
	else {
		decreaseFifty();

	}
}

function slotReturnAgain() {
	var randomSlot = Math.floor(Math.random() * 5);
	return randomSlot
}

function increaseFifty() {
	playersCash = playersCash + 50 * 20;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('WINNER!!!!!WINNER!!!!!WINNER!!!!!')

}
function increaseFive() {
	playersCash = playersCash + 5 * 100;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('WINNER!!!!!WINNER!!!!!WINNER!!!!!')


}
function decreaseFifty() {
	playersCash -= 50;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('TRY AGAIN!')

}
function decreaseFive() {
	playersCash -= 5;
	document.querySelector('#totalCash').innerHTML = playersCash;
	document.querySelector('#results').innerText = ('TRY AGAIN!')


}



/*function slotReturn() {
	var randomSlot = Math.random();

	if (randomNumber < .33) {
		increaseFiveHundred()
	}
	else if (randomNumber < .6666) {
		decreaseFiveHundred()

	}
}

function getRandomWeapon() {
	var randomNumber = Math.random();
	var botsWeapon = "rock";
	if (randomNumber < .33) {
		botsWeapon = "scissors";
	}
	else if (randomNumber < .6666) {
		botsWeapon = "paper";
	}
	return botsWeapon;
}

if (slotone === slottwo && slottwo === slotthree) {
	document.querySelector('#results').textContent = 'WINNER!'

}
else {
	document.querySelector('#results').textContent = 'TRY AGAIN!'
}



document.querySelector('#min').addEventListener('click', minBet)
function minBet() {
	if (slotone === slottwo && slottwo === slotthree) {
		increasePlayersCash();

	}
	else {
		increase();

	}
}

document.querySelector('#max').addEventListener('click', maxBet)
function maxBet() {
	if (slotone === slottwo && slottwo === slotthree) {
		increasePlayersCash();

	}
	else {
		decreasePlayersCash();

	}
}

function increasePlayersCash() {
	playersCash += 100;
	document.querySelector('totalCash').innerHTML = playersCash;
}

function decreasePlayerScore() {
	playersNoCash -= 100;
	document.querySelector('totalCash').innerHTML = playerNoCash;
}






/*document.querySelector('#spin').addEventListener('click', playSlots)
function playSlots() {
	let slotone = slotReturn()
	let slottwo = slotReturn()
	let slotthree = slotReturn()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)

	if (slotone === slottwo && slottwo === slotthree) {
		document.querySelector('#results').textContent = 'WINNER!'

	}
	else {
		document.querySelector('#results').textContent = 'TRY AGAIN!'
	}
}
  




//document.querySelector('#max').addEventListener('click', maxBet)

//function maxBet() {
  
////Math.random()
//f//unction slotReturn() {
	//return slots[Math.random() * slots.length]
//}


//}
//Number(document.querySelector('#totalCash').value)

//document.querySelector('#help').addEventListener('click', stopSnacking)

///function stopSnacking(){
   // let snacks = Number(document.querySelector('input').value)
   // let count = 0
	//while( count < snacks ){
	   // document.querySelector('#stops').innerText += ' STOP '
	   // count++
	//}

//}

/*document.querySelector('#multi').addEventListener('click', multiply)

function multiply() {
  const num1 = Number(document.querySelector('#firstnumber').value)
  const num2 = Number(document.querySelector('#secondnumber').value)
  document.querySelector('#results').innerText = (num1*num2)
  


}

document.querySelector('#divide').addEventListener('click', division)

function division() {
  const num1 = Number(document.querySelector('#firstnumber').value)
  const num2 = Number(document.querySelector('#secondnumber').value)
  document.querySelector('#results').innerText = (num1/num2)
  


}



document.querySelector('#min').
function playerMakesMinBet(){
	let minBet = -5 ; 

}
document.getElementById().onclick= playerThrowsScissors;
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}
document.getElementById("paper").onclick= playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}


function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=botScore;
	displayCompleteMessage("YOU WON!");
		

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}




/*const slotMachine = {
	cherry: "🍒",
	lemon: "🍋",
	watermelon: "🍉",
	star: "⭐",
	orange: "🍊",
	bell: "🔔"
	

}
console.log(slotMachine)
const slots = Object.values(slotMachine)
console.log(slots)

function slotReturn() {
	return slots[Math.random() * slots.length]
}
document.querySelector('#spin').addEventListener('click', playSlots)
function playSlots() {
	let slotone = slotReturn()
	let slottwo = slotReturn()
	let slotthree = slotReturn()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)

	if (slotone === slottwo && slottwo === slotthree) {
		document.querySelector('#results').textContent = 'WINNER!'

	}
	else {
		document.querySelector('#results').textContent = 'TRY AGAIN!'
	}
}

//let playerCash=$1000;

//document.querySelector('#min').onclick=increaseFiveHundred;
//function increaseFiveHundred(){
	//var min = +500; 
//}
/*document.getElementById("scissors").onclick= playerThrowsScissors;
function playerThrowsScissors(){
	

}
/*document.getElementById("paper").onclick= playerThrowsPaper;
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
}


function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	if(randomNumber<.33){
		botsWeapon="scissors";
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=botScore;
	displayCompleteMessage("YOU WON!");
		

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
} 	if (randomSlot < .33) {
		increaseHundred()
	}
	else if (randomSlot < .6666) {
		decreaseHundred()

	}
		function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
*/