//$(
	var files;
	$("#file").on("change", function(e){
		files = e.target.files;
	});
	$("#upload").on("click", function(e){
		var data = new FormData();
		$.each(files, function(k, v){
			data.append(k, v);
		});
		$.ajax({
			url: window.location.origin + "/api/fileanalyse",
			method: "POST",
			data: data,
			cache: false,
			processData: false,
			contentType: false,
			error: function(jqXHR, textStatus, errThrown){
				alert(textStatus);
			},
			success: function(d){
				d = JSON.parse(d);
				console.log(d);
				alert(d[0].size + " Bytes");
			}
		});
	});
//);
