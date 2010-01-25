// Archipel alpha.js v0.1, 15/01/10

// Copyright (c) 2010 Sebastian Stadil (http://stadil.com)
//
// All rights reserved. Sorry.



// Makes tags.class editable in place
function a_load() {
	$('#create_character').click(function(){$('#character').toggle('drop',{direction:'up'});});
	$('#create_character').click(function(){$('#helper').toggle('drop',{direction:'up'});});
	$('span#name').editable({submitterId:'name'});
	$('span#age').editable({submitterId:'age'});
	$('span#sex').editable({type:'select',options:{'male':'Mâle','female':'Femelle','other':'Spécial'},submit:'Ok',cancel:'Annuler',
	submitterId:'sex'});
	// When user clicks on element with 'item' class, show elements of class sct scrolling up
	$('.item').click(function(){$('.sct').hide("drop", { direction: "up" }, 800)});
	
	$('#skillDialog').dialog('option', 'buttons', 
				{
					"Ajouter":function()
					{$(this).dialog("close");},
					"Annuler":function()
					{$(this).dialog("close");}
				}
	);
	//for tabs in dialogs
   $("#skillDialog").bind('dialogopen', function() { 
       /* init tabs, when dialog is opened */ 
       $("#compTabs").tabs(); 
   }); 
	$('#compTabs').bind('tabsshow', function(event, ui) {
		var skills;
		switch (ui.index) {
			case 0: skills = comp.physiques; break;
			case 1: skills = comp.sociales; break;
			case 2: skills = comp.savoirfaire; break;
			case 3: skills = comp.connaissances; break;
			case 4: skills = comp.magiques; break;
			default:  skills = comp.magiques; break;
		}
		$MQ('l:skill.cat.chosen.response', {'skills':skills});
	});
	$('#compTabs').bind('tabsselect', function(event, ui) {
		$MQ('l:skill.unchosen');
	});
	
	$('#raceDialog').dialog('option', 'buttons', {"Choisir":function(){
																$MQ({name:'l:race.chosen.request',
																	 payload:{
																		race: $('body').data('race')
																	 }
																});
																$(this).dialog("close");
															},
												  "Annuler":function(){$(this).dialog("close");}
												  });
	$('#equipmentDialog').dialog('option', 'buttons', {"Purchase":function(){
																$MQ({name:'l:equipement.puchase',
																	 payload:{
																		race: $('body').data('equipment')
																	 }
																});
																$(this).dialog("close");
															},
												  "Leave shop":function(){$(this).dialog("close");}
												  });
	
	$('.ui-button').hover(
		function(){ 
			$(this).addClass("ui-state-hover"); 
		},
		function(){ 
			$(this).removeClass("ui-state-hover"); 
		}
	).mousedown(function(){
		$(this).addClass("ui-state-active"); 
	})
	.mouseup(function(){
			$(this).removeClass("ui-state-active");
	});
	
	

	// Listeners (races)
	$MQL('l:race.chosen.request', function(message) {
		var race;
		var phys;
		var ment;
		switch(message.payload.race) {
			case 'elf':
				race = 'Elfe';
				phys = elf.attribut.phys;
				ment = elf.attribut.ment;
				break;
			case 'orc':
				race = 'Orc';
				phys = orc.attribut.phys;
				ment = orc.attribut.ment;
				break;
			case 'minotaur':
				race = 'Minotaure';
				phys = minotaur.attribut.phys;
				ment = minotaur.attribut.ment;
				break;
			case 'human':
			default:
				race = 'Humain';
				phys = human.attribut.phys;
				ment = human.attribut.ment;
				break;
		};
		$MQ('l:race.chosen.response', {'race':race,'phys':phys,'ment':ment});
	});
	$MQL('l:race.selected', function(message) {$('body').data('race', message.payload.race)});
	
	$MQL("l:human.attribute.request", function() {
		$MQ('l:human.attribute.response',{'phys':human.attribut.phys, 'ment':human.attribut.ment});
	});
	$MQL("l:elf.attribute.request", function() {
		$MQ('l:elf.attribute.response',{'phys':elf.attribut.phys, 'ment':elf.attribut.ment});
	});
	$MQL("l:orc.attribute.request", function() {
		$MQ('l:orc.attribute.response',{'phys':orc.attribut.phys, 'ment':orc.attribut.ment});
	});
	$MQL("l:minotaur.attribute.request", function() {
		$MQ('l:minotaur.attribute.response',{'phys':minotaur.attribut.phys, 'ment':minotaur.attribut.ment});
	});
	// Listeners (skills)
	$MQL('l:skill.cat.chosen.request', function(message) {
		var skills;
		switch (message.payload.cat) {
			case 'phys': skills = comp.physiques; break;
			case 'soci': skills = comp.sociales; break;
			case 'savo': skills = comp.savoirfaire; break;
			case 'conn': skills = comp.connaissances; break;
			case 'magi': default: skills = comp.magiques; break;
		}
		$MQ('l:skill.cat.chosen.response', {'skills':skills});
	});
	$MQL("l:skill.description.update", function(message) {
		var compDesc ="";
		var id = message.payload.skillId;
		
		switch (id.substring(0,1)) {
			case 'p': compDesc = comp.physiques[id.substring(1)]; break;
			case 's': compDesc = comp.sociales[id.substring(1)]; break;
			case 'f': compDesc = comp.savoirfaire[id.substring(1)]; break;
			case 'c': compDesc = comp.connaissances[id.substring(1)]; break;
			case 'o': compDesc = comp.magiques[id.substring(1)]; break;
		}
		$('#compDesc').html(compDesc.desc);
	});
	
	// Listeners (items)
	$MQL("l:equipment.select", function() {
		$MQ('l:equipment.render',{'money':items.money, 'weapons':items.weapons, 'armor':items.armor, 'other':items.other});
		// Code for adding a datatable (not currently used though)
		//$('#weaponsTable').dataTable({'bJQueryUI': true,'sPaginationType': 'full_numbers'});
		// Must wait 1ms before removing attribute, otherwise Iterator (in entourage) hasn't processed yet
		//setTimeout("$('.tbody').removeAttr('style')", 1);
	});   
		
}; // End of function a_load

// This script calculates and updates the cost of all the attribute modifications
//on="l:attributs.changed then execute"
//var total_attr_cost = attribut_cost($('for').value) + attribut_cost($('end').value) + attribut_cost($('agi').value) + attribut_cost($('dex').value) + attribut_cost($('met').value) + attribut_cost($('ref').value) + attribut_cost($('ent').value) + attribut_cost($('inv').value) + attribut_cost($('mem').value) + attribut_cost($('vol').value) + attribut_cost($('cha').value) + attribut_cost($('per').value);
//ten = (Number($('end').value) + Number($('vol').value)) / 2;
//$MQ("l:attributs.calculated", {pp:total_attr_cost,ten:ten});