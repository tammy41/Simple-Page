$(function(){
	var odiv=document.getElementById('bannerlist');
	var oOl = odiv.getElementsByTagName('ol')[0];
	var aLiOl = oOl.getElementsByTagName('li');
	
	var oUl = odiv.getElementsByTagName('ul')[0];
	var aLiUl = oUl.getElementsByTagName('li');
	
	for(var i=0;i<aLiOl.length;i++){
		aLiOl[i].index = i;
		aLiOl[i].onmouseover = function(){
			for(var i=0;i<aLiOl.length;i++){
				aLiOl[i].className = '';
				startMove(aLiUl[i] , { opacity : 0 } , function(){
					
					// this.style.display = 'none';
					
				});
				aLiUl[i].style.display='none';
			}
			this.className = 'active';
			aLiUl[this.index].style.display = 'block';
			startMove( aLiUl[this.index] , {opacity:100} );
		};
	}
})