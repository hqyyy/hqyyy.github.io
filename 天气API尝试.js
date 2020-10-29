$(document).ready(function(){
	var lat,lon;
	var degree;		
	var tmpShow;	

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
	      	lat = position.coords.latitude;
	      	lon = position.coords.longitude;
	      	console.log(lat+"  "+lon);

	      	var para = "https://free-api.heweather.com/v5/weather?city="+33.6064+","+130.4181+"&key=53153e2fed574ce19f5c089a1aacede0";
	      	console.log(para);
	      	$.getJSON(para,function(json){
	      		var cnty= json["HeWeather5"][0]["basic"]["cnty"];
	      		var weatherNow = json["HeWeather5"][0]["now"]["cond"]["txt"];
	      		degree=json["HeWeather5"][0]["now"]["tmp"];
	      		tmpShow = degree;
	      		//console.log(city);
	      		$(".tmp").html(tmpShow+'℃');
	      		
	      	});
  		});
	}
	
});