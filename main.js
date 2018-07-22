//plugin Init
function myPluginInit(){
	if ($.messager){
		$.messager.defaults.ok = mainJs.pluginInit.ok;
		$.messager.defaults.cancel = mainJs.pluginInit.cancel;
	}
}
myPluginInit();

//弹出工具
var AlertUtil = {
	saveSuccess: function(fn){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.saveSuccess, 'info', fn);
    },
    saveNoChange: function(fn){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.noChange, 'info', fn);
    },
    invalidVal: function(fn){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.invalidVal, 'info', fn);
    },
    fileIsEmpty: function(){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.fileIsEmpty, 'info');
    },
    upgradeFileFormateErr: function(){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.upgradeFileFormateErr, 'info');
    },
    wallpaperFormatError: function(){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.wallpaperFormatError, 'info');
    },
    screensaverFormatError: function(){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.screensaverFormatError, 'info');
    },
    systemFileCannotDelete: function(){
    	$.messager.alert(alertMsg.titlePrompt, alertMsg.systemFileCannotDelete, 'info');
    },
    confirm: function(msg, fn) {
		//return confirm(msg);
    	$.messager.confirm(alertMsg.titleConfirm, msg, fn);
	},
	confirm_browser: function(msg){
		return confirm(msg);
	},
	alertMsg: function(msg, fn){
		$.messager.alert(alertMsg.titlePrompt, msg, 'info', fn);
	}
};

//二级菜单对应的url
var MenuItem = {
	//index
	iIndex: {
		getInit: '/cgi-bin/init.cgi?get_init',
		setLang: '/cgi-bin/init.cgi?set_lang'
	},
	//Status
	sStatus: {url: 'html/status/status.html',
			  get: '/cgi-bin/web_cgi_main.cgi?status_get'},		  
	sWizard: {
		url: 'html/status/wizard.html',
		get: '/cgi-bin/web_cgi_main.cgi?get_wizard_data',
		set: '/cgi-bin/web_cgi_main.cgi?set_wizard_data'
	},
	
	//Account
	aBasic: {url: 'html/account/accountBasic.html',
			 get: '/cgi-bin/web_cgi_main.cgi?user_get_account_basic',
			 set: '/cgi-bin/web_cgi_main.cgi?user_set_account_basic'},
	aCodecs: {url: 'html/account/accountCodecs.html',
			  get: '/cgi-bin/web_cgi_main.cgi?user_get_account_data',
			  set: '/cgi-bin/web_cgi_main.cgi?user_set_account_data'},
	aAdvanced: {url: 'html/account/accountAdvanced.html',
				get: '/cgi-bin/web_cgi_main.cgi?user_get_account_advanced',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_account_advanced'},
	
	//Network
	nBasic: {url: 'html/network/networkBasic.html',
			 get: '/cgi-bin/web_cgi_main.cgi?get_network_base_data',
			 set: '/cgi-bin/web_cgi_main.cgi?set_network_base_data'},
	nWifi: {url: 'html/network/networkWifi.html',
				get: '/cgi-bin/web_cgi_main.cgi?get_network_wifi_data',
				search_wifi: '/cgi-bin/web_cgi_main.cgi?set_network_wifi_search',
				set: '/cgi-bin/web_cgi_main.cgi?set_network_wifi_data',
				connectSavedWifi: '/cgi-bin/web_cgi_main.cgi?network_wifi_connect_saved_wifi',
				unsavedWifi: '/cgi-bin/web_cgi_main.cgi?network_wifi_unsaved_wifi',
	
	},
	nAdvanced: {url: 'html/network/networkAdvanced.html',
				importVPN: '/cgi-bin/web_cgi_main.cgi?user_upload_openvpn_config',
				get: '/cgi-bin/web_cgi_main.cgi?get_network_advanced_data',
				set: '/cgi-bin/web_cgi_main.cgi?set_network_advanced_data'},
	
	//DSS KEY
	dMemory: {url: 'html/dssKey/memoryKey.html',
			  get: '/cgi-bin/web_cgi_main.cgi?user_get_memory_key',
			  set: '/cgi-bin/web_cgi_main.cgi?user_set_memory_key'},
	dLink: {url: 'html/dssKey/lineKey.html',
			get: '/cgi-bin/web_cgi_main.cgi?user_get_line_key',
			set: '/cgi-bin/web_cgi_main.cgi?user_set_line_key'},
	dProgrammable: {url: 'html/dssKey/programKey.html',
					get: '/cgi-bin/web_cgi_main.cgi?user_get_programmable_key',
					set: '/cgi-bin/web_cgi_main.cgi?user_set_programmable_key'},
	dExt: {url: 'html/dssKey/extKey.html',
		   urlNoLink: 'html/dssKey/extKey_back.html',
		   getLinkDevices: '/cgi-bin/web_cgi_main.cgi?user_get_ext_link_devices',
		   addLinkDevices: '/cgi-bin/web_cgi_main.cgi?user_add_ext_link_devices',
		   get: '/cgi-bin/web_cgi_main.cgi?user_get_ext_key',
		   set: '/cgi-bin/web_cgi_main.cgi?user_set_ext_key'},
	dAetAdv: {url: 'html/dssKey/aetAdv.html',
		   get: '/cgi-bin/web_cgi_main.cgi?user_get_aet_adv',
		   set: '/cgi-bin/web_cgi_main.cgi?user_set_aet_adv'},
	dAetUpgrade: {url: 'html/dssKey/aetUpgrade.html',
		   isAetUpgrading: '/cgi-bin/web_cgi_main.cgi?user_is_aet_upgrading',
		   aetUpgrade: '/cgi-bin/web_cgi_main.cgi?user_aet_upgrade',
		   aetTellUpgrade: '/cgi-bin/web_cgi_main.cgi?user_aet_tell_upgrade'},
	//Phone
	//Phone
	pDNDAndForward: {
		url: 'html/phone/phoneDNDAndForward.html',
		     get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_dnd_and_forward',
		     set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_dnd_and_forward'
	},
	pPreference: {url: 'html/phone/phonePreference.html',
				  get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_preference',
				  set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_preference',
				  delWallpaper: '/cgi-bin/web_cgi_main.cgi?user_delete_wallpaper',
				  delScreensaver: '/cgi-bin/web_cgi_main.cgi?user_delete_screensaver'},
	pFeatures: {url: 'html/phone/phoneFeatures.html',
				get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_features',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_features'},
	pUpgrade: {url: 'html/phone/phoneUpgrade.html',
			   getVer: '/cgi-bin/web_cgi_main.cgi?user_get_phone_ver',
			   resetUrl: 'cgi-bin/web_cgi_main.cgi?resetToFactory',
			   rebootUrl: '/cgi-bin/web_cgi_main.cgi?reboot',
			   //upgradeUrl: '/cgi-bin/web_cgi_main.cgi?upgradefw',
			   upgradeUrl: '/cgi-bin/upload.cgi',
			   preUpgrade: '/cgi-bin/web_cgi_main.cgi?user_set_pre_upgrade'},
   pDebug: {
	   url: 'html/phone/phoneDebug.html',
	   getCapStatus: '/cgi-bin/web_cgi_main.cgi?getCapStatus',
	   startCap: '/cgi-bin/web_cgi_main.cgi?startCapPackage',
	   stopCap: '/cgi-bin/web_cgi_main.cgi?stopCapPackage',
	   exportPackage: '/cgi-bin/web_cgi_main.cgi?exportCapturePackage',
	   exportDebug: '/cgi-bin/web_cgi_main.cgi?exportDebug'
   },
	pAuto: {
		url: 'html/phone/phoneAuto.html',
		get: '/cgi-bin/web_cgi_main.cgi?user_get_auto',
		set: '/cgi-bin/web_cgi_main.cgi?user_set_auto'
	},
	pConfig: {url: 'html/phone/phoneConfiguration.html',
			  importConfig: '/cgi-bin/web_cgi_main.cgi?user_upload_config',
			  exportConfig: '/cgi-bin/web_cgi_main.cgi?user_download_config',
			  exportSyslog: '/cgi-bin/web_cgi_main.cgi?user_download_syslog',
			  importConfigForSettingProvision: '/cgi-bin/web_cgi_main.cgi?importConfigForSettingProvision',
			  outportConfigForSettingProvision: '/cgi-bin/web_cgi_main.cgi?outportConfigForSettingProvision',
			  get: '/cgi-bin/web_cgi_main.cgi?user_get_trace',
			  set: '/cgi-bin/web_cgi_main.cgi?user_set_trace'
			},
	pActionUrl: {
		url: 'html/phone/phoneActionUrl.html',
		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_action_url',
		set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_action_url'
	},
	pPowerIndicatorLEDUrl: {
		url: 'html/phone/phonePowerIndicatorLED.html',
		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_power_indicator_url',
		set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_power_indicator_url'
	},
	pRemoteControl: {
		url: 'html/phone/phoneRemoteControl.html',
		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_remote_control_config_url',
		set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_remote_control_config_url'
	},
	pTones: {
		url: 'html/phone/phoneTones.html',
		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_tones',
		set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_tones'
	},
	pDialPlan: {url: 'html/phone/phoneDialPlan.html',
				getReplaceRule: '/cgi-bin/web_cgi_main.cgi?user_get_phone_dial_plan_replace_rule',
				setReplaceRule: '/cgi-bin/web_cgi_main.cgi?user_set_phone_dial_plan_replace_rule',
				getDialNows: '/cgi-bin/web_cgi_main.cgi?user_get_phone_dial_plan_dial_now',
				setDialNows: '/cgi-bin/web_cgi_main.cgi?user_set_phone_dial_plan_dial_now',
				getAreaCode: '/cgi-bin/web_cgi_main.cgi?user_get_phone_dial_plan_area_code',
				setAreaCode: '/cgi-bin/web_cgi_main.cgi?user_set_phone_dial_plan_area_code',
				getBlockOut: '/cgi-bin/web_cgi_main.cgi?user_get_phone_dial_plan_block_out',
				setBlockOut: '/cgi-bin/web_cgi_main.cgi?user_set_phone_dial_plan_block_out'},

	pVoice: {url: 'html/phone/phoneVoice.html',
			 get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_voice',
			 set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_voice'},

	pPhoneLock: {url: 'html/phone/phoneLock.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_lock',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_lock'},
	pRing: {url: 'html/phone/phoneRing.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_ring',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_ring'},
    sStrusted: {url: 'html/phone/trustedCertificates.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?get_trusted_certificates_data',
				importCertificates: '/cgi-bin/web_cgi_main.cgi?user_upload_trusted_certificate',
				deleteCertificates: '/cgi-bin/web_cgi_main.cgi?user_delete_trusted_certificate'},

    sServer: {url: 'html/phone/serverCertificates.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?get_server_certificates_data',
				importCertificates: '/cgi-bin/web_cgi_main.cgi?user_upload_server_certificate',
				deleteCertificates: '/cgi-bin/web_cgi_main.cgi?user_delete_server_certificate'},
    pSipMessage: {url: 'html/phone/phoneSipMessage.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?user_get_sip_message',
				send: '/cgi-bin/web_cgi_main.cgi?user_send_sip_message'},

	pSecurity: {url: 'html/phone/phoneSecurity.html',
		 		set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_security'},

	pPhoneTr069: {url: 'html/phone/phoneTr069.html',
		 		get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_tr069',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_phone_tr069'},


	//Contacts
	cContacts: {url: 'html/contacts/contacts.html',
				get: '/cgi-bin/web_cgi_main.cgi?user_get_contacts',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_contacts',
				delPhoto: '/cgi-bin/web_cgi_main.cgi?user_delete_photo',
				importContacts: '/cgi-bin/web_cgi_main.cgi?user_upload_contacts',
				exportContacts: '/cgi-bin/web_cgi_main.cgi?user_download_contacts'},
	cLDAP: {url: 'html/contacts/ldap.html',
				get: '/cgi-bin/web_cgi_main.cgi?user_get_ldap',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_ldap'},
	cMulticastIp: {url: 'html/contacts/multicastIp.html',
			get: '/cgi-bin/web_cgi_main.cgi?user_get_multicast_ip',
			set: '/cgi-bin/web_cgi_main.cgi?user_set_multicast_ip'},
	cXMLPhonebook: {url: 'html/contacts/xmlRemotePhonebook.html',
				get: '/cgi-bin/web_cgi_main.cgi?user_get_xml_remote_phonebook',
				set: '/cgi-bin/web_cgi_main.cgi?user_set_xml_remote_phonebook'},
	cPhoneCall: {url: 'html/contacts/phoneCallInfo.html',
				 get: '/cgi-bin/web_cgi_main.cgi?user_get_phone_call_info'}
};

//通用验证规则
var commonRules = {
	port: {
		min: 1,
		max: 65535
	},
	ipFormat: {
		validType: 'ip',
		invalidMessage: commonValidMsg.invalidIpMsg
	},
	ipv6Format: {
		validType: 'ipv6',
		invalidMessage: commonValidMsg.invalidIpMsg
	},

	num: {
		
	},
	noEmpty: {
		required: true,
		missingMessage: commonValidMsg.missingMsg
	},
	portRequired: {
		min: 1,
		max: 65535,
		required: true,
		missingMessage: commonValidMsg.missingMsg
	},
	ipRequired: {
		required: true,
		validType: 'ip',
		missingMessage: commonValidMsg.missingMsg,
		invalidMessage: commonValidMsg.invalidIpMsg	
	},
	ipv6Required: {
		required: true,
		validType: 'ipv6',
		missingMessage: commonValidMsg.missingMsg,
		invalidMessage: commonValidMsg.invalidIpMsg	
	},
	numRequired: {
		required: true,
		missingMessage: commonValidMsg.missingMsg
	}
};

//bool
var bool = {
	Disable: 0,
	Enable: 1,
	Off: 0,
	On: 1
};

var Model = {
	R4: 0,
	R3: 1
};

var wifi_mode = {
	WIFI_MODE_OPEN: 1,
	WIFI_MODE_WEP: 2,
	WIFI_MODE_WPA: 3,
	WIFI_MODE_WPA2: 4,
	WIFI_MODE_WPA_WPA2: 5,
	WIFI_MODE_WPA_EAP: 6
};

var productIdentification = {
	CT11: 0,
	A1x: 1,
	A2x: 2,
	A4x: 3,
	A48: 4,
	A68: 5
};

var short_message = {
	SHORT_MESSAGE_IN: 0,
	SHORT_MESSAGE_UNREAD: 1,
	SHORT_MESSAGE_SENT: 2,
	SHORT_MESSAGE_SENDING: 3,
	SHORT_MESSAGE_DRAFT: 4,
};

//wan Type
var WanType = {
	DHCP: 'DHCP',
	StaticIp: 'staticIPAddress',
	PPPoE: 'pppoe',
	DHCPStaticDNS: 'DHCPStaticDNS',
	innerNet: 'innerNet'
};

var KeyType = {
	KEY_TYPE_NULL: 0, 
    KEY_TYPE_LINE: 1,
    KEY_TYPE_SPEEDDIAL: 2,
    KEY_TYPE_SOFTKEY: 3,
    KEY_TYPE_MESSAGE: 4,//voice mail and text message
    KEY_TYPE_BLF: 5,
    KEY_TYPE_CHAR: 6,
    KEY_TYPE_SLAVE_LCD_KEY: 7,
    KEY_TYPE_BLF_LIST: 8,
    KEY_TYPE_DIRECT_PICKUP: 9,
    KEY_TYPE_GROUP_PICKUP: 10,
    KEY_TYPE_CALL_PARK: 11,
    KEY_TYPE_INTERCOM: 12,
    KEY_TYPE_DTMF: 13,
    KEY_TYPE_CONFERENCE: 14,
    KEY_TYPE_FORWARD: 15,
    KEY_TYPE_TRANSFER: 16,
    KEY_TYPE_HOLD: 17,
    KEY_TYPE_DND: 18,
    KEY_TYPE_REDIAL:19,
    KEY_TYPE_DIRECTORY: 20,
    KEY_TYPE_CALL_RETURN: 21,
	KEY_TYPE_PREFIX: 22,
	KEY_TYPE_LDAP: 23,
    KEY_TYPE_MULTICAST_PAGING: 38,
    KEY_TYPE_PAGING_LIST: 39,
    KEY_TYPE_SWITCH_ACC_UP: 40,
    KEY_TYPE_SWITCH_ACC_DOWN: 41,
};
var WebServerType = {
	Disable: '0',
	Http: '1',
	Https: '2',
	HttpHttps: '3'
};

var UserName = {
	admin: 'admin',
	user: 'user'
};

var ErrorUtil = {
	errorInfo: {
		E_1: alertMsg.invalidVal,
		E_2: mainJs.ErrorInfo.webServerError,
		E_3: mainJs.ErrorInfo.dataNoChanged,
		E_4: mainJs.ErrorInfo.phoneBusyError,
		E_5: mainJs.ErrorInfo.phoneDataRepeat,
		E_409: mainJs.ErrorInfo.Error_409,
		E_413: mainJs.ErrorInfo.Error_413,
		E_421: mainJs.ErrorInfo.wifiConnectSuccess,
		E_422: mainJs.ErrorInfo.wifiConnectFailed,
		E_423: mainJs.ErrorInfo.wifiUnsavedSuccess,
		E_424: mainJs.ErrorInfo.wifiUnsavedFailed,
		E_451: mainJs.ErrorInfo.aetIsUpgrading,
		E_INVALID: alertMsg.invalidVal,
		E_UnknownError: mainJs.ErrorInfo.unknownError
		},
	getErrorPrompt: function(errorCode, return_prompt){
		var key = "E";
		if(errorCode < 0){
			key = key + "_" + (-(errorCode));
		} else {
			key = key + "_" + errorCode;
		}

		return ErrorUtil.errorInfo[key] || return_prompt || ErrorUtil.errorInfo.E_INVALID || (ErrorUtil.errorInfo.E_UnknownError + ' ' + key);
	}
};

var SysUtil = {
	reboot: function(delay){
		var showText = mainJs.SysUtil.reboot,
			isOk = false,
			loopTimeout = null;
		var	option = {
			msg: showText.rebootMsg,
        	text: showText.rebootText,
        	checkStatus: function(){
        		return isOk;
        	},
        	callback: function(){
        		clearTimeout(loopTimeout);
        		$.messager.progress('close');
        		window.location.reload(true);
        	}
		};
		
		if(!delay){
			delay = 48;
		}
			
		SysUtil.showProgress(option);
		loopTimeout = setTimeout(function(){
			isOk = true;
		}, 1000 * 60 * 6);
		function loop2() {
			// 重启命令执行成功，循环检测设备是否已重启
			Page.getServerUp(function() {
				isOk = true;
			}, function() {
				setTimeout(loop2, 5000);
			});
		}
			
		setTimeout(loop2, 1000 * delay);
	},
	showProgress: function(option){
		var showText = mainJs.SysUtil.showProgress;
		$.messager.progress({
        	title: showText.progressTitle,
        	msg: option.msg,
        	text:option.text,
        	interval: 1000				
        });
		
		var timeoutCtl = null;
		function loop(){
			if(option.checkStatus()){
				clearTimeout(timeoutCtl);
				option.callback();
			} else {
				timeoutCtl = setTimeout(loop, 1000);
			}
		}
		
		setTimeout(loop, 100);
	}
};


var Page = {
	$iframe: null,
	intervalId: null,
	is_support_wifi: 0,
	is_zhongxing: 0,
	model: Model.R4,
	currentLang: 0,
	username: '',
	loginTimeout: 0,
	currentUrl: '/',
	productIdentification: productIdentification.CT11,
	accountNum: '1',
	currentAccount: '1',
	extLinkNum: '0',
	perExtLabelNum: 0,
	accountDisplay1: '1',
	accountDisplay2: '2',
	accountDisplay3: '3',
	accountDisplay4: '4',
	accountDisplay5: '5',
	accountDisplay6: '6',
	accountAuto: '99',
	
	getRandomParam: function() {
		//return "_t=0";
		return "_t=" + Math.floor(Math.random() * 10000000);
	},
	get: function(url){
		if(!_.isNull(Page.intervalId) && Page.loginTimeout){
			clearTimeout(Page.intervalId);
			Page.setPageTimeoutLogout(Page.loginTimeout);
		}
		
		Page.currentUrl = url;
		
		$.ajax({
			url: url,
			type: 'GET',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			data: Page.getRandomParam(),
			dataType: 'text',
			success: function(data){
				Page.$iframe.html(data);
			},
			error: function(xhr, textStatus, errorThrown){				
				if(xhr.status === 401){
					var htmlStr = xhr.responseText;					
					$('body').html(htmlStr);
				} else {
					if(xhr.status === 0){
						window.location.href="/status/status-401.html";
					} else {
						AlertUtil.alertMsg(mainJs.ErrorInfo.networkError);
					}
				}
			}			
		});
		
	},
	initPage: function(){
		var headerH = 91,
			footerH = 50;
		var h = Math.max(document.documentElement.clientHeight - headerH - footerH + 10, 450);
		$('#main').css({
			'min-height': h + "px"
		});
	},
	setTitle: function(){
		var docTitle = mainJs.Page.docTitle;
		document.title = docTitle;
	},
	defaultSetting: {
        url: '/',
        data: '',
        async: true,
        returnHtml: false,
        success: function(){},
        complete: function(){}
    },
    postJSON: function(options){
    	var settings = $.extend({}, Page.defaultSetting, options);
	var queryString;
    	
    	if(!_.isNull(Page.intervalId) && Page.loginTimeout){
			clearTimeout(Page.intervalId);
			Page.setPageTimeoutLogout(Page.loginTimeout);
		}
    	
	if(String(settings.data).length > 0)
	{
		queryString = String(settings.data) + "&" + settings.url.substr(settings.url.lastIndexOf("?") + 1);
	}
	else
	{
		queryString = settings.url.substr(settings.url.lastIndexOf("?") + 1);
	}
    	$.ajax({
    		url: settings.url,
			type: 'POST',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			data: queryString,
			dataType: 'text',
			async: settings.async,
    		success: function(datas) {
    			try {
    				var data;
    				
    				if(/webUserChange/.test(datas)){
    					data = JSON.parse(datas); 
    					if(data.webUserChange){
    						var urls = location.href.split('/');
    						urls.length = 3;
    						urls[1] = '//';
    						window.location.assign(urls.join(''));
    						return;
    					}
    				}    				
					if (!settings.returnHtml) {
            			data = JSON.parse(datas);
				console.log(data);
            			if(data.return_code && data.return_code !== 0){
            				AlertUtil.alertMsg(ErrorUtil.getErrorPrompt(data.return_code, data.return_prompt));
						} else {
							settings.success(data);
						}
					} else {
        				// 返回HTML不用解析
						data = datas;
						settings.success(data);
					}								
					
    			} catch(ex) {
    				AlertUtil.alertMsg(ex.message);
				console.log(queryString);
				console.log(datas);
    			}finally{
				console.log(queryString);
				console.log(datas);
			}
    			settings.complete();
    		},
    		error: function(xhr, textStatus, error) {
    			if ($.isFunction(settings.error)) {
					settings.error(xhr, textStatus, error);
				}
    			settings.complete();
    		}
    	});
    },
    getServerUp: function(success, error){
    	Page.postJSON({
            url: '/cgi-bin/server_test.cgi',          
            success: function(data) {
            	if ($.isFunction(success)) {
                	success(data);
            	}
            },
            error: function() {
            	if ($.isFunction(error)) {
            		error();
            	}
            }
        });
    },
    getCurrentPage: function(){
    	Page.get(Page.currentUrl);
    },
    logout: function(isAuto, isTimeOut){
    	Page.currentAccount = '1';
    	try {
    		if($.browser.msie){
        		// IE clear HTTP Authentication
                document.execCommand("ClearAuthenticationCache");                
               if(isAuto && isTimeOut){
            	   Page.getCurrentPage(); 
               }           
	       else if(isAuto)
	       {
		       window.location.href="/";
	       }
        	} else {
        		$.ajax({
        			url: Page.currentUrl,
        			async: true,
        			username: 'admin',
        			password: '--logout--',
        			complete: function(xhr, textStatus){        			
        				if(isAuto && isTimeOut){
        					Page.getCurrentPage(); 
        	            		}               	
					else if(isAuto)
					{
		       				window.location.href="/";
					}
        			}
        		});
        	}
		} catch (e) {
			AlertUtil.alertMsg(mainJs.Page.logoutFailed);
		}
    },
    checkUsername: function(){
    	var username = CookieUtil.getCookie('username');
    	
    	if(Page.username === username){
    		return true;
    	} else {
    		Page.username = username;
    		return false;
    	}
    },
    setPageTimeoutLogout: function(delay){
    	if(delay < 1){
    		return false;
    	}
    	Page.intervalId = setTimeout(function(){
    		Page.logout(false, true);
    	}, delay * 60 * 1000);
    },
    setFormFieldValue: function(eleId, value){
    	if(!eleId || value == undefined){
    		return;
    	}
		var $id = "#" + eleId;
		$($id).val(value);
    },
    setRadioFieldValue: function(eleId, value){
    	if(!eleId || value == undefined){
    		return;
    	}
		var $id = String.format('input[name="{0}"]', eleId);
		$($id).each(function(index, domEle){
			if(domEle.value == value){
				$(domEle).prop("checked", true);
				return false;
			}
		});
    },
    setSpanContent: function(eleId, value){
    	if(typeof(value) == undefined || !eleId){
			return;
		}
		var $id = "#" + eleId;
		$($id).html(value);
    },
    initTips: function(){
    	$('.my-tooltips').myTooltip();
    },
    iePercentFix: function(id, percent, count){
    	if (!($.browser.msie && ($.browser.version == "6.0" || $.browser.version == "7.0") 
    		&& !$.support.style)) { 
            return false;
        }
		
    	count = count - 1;
		var $ul = $('#' + id),
			$lists = $ul.find('li'),
			width =$ul.width(),
			even = Math.floor(width * percent),
			odd = Math.ceil(width * percent),
			remainder = width;
		
		if(width < 580){
			$('.detail_box').width(569);
		}
		$lists.each(function(i){
			if(i === count){
				$(this).width(remainder);
				return true;
			}
			if(i % 2 === 0){
				$(this).width(even);
				remainder = remainder - even;
			} else {
				$(this).width(odd);
				remainder = remainder - odd;
			}
		});
    },
    timestampToTime: function(timestamp) {
	    var timezoneOffset = (new Date().getTimezoneOffset()) * 60,
	    	myDate = new Date((timestamp + timezoneOffset) * 1000);
	    Y = myDate.getFullYear() + '-';
	    M = (myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1) + '-';
	    D = myDate.getDate() + ' ';
	    h = myDate.getHours() + ':';
	    m = myDate.getMinutes() + ':';
	    s = myDate.getSeconds();
	    return Y+M+D+h+m+s;
    }
};

var ValidHelper = {
	numHelper: function($inputNums, id){
		if(!$inputNums){
			if(id == undefined){
				id = '#form1 input.numberbox-f';
			}
			$inputNums = $(id);
		}
		$inputNums.blur();
		
		return $inputNums;
	},
	groupsValid: function(groups){
		if(!groups){
			return false;
		}
		var len = groups.length, i, id, valid = true;
		for(i = 0; i < len; i++){
			id = '#' + groups[i];
			if(!($(id).validatebox('isValid'))){
				valid =  false;
			}
		}
		
		return valid;
	},
	invalid: function($form){
		//return $form.find('.validatebox-invalid').length !== 0 ;
		
		return !$form.form('validate');
	},
	codeValid: function(json, onId, offId) {
		var onCode = json[onId],
			offCode = json[offId];
		if(onCode !== '' && offCode === ''){
			AlertUtil.invalidVal(function(){
				$('#' + offId).focus();
			});
			
			return false;
		}
		if(onCode === '' && offCode !== ''){
			AlertUtil.invalidVal(function(){
				$('#' + onId).focus();
			});
			
			return false;
		}
		
		return true;
	}
};
//模板工具类
var TempUtil = {
	render: function(templateId, containerId, data){
		var $templateId = $('#' + templateId),
			$containerId = $('#' + containerId);
		$containerId.html(_.template($templateId.html(), data));
	},
	render2: function(temp, containerId, data){
		var $containerId = $('#' + containerId);
		$containerId.html(_.template(temp, data));
	}
};

//表格工具
var TableUtil = {
	createListTable: function(title, names, values, count, columnNum) {
    	var sb = new StringBuilder();
    	

        if (count <= 0 || columnNum <= 0) return sb.toString();

        TableUtil.createTableBody(sb, title, names, values, count, columnNum);

    	return sb.toString();
    },
    createTableHead: function(title) {
    	var css = "head2";

    	return String.format("<tr class=\"{0}\"><td colspan=\"3\">{1}</td></tr>", css, title);
    },
    createTableBody: function(sb, title, names, values, count, columnNum) {
    	var css = "list2";

        sb.append(String.format("<div class=\"detail_box\"><div id=\"div1\"><table class=\"{0}\" cellspacing=\"0\">", css));
		
		sb.append("<tbody>");
		sb.append(TableUtil.createTableHead(title));
    	var columnCount = 0;
        for (var i = 0; i < count; i++) {
            	sb.append("<tr>");

            // 输出label
    		if (!names[i]) {
    			sb.append("<td>&nbsp;</td>");
    		} else {
				sb.append("<td class=\"list2td1\"></td>")
				sb.append("<td class=\"list2td3\">");
    			sb.append(names[i]);
				sb.append("</td>");
    		}

            // 输出value
            sb.append("<td>");
    		if (values[i].length == 0) {
            	sb.append("&nbsp;</td>");
    		} else {
            	sb.append(values[i]);
            	sb.append("</td>");
    		}

    		columnCount++;
                sb.append("</tr>");
        }
    	if (columnCount != 0) {
    		// 补充输出th,td
    		for (var i = columnCount; i < columnNum; i++) {
    			sb.append("<th>&nbsp;</th><td>&nbsp;</td>");
    		}
            sb.append("</tr>");
    	}
		sb.append("</tbody>");
    	sb.append("</table></div></div>");
    },
    setStripeTable: function(id) {
		var $tab = $(id || 'table.list1');
		$('tr:odd', $tab).addClass("odd");
		$('tr:even', $tab).addClass("even");
	},
	setStripeTable3: function(id) {
		var $tab = $(id || 'table.list3');
		$('tr:odd', $tab).addClass("odd");
		//$('tr:even', $tab).addClass("even");
	}
};

var CookieUtil = {
    getCookie: function(name) {
        var str = document.cookie;
        if(!str || str.indexOf(name + '=') < 0) {
            return '';
        }
        var cookies = str.split(';');
        for(var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if(cookie.indexOf(name + '=') == 0) {
                return decodeURI(cookie.substring(name.length + 1));
            }
        }
        return '';
    },
    setCookie: function(name, value, option) {
    	var str = String.format("{0}={1}", name, encodeURI(value));

        if(option){
            if(option.expireHours){
                var date = new Date();
                date.setTime(date.getTime() + option.expireHours * 3600 * 1000);
                str += String.format("; expires={0}", date.toGMTString());
            }
            if(option.path) {
                str += String.format("; path={0}", option.path);
            }
            if(option.domain) {
                str += String.format("; domain={0}", option.domain);
            }
            if(option.secure) {
                str += '; true';
            }
        }

        document.cookie = str;
    },
    deleteCookie: function(name, option) {
        this.setCookie(name, '', option);
    }
};

var IframeUtil = {
	jsonData: null,
	doProgress: function(customCallback){
		SysUtil.showProgress({
        	msg: uploadCommon.uploadMsg,
        	text: uploadCommon.uploadText,
        	checkStatus: function(){
        		return IframeUtil.jsonData != null;
        	},
        	callback: function(){
        		$.messager.progress('close');
        		if(IframeUtil.jsonData.return_code == 0){
        			if(_.isFunction(customCallback)){
    					customCallback();
    				}
        		} else {
					if(IframeUtil.jsonData.return_code > 0)
					{
						AlertUtil.alertMsg(ErrorUtil.getErrorPrompt(IframeUtil.jsonData.return_code, IframeUtil.jsonData.return_prompt));
					}
					/*
					else if(IframeUtil.jsonData.return_code > 0 && IframeUtil.jsonData.return_prompt){
						AlertUtil.alertMsg(IframeUtil.jsonData.return_prompt); 
					}
					*/
					else{
						AlertUtil.alertMsg(uploadCommon.uploadFail);   
					}
        			     			
        		}
        	}
        });
	}	
};

window.console = window.console || (function(){
		var c = {};
		c.log = c.warn = c.debug = function(){};
		return c;
})();
