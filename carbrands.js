var clearValues = function(){
	$('#make').val("").focus()
	$('#model').val("")
	$('#brand').val("")


}


CarBrands = new Meteor.Collection('carbrands');
if(Meteor.isClient) {
Template.main.carbrands = function(){
	return CarBrands.find();
}

Template.main.events({
	'click input.add': function(){
			
			var make = $('#make').val()
			var model = $('#model').val()
			var brand = $('#brand').val()
			CarBrands.insert({make:make,model:model,brand:brand});
			clearValues();
		}
	});
}


if(Meteor.isServer) {


}
