document.addEventListener('DOMContentLoaded', function() {
	var modal = document.getElementById('myModal');
	var images = document.getElementsByTagName('img'); 
	for(var i = 0; i < images.length; i++) {
		if(images[i].id === 'modal_small_Img') {
			var modalImg = document.getElementById("img01");
			var captionText = document.getElementById("caption");
			images[i].onclick = function(){
				modal.style.display = "block";
				modalImg.src = this.src;
				captionText.innerHTML = this.alt;
			}	
		}
	}

	var span = document.getElementsByClassName("close_modal")[0];
	span.onclick = function() { 
		modal.style.display = "none";
	}
}, false);