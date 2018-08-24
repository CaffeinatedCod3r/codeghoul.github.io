$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: false,
		verticalCentered: false,
		fitToSection: true,
		anchors: ['intro', 'about', 'work', 'contact'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['intro', 'about', 'work', 'contact'],
		showActiveTooltip: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		fadingEffect: true,
		recordHistory: false
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});
