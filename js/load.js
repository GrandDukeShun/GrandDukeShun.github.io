$(function() {
	$.ajax('../html/CHUNITHM-log.html', {
		timeout : 1000, // 1000 ms
		datatype:'html'
	}).then(function(data){
		var out_html = $($.parseHTML(data));//parse
		$('#rate').empty().append(out_html.filter('#rate')[0].innerHTML);//insert
	},function(jqXHR, textStatus) {
		if(textStatus!=="success") {
			var txt = "<p>textStatus:"+ textStatus + "</p>" +
				"<p>status:"+ jqXHR.status + "</p>" +
				"<p>responseText : </p><div>" + jqXHR.responseText +
				"</div>";
			$('#rate').html(txt);
		}
	});
});