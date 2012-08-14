// JavaScript Document
var voorvoegen = (function(effe){
					   
	effe.DoIt = function(zomaar_een_naam){
		zomaar_een_naam.prepend( Date() + '<br>');
	};
					   
	return effe;	  
}(voorvoegen || {} ));