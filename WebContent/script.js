var items = [];
var prices = [];
var printThis = [];
function addToCart(name, price) {
 items.push(name);
 prices.push(price);
 
}
function printCart() {
 var i;
 var total = 0;
 
 for (i = 0; i <= items.length; i++) { 
	 if(i === items.length) {
		 total.toString;
		 printThis[i] = "You have purchased " + items.length + " for " + total;
	 }
	 else {
		 console.log(items[i] + " " + prices[i]) + "<br>";
		 total = total.valueOf() + prices[i].valueOf();
		 prices[i].toString();
		 printThis[i] = items[i].concat(" ", prices[i]);
	 }
 }
 console.log(total);
 document.getElementById("Cart").innerHTML = printThis.join("<br>");
}