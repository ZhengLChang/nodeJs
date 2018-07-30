String.format = function() {
	if (arguments.length == 0)
		return null;

	var s = arguments[0];
	for ( var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}

	return s;
}
/* for Example
console.log(String.format("zheng {0}", "hhhh"));
*/
