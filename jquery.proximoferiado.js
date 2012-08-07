(function($) {
	$.fn.proximoferiado = function(options) {
		options = $.extend({}, {
			country: 'AR',
			text_before : 'Faltan',
			text_after: 'para el próximo feriado.',
			text_day: 'día',
			text_days: 'días'
			}, options);
		
		options.country = options.country.toUpperCase();
		var $elems = $(this);
		var available_countries = ['AR', 'MX', 'CL'];
		
		if(available_countries.indexOf(options.country) == -1) {
			var countries_string = '';
			for(var i in available_countries) {
				countries_string += available_countries[i];
				
				if(available_countries.length > 2 && i == available_countries.length - 2)
					countries_string += ' y ';
				else if(i < available_countries.length - 1)
					countries_string += ', ';
			}
			
			throw 'El país no es válido. Los países válidos son: ' + countries_string + '.';
		}
		
		var yahoo_api = 'http://query.yahooapis.com/v1/public/yql';
		var pf_url    = 'http://elproximoferiado.com.ar/index.php?country=' + options.country;
		var path      = '//div[@id="contador"]';
		var query     = 'SELECT * FROM html WHERE url = "' + pf_url + '" AND xpath = \'' + path + '\' AND compat = "html5"';
		var params    = '&format=json&callback=';
		
		var url = yahoo_api + '?q=' + encodeURIComponent(query) + params;
		
		$.get(url, function(data) {
			var days = data.query.results.div.content;
			
			$elems.each(function() {
				var $this = $(this);
				
				$this.html(options.text_before + ' ' + days + ' ' + (days == 1 ? options.text_day : options.text_days) + ' ' + options.text_after);
			});
		}, 'json');
	}
})(jQuery);
