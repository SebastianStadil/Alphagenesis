<?
function d($faces,$nombre) {
	$total = 0;
	for($c=0;$c<$nombre;$c++) {
		$total += rand(1,$faces);
	}
	return $total;
}

?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head>
<body>
<table style="border-size:1px;">
	<tr>
		<td>1d6</td>
		<td>2d4</td>
		<td>2d6</td>
		<td>2d8</td>
		<td>3d6</td>
		<td>4d6</td>
		<td>5d6</td>
		<td>6d6</td>
	</tr>
	<tr>
		<td><? print d(6,1); ?></td>
		<td><? print d(4,2); ?></td>
		<td><? print d(6,2); ?></td>
		<td><? print d(8,2); ?></td>
		<td><? print d(6,3); ?></td>
		<td><? print d(6,4); ?></td>
		<td><? print d(6,5); ?></td>
		<td><? print d(6,6); ?></td>
	</tr>
</table>

<table style="border-size:1px;">
	<tr>
		<td>1d10</td>
		<td>2d10</td>
		<td>3d10</td>
		<td>4d10</td>
		<td>5d10</td>
		<td>6d10</td>
		<td>7d10</td>
		<td>8d10</td>
	</tr>
	<tr>
		<td><? print d(10,1); ?></td>
		<td><? print d(10,2); ?></td>
		<td><? print d(10,3); ?></td>
		<td><? print d(10,4); ?></td>
		<td><? print d(10,5); ?></td>
		<td><? print d(10,6); ?></td>
		<td><? print d(10,7); ?></td>
		<td><? print d(10,8); ?></td>
	</tr>
</table>

<a href="des.php">Retirer</a>
</body>
</html>