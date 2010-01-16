// Archipel alpha.js v0.1, 15/01/10

// Copyright (c) 2010 Sebastian Stadil (http://stadil.com)
//
// All rights reserved. Sorry.

// Makes tags.class editable in place
function a_editable() {
	var race;
	$('span#name').editable({submitterId:'name'});
	$('span#age').editable({submitterId:'age'});
	$('span#sex').editable({type:'select',options:{'male':'Homme','female':'Femme','other':'Spécial'},submit:'Ok',cancel:'Annuler',
							submitterId:'sex'});
	$('#raceDialog').dialog('option', 'buttons', {"Choisir":function(){
																//$MQ({
																//	name:'l:race.selected',
																//	scope:'appcelerator',
																//	payload:{
																//		race:'humansss'//$('#raceDialog')
																//	}
																//});
																$(this).dialog("close");
															},
												  "Annuler":function(){$(this).dialog("close");}
												  });
};



// This script establishes the cost of increasing or decreasing an attribute
function attribut_cost(attr) {
	switch(attr) {
		case '0':
			return -40;
			break;
		case '1':
			return -25;
			break;
		case '2':
			return -12;
			break;
		case '3':
			return -5;
			break;
		case '4':
			return 0;
			break;
		case '5':
			return 8;
			break;
		case '6':
			return 16;
			break;
		case '7':
			return 30;
			break;
		case '8':
			return 45;
			break;
		default:
			return 0;
			break;
	}
}

// This script calculates and updates the cost of all the attribute modifications
//on="l:attributs.changed then execute"
//var total_attr_cost = attribut_cost($('for').value) + attribut_cost($('end').value) + attribut_cost($('agi').value) + attribut_cost($('dex').value) + attribut_cost($('met').value) + attribut_cost($('ref').value) + attribut_cost($('ent').value) + attribut_cost($('inv').value) + attribut_cost($('mem').value) + attribut_cost($('vol').value) + attribut_cost($('cha').value) + attribut_cost($('per').value);
//ten = (Number($('end').value) + Number($('vol').value)) / 2;
//$MQ("l:attributs.calculated", {pp:total_attr_cost,ten:ten});