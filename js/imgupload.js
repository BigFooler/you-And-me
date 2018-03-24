window.onload = function{
	(function(){
		var img = {
			IMGFORM : document.getElementById('img'),
			init : function(){
				var myForm = new FormData();
				var imageData = this.IMGFORM.files[0];
				myForm.append('image',imageData);
				console.log(myForm.getAll('image'))
			}
		}
	})();
}
