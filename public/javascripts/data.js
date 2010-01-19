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
comp.physiques = ['Athlétisme (For/End)', 'Esquive (Agil)', 'Natation (For/End)', 'Vigilance(Ent/Per)', 'Epée(Dex)'];
comp.sociales = ['Persuasion (Cha)', 'Intimidation (Cha/Vol)', 'Psychologie (Cha/Per)'];
comp.savoirfaire = ['Serrurerie (Dex/Ent)', 'Forge (End/For)', 'Médecine (Per/Mem)', 'Survie (Per)'];
comp.connaissances = ['Philosophie (Mem/Ent)', 'Histoire de Litrahos (Mem)', 'Géographie de Litrahos (Mem)'];
comp.magiques = ['Contrôle du feu (Ent)', 'Passion (Inv)', 'Maîtrise de soi (Vol)'];