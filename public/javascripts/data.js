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
comp.physiques = [
	{id:'p0',name:'Athlétisme', attr:'For/End', desc:"Permet de courir, de sauter, et de faire plein d'autres trucs du genre"},
	{id:'p1',name:'Esquive', attr:'Agi', desc:"<strong>Gras</strong>. En combat permet d'esquiver"},
	{id:'p2',name:'Natation', attr:'For/End', desc:'<h1>Pour</h1> pas couler.'},
	{id:'p3',name:'Vigilance', attr:'Ent/Per', desc:'Regarde avec tes yeux'},
	{id:'p4',name:'Epée', attr:'Dex', desc:'Pour clasher du streum'},
	{id:'p5',name:"1", attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'},
	{id:'p6',name:"Les humains (wtf ?)", attr:'Agi', desc:"<div>		<h3>Les humains</h3>		<img src='images/races/human.jpg' class='right portrait' style='height:120px;width:60px'' />		<h4>Caractère</h4>		<p>Les humains sont la race la plus représentée sur archipel. Ils se sont vite multipliés en de nombreux endroits, développant de nombreuses civilisations originales, bien souvent au détriment d'autres races. Leurs adaptabilité, ambition et fort sentiment communautaire qui leur permettent de réaliser de grandes choses sans tenir compte de leur intérêt personnel ont permi presque partout la domination humaine. Un joueur choisissant d'interpréter un humain s'intégrera donc facilement dans la plupart des cités et états, bien que la xénophobie puisse aussi prévaloir entre peuples d'une même race... </p>		<h4>Morphologie</h4>		<p>Les humains présentent une grande variété morphologique : leur peau peut varier d'une teinte claire à un noir ébène en passant part des teintes de rouge et de jaune. Leurs cheveux ont de même des teintes très variées, blonds, noirs, bruns, roux et toutes les couleurs intermédiaires. Leur taille moyenne peut varier de 1m40 a 1m80 selon les peuples et leurs habitudes alimentaires. Tous les humains ont une espérance de vie d'environ 50 ans mais ce chiffre varie selon l'hygiène et le niveau de sophistication médicale à disposition. </p>		<h4>Géographie</h4>		<p>Comme dit ci dessus les humains ont accès à un grand nombre de civilisations différentes et même s'ils ne sont pas toujours bien vus des autres races, il n'est pas inconcevable que certains se soient adaptés à une civilisation non humaine.</p>		<h4>Variété</h4>		<p>Nulla facilisi. Proin turpis nibh, congue nec laoreet eget, tempor sit amet ante. Pellentesque eu neque id felis interdum scelerisque et et ligula. Pellentesque eget ligula nisi, quis egestas leo. Quisque dignissim turpis quis tortor sodales sollicitudin. Mauris volutpat, dolor non fringilla faucibus, sapien lectus cursus justo, accumsan condimentum leo libero vitae dolor. Morbi volutpat tortor ut eros volutpat condimentum. Sed ac turpis enim, id accumsan tortor. Sed eleifend dolor a lectus vehicula interdum. Morbi ac mi quis odio mattis bibendum. Nulla lacinia vulputate ante, non iaculis dolor commodo vel. Nullam nec mauris at velit viverra interdum lobortis at erat.</p>		<h4>Règles spéciales</h4>		<p>Vestibulum molestie arcu id neque pharetra ac bibendum dolor congue. Aenean lacinia est vel eros fringilla mollis. Praesent hendrerit risus orci. Quisque a justo in quam ultricies elementum. Nam cursus hendrerit augue ac venenatis. Nam libero sem, varius at dapibus id, ultrices eget nunc. Donec at augue sodales diam venenatis iaculis vel nec sapien. Ut lacinia odio lobortis erat tincidunt sodales. Quisque at ligula ut metus gravida pulvinar ac at dolor. Maecenas et nisi sed nibh malesuada ornare. Cras tincidunt porta luctus. Curabitur non congue velit. Duis sed nunc metus.</p>	</div>"},
	{id:'p7',name:'3', attr:'For/End', desc:'Pour pas couler.'},
	{id:'p8',name:'4', attr:'Ent/Per', desc:'Regarde avec tes yeux'},
	{id:'p9',name:'5', attr:'Dex', desc:'Pour clasher du streum'},
	{id:'p10',name:'6', attr:'For/End', desc:'Permet de courir'},
	{id:'p11',name:'7', attr:'Agi', desc:'En combat permet d esquiver'},
	{id:'p12',name:'8', attr:'For/End', desc:'Pour pas couler.'},
	{id:'p13',name:'9', attr:'Ent/Per', desc:'Regarde avec tes yeux'},
	{id:'p14',name:'10', attr:'For/End', desc:'Permet de courir'},
	{id:'p15',name:'11', attr:'For/End', desc:'Permet de courir'},
	{id:'p16',name:'12', attr:'Agi', desc:'En combat permet d esquiver'},
	{id:'p17',name:'13', attr:'For/End', desc:'Pour pas couler.'},
	{id:'p18',name:'14', attr:'Ent/Per', desc:'Regarde avec tes yeux'},
	{id:'p19',name:'15', attr:'Dex', desc:'Pour clasher du streum'},
	{id:'p20',name:'16', attr:'For/End', desc:'Permet de courir'},
	{id:'p21',name:'17', attr:'Agi', desc:'En combat permet d esquiver'},
	{id:'p22',name:'18', attr:'For/End', desc:'Pour pas couler.'},
	{id:'p23',name:'19', attr:'Ent/Per', desc:'Regarde avec tes yeux'},
];
comp.sociales = [
	{id:'s0',name:'Persuasion', attr:'Cha', desc:'Donne moi ta montre'},
	{id:'s1',name:'Intimidation', attr:'Cha/Vol', desc:'DONNE MOI TA MONTRE !'},
	{id:'s2',name:'Psychologie', attr:'Cha/Per', desc:"Je pense qu'il ne veut pas me donner sa montre"}
];
comp.savoirfaire = [
	{id:'f0',name:'Serrurerie', attr:'Dex/Ent', desc:'Connaissances théoriques et pratique des serrure et de leur fonctionnement. Se spécialise en Crochetage, Fabrication...'},
	{id:'f1',name:'Survie', attr:'Per', desc:'Pour survivre dans la nature, regroupe chasse cueillette and co'},
	{id:'f2',name:'Médecine', attr:'Per/Mem', desc:'Pour soigner les gens'},
	{id:'f3',name:'Forge', attr:'End/For', desc:'Pour fabriquer des trucs en métal'}
];
comp.connaissances = [
	{id:'c0',name:'Philosophie', attr:'Mem/Ent', desc:'Pour penser au monde et au reste'},
	{id:'c1',name:'Histoire de Litrahos', attr:'Mem', desc:"Pour connaître l'histoire de l'archipel de Litrahos"},
	{id:'c2',name:'Géographie de Litrahos', attr:'Mem', desc:'Pour savoir les noms des fleuves'},
	{id:'c3',name:'1', attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'},
	{id:'c4',name:'2', attr:'Agi', desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore"},
	{id:'c5',name:'3', attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.'},
	{id:'c6',name:'4', attr:'Ent/Per', desc:'elit sed do eiusmod tempor incididunt'},
	{id:'c7',name:'sit amet consectetur adipisicing', attr:'Dex', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore'},
	{id:'c8',name:'6', attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore'},
	{id:'c9',name:'sit amet consectetur adipisicing10', attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore'},
	{id:'c10',name:'11', attr:'For/End', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore'},
	{id:'c11',name:'sit amet consectetur adipisicingsit amet consectetur adipisicing', attr:'Agi', desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore'}

];
comp.magiques = [
	{id:'o0',name:'Contrôle du feu', attr:'Ent', desc:"Lié à l'élémentalisme. Permet de manipuler l'élément Feu."},
	{id:'o1',name:'Passion', attr:'Inv', desc:"Lié à l'élémentalisme. Permet de canaliser un élément grace à ses émotions."},
	{id:'o2',name:'Maîtrise de soi', attr:'Vol', desc:"Lié à l'élémentalisme. Permet de ne pas se laisser entrainer par les émotions générées par la canalisation."},
];
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

var character = {};
character.skills = [];
character.skills.physiques = [];
character.skills.sociales = [];
character.skills.savoirfaire = [];
character.skills.connaissances = [];
character.skills.magiques = [];
