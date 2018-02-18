// scripts.js - WŁAŚCIWE ZADANIE 

function Button(text) {
	
	this.text = text || 'Hello';

}

Button.prototype.create = function () {
	var self = this;
	this.$element = $('<button>');
	$('body').append(this.$element);

	this.$element.text(this.text);

	this.$element.click(function() {
		alert(self.text);

	});


}


var btn1 = new Button('Hello');
btn1.create ();

var btn2 = new Button('Good bye');
btn2.create ();

var btn3 = new Button();
btn3.create ();


//PRZYKŁAD 1 - Źle! 

var person1 = {
	name: "Jan",
	sayHello: function() {
		console.log("Hello "  + this.name + "!");
    }
}
var hello = person1.sayHello;
 
hello(); // wyświetli się be zimienia 


//PRZYKŁAD 2 - Źle! 

var person2 = {
	name: 'Jan',
	sayHello: function() {
		
		setTimeout(function() {
			console.log('Hello '  + this.name + '!');
        }, 1000);
    }
};
person2.sayHello(); //wyświetli się bez imienia

//PRZYKŁAD 3 - Dobrze!

var person3 = {
	name: 'Jan',
	sayHello: function() {
    	var self = this;
		setTimeout(function(){
			console.log('Hello '  + self.name + '!');
        }, 1000)
    }
};
person3.sayHello() // Hello Jan!



