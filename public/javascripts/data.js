// Data for the character creator

//var humanAttributesS = {'frc':4, 'end':4, 'agi':4, 'dex':4, 'met':4, 'ref':4, 'ent':4, 'inv':4, 'mem':4, 'vol':4, 'per':4, 'cha':4};
//var elfAttributesS = {'frc':3, 'end':4, 'agi':5, 'dex':5, 'met':4, 'ref':5, 'ent':4, 'inv':4, 'mem':4, 'vol':4, 'per':4, 'cha':4};
/*
var humanAttributes = [
	{ att_name:'For', att_value:4 },
	{ att_name:'End', att_value:4 },
	{ att_name:'Agi', att_value:4 },
	{ att_name:'Dex', att_value:4 },
	{ att_name:'Met', att_value:4 },
	{ att_name:'Ref', att_value:4 },
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];
var elfAttributes = [
	{ att_name:'For', att_value:3 },
	{ att_name:'End', att_value:4 },
	{ att_name:'Agi', att_value:5 },
	{ att_name:'Dex', att_value:5 },
	{ att_name:'Met', att_value:4 },
	{ att_name:'Ref', att_value:5 },
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];
*/
var human = {};
human.attribut = {};
human.attribut.phys = [
	{ att_name:'For', att_value:4 },
	{ att_name:'End', att_value:4 },
	{ att_name:'Agi', att_value:4 },
	{ att_name:'Dex', att_value:4 },
	{ att_name:'Met', att_value:4 },
	{ att_name:'Ref', att_value:4 },
];
human.attribut.ment = [
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];
var elf = {};
elf.attribut = {};
elf.attribut.phys = [
	{ att_name:'For', att_value:3 },
	{ att_name:'End', att_value:4 },
	{ att_name:'Agi', att_value:5 },
	{ att_name:'Dex', att_value:5 },
	{ att_name:'Met', att_value:4 },
	{ att_name:'Ref', att_value:5 },
];
elf.attribut.ment = [
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];
var orc = {};
orc.attribut = {};
orc.attribut.phys = [
	{ att_name:'For', att_value:6 },
	{ att_name:'End', att_value:6 },
	{ att_name:'Agi', att_value:4 },
	{ att_name:'Dex', att_value:3 },
	{ att_name:'Met', att_value:4 },
	{ att_name:'Ref', att_value:4 },
];
orc.attribut.ment = [
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];
var minotaur = {};
minotaur.attribut = {};
minotaur.attribut.phys = [
	{ att_name:'For', att_value:8 },
	{ att_name:'End', att_value:6 },
	{ att_name:'Agi', att_value:3 },
	{ att_name:'Dex', att_value:4 },
	{ att_name:'Met', att_value:5 },
	{ att_name:'Ref', att_value:3 },
];
minotaur.attribut.ment = [
	{ att_name:'Ent', att_value:4 },
	{ att_name:'Inv', att_value:4 },
	{ att_name:'Mem', att_value:4 },
	{ att_name:'Vol', att_value:4 },
	{ att_name:'Per', att_value:4 },
	{ att_name:'Cha', att_value:4 },
];

var comp = {};
comp.physiques = [{name:'Athlétisme', attr:'For/End'}, {name:'Esquive', attr:'Agi'}, {name:'Natation', attr:'For/End'}, {name:'Vigilance', attr:'Ent/Per'}, {name:'Epée', attr:'Dex'}];
comp.sociales = [{name:'Persuasion', attr:'Cha'}, {name:'Intimidation', attr:'Cha/Vol'}, {name:'Psychologie', attr:'Cha/Per'}];
comp.savoirfaire = [{name:'Serrurerie', attr:'Dex/Ent'}, {name:'Survie', attr:'Per'}, {name:'Médecine', attr:'Per/Mem'}, {name:'Forge', attr:'End/For'}];
comp.connaissances = [{name:'Philosophie', attr:'Mem/Ent'}, {name:'Histoire de Litrahos', attr:'Mem'}, {name:'Géographie de Litrahos', attr:'Mem'}];
comp.magiques = [{name:'Contrôle du feu', attr:'Ent'}, {name:'Passion', attr:'Inv'}, {name:'Maîtrise de soi', attr:'Vol'}];
comp.niveaux  = [
	{ name:'Profane', shortname:'P', price:0 },
	{ name:'Novice', shortname:'N', price:3 },
	{ name:'Apprenti', shortname:'A', price:12 },
	{ name:'Compagnon', shortname:'C', price:23 },
	{ name:'Spécialiste', shortname:'S', price:25 },
	{ name:'Expert', shortname:'E', price:40 },
	{ name:'Maître', shortname:'M', price:59 }
]
var items = {};
items.money = [];
items.weapons = [
	{image_path:'images/weapons/katana.jpg', name:'Katana', damage:'2M', cost:'40', weight:'3'},
	{image_path:'images/weapons/dagger-evil.jpg', name:'Dagger', damage:'2L', cost:'23', weight:'1'},
	{image_path:'images/weapons/axe.jpg', name:'Axe', damage:'2G', cost:'31', weight:'5'},
	{image_path:'images/weapons/hammer-kord.jpg', name:'Hammer', damage:'2M', cost:'62', weight:'7'},
	{image_path:'images/weapons/scimitar-magical.jpg', name:'Scimitar', damage:'1M', cost:'12', weight:'3'}
];
items.armor = [
	{image_path:'images/armor/armor-full-plate.jpg', name:'Armure de plates', armor:'999', cost:'40', weight:'3'},
	{image_path:'images/armor/clothes-robes-sorcerer.jpg', name:'Mage armor', armor:'100', cost:'12', weight:'3'}
];
items.other = [];