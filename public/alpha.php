<?php

// Database class
class database {
	// Database settings
	public $DBserver;
	public $DBname;
	public $DBuser;
	public $DBpassword;
	public $DBprefix;
	public $DBlink;
	// constructor connects and selects database
	function __construct() {
		// Database settings
		$DBserver         = "mysql.archipel.stadil.com";
		$DBname           = "archipel";
		$DBuser           = "archipel";
		$DBpassword       = "acruis";
		$DBprefix         = "wiki_";
		mysql_connect($DBserver, $DBuser, $DBpassword);
		mysql_select_db($DBname);
	}
	// returns array with attributs
	function getAttributes() {
		$query = "select * from wiki_wikidb_fielddata where table_title = 'Attributs' order by row_id";
		$results = mysql_query("$query");
		
		$items = array();
		$itemId = '-1';
		while ($row = mysql_fetch_array($results)) {
			// If new item, store old in $items, create new item along with new itemId
			if($itemId != $row['row_id']) {
				if($item['nom'] != '') {$items[] = $item['nom'];}
				$item = array();
				$itemId = $row['row_id'];
			}
			$key = $row['field_name'];
			$value = $row['field_value'];
			$item[$key] = $value;
		}
		if($item['nom'] != '') {$items[] = $item['nom'];}
		
		return $items;
	}
	// returns array with category as key and array of competences as value
	// $comp['spécialisation'] = array('Forge' => array('Métallurgie', "Forge d'armes", "Forge d'armures", "Forge d'outils"));
	// $comp['Survie'] = array('Attention', 'Discrétion', 'Furtivité');
	function getCompetences() {
		$query = "select * from wiki_wikidb_fielddata where table_title = 'Compétences' order by row_id";
		$results = mysql_query("$query");
		
		$items = array();
		$itemId = '-1';
		while ($row = mysql_fetch_array($results)) {
			// If new item, store old in $items, create new item along with new itemId
			if($itemId != $row['row_id']) {
				// Insert into $items[currentCategory] new element $item[name]
				if($item['categorie'] != '') {
					$items[$item['categorie']][] = $item['nom'];
					if ($item['spécialisation'] != '') {
						$specialisations = explode(", ", $item['spécialisation']);
						$items['Spécialisation'][$item['nom']] = $specialisations;
					}
				}
				$item = array();
				$itemId = $row['row_id'];
			}
			$key = $row['field_name'];
			$value = $row['field_value'];
			$item[$key] = $value;
		}
		if($item['categorie'] != '') {
			$items[$item['categorie']][] = $item['nom'];
			if ($item['spécialisation'] != '') {
				$specialisations = explode(", ", $item['spécialisation']);
				$items['Spécialisation'][$item['nom']] = $specialisations;
			}
		}
		
		return $items;
	}
	// returns array with races
	// $races = array('Humain' => array('4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'),
	//			   'Minotaure' => array('5', '5', '3', '4', '4', '4', '4', '3', '4', '4', '5', '3'));
	function getRaces() {
		$query = "select * from wiki_wikidb_fielddata where table_title = 'Races'";
		$results = mysql_query("$query");
		
		$items = array();
		$itemId = '-1';
		while ($row = mysql_fetch_array($results)) {
			// If new item, store old in $items, create new item along with new itemId
			if($itemId != $row['row_id']) {
				if($item['nom'] != '') {$items[] = $item['nom'];}
				$item = array();
				$itemId = $row['row_id'];
			}
			$key = $row['field_name'];
			$value = $row['field_value'];
			$item[$key] = $value;
		}
		if($item['nom'] != '') {$items[] = $item['nom'];}
		
		return $items;
	}
}

// if (categorie = Spécialisation) {
//	// Insert into $items[Spécialisation][Competence] new element $specialisation
// 	$items[$item['categorie']][$item['nom']][] = $specialisation;
// }

// Custom data
$db = new database;
$comp = $db->getCompetences();
$spec = $comp['Spécialisation'];
$attr = $db->getAttributes();
$_comp = array('Profane', 'Novice', 'Apprenti', 'Compagnon');
$_comp_adv = array('Compagnon', 'Spécialisé', 'Expert', 'Maître');
$races = array('Humain' => array('4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'),
			   'Minotaure' => array('5', '5', '3', '4', '4', '4', '4', '3', '4', '4', '5', '3'));

// Custom functions
function replaceAccents($word) {
	$word = str_replace("é","e",$word);
	$word = str_replace("ê","e",$word);
	$word = str_replace("É","e",$word);
	$word = str_replace(" ","",$word);
	$word = str_replace("'","",$word);
	return $word;
}
function abreviate($word, $n) {
	$word = replaceAccents($word);
	return strtolower(substr($word, 0, $n));
}
function abreviateAttribut($attribut) {
	return abreviate($attribut, 4);
}
function abreviateCompetence($competence) {
	return abreviate($competence, 10);
}
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:app="http://www.appcelerator.org">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <noscript><meta http-equiv="refresh" content="0;upgrade_script.html"/></noscript>
    <title>AlphaGenesis</title>
    <script src="javascripts/appcelerator.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="images/favicon.ico"/>
    <style>img { border: none;}</style>
	<script type="text/javascript">
		function race_attributs(race) {
			switch(race) {
<?php			foreach($races as $race => $attributs) {
					print "\t\t\t\tcase '$race':\n\t\t\t\t\t";
					foreach($attr as $key => $attribut) {
						print "var" . abreviateAttribut($attribut) . "=" . $races["$race"][$key] . ";";
					}
					print "\n"
					."\t\t\t\t\tbreak;\n";
				}
				?>
				default:
					break;
			}
		}
		function race_cost(race) {
			switch(race) {
				case 'Humain':
					return 0;
					break;
				case 'Minotaure':
					return 80;
					break;
				default:
					return 0;
					break;
			}
		}
		function attribut_cost(attr) {
			switch(attr) {
				case '-4':
					return -40;
					break;
				case '-3':
					return -25;
					break;
				case '-2':
					return -12;
					break;
				case '-1':
					return -5;
					break;
				case '0':
					return 0;
					break;
				case '1':
					return 8;
					break;
				case '2':
					return 16;
					break;
				case '3':
					return 30;
					break;
				case '4':
					return 45;
					break;
				default:
					return 0;
					break;
			}
		}
		function competences_cost(comp) {
			switch(comp) {
				case '0':
					return 0;
					break;
				case '1':
					return 3;
					break;
				case '2':
					return 12;
					break;
				case '3':
					return 23;
					break;
				case '4':
					return 36;
					break;
				case '5':
					return 57;
					break;
				default:
					return 0;
					break;
			}
		}
		function specialisation_cost(spec) {
			switch(spec) {
				case '0':
					return 0;
					break;
				case '1':
					return 2;
					break;
				case '2':
					return 15;
					break;
				case '3':
					return 36;
					break;
				default:
					return 0;
					break;
			}
		}
	</script>
</head>
<body style="visibility:hidden;" on="l:app.compiled then visible">

	<div id="nom">
		<app:editinplace type="text" id="name" saveOn="click then l:save" cancelOn="click then l:cancel" 
			validator="required" position="right" defaultClassName="bold_value_grey_lg" defaultValue="Cliquez pour entrer votre nom">
		</app:editinplace>
	</div>
	
	<div id="races">
		<h3>Race (<span on="l:racial.attributes.update.response then value[pp]">0</span>pp)</h3>
<?php
		$opt = '';
		foreach($races as $race => $attributs) {
			$opt .= "\n\t\t\t<option value='$race'>$race</option>";
		}
		print "<select id='race' on='change then l:racial.attributes.update.request'>$opt\n\t\t</select>\n";
		?>
	</div>
	
	<div id="attributs">
		<h3>Attributs (<span on="l:attributs.calculated then value[pp]">0</span>pp)</h3>
		<table>
			<tr>
				<td>&nbsp;</td>
				<td>Base raciale</td>
				<td>Personnage</td>
				<td>Total</td>
			</tr>
<?php
		// Use Appcelerator Bind here
		foreach($attr as $attribut) {
			$id = abreviateAttribut($attribut);
			print "\t\t\t<tr>"
				."\n\t\t\t\t<td>$attribut</td>"
				."\n\t\t\t\t<td><input on='change then l:attribute.total.update.request[attr=$id] or l:racial.attributes.update.response then value[$id]' id='$id-race' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><span on='click then l:attribut.change[attr=$id,change=-1]'>[-]</span><input on='change then l:attributes.cost.recalculate.request and l:attribute.total.update.request[attr=$id] or l:attribut.change.$id then value[value]' id='$id-mod' type='text' value='0' size='1' /><span on='click then l:attribut.change[attr=$id,change=1]'>[+]</span></td>"
				."\n\t\t\t\t<td><input on='l:attribute.total.update.response[attr=$id] then value[total] or l:attribut.change.$id then value[total]' id='$id-total' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t</tr>\n";
		}
		print "\t\t\t<tr>"
				."\n\t\t\t\t<td>Ténacité</td>"
				."\n\t\t\t\t<td><input on='' id='ten-race' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><input on='' id='ten' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><input on='' id='ten-total' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t</tr>\n";
		?>
		</table>
	</div>
	
	<div id="competences">
		<h3>Compétences (<span on="l:competences.calculated then value[pp]">0</span>pp)</h3>
<?php
		$opt = "";
		foreach($_comp as $niveau => $nom) {
			$opt .= "\n\t\t\t<option value='$niveau'>$nom</option>";
		}
		$opt_spec = "";
		foreach($_comp_adv as $niveau => $nom) {
			$opt_spec .= "\n\t\t\t<option value='$niveau'>$nom</option>";
		}
		// For every category, print table with all competences in category, except category specialisations
		foreach($comp as $category => $competences) {
			// Print only if competence is not a specialisation
			if ($category != "Spécialisation") {
				print "\n\t\t<h4>$category</h4>"
					 ."\n\t\t<table>\n";
				// Print every competence in category
				foreach($competences as $competence) {
					$id = abreviateCompetence($competence);
					print "\t\t<tr><td>$competence</td>"
						 ."\n\t\t<td><select id='$id' on='change then l:competences.changed and l:spec.toggle.$id.'>$opt\n\t\t</select></td></tr>\n";
					// Print Specialisations of current competence
					if (is_array($spec[$competence])) {
						foreach ($spec[$competence] as $comp_spec) {
							$id_spec = abreviateCompetence($comp_spec);
							print "\t\t<tr on='l:spec.toggle.$id.[value=3] then show else hide' style='display:none;'><td>$comp_spec</td>"
								 ."\n\t\t<td><select id='$id_spec' on='change then l:competences.changed'>$opt_spec\n\t\t</select></td></tr>\n";
						}
					}
				}
				print "\n\t\t</table>";
			}
		} ?>
	</div>

<div id="scripts" style="visibility:hidden;">
<!-- Add or subtract one point to Attribute -->
<app:script on="l:attribut.change then execute">
	change = Number(this.data.change);
	attrId = this.data.attr;
	attrRace = Number($(attrId+'-race').value);
	attrMod = Number($(attrId+'-mod').value);
	attrTotal = attrRace + attrMod;
	if(attrMod<4 && change>0) {attrMod += change; attrTotal += change;}
	if(attrMod>-4 && change<0 && attrTotal>0) {attrMod += change; attrTotal += change;}
	$MQ("l:attribut.change."+attrId, {attr:attrId,value:attrMod,total:attrTotal});
</app:script>

<!-- Update attribute total -->
<app:script on="l:attribute.total.update.request then execute">
	attrId = this.data.attr;
	attrRace = Number($(attrId+'-race').value);
	attrMod = Number($(attrId+'-mod').value);
	attrTotal = attrRace + attrMod;
	$MQ("l:attribute.total.update.response", {attr:attrId,total:attrTotal});
</app:script>

<!-- Calculate PP used for Race, update Racial attributes -->
<app:script on="l:racial.attributes.update.request then execute">
	raceId = $('race').value
	attr = race_attributs(raceId);
	pp = race_cost(raceId);
	$MQ("l:racial.attributes.update.response", {pp:pp<?php foreach($attr as $attribut) {
		$attrId = abreviateAttribut($attribut);
		print ",$attrId:var$attrId";
	} ?>});
</app:script>

<!-- Calculate PP used for Attributs, calculate Ténacité -->
<app:script on="l:attributes.cost.recalculate.request then execute">
	<?php
	$arr = array();
	foreach($attr as $value) {
		$arr[] = "attribut_cost($('".abreviateAttribut($value)."-mod').value)";
	}
	$sum = implode($arr, " + ");
	print "total_attr_cost = $sum;\n"
	?>
	ten = (Number($('<?php print abreviateAttribut("Endurance"); ?>-total').value) + Number($('<?php print abreviateAttribut("Volonté"); ?>-total').value)) / 2;
	$MQ("l:attributs.calculated", {pp:total_attr_cost,ten:ten});
</app:script>

<!-- Calculate PP used for Compétences -->
<app:script on="l:competences.changed then execute">
	<?php
	$arr = array();
	foreach($comp as $category => $competences) {
		// calculate cost of all competences
		if ($category != "Spécialisation") {
			foreach ($competences as $competence) {
				$arr[] = "competences_cost($('".abreviateCompetence($competence)."').value)";
			}
		// calculate cost of all specialisations
		} else {
	//		foreach ($competences as $competence) {
	//			$arr[] = "specialisation_cost($('".abreviateCompetence($competence)."').value)";
	//		}
		}
	}
	$sum = implode($arr, " + ");
	print "total_comp_cost = $sum;\n"
	?>
	$MQ("l:competences.calculated", {pp:total_comp_cost});
</app:script>
</div>

</body>
</html>