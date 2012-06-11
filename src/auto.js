
//auto-initializaiton code
Kalendae.util.domReady(function () {
	var els = util.$$('.auto-kal'),
		i = els.length,
		e;

	while (i--) {
		e = els[i];
    var optionsRaw = e.getAttribute('data-kal'),
        options = (optionsRaw == null || optionsRaw == "") ? {} : (new Function('return {' + optionsRaw + '};'))();

		if (e.tagName === 'INPUT') {
			//if element is an input, bind a popup calendar to the input.
			new Kalendae.Input(e, options);
		} else {
			//otherwise, insert a flat calendar into the element.
			new Kalendae(util.merge({attachTo:e}, options));
		}
		
	}
});
