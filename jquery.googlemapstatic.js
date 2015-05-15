/**
jquery.googlemapstatic.js

Copyright (c) oniyon.com Makoto Enomoto

This software is released under the MIT License.
http://opensource.org/licenses/mit-license.php
*/
(function( $ ){
	$.fn.googlemapstatic = function( options ){
		var defaults = {
			lat:undefined ,lng:undefined //center
			,address: 'おによん'
			,zoom : 3 //0〜21
			,width: 300
			,height: 300
			,scale: 1
			,format: 'png' //png(png8),png32,gif,jpg,jpg-baseline
			,maptype: 'roadmap' //roadmap,satellite,terrain,hybrid
			,language: 'ja'
			,region: 'JP'
			,sensor: false
			,markers:{}
		};
		var settings = $.extend( defaults, options, {} );
		$e = $(this);
		e = $e.get(0);
		put($e,settings);
		return this;
	}
	function put($e,settings){
		e = $e.get(0);
		if( e.tagName.toLowerCase() == 'img' ){
			$e.attr('src', getUrl($e,settings) );
		}
		else{
			$e.attr('background-image', getUrl($e,settings) );
		}
	}
	function getUrl($e,settings){
		e = $e.get(0);
		var center = settings.address;
		if( typeof(lat)!=='undefined'
			&& typeof(lat)!=='undefined'
		){
			center = lat+','+lng;
		}
		var url = 'http://maps.googleapis.com/maps/api/staticmap?'
			+'center='+center+'&'
			+'zoom='+settings.zoom+'&'
			+'size='+settings.width+'x'+settings.height+'&'
			+'scale='+settings.scale+'&'
			+'format='+settings.format+'&'
			+'maptype='+settings.mapyype+'&'
			+'language='+settings.language+'&'
			+'region='+settings.region+'&'
			+'sensor='+settings.sensor+'&'
			;
		
		if( settings.markers.length > 0 ){
			$.each( settings.markers, function( idx, marker ){
				url += 'markers=';
				var cnt=0;
				$.each( marker, function( key, val ){
					if(cnt != 0 ){
						url += '|';
					}
					if( key == 'address' ){
						url += val;
					}
					else{
						url += key+':'+val;
					}
				});
			});
		}
		else{
			url += 'markers='+center;
		}
		return url;
	}
})( jQuery );
