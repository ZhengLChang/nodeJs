/**
 * @Version 1.0
 * @Author yuan kao wei
 * @Since 2014-04-29
 */

/*******************************************************************************
 * @Class StringBuilder
 ******************************************************************************/
/**
 * Initializes a new instance of the StringBuilder class and appends the given
 * value if supplied.
 *
 * @param value
 */
function StringBuilder(value) {
	this.strings = new Array("");
	this.append(value);
};

/**
 * Appends the given value to the end of this instance.
 *
 * @param value
 */
StringBuilder.prototype.append = function(value) {
	if (value != undefined) {
		this.strings.push(value);
	}
};

/**
 * Clears the string buffer.
 */
StringBuilder.prototype.clear = function() {
	this.strings.length = 1;
};

/**
 * Converts this instance to a String.
 */
StringBuilder.prototype.toString = function() {
	return this.strings.join("");
};


/*******************************************************************************
 * @Class String
 ******************************************************************************/
String.format = function() {
	if (arguments.length == 0)
		return null;

	var s = arguments[0];
	for ( var i = 0; i < arguments.length - 1; i++) {
		var reg = new RegExp("\\{" + i + "\\}", "gm");
		s = s.replace(reg, arguments[i + 1]);
	}

	return s;
};

String.prototype.format = function() {
	var args = arguments;
	return this.replace(/\{(\d+)\}/g, function(m, i) {
		return args[i];
	});
};



/* 扩张JSON对象*/
JSON.parmsToJSON = function(form){
	
	var paramsArray = form.formToArray();
	var len = paramsArray.length;
	var json = {}, item = null, i;
	for(i = 0; i< len; i++) {
		item = paramsArray[i];
		json[item.name] = item.value;//解决特殊字符
	}	
	return json;
};


JSON.serializeToParms = function(json) {
	var sb = new StringBuilder();
	var first = true;
	for (p in json) {
		if (!first) {
			sb.append("&");
		} else {
			first = false;
		}
		sb.append(p);
		sb.append("=");
		sb.append(encodeURIComponent(json[p]));
	}

	return sb.toString();
};


/*  add validate rule*/
$.extend($.fn.validatebox.defaults.rules, {
	ip: {
		validator: function(value, param){ 
			var reg = /^((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))$/;
			return reg.test(value);
		},
		message: 'Please enter a valid IP.'
	},
	ipv6: {
		validator: function(value, param){ 
		var reg = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
			return reg.test(value);
		},
		message: 'Please enter a valid IPv6.'
	}
});

$.extend($.fn.validatebox.defaults.rules, {    
    equals: {    
        validator: function(value, param){    
            return value == $(param[0]).val();    
        },    
        message: 'Field do not match.'   
    }    
});

$.extend($.fn.validatebox.defaults.rules, {    
    codeValid: {    
        validator: function(value, param){
        	var reg = /^[\*#]/;
        	return  reg.test(value);
        },    
        message: '*xx | #xx'   
    }
});

/*
 * myenable
 */
$.fn.myEnable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
        if(b){
        	$(this).removeClass('my-disable');
        } else {
        	$(this).addClass('my-disable');
        }
    });
};
/* 修正IE6下 select 挡住 div的问题 */
var msgAlertCopy = $.messager.alert;
$.messager.alert = function(title, msg, icon, fn){
	msgAlertCopy(title, msg, icon, fn);
	$('.window-mask').bgiframe();
};
var msgProgressCopy = $.messager.progress;
$.messager.progress = function(options){
	msgProgressCopy(options);
	$('.window-mask').bgiframe();
};



/*
 * @Class Date
 */
var dateFormat = function() {
	var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, timezoneClip = /[^-+\dA-Z]/g, pad = function(
			val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len)
			val = "0" + val;
		return val;
	};

	// Regexes and supporting functions are cached through closure
	return function(date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask
		// prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date))
			throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var _ = utc ? "getUTC" : "get", d = date[_ + "Date"](), D = date[_ + "Day"](), m = date[_ + "Month"](), y = date[_
				+ "FullYear"](), H = date[_ + "Hours"](), M = date[_ + "Minutes"](), s = date[_ + "Seconds"](), L = date[_
				+ "Milliseconds"](), o = utc ? 0 : date.getTimezoneOffset(), flags = {
			d : d,
			dd : pad(d),
			ddd : dF.i18n.dayNames[D],
			dddd : dF.i18n.dayNames[D + 7],
			m : m + 1,
			mm : pad(m + 1),
			mmm : dF.i18n.monthNames[m],
			mmmm : dF.i18n.monthNames[m + 12],
			yy : String(y).slice(2),
			yyyy : y,
			h : H % 12 || 12,
			hh : pad(H % 12 || 12),
			H : H,
			HH : pad(H),
			M : M,
			MM : pad(M),
			s : s,
			ss : pad(s),
			l : pad(L, 3),
			L : pad(L > 99 ? Math.round(L / 10) : L),
			t : H < 12 ? "a" : "p",
			tt : H < 12 ? "am" : "pm",
			T : H < 12 ? "A" : "P",
			TT : H < 12 ? "AM" : "PM",
			Z : utc ? "UTC" : (String(date).match(timezone) || [ "" ]).pop().replace(timezoneClip, ""),
			o : (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
			S : [ "th", "st", "nd", "rd" ][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
		};

		return mask.replace(token, function($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default" : "ddd mmm dd yyyy HH:MM:ss",
	shortDate : "m/d/yy",
	mediumDate : "mmm d, yyyy",
	longDate : "mmmm d, yyyy",
	fullDate : "dddd, mmmm d, yyyy",
	shortTime : "h:MM TT",
	mediumTime : "h:MM:ss TT",
	longTime : "h:MM:ss TT Z",
	isoDate : "yyyy-mm-dd",
	isoTime : "HH:MM:ss",
	isoDateTime : "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime : "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday",
			"Thursday", "Friday", "Saturday" ],
	monthNames : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January",
			"February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
			"December" ]
};

// For convenience...
Date.prototype.format = function(mask, utc) {
	return dateFormat(this, mask, utc);
};
//自定义的JS加载
function isImplementedOnload(script){
	if('onload' in script){
		return true;
	}
    script.setAttribute('onload','');
    return typeof script.onload == 'function';
}

function loadJs(url, callback){
	var f = arguments.callee;
    if (!("queue" in f))
        f.queue = {};
    var queue = f.queue;
    if (url in queue) { // script is already in the document
        if ($.isFunction(callback)) {
            //if (queue[url]) // still loading
               // queue[url].push(callback);
            //else // loaded
                 callback();
        }
        return;
    }
    //queue[url] = callback ? [callback] : [];
    var script = document.createElement("script");
    script.type = "text/javascript";
    if(isImplementedOnload(script)){
    	script.onload = function(){
    			script.onload = null;
    	        if($.isFunction(callback)){
    	        	callback();
    	        }     
    	};
    } else {
    	if(script.attachEvent){
    		var handle = function(){
    			if(script.readyState == 'loaded' || script.readyState == 'complete'){
    				script.detachEvent('onreadystatechange', handle);    		
            		if($.isFunction(callback)){
        	        	callback();
        	        }   
    			}
        	};
        	script.attachEvent('onreadystatechange', handle);
    	}
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

//自定义的CSS加载
function loadCss(url){
	var css = document.createElement("link");  
	css.type = "text/css";  
	css.rel = "stylesheet";
	css.href = url;  
	document.getElementsByTagName("head")[0].appendChild(css);
}