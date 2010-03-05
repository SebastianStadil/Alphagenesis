// Archipel alpha.js v0.1, 15/01/10

// Copyright (c) 2010 Sebastian Stadil (http://stadil.com)
//
// All rights reserved. Sorry.

var weapons = [];
var armor = [];

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
			{
				$('.ui-selected').each(function()
				{
					var id = this.id;
					if (id != "compIterator")
					{
						if (id.substring(0, 2) == '__')
						{
							id = id.substring(2);
						}
						if (id.substring(0, 1) == '_')
						{
							id = id.substring(1);
						}
						var skill = getSkillById(id);
						skill.level = 'Profane';
						skill.cost = 0;
						skill.slidervalue = 0;
						if (skill.id != "crap" && !isInCharSkills(skill.id))
						{
							switch (skill.id.substring(0,1)) 
							{
								case 'p': character.skills.physiques.push(skill); break;
								case 's': character.skills.sociales.push(skill); break;
								case 'f': character.skills.savoirfaire.push(skill); break;
								case 'c': character.skills.connaissances.push(skill); break;
								case 'o': character.skills.magiques.push(skill); break;
							}
						}		
					}		
				});
				
				displaySkills();
				
				$MQ('l:skills.populate', {'skills':character.skills});
				
				$(this).dialog("close");
				setTimeout("buttonify()", 500); 
				setTimeout("sliderify()", 500); 

				
			},
			"Annuler":function()	{$(this).dialog("close");}
		}
	);
	//for tabs in dialogs
   $("#skillDialog").bind('dialogopen', function() { 
      /* init tabs, when dialog is opened */ 
		var $tabs = $('#compTabs').tabs();
		var skills, showedSkills;
		switch ($tabs.tabs('option', 'selected')) {
			case 0: skills = comp.physiques; break;
			case 1: skills = comp.sociales; break;
			case 2: skills = comp.savoirfaire; break;
			case 3: skills = comp.connaissances; break;
			case 4: skills = comp.magiques; break;
		}
		showedSkills= [];
		var i;
		for (i=0; i<skills.length ; i++)
		{
				if (!isInCharSkills(skills[i].id))
				{
					showedSkills.push(skills[i]);
				}
		}
		
		$MQ('l:skill.cat.chosen.response', {'skills':showedSkills});

   }); 
	$('#compTabs').bind('tabsshow', function(event, ui) {
		var skills, showedSkills;
		switch (ui.index) {
			case 0: skills = comp.physiques; break;
			case 1: skills = comp.sociales; break;
			case 2: skills = comp.savoirfaire; break;
			case 3: skills = comp.connaissances; break;
			case 4: skills = comp.magiques; break;
		}
		showedSkills= [];
		var i;
		for (i=0; i<skills.length ; i++)
		{
				if (!isInCharSkills(skills[i].id))
				{
					showedSkills.push(skills[i]);
				}
		}
		
		$MQ('l:skill.cat.chosen.response', {'skills':showedSkills});
	});
	$('#compTabs').bind('tabsselect', function(event, ui) {
		$MQ('l:skill.unselected');
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
	$('#equipmentDialog').dialog('option', 'buttons', {"Sortir":function(){
																$MQ({name:'l:equipment.populate',
																	 payload:{
																		weapons:weapons,
																		armor:armor
																	 }
																});
																$(this).dialog("close");
															}
	});
		
	buttonify();
	sliderify();
	
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
	$MQL("l:skill.selected", function(message)
	{
		var id = message.payload.skillId;
		$('#compDesc').html(getSkillById(id).desc);
	});
	$MQL('l:char.skills.remove', function(message) {
		var skillId = message.payload.skillId;
		var skillArray;
		switch (skillId.substring(0,1)) 
		{
			case 'p': skillArray = character.skills.physiques; break;
			case 's': skillArray = character.skills.sociales; break;
			case 'f': skillArray = character.skills.savoirfaire; break;
			case 'c': skillArray = character.skills.connaissances; break;
			case 'o': skillArray = character.skills.magiques; break;
		}
		for (j=0; j<=skillArray.length-1 ; j++)
		{
			if (skillId == skillArray[j].id)
			{
				skillArray.splice(j,1);
				break;
			}
		}
		displaySkills();
		$MQ('l:skills.populate', {'skills':character.skills});
		setTimeout("buttonify()", 500); 
		setTimeout("sliderify()", 500); 
		updatePP();
	});		
	
	// Listeners (items)
	$MQL("l:shop.enter", function() {
		$MQ('l:shop.populate',{'money':items.money, 'weapons':items.weapons, 'armor':items.armor, 'other':items.other});
	});
	$MQL("l:purchase.weapon", function(message) {
		weapons.push(message.payload);
	});
	$MQL("l:purchase.armor", function(message) {
		armor.push(message.payload);
	});
}; // End of function a_load

function isInCharSkills(skillId)
{
	var result = false;
	for (j=0; j<=character.skills.physiques.length-1 ; j++)
	{
		if (skillId == character.skills.physiques[j].id)
		{
			result=true;
		}
	}
	for (j=0; j<=character.skills.sociales.length-1 ; j++)
	{
		if (skillId == character.skills.sociales[j].id)
		{
			result=true;
		}
	}
	for (j=0; j<=character.skills.savoirfaire.length-1 ; j++)
	{
		if (skillId == character.skills.savoirfaire[j].id)
		{
			result=true;
		}
	}
	for (j=0; j<=character.skills.connaissances.length-1 ; j++)
	{
		if (skillId == character.skills.connaissances[j].id)
		{
			result=true;
		}
	}
	for (j=0; j<=character.skills.magiques.length-1 ; j++)
	{
		if (skillId == character.skills.magiques[j].id)
		{
			result=true;
		}
	}
	return result;
}

function getSkillById(id)
{
	var result= {} ;
	switch (id.substring(0,1)) 
	{
		case 'compiterator': result.id = "crap"; break;
		case 'p': result = comp.physiques[id.substring(1)]; break;
		case 's': result = comp.sociales[id.substring(1)]; break;
		case 'f': result = comp.savoirfaire[id.substring(1)]; break;
		case 'c': result = comp.connaissances[id.substring(1)]; break;
		case 'o': result = comp.magiques[id.substring(1)]; break;
		default: result.id = "crap";
	}
	return result;
}

function displaySkills()
{
	if (character.skills.physiques.length > 0){
		$MQ('l:skills.physiques.show');
	} else
	{
		$MQ('l:skills.physiques.hide');
	}
	if (character.skills.sociales.length > 0){
		$MQ('l:skills.sociales.show');
	} else
	{
		$MQ('l:skills.sociales.hide');
	}
	if (character.skills.savoirfaire.length > 0){
		$MQ('l:skills.savoirfaire.show');
	} else
	{
		$MQ('l:skills.savoirfaire.hide');
	}
	if (character.skills.connaissances.length > 0){
		$MQ('l:skills.connaissances.show');
	} else
	{
		$MQ('l:skills.connaissances.hide');
	}
	if (character.skills.magiques.length > 0){
		$MQ('l:skills.magiques.show');
	} else
	{
		$MQ('l:skills.magiques.hide');
	}
	
}

function updatePP()
{
	var totalPP;
	var compPP;
	var attrPP;
	
	//Compétences
	compPP=0;
	for (j=0; j<=character.skills.physiques.length-1 ; j++)
	{
		compPP += character.skills.physiques[j].cost;
	}
	for (j=0; j<=character.skills.sociales.length-1 ; j++)
	{
		compPP += character.skills.sociales[j].cost;
	}
	for (j=0; j<=character.skills.savoirfaire.length-1 ; j++)
	{
		compPP += character.skills.savoirfaire[j].cost;
	}
	for (j=0; j<=character.skills.connaissances.length-1 ; j++)
	{
		compPP += character.skills.connaissances[j].cost;
	}
	for (j=0; j<=character.skills.magiques.length-1 ; j++)
	{
		compPP += character.skills.magiques[j].cost;
	}
	$('#mainTabs li:eq(2) a').html("Compétences : " + compPP + " PP");
	//Le reste
	
	
	totalPP = compPP + attrPP;
	
}

function buttonify() {
 	$('.ui-button').hover(
		function(){ 
			$(this).addClass("ui-state-hover"); 
		},
		function(){ 
			$(this).removeClass("ui-state-hover"); 
			$(this).removeClass("ui-state-active");
		}
	)
	.mousedown(function(){
		$(this).addClass("ui-state-active"); 
	})
	.mouseup(function(){
			$(this).removeClass("ui-state-active");
	})
}

function sliderify()
{
	$('.ui-slider').bind('slide',  function(event, ui) {
		var skillId = this.id.substring(17)
		var skill = getSkillById(this.id.substring(17))
		skill.level = comp.niveaux[ui.value].name;
		skill.cost = comp.niveaux[ui.value].price;
		skill.slidervalue = ui.value;
		$('#char_comp_level_' + skillId).html(skill.level);
		$('#char_comp_cost_' + skillId).html(skill.cost + " PP");
		updatePP();
	});
}