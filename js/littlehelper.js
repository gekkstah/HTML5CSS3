// Hole Breiten von IMG in FIGURE und apply sie auf FIGURE
// Muss sein, weil sonst FIGCAPTION über FIGURE hinaus läuft
$(document).ready(function() {
	$("body").find("figure").each(function() {
		var picWidth = $(this).find("img").width();
		$(this).css("width", picWidth);		
	});
});