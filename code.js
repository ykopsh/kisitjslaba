var products = [{
	name : "prod1",
	price : 15,
	inventory : 40,
}, {
	name : "prod2",
	price : 13,
	inventory : 30,
}];

class ProductLineItem {
	constructor(product) {		 
		this.name = product.name;
		this.quantity = 1;	
		this.price = product.price * this.quantity;
		this.inventory = product.inventory;
		}

	get getName(){
		return this.name;
	}

	get getPrice(){
		return this.price;
	}

	get getInventory(){
		return this.inventory;
	}

	get getQuantity(){
		return this.quantity;
	}

	setQuantity(newQ){
		this.price /= this.quantity;
		this.quantity = newQ;
		this.price *= this.quantity;
	}
}

var basket = (function(){
	var arrOfProducts = [];
	//implement
	return {
	addProduct : function(productID){
		var mr = false;
		if(arrOfProducts.length != 0 ){
			for(var i = 0; i<arrOfProducts.length; i++){
				if(arrOfProducts[i].getName == products[productID].name){
					mr = true;											
					}										
				}
			if(mr) console.log("You already have this item!")
			else arrOfProducts[productID] = new ProductLineItem(products[productID]);
		} else arrOfProducts[0] = new ProductLineItem(products[productID]);
		},

	removeProduct : function(productID){
		arrOfProducts.splice(productID,1);
		},

	updateProductQuantity : function(productID, quantity) {
			if(arrOfProducts.length != 0 ){
			for(var i = 0; i<arrOfProducts.length; i++){
				if(arrOfProducts[i].getName == products[productID].name){
					arrOfProducts[i].setQuantity(quantity);
					}										
				}			
			} else console.log("There`s no items!");
		},
		
	getTotalPrice : function(){
		var totalPrice = 0;
		for (var i=0; i<arrOfProducts.length; i++){
				totalPrice += arrOfProducts[i].getPrice;
			}
		return totalPrice;
		}
	}
})();