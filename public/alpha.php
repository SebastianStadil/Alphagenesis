<?php
// Custom data
$attr = array('Force', 'Endurance', 'Agilité', 'Dextérité', 'Métabolisme', 'Réflexes', 'Entendement', 'Inventivité', 'Mémoire', 'Volonté', 'Charisme', 'Perception');
$comp = array('Haches', 'Épées', 'Esquive');
$_comp = array('Profane', 'Novice', 'Apprenti', 'Compagnon', 'Expert', 'Maître');
$races = array('Humain' => array('4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'),
			   'Minotaure' => array('5', '5', '3', '4', '4', '4', '4', '3', '4', '4', '5', '3'));

// Custom functions
function replaceAccents($word) {
	return str_replace("é","e",$word);
}
function abreviate($word, $n) {
	$word = replaceAccents($word);
	return strtolower(substr($word, 0, $n));
}
function abreviateAttribut($attribut) {
	return abreviate($attribut, 4);
}
function abreviateCompetence($competence) {
	return abreviate($attribut, 5);
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
						print abreviateAttribut($attribut) . "=" . $races["$race"][$key] . ";";
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
	</script>
</head>
<body style="visibility:hidden" on="l:app.compiled then visible">

	<div>
		<app:editinplace type="text" id="name" saveOn="click then l:save" cancelOn="click then l:cancel" 
			validator="required" position="right" defaultClassName="bold_value_grey_lg" defaultValue="Cliquez pour entrer votre nom">
		</app:editinplace>
	</div>
	
	<div id="races">
		<h3>Race (<span on="l:race.calculated then value[pp]">0</span>pp)</h3>
<?php
		$opt = '';
		foreach($races as $race => $attributs) {
			$opt .= "\n\t\t\t<option value='$race'>$race</option>";
		}
		print "<select id='race' on='change then l:race.changed'>$opt\n\t\t</select>\n";
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
				."\n\t\t\t\t<td><input on='l:race.calculated then value[$id]' id='$id-race' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><span on='click then l:attribut.minus[attr=$id]'>[-]</span><input on='change then l:attributs.changed or l:attribut.change.$id then value[value]' id='$id' type='text' value='0' size='1' /><span on='click then l:attribut.plus[attr=$id]'>[+]</span></td>"
				."\n\t\t\t\t<td><input on='l:attribut.change.$id then value[total]' id='$id-total' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t</tr>\n";
		}
		print "\t\t\t<tr>"
				."\n\t\t\t\t<td>Ténacité</td>"
				."\n\t\t\t\t<td><input on='l:race.calculated then value[ten]' id='ten-race' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><input on='l:attributs.calculated then value[ten]' id='ten' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t\t<td><input on='' id='ten-total' type='text' value='4' size='1' disabled='true' /></td>"
				."\n\t\t\t</tr>\n";
		?>
		</table>
	</div>
	
	<div id="competences">
		<h3>Compétences (<span on="l:competences.calculated then value[pp]">0</span>pp)</h3>
		<table>
<?php
		$opt = "";
		foreach($_comp as $niveau => $nom) {
			$opt .= "\n\t\t\t<option value='$niveau'>$nom</option>";
		}
		foreach($comp as $competence) {
			$id = abreviateCompetence($competence);
			print "\t\t<tr><td>$competence</td>\n\t\t<td><select id='$id' on='change then l:competences.changed'>$opt\n\t\t</select></td></tr>\n";
		} ?>
		</table>
	</div>

<app:script on="l:attribut.minus then execute">
	attr = this.data.attr;
	value = Number($(attr).value);
	if(value>-4) {value -= 1;}
	total = Number($(attr+'-race').value) + value;
	$MQ("l:attribut.change."+attr, {attr:attr,value:value,total:total});
</app:script>

<app:script on="l:attribut.plus then execute">
	attr = this.data.attr;
	value = Number($(attr).value);
	if(value<4) {value += 1;}
	total = Number($(attr+'-race').value) + value;
	$MQ("l:attribut.change."+attr, {attr:attr,value:value,total:total});
</app:script>

<app:script on="l:race.changed then execute">
	attr = race_attributs($('race').value);
	pp = race_cost($('race').value);
	$MQ("l:race.calculated", {pp:pp<?php foreach($attr as $attribut) {
		$attrId = abreviateAttribut($attribut);
		print ",$attrId:$attrId";
	} ?>});
</app:script>

<app:script on="l:attributs.changed then execute">
	<?php
	$arr = array();
	foreach($attr as $value) {
		$arr[] = "attribut_cost($('".abreviateAttribut($value)."').value)";
	}
	$sum = implode($arr, " + ");
	print "total_attr_cost = $sum;\n"
	?>
	ten = (Number($('<?php print abreviateAttribut("Endurance"); ?>').value) + Number($('<?php print abreviateAttribut("Volonté"); ?>').value)) / 2;
	$MQ("l:attributs.calculated", {pp:total_attr_cost,ten:ten});
</app:script>

<app:script on="l:competences.changed then execute">
	<?php
	$arr = array();
	foreach($comp as $competence) {
		$arr[] = "competences_cost($('".abreviateCompetence($competence)."').value)";
	}
	$sum = implode($arr, " + ");
	print "total_comp_cost = $sum;\n"
	?>
	$MQ("l:competences.calculated", {pp:total_comp_cost});
</app:script>

</body>
</html>