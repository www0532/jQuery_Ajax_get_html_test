$(function() {
	$.ajax('external.html', {
		timeout : 1000, // 1000 ms
		datatype:'html'
	}).then(function(data){
        var out_html = $($.parseHTML(data));//parse
        var sub_html = out_html.filter(function(index) {
            return $(this).attr("id") === "sub";
        })[0].innerHTML;//extract
        var sub2_html = out_html.filter(function(index) {
            return $(this).attr("id") === "sub2";
        })[0].innerHTML;//extract
        $('#page').empty().append(sub_html);//insert
        $('#page2').empty().append(sub2_html);//insert
	},function(jqXHR, textStatus) {
        if(textStatus!=="success") {
            var txt = "<p>textStatus:"+ textStatus + "</p>" +
                "<p>status:"+ jqXHR.status + "</p>" +
                "<p>responseText : </p><div>" + jqXHR.responseText +
                "</div>";
        	$('#page').html(txt);
            $('#page2').html(txt);
        }
    });
	// $('#page').load('external.html');
});
