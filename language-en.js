//公共的验证信息
var commonValidMsg = {
	missingMsg: 'This field is required',
	invalidIpMsg: 'Invalid IP'
},
uploadCommon = {
	uploadFilePrompt: 'This is to upload file:',
	uploadMsg: 'Please do not turn the power off!',
	uploadText: 'Uploading, please wait...',
	uploadSuccess: 'Upload successful!',
	uploadFail: 'Upload failed, please try again!'
},
alertMsg = {
	titlePrompt: 'Prompt',
	titleConfirm: 'Confirmation',
	noChange: 'No change!',
	invalidVal: 'Invalid value!',
	saveSuccess: 'Saved successfully!',
	enabledOptionsEmpty: 'Enabled codecs list cannot be empty!',
	codecsConflict: 'iLBC_13_3 and iLBC_15_2 can be not applied simultaneously!',
	emptyContent: 'No content!',
	accIsEmpty: 'No Valid Account!',
	targetIsEmpty: 'Target Number Is Empty!',
	messageIsEmpty: 'Message Is Empty!',
	invalidDTMF: 'Invalid DTMF!',
	webServicesDisable: 'Web services have been disabled!',
	features: 'Off Code could not be empty when On Code is set!',
	invalidAccountList: 'Invalid account list!',
	dialPlanMsg1: 'Please select at least one record.',
	voiceError1: 'Max Delay must be bigger than Min Delay',
	voiceError2: 'Normal Delay must be between Min and Max Delay',
	fileIsEmpty: 'File is empty!',
	upgradeFileFormateErr: 'Please select a firmware (*.fw) file.',
	openvpnFile: 'Please select an OpenVPN (*.tar/*.TAR) file.',
	wallpaperFormatError: 'Filename should contain Latin characters only and the image must be PNG/JPG/BMP format',
	contentTooShort: 'The length of content is at least xxxx',
	systemFileCannotDelete: 'The system files cannot be deleted!'
},
mainJs = {
	SysUtil: {
		reboot: {
			rebootMsg: 'Please do not turn the power off!',
			rebootText: 'Rebooting, please wait...'
		},
		showProgress: {
			progressTitle: 'Prompt'
		}
	},
	ErrorInfo: {
		networkError: 'Network error, please check!',
		webServerError: 'Web server error, please try again!',
		unknownError: 'Unknown error:',
		dataNoChanged: 'No Change!',
		Error_409: 'The file with this name already exists.',
		Error_413: 'The file is too large.',
		wifiConnectSuccess: 'Wi-Fi Connection Success!',
		wifiConnectFailed: 'Wi-Fi Connection Failed!',
		wifiUnsavedSuccess: 'Wi-Fi Unsaved Success!',
		wifiUnsavedFailed: 'Wi-Fi Unsaved Failed!',
		aetIsUpgrading: 'Aet is Upgrading',
		phoneDataRepeat: 'Cannot add repeated content!',
		phoneBusyError: 'Ongoing call, please wait...'
	},
	Page: {
		docTitle: 'IP Phone',
		logoutFailed: 'Logout failed, please try again!'
	},
	pluginInit: {
		ok: 'OK',
		cancel: 'Cancel'
	}
},
status401Html = {
	errorInfo1 : 'You are not authorised to access the web interface.',
	errorInfo2 : 'Please contact your network administrator or try again in 3 minutes.',
	errorInfo3: 'HTTP 401 Unauthorised'
},
//index.html
indexHtml={
	top:{
		logout: 'Logout',
		languages:  [
			            {langLable: 'English', langCode : 0},
			            {langLable: 'Français', langCode: 1},
			            {langLable: 'עברית',  langCode: 2},
			            {langLable: 'Pусский',  langCode: 3},
			            {langLable: 'Español',  langCode: 4},
			            {langLable: '中文(简体)',  langCode: 5},
						{langLable: '中文(繁體)',  langCode: 13},
			            {langLable: 'فارسی',  langCode: 6},
			            //{langLable: 'magyar',  langCode: 7},
			            {langLable: 'Polski',  langCode: 8},
			            {langLable: 'Português',  langCode: 9},
			            {langLable: 'Türkçe',  langCode: 10},
			            {langLable: 'Deutsch',  langCode: 11},
			            {langLable: 'Italiano',  langCode: 12}
		            ]

	},
	//一级标题
	nav:{
		basic: 'Basic',
		account: 'Account',
		network: 'Network',
		dSSKey: 'DSS Keys',
		phone: 'Phone',
		contacts: 'Contacts',
		security: 'Security'
	},
	//页面底部
	footer:{
		footerEmail: 'http://www.atcom.cn/jscontentus.html',
		footerSupport: 'http://www.atcom.cn/service.html',
		footerWebsite: 'http://www.atcom.cn',
		footerDownload: 'http://www.atcom.cn/download.html',
		footerProductWebsite: 'http://www.atcom.cn/products_all_a.html',
		website: 'Website',
		products: 'Products',
		support: 'Support',
		download: 'Download',
		contactus: 'Contact us',
		atcomRights: '©2018 ATCOM All Rights Reserved.'
	},
	//二级菜单
	submenu:{
		//Status
		sStatus: 'Status',
		sWizard: 'Wizard',
		//Account
		aBasic: 'Basic',
		aCodecs: 'Codecs',
		aAdvanced: 'Advanced',
		//NetWork
		nBasic: 'Basic',
		nWifi: 'Wi-Fi',
		nAdvanced: 'Advanced',
		//DSS key
		dMemory: 'Memory Keys',
		dLink: 'Line Keys',
		dProgrammable: 'Programmable Keys',
		dExt: 'EXT Keys',
		dAetAdv: 'EXT Settings',
		dAetUpgrade: 'EXT Upgrade',
		//Phone
		pDNDAndForward: 'Forward&DND',
		pPrefetence: 'Preferences',
		pFeatures: 'Features',
		pUpgrade: 'Upgrade',
		pAuto: 'Auto Provision',
		pConfig: 'Configuration',
		pRemoteControl: 'Remote Control',
		pActionUrl: 'Action URL',
		pPowerIndicatorLEDUrl: 'Power LED',
		pDialPlan: 'Dial Plan',
		pSipMessage: 'SMS',
		pVoice: 'Voice',
		pRing: 'Ring',
		pTones: 'Tones',
		pSms: 'SMS',
		pAction: 'Action URL',
		pSoftkey: 'Softkey Layout',
		pPhoneLock: 'Phone Lock',
		pSecurity: 'Security',
		pPhoneTr069: 'TR069',
		pDebug: 'Debug',
		//Contacts
		cContacts: 'Contacts',
		cXMLPhonebook: 'Remote Phonebook',
		cPhoneCall: 'Phone Call Info',
		cLDAP: 'LDAP',
		cMulticastIp: 'Multicast IP',
		cBroaddoft: 'Broadsoft',
		cCallLog: 'Call Log',
		//Security
		sPassword: 'Password',
		sStrusted: 'Trusted Certificates',
		sServer: 'Server Certificates'
	}
},
statusHtml = {
	version: {
		verTitle: 'Version',
		fwVer: 'Firmware Version',
		hwVer: 'Hardware Version',
		product_name: 'Model'
	},
	networkConfig:{
		netConfigTitle: 'IP protocol',
		internetPortType: 'IP protocol version', /*ipv4 = 1, ipv6 = 2, ipv4 & ipv6 = 3*/
		internType1: 'IPv4',
		internType2: 'IPv6',
		internType3: 'IPv4 & IPv6'
	},
	network: {
		netTitle: 'IPv4',
		internetPort: 'Network Port Type',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Static IP',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		gatewag: 'Gateway',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',
		wiredMac: 'Wired MAC Address',
		WIFIMac: 'WiFi MAC Address',
		vpnStatus: 'VPN Status',
		vpnStatusOpt0: 'Connecting',
		vpnStatusOpt1: 'Disabled',
		vpnStatusOpt2: 'Disconnected',
		vpnStatusOpt3: 'Connected',
		vpnIp: 'VPN IP'
	},
	networkIPv6:{
		netTitle: 'IPv6',
		internetPort: 'Network Port Type',
		portTypeOpt0: 'DHCP',
		portTypeOpt1: 'Static IP',
		ip: 'IP Address',
		networkPrefix: 'Network Prefix',
		gatewag: 'Gateway',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS'
	},
	tips: {
		netConfigTip: 'The IP protocol version.',
		verTip: 'Current firmware and hardware versions of the phone.',
		netTip: 'Details of the phone network configuration.'
	}
},
wizardHtml = {
	form1: {
		networkType: 'Network',
		InternetPort: 'Network Port',
		dhcp: 'DHCP',
		dhcpStaticDNS: 'DHCP Static DNS',
		staticIp: 'Static IP Address',

		staticIpSettings: 'Static IP Settings',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Default Gateway',
        	StaticDNSEnable: 'Static DNS',
		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',

		/*ipv6*/
		staticIpSettingsIPv6: 'Static IP Settings for IPv6',
		IPv6Prefix: 'IPv6 Prefix',
        	StaticDNSEnableIPv6: 'Static DNS for IPv6',
		sipSettings: 'SIP Settings',
		accountActive: 'Account Active',
		disable: 'Disabled',
		enable: 'Enabled',
		labelName: 'Label',
		displayName: 'Display Name',
		registerName: 'Register Name',
		userName: 'User Name',
		password: 'Password',
		
		sipServer: 'SIP Server',
		sipServerPort: 'Port',
		
		back: 'Back',
		next: 'Next',
		
		tips: {
			dhcp: 'Automatically obtain IP address, subnet mask, gateway, DNS from the DHCP server.',
			staticIp: 'Configure manually the IP address, subnet mask, gateway, DNS etc.',
			labelName: 'The name displaying on the LCD of the current phone.',
			displayName: 'The local phone name showing on the other phone when calling.',
			registerName: 'Register name provided by ISP.',
			userName: 'User name provided by ISP.',
			password: 'Account password provided by ISP.',
			sipServer: 'SIP server address provided by ISP.'
		}
	},
	common: {
		finish: 'Finish',
		next: 'Next'
	}
},
accountBasicHtml = {
	form1: {
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		registerStatus: 'Register Status',
		
		accountActive: 'Account Active',
		disable: 'Disabled',
		enable: 'Enabled',
		labelName: 'Label',
		displayName: 'Display Name',
		registerName: 'Register Name',
		userName: 'User Name',
		password: 'Password',
		
		sipServer: 'SIP Server',
		sipServerPort: 'Port',
		redundancy_proxy: 'SIP Redundancy Server',

		enableOutboundProxyServer: 'Enable Outbound Proxy Server',
		outboundProxyServer: 'Outbound Proxy Server',
		outboundProxyServerPort: 'Port',
		make_call_without_register: 'Enable Peer-to-Peer',
		
		verifyServer: 'TLS Server Verification',
		transport: 'Transport Type',
		transportOpt0: 'UDP',
		transportOpt1: 'TCP',
		transportOpt2: 'TLS',
		transportOpt3: 'DNS-SRV',
		
		natTraversal: 'NAT Traversal',
		TLSVersion: 'TLS Version',
		natTraversalOpt1: 'STUN',
		stunServer: 'STUN Server',
		port: 'Port',
		
		voiceMail: 'Voice Mail',
		anonymousCall: 'Anonymous Call',
		off: 'Off',
		on: 'On',
		onCode: 'On Code',
		offCode: 'Off Code',
		anonymousCallRejection: 'Anonymous Call Rejection',
		ringTones: 'Ringtones',
		ringTonesOpt0: 'Common',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			labelName: 'The name displaying on the display of the current phone.',
			displayName: 'The local phone name displaying on the other phone when calling.',
			registerName: 'Register name provided by ISP.',
			userName: 'User name provided by ISP.',
			password: 'Account password provided by ISP.',
			sipServer: 'SIP server address provided by ISP.',
			enableOutboundProxyServer: 'It is used to process signals and to help multimedia data streams go through the firewall or NAT.',
			redundancy_proxy: 'An backup SIP server address provided by ISP',
			outboundProxyServer: 'Outbound Proxy Server.',
			transport: 'There are three transport protocols available: UDP, TCP and TLS. TLS (Transport Layer Security) protocol is encrypted.',
			natTraversal: 'Enable/disable STUN server.',
			verifyServer: 'TLS Server Verification',
			stunServer: 'STUN server allows all NAT terminal clients (such as a PC behind the firewall) to achieve VoIP phone calls with VoIP service provider located outside the LAN.',
			voiceMail: 'Set the voice mail number for the current account.',
			anonymousCall: 'Enable/disable anonymous calls.',
			onCode: 'Set the feature code for turning on anonymous call, the phone enables anonymous call by sending the feature code to the server.',
			offCode: 'Set the feature code for turning off anonymous call, the phone disables anonymous call by sending the feature code to the server.',
			anonymousCallRejection: 'Enable/disable the anonymous call rejection.',
			onCodeRejection: 'Set the feature code for turning on anonymous call rejection, the phone enables anonymous call rejection by sending the feature code to the server.',
			offCodeRejection: 'Set the feature code for turning off anonymous call rejection, the phone disables anonymous call rejection by sending the feature code to the server.',
			ringTones: 'Select ringtone for the current account.',
			make_call_without_register: 'Make and receive calls without registration.'
		}
	},
	showText: {
		unRegistered: 'Registration failed',
		registered: 'Registered',
		disabled: 'Disabled',
		
		
		accountOverviewTips: 'The register status of SIP accounts',
		accountOverview: 'Account Overview'
	}
},
accountCodecsHtml = {
	form1:{
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		audioCodecs: 'Audio Codecs',
		disableCodecs: 'Disabled Codecs',
		enableCodecs: 'Enabled Codecs',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
accountAdvancedHtml = {
	form1: {
		accountNumber: 'Account',
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		
		udpKeepAliveMsg: 'UDP Keep-Alive Message',
		disable: 'Disabled',
		enable: 'Enabled',
		udpKeepAliveInterval: 'UDP Keep Alive Interval (sec)',
		
		loginExpires: 'Re-registration Timeout (sec)',
		localSipPort: 'Local SIP Port',
		subscribePeriod: 'Subscription Period (sec)',
		
		dtmfType: 'DTMF Type',
		dtmfTypeOpt0: 'Inband',
		dtmfTypeOpt1: 'RFC2833',
		dtmfTypeOpt2: 'SIP INFO',
		dtmfPayload: 'DTMF Payload (sec)',
		reliableRetransmission: 'SIP 100 rel',
		
		subscribeForMwi: 'Subscribe for MWI',
		mwiSubscribePeriod: 'MWI Subscription Period (sec)',
		
		useSessionTimer: 'Use Session Timer',
		sessionTimer: 'Session Timer (sec)',
		refresher: 'Refresher Type',
		
		useUserPhone: 'Use user=phone',
		voiceEncryption: 'Voice Encryption (SRTP)',
 		srtpKeyLengthOption: 'SRTP Key Length',
		off: 'Off',
		on: 'On',
		ptime: 'PTime (ms)',
		
		blfListUri: 'BLF List for URI',
		derectedCallPickupCode: 'Directed Call Pickup Code',
		groupCallPickupCode: 'Group Call Pickup Code',
		
		sipRegRetryTimer: 'SIP Registration Retry Timer',
		earlyMedia: 'Early Media',
		sipServerType: 'SIP Server Type',
		sipServerTypeOpt0: 'Common',
		sipServerTypeOpt1: 'Asterisk',
		sipServerTypeOpt2: 'Elastix',
		sipServerTypeOpt3: 'BroadSoft',
		sipServerTypeOpt4: 'Huawei',
		intercomCode: 'Intercom Code',
		conferenceType: 'Conference Type',
		localConference: 'Local Conference',
		networkConference: 'Network Conference',
		conferenceCode: 'Conference Code',
		callerIdSource: 'Caller ID Source',
		callerIdSourceFrom: 'FROM',
		callerIdSourcePAI: 'PAI',
		callerIdSourceDISABLE: 'DISABLE',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			udpKeepAliveMsg: 'The phone periodically sends a UDP packet to keep the port active and to avoid the server to shut it down.',
			loginExpires: 'Re-registration Timeout — the phone is re-registered within the timeout, otherwise the server will take it as off-line.',
			localSipPort: 'The local phone port number, used to send and receive SIP packets.',
			subscribePeriod: 'Set BLF status renewal time.',
			dtmfType: 'The mode of sending DTMF by pressing the number keys during a call, including INBAND, OUTOFBAND (RFC2833) and SIP INFO.',
			reliableRetransmission: 'Enable/disable PRACK transmission.',
			subscribeForMwi: 'The phone sends a Subscribe packet to the server to subscribe voice mail messages status, the packet will be sent to the server after registration.',
			useSessionTimer: 'Enable/disable the refresh session function. If enabled, the phone will send an Invite packet to refresh the session during a call.',
			sessionTimer: 'The refresh session time interval.',
			refresher: 'Select the side of the session refreshment. UAC: To refresh the session from the client side. UAS: To refresh the session from the server side.',
			useUserPhone: 'If enabled, there will be a sign "user=phone" in the Invite packet of SIP message.',
			voiceEncryption: 'Enable/disable the Voice Encryption (SRTP).',
			ptime: 'Negotiate the time interval between two RTP packets of the currently used codec.',
			blfListUri: 'It is used to subcribe BLF on Broadsoft.',
			sipRegRetryTimer: 'The time period of retrying to register after failed registration.'
		}
	}
},
networkBasicHtml = {
	form1: {
		InternetPort: 'Network Port',
		IPv4Config: 'IPv4 Config',
		IPv6Config: 'IPv6 Config',
		dhcp: 'DHCP',
		staticIp: 'Static IP Address',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Default Gateway',
		IPv6Prefix: 'IPv6 Prefix(0~128)',

                StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			dhcp: 'Automatically obtain from the DHCP server: IP address, subnet mask, gateway, DNS.',
			staticIp: 'Configure manually the IP address, subnet mask, gateway, DNS, etc.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when the Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},

networkWIFIHtml = {
	form1: {
		wifi_setting: 'Wi-Fi Settings',
		wifi_on_warning: '(when Wi-Fi is on, please disconnect the network cable!)',
		wifi_enable: 'Wi-Fi',
		on: 'On',
		off: 'Off',
		search_wifi: 'Search Wi-Fi',
		wifi_ssid: 'Current SSID',
		wifi_key: 'Secret Key',

		wifi_secure_type_none: 'None',
		wifi_status_save: 'Saved',
		wifi_status_connect: 'Connected',
		wifi_list_title: 'Wi-Fi Listing',
		secureType: 'Secure',
		eapMethod: 'EAP Method',
		secondStep: 'Second Step',
		id: 'ID',
		anonyID: 'Anonymous ID',
		serverCA: 'Server CA',
		yes: 'YES',
		no: 'NO',
		rclick_connect_wifi: 'Connect',
		rclick_unsave_wifi: 'Unsave',
		rclick_amend_wifi: 'Amend',

		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},
	showText: {
		close_wifi: 'Closing Wi-Fi...',
		open_wifi: 'Opening Wi-Fi...',
		search_wifi: 'Searching...',
		wifi_table_header: ['SSID', 'Status', 'Secure Type', 'Signal'],
		submitting: 'Submitting...'
	}
},

networkAdvancedHtml = {
	form1: {
		vlan: 'VLAN',
		vlanLan: 'LAN',
		active: 'Active',
		disable: 'Disabled',
		enable: 'Enabled',
		vlanVoiceVid: 'VID',
		vlanVoicePriority: 'Priority',
		vlanPc: 'PC',
		vlanPcActive: 'Active',
		vlanDataVid: 'VID',
		vlanDataPriority: 'Priority',
		
		portLink: 'Port Link',
		wanPortLink: 'WAN Port Link',
		wanPortLinkOption0: 'Autonegotiation',
		wanPortLinkOption1: 'Full duplex 10 Mbps',
		wanPortLinkOption2: 'Full duplex 100 Mbps',
		wanPortLinkOption3: 'Half duplex 10 Mbps',
		wanPortLinkOption4: 'Half duplex 100 Mbps',
		wanPortLinkOption5: 'Half duplex 1000 Mbps',
		wanPortLinkOption6: 'Full duplex 1000 Mbps',
			
		pcPortLink: 'PC Port Link',
		pcPortLinkOption0: 'Autonegotiation',
		pcPortLinkOption1: 'Full duplex 10 Mbps',
		pcPortLinkOption2: 'Full duplex 100 Mbps',
		pcPortLinkOption3: 'Half duplex 10 Mbps',
		pcPortLinkOption4: 'Half duplex 100 Mbps',
		
		slaccEnable: 'ICMPv6 Status',
		vpn: 'VPN',
		importFile: 'Upload OpenVPN Config',
		importStr: 'Import',
		
		voiceQos: 'Voice QoS',
		sipQos: 'SIP QoS',
		
		localRtpPort: 'Local RTP Port',
		maxRTPPort: 'Maximum RTP Port',
		minRTPPort: 'Minimum RTP Port',
		
		webServer: 'Web Server',
		httpPort: 'Http Port',
		httpsPort: 'Https Port',
		webServerType: 'Type',
		webServerTypeOption0: 'Disabled',
		webServerTypeOption1: 'http only',
		webServerTypeOption2: 'https only',
		webServerTypeOption3: 'http & https',

        span_to_pc: 'Span to PC',
        sys_span_to_pc_port: 'Span to PC Port',

		lldp: 'LLDP',
		cdp: 'CDP',
		package_interval: 'Packet Interval (1-3600 s)',

		x_802_1x: '802.1X',
		x_802_1x_mode: 'Mode',
		x_802_1x_mode0: 'Disabled',
		x_802_1x_mode1: 'EAP-MD5',
		x_802_1x_mode2: 'EAP-TLS',
		x_802_1x_mode3: 'EAP-PEAP/MSCHAPv2',
		x_802_1x_mode4: 'EAP-TTLS/EAP-MSCHAPv2',
		x_802_1x_mode5: 'EAP-PEAP/GTC',
		x_802_1x_mode6: 'EAP-TTLS/EAP-GTC',
		x_802_1x_mode7: 'EAP-FAST',
		x_802_1x_anonymous_identity: 'Anonymous Identity',
		x_802_1x_identity: 'Identity',
		x_802_1x_password: 'MD5 Password',
		x_802_1x_ca_cert: 'CA Certificates',
		x_802_1x_device_cert: 'Device Certificates',
		x_802_1x_upload: 'Upload',
		dhcpOption: 'DHCP Option',
		dhcpOption12: 'Host Name(Option 12)',
		dhcpOption60: 'Vendor Class ID(Option 60)',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			lldp: 'LLDP(Linker Layer Discovery Protocol) is used to report its own information and discover or learn other device information which enabled LLDP too ，information included system name,power standard, voice vlan, voice priority etc',
			cdp: 'CDP (Cisco Discovery Protocol) allows IP phones to receive and/or transmit device-related information from/to directly connected devices on the network that are also using the protocol, and store the information about other devices.',
			vlan: 'VLAN configuration changes require manual reboot.',
			portLink: 'Ethernet Port Mode.',
			vpn: 'The Virtual Private Network configuration.',
			voiceQos: 'When lack of network capacity, quality of service can provide users the passable value preferentially.',
			localRtpPort: 'Define voice transmission port.',
			x_802_1x: 'It configures the 802.1x authentication method.',
			webServer: 'The definition of web access type and port.',
			slaccEnable: 'It enables or disables the IP phone to obtain IPv6 network settings via SLAAC (Stateless Address Autoconfiguration) method.'
		}
	}
},
dssKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',

		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		dssKeys_A4x: [1, 2, 3, 4, 5, 6, 7, 8],
		dssKeys_CT11: [1, 2],
		dssKey: 'DSS Key',

		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'HOLD',
		keyTypeOpt18: 'Do Not Disturb (DND)',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialled',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Hot Desking',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		keyTypeOpt40: 'Switch Account Up',
		keyTypeOpt41: 'Switch Account Down',
		keyTypeOpt42: 'SMS',

		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountAuto: 'Auto',
		accountNumber: 'Account',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
lineKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',
		
		lineKeys: [1, 2, 3, 4, 5, 6],
		lineKeys_A2x: [1, 2],
		lineKeys_A4x: [1, 2, 3, 4],
		lineKey: 'Line Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'HOLD',
		keyTypeOpt18: 'Do Not Disturb (DND)',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialled',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Hot Desking',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		keyTypeOpt40: 'Switch Account Up',
		keyTypeOpt41: 'Switch Account Down',
		keyTypeOpt42: 'SMS',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountAuto: 'Auto',
		accountNumber: 'Account',
		
		GroupPickup: 'GPickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
programKeyHtml = {
	form1: {
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',

        programKeys: ['Mute', 'HOLD', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3', 'SoftKey4'],

		programKeys_A1x: ['Mute', 'HOLD', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3'],

		programKeys_A2x: ['Mute', 'HOLD', 'Redial', 
		              'Up', 'Down', 'Left', 'Right', 'Cancel', 'Ok', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3'],

        	programKeys_CT11: ['Mute', 'Up', 'Down', 
		              'SoftKey1', 'SoftKey2', 'SoftKey3', 'SoftKey4'],

		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',

		keyTypeOpt4: 'Message',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'HOLD',
		keyTypeOpt18: 'Do Not Disturb (DND)',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialled',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'Status',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Hot Desking',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		keyTypeOpt40: 'Switch Account Up',
		keyTypeOpt41: 'Switch Account Down',
		keyTypeOpt42: 'SMS',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountAuto: 'Auto',
		accountNumber: 'Account',
		
		GroupPickup: 'Group Pickup',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}	
},
aetAdvHtml = {
	form1: {
		networkSetting: 'Expansion Module Network Settings',
		innerNet: 'Internal Network',
		dhcp: 'DHCP',
		staticIp: 'Static IP Address',
		ip: 'IP Address',
		subnetMask: 'Subnet Mask',
		defaultGateway: 'Default Gateway',
                StaticDNSEnable: 'Static DNS',
   		on: 'On',
		off: 'Off',

		primaryDNS: 'Primary DNS',
		secondaryDNS: 'Secondary DNS',
		device: 'Device',
		aetStatusConnected: 'Connected',
		aetStatusDisconnected: 'Disconnected',


		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			innerNet: 'Internal Network',
			dhcp: 'Automatically obtain from the DHCP server: IP address, subnet mask, gateway, DNS.',
			staticIp: 'Configure manually the IP address, subnet mask, gateway, DNS, etc.',
			StaticDNSEnable: 'It enables or disables the phone to use manually configured static IPv4/IPv6 DNS when the Internet (WAN) port type for IPv4/IPv6 is configured as DHCP.'
		}
	}
},
aetUpgradeHtml = {
	form1: {
		upgradeHeader: 'Upgrade Firmware',
		selectFw: 'Select Firmware',
		upgrade: 'Upgrade',
		
		tips: {
		}
	}
},
extKeyHtml = {
	form1: {
		linkControl: 'Expansion Module Control',
		linkableDivice: 'Linked Expansion Module',
		key: 'Key',
		type: 'Type',
		value: 'Value',
		label: 'Label',
		account: 'Account',
		ext: 'Extension',
		
		dssKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ,37, 38,
		          39, 40, 41, 42, 43, 44],
		dssKey: 'EXT Key',
		
		keyTypeOpt0: 'Default',
		keyTypeOpt1: 'Line',
		keyTypeOpt2: 'Speed Dial',
		keyTypeOpt4: 'Messages',
		keyTypeOpt5: 'BLF',
		
		keyTypeOpt8: 'BLF List',
		keyTypeOpt9: 'Direct Pickup',
		keyTypeOpt10: 'Group Pickup',
		keyTypeOpt11: 'Call Park',
		keyTypeOpt12: 'Intercom',
		keyTypeOpt13: 'DTMF',
		keyTypeOpt14: 'Conference',
		keyTypeOpt15: 'Forward',
		keyTypeOpt16: 'Transfer',
		keyTypeOpt17: 'HOLD',
		keyTypeOpt18: 'Do Not Disturb (DND)',
		keyTypeOpt19: 'Redial',
		keyTypeOpt20: 'Directory',
		keyTypeOpt21: 'Call Return',
		keyTypeOpt22: 'Prefix',
		keyTypeOpt23: 'LDAP',
		keyTypeOpt24: 'SH', /*key pad lock key*/
		keyTypeOpt25: 'Dialled',
		keyTypeOpt26: 'Received',
		keyTypeOpt27: 'Missed',
		keyTypeOpt28: 'Forwarded',
		keyTypeOpt29: 'Contact',
		keyTypeOpt30: 'Menu',
		keyTypeOpt31: 'N/A',
		keyTypeOpt32: 'History',
		keyTypeOpt33: 'OK',
		keyTypeOpt34: 'Voice mail',
		keyTypeOpt35: 'Mute',
		keyTypeOpt36: 'Hot Desking',
		keyTypeOpt37: 'Cancel',
		keyTypeOpt38: 'Paging',
		keyTypeOpt39: 'Paging List',
		keyTypeOpt40: 'Switch Account Up',
		keyTypeOpt41: 'Switch Account Down',
		keyTypeOpt42: 'SMS',
		
		accountNumberOpt1: 'Account 1',
		accountNumberOpt2: 'Account 2',
		accountNumberOpt3: 'Account 3',
		accountNumberOpt4: 'Account 4',
		accountNumberOpt5: 'Account 5',
		accountNumberOpt6: 'Account 6',
		accountAuto: 'Auto',
		accountNumber: 'Account',
		
		GroupPickup: 'Group Pickup',
		editDeviceSetting: 'Edit Ext Setting',
		deviceList: 'Device List',
		deviceIdCode: 'ID Code',
		addNewDevice: 'Add New Device',
		butClose: 'Close',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},	
	tips: {	
			linkControl: '',
			linkableDivice: 'Expansion module ID which displays on its main menu.'
		}
	
},
extKeyBackHtml = {
	noLink: 'No expansion module connected! Please connect it and refresh this page.'	
},
phoneSipMessageHtml = {
	form1: {
		recvMess: 'Receive Messages',
		unreadMess: 'Unread Messages',
		sentMess: 'Sent Messages',

		index: 'Index',
		sendTo: 'Send To',
		sendFrom: 'Send From',
		message: 'Message',
		time: 'Time',

		account: 'Account',
		targetNum: 'Target Number',
		delMessage: 'Delete',
		detailMessage: 'Detail',
		from: 'From',
		to: 'To',
		time: 'Time',
		

		send: 'Send',
		close: 'Close',
	},
},
phonePreferenceHtml = {
	form1: {
		timeZoneDaylightMap: [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0],

		timeZoneOptsIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 108, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 109, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107],
		timeZoneOpts: ['-11 Samoa',
		              
		              '-10 United States-Hawaii-Aleutian',
		              '-10 United States-Alaska-Aleutian',
		              
		              '-9 United States-Alaska Time',
		              
		              '-8 Canada(Vancouver,Whitehorse)',
		              '-8 Mexico(Tijuana,Mexicali)',
		              '-8 United States-Pacific Time',
		              
		              '-7 Canada(Edmonton,Calgary)',
		              '-7 Mexico(Mazatlan,Chihuahua)',
		              '-7 United States-Mountain Time',
		              '-7 United States-MST no DST',
		              
		              '-6 Canada-Manitoba(Winnipeg)',
		              '-6 Chile(Easter Islands)',
		              '-6 Mexico(Mexico City,Acapulco)',
		              '-6 United States-Central Time',
		              
		              '-5 Bahamas(Nassau)',
		              '-5 Canada(Montreal,Ottawa,Quebec',
		              '-5 Cuba(Havana)',
		              '-5 United States-Eastern Time',
		              
		              '-4:30 Venezuela(Caracas)',
		              
		              '-4 Canada(Halifax,Saint John)',
		              '-4 Chile(Santiago)',
		              '-4 Paraguay(Asuncion)',
		              '-4 United Kingdom-Bermuda(Bermuda)',
		              '-4 United Kingdom(Falkland Islands)',
		              '-4 Trinidad&Tobago',
		              
		              '-3:30 Canada-New Foundland(St.Johns)',
		              
		              '-3 Denmark-Greenland(Nuuk)',
		              '-3 Argentina(Buenos Aires)',
		              '-3 Brazil(no DST)',
		              '-3 Brazil(DST)',
		              
		              '-2 Brazil(no DST)',
		              
		              '-1 Portugal(Azores)',
		              
		              '0 GMT',
		              '0 Greenland',
		              '0 Denmark-Faroe Islands(Torshaven)',
		              '0 Ireland(Dublin)',
		              '0 Portugal(Lisboa,Porto,Funchal)',
		              '0 Spain-Canary Islands(Las Palmas)',
		              '0 United Kingdom(London)',
		              '0 Morocco',
		              
		              '+1 Albania(Tirane)',
		              '+1 Austria(Vienna)',
		              '+1 Belgium(Brussels)',
		              '+1 Caicos',
		              '+1 Chatam',
		              '+1 Croatia(Zagreb)',
		              '+1 Czech Republic(Prague)',
		              '+1 Denmark(Kopenhaven)',
		              '+1 France(Paris)',
		              '+1 Germany(Berlin)',
		              '+1 Hungary(Budapest)',
		              '+1 Italy(Rome)',
		              '+1 Luxembourg(Luxembourg)',
		              '+1 Makedonia(Skopje)',
		              '+1 Netherlands(Amsterdam)',
		              '+1 Namibia(Windhoek)',
			      '+1 Poland(Warsaw)',
		              
		              '+2 Estonia(Tallinn)',
		              '+2 Finland(Helsinki)',
		              '+2 Gaza Strip(Gaza)',
		              '+2 Greece(Athens)',
		              '+2 Israel(Tel Aviv)',
		              '+2 Jordan(Amman)',
		              '+2 Latvia(Riga)',
		              '+2 Lebanon(Beirut)',
		              '+2 Moldova(Kishinev)',
		              '+2 Russia(Kaliningrad)',
		              '+2 Romania(Bucharest)',
		              '+2 Syria(Damascus)',
		              '+2 Turkey(Ankara)',
		              '+2 Ukraine(Kyiv,Odessa)',
		              '+2 South Africa(Johannesburg)',
		              
		              '+3 East Africa Time',
		              '+3 Iraq(Baghdad)',
		              '+3 Russia(Moscow)',
		              
		              '+3:30 Iran(Teheran)',
		              
		              '+4 Armenia(Yerevan)',
		              '+4 Azerbaijan(Baku)',
		              '+4 Georgia(Tbilisi)',
		              '+4 Kazakhstan (Aqtau)',
		              '+4 Russia(Samara)',
		              
		              '+4:30 Afghanistan (Kabul)',
		              
		              '+5 Kazakhstan (Aqtobe)',
		              '+5 Kyrgyzstan (Bishkek)',
		              '+5 Pakistan (Islamabad)',
		              '+5 Russia (Chelyabinsk)',
		              
		              '+5:30 India(Calcutta)',
		              
		              '+5:45 Nepal (Kathmandu)',
		              
		              '+6 Kazakhstan (Astana,Almaty)',
		              '+6 Russia(Novosibirsk,Omsk)',
		              
	                '+6:30 Myanmar (Rangoon)',
		              
		              '+7 Russia(Krasnoyarsk)',
		              '+7 Thailand(Bangkok)',
		              
		              '+8 China(Beijing)',
		              '+8 Singapore(Singapore)',
		              '+8 Australia(Perth)',
		              
		              '+9 Korea(Seoul)',
		              '+9 Japan(Tokyo)',
		              
		              '+9:30 Australia(Adelaide)',
		              '+9:30 Australia(Darwin)',
		              
		              '+10 Australia(Sydney,Melbourne,Canberra)',
		              '+10 Australia(Brisbane)',
		              '+10 Australia(Hobart)',
		              '+10 Russia(Vladivostok)',
		              
		              '+10:30 Australia(Lord Howe Islands)',
		              
		              '+11 New Caledonia(Noumea)',
		              
		              '+12 New Zeland(Wellington,Auckland)',
		              
		              '+12:45 New Zeland(Chatham Islands)',
		              
		              '+13 Tonga(Nukualofa)'],
		dhcpTime: 'DHCP Time',
		disable: 'Disabled',
		enable: 'Enabled',
		auto: 'Automatic',
		timeZone: 'Time Zone',
		primaryNtp: 'Primary NTP Server',
		secondaryNtp: 'Secondary NTP Server',
		updateInterval: 'Update Interval (s)',
		daylight: 'Daylight Saving Time',
		fixedType: 'Fixed DST Change',
		fixedTypeOpt0: 'By Date',
		fixedTypeOpt1: 'By Week',
		startMonth: 'DST Start Month',
		January: 'January',
		February: 'February',
		March: 'March',
		April: 'April',
		May: 'May',
		June: 'June',
		July: 'July',
		August: 'August',
		September: 'September',
		October: 'October',
		November: 'November',
		December: 'December',
		startDate: 'Start Date',
		startHourDay: 'Start Hour of Day',
		startDayWeek: 'Start Day of Week',
		Sunday: 'Sunday',
		Monday: 'Monday',
		Tuesday: 'Tuesday',
		Wednesday: 'Wednesday',
		Thursday: 'Thursday',
		Friday: 'Friday',
		Saturday: 'Saturday',
		startWeekMonth: 'Start Week of Month',
		firstInMonth: 'First in Month',
		secondInMonth: 'Second in Month',
		thirdInMonth: 'Third in Month',
		fourthInMonth: 'Fourth In Month',
		lastInMonth: 'Last in Month',
		stopMonth: 'Stop Month',
		stopDate: 'Stop Date',
		stopHourDay: 'Stop Hour of Day',
		stopDayWeek: 'Stop Day of Week',
		stopWeekMonth: 'Stop Week of Month',
		offset: 'Time Offset (min)',
		manualTime: 'Manual Time',
		dateYmd: 'Date',
		autoDate: 'Current Date',
		timeHms: 'Time',
		autoTime: 'Current Time',
		timeFormat: 'Time Format',
		timeFormatOpt0: '12-hour',
		timeFormatOpt1: '24-hour',
		dateFormat: 'Date Format',
		backlightTime: 'LCD Backlight Time',
		backlightTimeOpt0: 'Always on',
		backlightTimeOpt1: '1 min',
		backlightTimeOpt2: '2 min',
		backlightTimeOpt3: '5 min',
		backlightTimeOpt4: '10 min',
		backlightTimeOpt5: '30 min',
		screensaver_timeout: 'Screensaver Time',
		screensaver_timeoutOpt0: 'Off',
		screensaver_timeoutOpt1: '1 min',
		screensaver_timeoutOpt2: '2 min',
		screensaver_timeoutOpt3: '5 min',
		screensaver_timeoutOpt4: '10 min',
		screensaver_timeoutOpt5: '30 min',
		backlightLevel: 'Backlight Level',
		slaveBacklightLevel: 'Slave Backlight Level',
		expandBacklightLevel: 'Expand Backlight Level',
		slaveLcdContract: 'Slave LCD Contrast',
		ringTones: 'Ring Tones',
		ringTonesOpt1: 'Ring1.wav',
		ringTonesOpt2: 'Ring2.wav',
		ringTonesOpt3: 'Ring3.wav',
		ringTonesOpt4: 'Ring4.wav',
		ringTonesOpt5: 'Ring5.wav',
		ringTonesOpt6: 'Ring6.wav',
		ringTonesOpt7: 'Ring7.wav',
		ringTonesOpt8: 'Ring8.wav',
		ringTonesOpt9: 'Ring9.wav',
		ringTonesOpt10: 'Ring10.wav',
		replaceRingTone: 'Replace Ring Tone',
		wallpaper: 'Wallpaper',
		delWallpaper: 'Delete',
		uploadWallpaper: 'Upload',
		cancelWallpaper: 'Cancel',
		screensaver: 'Screensaver',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			dhcpTime: 'Enable or disable the IP phone to update time with the offset time obtained from the DHCP server.',
			replaceRingTone: 'Recommended file format: 16-bit, wave; the file size should be less than 800 kB for the colour display phone, and less than 300 kB for the monochrome display phone.',
			timeZone: 'Select your timezone.',
			updateInterval: 'Set the time interval for checking local phone\'s time with the server.',
			daylight: 'Daylight Saving Time settings.',
			manualTime: 'Enable/disable manual time setting.',
			timeFormat: 'Set time as 12-hour or 24-hour.',
			dateFormat: 'Set the date display format.',
			backlightTime: 'Set the backlight time.',
			screensaver_timeout: 'Set the screensaver time.',
			backlightLevel: 'Phone backlight brightness adjustment.',
			ringTones: 'Select the ring tone.',
			pictureSize: 'The best picture resolution is 461x278 pixels and the size should be less than 500 KB.'
		}
	}
},
phoneFeaturesHtml = {
	form1: {
		disable: 'Disabled',
		enable: 'Enabled',
		off: 'Off',
		on: 'On',
		forward: 'Call Forward',
		always: 'Always',
		busy: 'When Busy',
		noAnswer: 'When No Answer',
		afterRingTime: 'After Ring Time (s)',
		
		target: 'Target',
		onCode: 'On Code',
		offCode: 'Off Code',
		
		dnd: 'Do Not Disturb',
		dndOnCode: 'DND On Code',
		dndOffCode: 'DND Off Code',
		authNum: 'Authorised Numbers (comma separated)',
		
		generalInfo: 'General Information',
		liveDialpad: 'Live Dialpad',
		interDigitTime: 'Interdigit Timeout (sec)',
		autoAnswer: 'Auto Answer',
		autoAnswerDelay: 'Auto Answer Delay (sec)',
		ignoreMissedCall: 'Ignore Missed Calls',
		callWaiting: 'Call Waiting',
		hotline: 'Hotline',
		hotlineTimeout: 'Hotline Timeout (0~180 sec)',
		keyAsSend: 'Key As Send',
		dialNowTimeout: 'Dial-now Timeout (sec)',
		busyToneTimer: 'Busy Tone Timer (sec)',
		returnCodeWhenRefuse: 'Return Code When Refuse',
		returnCodeWhenDnd: 'Return Code When DND',
		r404: '404 (Not found)',
		r480: '480 (Temporarily not available)',
		r486: '486 (Busy here)',
		rfc2543Hold: 'RFC 2543 Hold',
		useOutboundProxyInDialog: 'Use Outbound Proxy in Dialog',
		loginTimeout: 'Login Timeout (1~1000 min)',
		hidedtmf: 'Hide DTMF',
		multicastCodec: 'Multicast Codec',
		watchdog: 'Watch Dog',
		
		audioSettings: 'Audio Settings',
		callWaitingTone: 'Call Waiting Tone',
		headset: 'Headset Volume',
		handset: 'Handset Volume',
		handfree: 'Handfree Volume',
		ringer: 'Ringer Volume',
		headsetSend: 'Headset Send Volume',
		handsetSend: 'Handset Send Volume',
		handfreeSend: 'Handfree Send Volume',
		ringerDeviceForHeadset: 'Ringer Device for Headset',
		ringerDeviceForHeadsetOpt0: 'Use Speaker',
		ringerDeviceForHeadsetOpt1: 'Use Headset',
		
		transferSettings: 'Transfer Settings',
		blindTransferOnHook: 'Blind Transfer on Hook',
		attendedTransferOnHook: 'Attended Transfer on Hook',
		transferOnConHangUp: 'Transfer on Conference Hang Up',
		transferModeViaDsskey: 'Transfer Mode via DSS Key',
		blindTransferCode: 'Blind Transfer Code',
		attendedTransferCode: 'Attended Transfer Code',
		transferModeViaDsskeyOpt0: 'New Call',
		transferModeViaDsskeyOpt1: 'Attended Transfer',
		transferModeViaDsskeyOpt2: 'Blind Transfer',
		
		callPickup: 'Call Pickup',
		directCallPickup: 'Direct Call Pickup',
		directCallPickupCode: 'Direct Call Pickup Code',
		groupCallPickup: 'Group Call Pickup',
		groupCallPickupCode: 'Group Call Pickup Code',
		
		accept_sip_trust_server_only: 'Accept SIP Trust Server Only',
		recordUserId: 'Record User ID',
		extFunction: 'Ext Function',
		holdOnConference: 'Conference hold when add new',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			forward: 'Set Call Forward.',
			alwaysTarget: 'Set the target number for all forwarded calls.',
			alwaysOnCode: 'The feature code the phone will send to enable the call forward for all incoming calls.',
			alwaysOffCode: 'The feature code the phone will send to disable the call forward for all incoming calls.',
			busyTarget: 'Set the target number for the forwarded calls, if the user is busy.',
			busyOnCode: 'The feature code the phone will send to enable the call forward for incoming calls if the user is busy.',
			busyOffCode: 'The feature code the phone will send to disable the call forward for incoming calls if the user is busy.',
			afterRingTime: 'Waiting time before the No Answer forward is enabled.',
			noAnswerTarget: 'Set the target number for the forwarded calls if the call is not answered within a given time.',
			noAnswerOnCode: 'The feature code the phone will send to enable the call forward for incoming calls if the call is not answered within a given time.',
			noAnswerOffCode: 'The feature code the phone will send to disable the call forward for incoming calls if the call is not answered within a given time.',
			
			dndOnCode: 'The feature code the phone will send to enable the DND mode.',
			dndOffCode: 'The feature code the phone will send to disable the DND mode.',
			
			liveDialpad: 'Enable/disable Dial Out Automatically on user dial-up interface.',
			interDigitTime: 'Automatically Dial Out delay time for live dialpad.',
			autoAnswer: 'Enable/disable Auto Answer.',
			autoAnswerDelay: 'It configures the delay time (in seconds) before the IP phone automatically answers an incoming call.',
			callWaiting: 'Enable/disable Call Waiting.',
			hotline: 'Set Hotline number.',
			hotlineTimeout: 'Set Hotline delay time.',
			keyAsSend: 'Set key sending the dialled number.',
			dialNowTimeout: 'Interval for Dial Now.',
			busyToneTimer: 'Busy tone after the call ends.',
			returnCodeWhenRefuse: 'Set return message for call rejection.',
			returnCodeWhenDnd: 'Set return message for Do Not Disturb.',
			rfc2543Hold: 'Two kinds of standards for HOLD, need server support.',
			useOutboundProxyInDialog: 'Enable/disable Outbound Proxy on conversation.',
			loginTimeout: 'Timeout (in minutes) for web access authentication, if the first authentication fails.',
			acceptSipTrustServerOnly: 'Enable/disable the IP phone to only accept the SIP message from the SIP and outbound proxy server.',

			callWaitingTone: 'Enable/disable tone for prompting a new call during an ongoing call (call waiting option enabled).',
			ringerDeviceForHeadset: 'Call ring method choice for headset.',

			blindTransferOnHook: 'Enable/disable Blind Tranfer on Hook.',
			attendedTransferOnHook: 'Enable/disable Attended Transfer and Semi-Attended Transfer with on Hook.',
			transferOnConHangUp: 'Enable/disable to transfer to another two parties while conference initiator hang up.'
		}
	}	
},
phoneDNDAndForwardHtml = {
	form1: {
		phone: 'Phone',
		custom: 'Custom',
		forward: 'Call Forward',
		emergency: 'Emergency',
		authNum: 'Authorized Numbers',
		mode: 'Mode',
		account: 'Account',
		disable: 'Disabled',
		enable: 'Enabled',
		off: 'Off',
		on: 'On',
		always: 'Always',
		busy: 'When Busy',
		noAnswer: 'When No Answer',
		afterRingTime: 'After Ring Time (s)',
		
		target: 'Target',
		onCode: 'On Code',
		offCode: 'Off Code',
		

		dndStatus: 'DND Status',
		dnd: 'Do Not Disturb',
		dndOnCode: 'DND On Code',
		dndOffCode: 'DND Off Code',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			forward: 'Set Call Forward.',
			alwaysTarget: 'Set the target number you want to transfer to.',
			alwaysOnCode: 'The feature code to enable all incoming calls forward, the phone will send the feature code directly to open all incoming calls forward.',
			alwaysOffCode: 'The feature code to disable all incoming calls forward, the phone will send the feature code directly to close all incoming calls forward.',
			busyTarget: 'Set the target number you want to transfer to.',
			busyOnCode: 'The feature code to enable busy call forward, the phone will send the feature code directly to open busy call forward.',
			busyOffCode: 'The feature code to disable busy call forward, the phone will send the feature code directly to close busy call forward.',
			afterRingTime: 'Waiting time for NoAnswer forward.',
			noAnswerTarget: 'Set the target number you want to transfer to.',
			noAnswerOnCode: 'The feature code to enable no answer call forward, the phone will send the feature code directly to open no answer call forward.',
			noAnswerOffCode: 'The feature code to disable no answer call forward, the phone will send the feature code directly to close no answer call forward.',
			
			dndOnCode: 'The feature code to enable DND, the phone will send the feature code directly to open DND.',
			dndOffCode: 'The feature code to disable DND, the phone will send the feature code directly to close DND.',
			
		}
	}
},
phoneUpgradeHtml = {
	div1: {
		ver: 'Version',
		fmVer: 'Firmware Version',
		hdVer: 'Hardware Version',
		
		resetToFactory: 'Factory Reset',
		reboot: 'Reboot',		
		
		upgradeHeader: 'Upgrade Firmware',
		selectFw: 'Select Firmware',
		upgrade: 'Upgrade',
		
		tips: {
			upgradeHeader: 'Select the up-to-date firmware version released by supplier to upgrade.'
		}
	},
	commonText: {
		resetConfirm: 'Do you want to reset to factory settings?',
		resetSuccess: 'Factory Reset successful. The phone will reboot automatically.',
		resetFail: 'Factory Reset failed, please try again!',
		
		rebootConfirm: 'Do you want to reboot?',
		
		uploadFilePrompt: 'This is to upload file:',
		upgradeMsg: 'Please do not turn the power off!',
		upgradeText: 'Upgrading, please wait...',
		
		upgradeFail: 'Upgrade failed, please try again!'
	}
},
phoneDebugHtml = {
	div1: {
		pcapFeature: 'PCAP Feature',
		start: 'Start',
		stop: 'Stop',
		exportStr: 'Export',
		
		debug: 'Debug'
	}
},
phoneAutoHtml = {
	form1: {
		autoProvision: 'Auto Provision',
		PnPEnable: 'PnP Active',
		DHCPEnable: 'DHCP Active',
		provisioningServer: 'Provisioning Server',
		dhcpCustomOptionFor66: 'Custom Option(128~254)',
		userName: 'User Name',
		password: 'Password',
		commonAESKey: 'Common AES Key',
		MACAESKey: 'MAC-Oriented AES Key',
		checkNewConfig: 'Check New Config',
		off: 'Off',
		on: 'On',
		repeatedly: 'Repeatedly',
		interval: 'Interval (min)',
		weekly: 'Weekly',
		time: 'Time',
		dayOfWeek: 'Day of week',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			PnPEnable: 'The request to the server to obtain a support URL for settings upgrade.',
			DHCPEnable: 'Obtain a support URL for settings upgrade from DHCP server.',
			provisioningServer: 'Set provisioning server address.',
			dhcpCustomOptionFor66: 'It configures the custom DHCP option for requesting provisioning server address.',
			password: 'Server password',
			checkNewConfig: 'Check the device configuration on the server after each reboot.'
		}
	},
	showText: {
		weekly:  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	}
},
phoneConfigurationHtml = {
	div1: {
		importExportCfg: 'Import / Export Configuration',
		importFile: 'Import File',
		importStr: 'Import',
		exportStr: 'Export',
		exportUserData: 'Export User Data',
		exportImportConfig: 'Import/Export CFG File',
		
		exportSyslog: 'Export System Log',
		logLocation: 'Log Location',
		logLocationOpt0: 'Local',
		logLocationOpt1: 'Server', 
		serverName: 'Server Name',
		logLevel: 'Log Level',
		logOpt0: 'Fatal',
		logOpt1: 'Error',
		logOpt2: 'Warning',
		logOpt3: 'Info',
		logOpt4: 'Debug',
		exportStr2: 'Export',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			exportImportConfig: 'The imported or exported file must have an auto provision file format. The exported file includes the modified configuration only, so it will be empty if no changes were made',
			importExportCfg: 'Export the phone\'s current configuration or import the selected configuration file. After the configuration import the phone will reboot.',
			exportSyslog: 'If the type is Local, it will export the syslog directly; if the type is server, it will export the syslog to the specified server.'
		}
	}
},
phonePowerIndicatorLEDHtml = {
		 form1: {
			powerLED: 'Power LED',
			commonEnable: 'Common Power Light On',
			ringFlashEnable: 'Ringing Power Light Flash',
			mailFlashEnable: 'Voice/Text Mail Power Light Flash',
			muteFlashEnable: 'Mute Power Light Flash',
			holdAndHeldFlashEnable: 'Hold/Held Power Light Flash',
			talkAndDialEnable: 'Talk/Dial Power Light On',
			missedCallFlashEnable: 'Missed Call Light Flash',
			disable: 'Disabled',
			enable: 'Enabled',
			butConfirm: 'Confirm',
			butCancel: 'Cancel'
		},
},
phoneRemoteControlHtml = {
	form1: {
		disable: 'Disable',
		enable: 'Enable',
		actionURIIPList:'Action URI allow IP List',
		remoteControl:'Remote Control',
		cstaControl: 'CSTA Control',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	       },
},
phoneActionUrlHtml = {
	form1: {
		actionUrlItem: ['setupCompletedUrl','registeredUrl','unregisteredUrl','registerFailedUrl','offHookUrl','onHookUrl','incomingCallUrl','outgoingCallUrl','establishedUrl','terminatedUrl','openDNDUrl','closeDNDUrl','openAlwaysForwardUrl','closeAlwaysForwardUrl','openBusyForwardUrl','closeBusyForwardUrl','openNoAnswerForwardUrl','closeNoAnswerForwardUrl','transferCallUrl','blindTransferUrl','attendedTransferUrl','holdUrl','unHoldUrl','muteUrl','unMuteUrl', 'missedCallUrl','IPChangedUrl','idleToBusyUrl','busyToIdleUrl','rejectIncomingCallUrl','answerNewIncomingCallUrl','transferFailedUrl','transferFinishedUrl','forwardIncomingCallUrl','autopFinishUrl','openCallWaitingUrl','closeCallWaitingUrl','headsetUrl','handfreeUrl','cancelCallOutUrl','remoteBusyUrl','callRemoteCanceledUrl'],
		actionUrlNameList: ['Setup Completed','Registered','Unregistered','Registration Failed','Off Hook','On Hook','Incoming Call','Outgoing Call','Call Established','Call Terminated','DND Enabled','DND Disabled','Always Forward Enabled','Always Forward Disabled','Call Forward Busy Enabled','Call Forward Busy Disabled','Call Forward No Answer Enabled','Call Forward No Answer Disabled','Call Transfer','Blind Transfer','Attended Transfer','Hold','UnHold','Mute','UnMute','Missed Call','IP Changed','Idle To Busy','Busy To Idle','Incoming Call Rejected','Incoming Call Answered','Transfer Failed','Transfer Finished','Incoming Call Forward','Autoprovision Finished','Call Waiting Enabled','Call Waiting Disabled','Headset','Handsfree','Call Out Canceled','Remote Busy','Call Remote Canceled'],
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}
},

phoneTonesHtml = {
	form1: {
		       /*country list*/
		custom: 'Custom',
   	    	australia: 'Australia',
		austria: 'Austria',
	       	brazil: 'Brazil',
		belgium: 'Belgium',
		chile: 'Chile',
		china: 'China',
		czech: 'Czech',
		czechETSI: 'Czech  ETSI',
		denmark: 'Denmark',
		finland: 'Finland',
		france: 'France',
		germany: 'Germany',
		greatBritain: 'Great Britain',
		greece: 'Greece',
		hungary: 'Hungary',
		lithuania: 'Lithuania',
		india: 'India',
		italy: 'Italy',
		japan: 'Japan',
		mexico: 'Mexico',
		newZealand: 'New Zealand',
		netherlands: 'Netherlands',
		norway: 'Norway',
		portugal: 'Portugal',
		spain: 'Spain',
		switzerland: 'Switzerland',
		sweden: 'Sweden',
		russia: 'Russia',
		unitedStates: 'United States',
		       /*end of country list*/

		selectCountry: 'Select Country',
		dial: 'Dial',
		ringBack: 'Ring Back',
		busy: 'Busy',
		congestion: 'Congestion',
		callWaiting: 'Call Waiting',
		dialRecall: 'Dial Recall',
		info: 'Info',
		stutter: 'Stutter',
		message: 'Message',
		autoAnswer: 'Auto Answer',
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}
},

phoneDialPlanHtml = {
	mytabMenu: {
		replaceRule: 'Replace Rule',
		dialNow: 'Dial Now',
		areaCode: 'Area Code',
		blockOut: 'Block Out'
	},
	replaceRuleTitle: ['Index', 'Number', 'Replace', 'Account'],
	dialNowsTitle: ['Index', 'Dial Now Rule', 'Account'],
	replaceRuleForm: {
		num: 'Number',
		replace: 'Replace by',
		account: 'Account',
		add: 'Add',
		edit: 'Edit',
		del : 'Delete',
		save: 'Save'
	},
	dialNowsForm: {
		rule: 'Dial Now Rule',
		account: 'Account',
		add: 'Add',
		edit: 'Edit',
		del : 'Delete',
		save: 'Save'
	},
	form3: {
		code: 'Code',
		minLen: 'Minimum length',
		maxLen: 'Maximum length',
		areaCodeAccount: 'Account',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	},
	form4: {
		nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		blockOutNum: 'Block Out Number',
		account: 'Account',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel'
	}
},
phoneVoiceHtml = {
	form1: {
		disable: 'Disabled',
		enable: 'Enabled',
		
		echoCancellation: 'Echo Cancellation',
		echoCanceller: 'Echo Canceller',
		echoCancellerOpt0: 'Low Level',
		echoCancellerOpt1: 'Medium Level',
		echoCancellerOpt2: 'High Level',
		vad: 'VAD',
		cng: 'CNG',
		
		jitterBuffer: 'Jitter Buffer',
		type: 'Type',
		typeOpt0: 'Fixed',
		typeOpt1: 'Adaptive',
		minDelay: 'Minimum Delay',
		maxDelay: 'Maximum Delay',
		normalDelay: 'Normal Delay',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			echoCancellation: 'Echo cancellation settings.',
			echoCanceller: 'Select echo canceller.',
			vad: 'Voice Activity Detection.',
			cng: 'Comfort Noise Generator.',
			jitterBuffer: 'This is a data shared area, voice and data packets can be collected, stored and sent uniformly to the sound processor.'
		}
	}
},


phoneTrustedCertificatesHtml = {
    form1: {
        index: 'Index',
        issued_to: 'Issued To',
        issued_by: 'Issued By',
        expiration: 'Expiration',
        delete_select: 'Delete',
        import_trusted_certificates: 'Import trusted certificates',
        certificationfile: 'Import trusted certificates file',
        import_server_certificates: 'Import server certificates',
	server_certificationfile: 'Import server certification file',
	btn_upload: 'Import',
	btn_delete: 'Delete',
	butConfirm: 'Confirm',
	butCancel: 'Cancel'
	},
    showText: {
		delConfirm: 'Delete the selected files?',
		selectEmpty: 'Please select at least one record.'
	}
},


phoneRingHtml = {
	form1: {
		alterInfoTitle: 'Alert Info Ringer Text',
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		tips: {
		}
	       }
},

phoneLockHtml = {
	form1: {

		disable: 'Disabled',
		enable: 'Enabled',

		keypad_lock: 'Phone Lock',
		keypadlock_enable: 'Keypad Lock Status',
		keypadlock_type: 'Keypad Lock Type',
		keypadlock_password: 'Phone Unlock PIN (0~15 digits)',
		delay_lock: 'Phone Lock Timeout (0~3600 sec)',
		emergency_call: 'Emergency Numbers',
		keypad_lock_menu_key: 'Menu Keys',
		keypad_lock_function_key: 'Programmable Keys',
		keypad_lock_all_keys: 'All Keys',
		keypad_lock_answer_call_only:'Answer Call Only',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			emergency_call: 'Emergency numbers available for calling out when the keypad is locked.'
		}
	}
},

phoneTr069Html = {
	form1: {

		disable: 'Disabled',
		enable: 'Enabled',

		tr069: 'TR069',
		tr069_enable: 'Enable TR069',
		serveraddress: 'ACS URL',
		serverport: 'Port',
		username: 'ACS Username',
		password: 'ACS Password',
		periodic_inform_enable: 'Enable Periodic Inform',
		periodic_inform_interval: 'Periodic Inform Interval (sec)',
		connection_request_username: 'Connection Request Username',
		connection_request_password:'Connection Request Password',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			tr069_enable: 'It enables or disables the TR069 feature',
			ACS_URL: 'The access URL of the ACS (Auto Configuration Servers)',
			ACS_username: 'It configures the user name for the IP phone to authenticate with the ACS (Auto Configuration Servers)',
			ACS_password: 'Password for the IP phone to authenticate with the ACS',
			periodic_inform_enable: 'Enable/disable the IP phone to periodically report its configuration information to the ACS',
			periodic_inform_interval: 'Range: 5~4294967295',
			connecting_request_username: 'The user name for the IP phone to authenticate the incoming connection requests',
			connecting_request_password: 'The password for the IP phone to authenticate the incoming connection requests'
		}
	}
},

phoneSecurityHtml = {
	form1: {
		passwdModify: 'Change Password',
		userType: 'User Type',
		currentPasswd: 'Current Password',
		newPasswd: 'New Password',
		confirmPasswd: 'Confirm Password',
		
		butConfirm: 'Confirm',
		butCancel: 'Cancel',
		
		tips: {
			userType: 'Select your type. If you are logged in as a user, you can only change your own password. If you are logged in as an administrator, you can modify both the user\'s and admin\'s passwords.'
		}
	},
	showText: {
		pwdNoMatch: 'The passwords are not the same',
		modifyFailed: 'Password change failed, please try again!'
	}
},
contactsHtml = {
	mytabMenu: ['Contacts', 'Black List'],
	tableHeader: ['Index', 'Name', 'Office Number', 'Mobile Number', 'Other Number', 'Account'],
	buttonDiv: {
		save: 'Save',
		del: 'Delete',
		moveToBlack: 'Move to Black List',
		moveToWhite: 'Move to Contacts'
	},
	editDiv: {
		contacts: 'Contact',
		name: 'Name',
		officeNum: 'Office Number',
		mobileNum: 'Mobile Number',
		otherNum: 'Other Number',
		account: 'Account',
		accountAuto: 'Auto',
		accountNumber: 'Account',
		accountOpt1: 'Account 1',
		accountOpt2: 'Account 2',
		accountOpt3: 'Account 3',
		accountOpt4: 'Account 4',
		accountOpt5: 'Account 5',
		accountOpt6: 'Account 6',
		ring: 'Ring',
		ringOpts: ['Auto', 'Ring1.wav', 'Ring2.wav', 'Ring3.wav', 'Ring4.wav', 
		           'Ring5.wav', 'Ring6.wav', 'Ring7.wav', 'Ring8.wav', 'Ring9.wav', 'Ring10.wav'],
		photo: 'Photo',
		add: 'Add',
		defaultPhoto: 'Default',
		deletePhoto: 'Delete',
		uploadPhoto: 'Upload Photo',
		edit: 'Save Changes and Clear',
		pictureSize: 'Best photo resolution is 100x135 pixels and the size should be less than 250 KBytes.',
		search: 'Search',
		
		importAndExport: 'Import and Export Local Contacts',
		importFile: 'Import Local Contacts',
		importStr: 'Import',
		exportStr: 'Export'
	},
	
	shwoText: {
		delConfirm: 'Delete the selected contacts?',
		delConfirm1: 'Note: the contact photo will not be saved!', 
		selectEmpty: 'Select at least one record.',
		selectTooMuch: 'Too many selected records!',
		nameEmpty: 'Name cannot be empty!',
		nameExist: 'Name already exists!',
		phonebookFull: 'The allowed number of contacts in the Phonebook exceeded.',
		blacklistFull: 'The allowed number of contacts in the Black List exceeded.',
		contentEmpty: 'The content cannot be empty!',
		notFind: 'The contact not found.'
	}
},

multicastHtml = {
	form1: {
		multicastListening: 'Multicast Listening',
		pagingBarge: 'Paging Barge',
		ignoreDND: 'Ignore DND',
		pagingPriorityActive: 'Paging Priority Active',
		ipAddr: 'IP Address',
		listeningAddr: 'Listening Address',
		label: 'Label',
		channel: 'Channel',
		priority: 'Priority',
		disabled: 'Disabled',
		enabled: 'Enabled',

		pagingListLabel: 'Paging List',
		index: 'Index',
		pagingAddr: 'Paging Address',


		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
		}
	}
},

LDAPHtml = {
	form1: {
		disable: 'Disabled',
		enable: 'Enabled',

		LDAP:'LDAP',
		enable_ldap:'LDAP Status',

        name_filter:'LDAP Name Filter',
        number_filter:'LDAP Number Filter',

        name_attributes:'LDAP Name Attributes',
        number_attributes:'LDAP Number Attributes',
        display_name:'LDAP Display Name',

        server_address:'Server Address',
        port:'Port',
        base:'Base',
        user_name:'Username',
        password:'Password',
        max_hits:'Max Hits (1-32000)',
        protocol_version:'Protocol',
        version2:'Version 2',
        version3:'Version 3',
        optionNo: 'No',
		optionYes: 'Yes',

        match_incoming_calls:'LDAP Lookup for Incoming Calls',
        ldap_lookup_for_dial:'LDAP Lookup when Dialling',
        sort_result:'LDAP Sorting Results',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			LDAP: 'LDAP Phonebook Status.',
			name_filter: 'The phone will filter the LDAP contacts on the server by characters.',
			number_filter: 'The phone will filter the LDAP contacts on the server by digits.',
			server_address: 'LDAP server address, the value can be IP or Domain name.',
			port: 'LDAP server port.',
			base: 'Searching server root directory.',
			user_name: 'Username for logging in the LDAP server.',
			password: 'Password for logging in the LDAP server.',
			max_hits: 'The maximum query results.',
			name_attributes: 'Relevant attributes of the desired name.',
			number_attributes: 'Relevant attributes of the desired number.',
			display_name: 'The type of display name of the searching result.',
			match_incoming_calls: 'Searching display names in LDAP phonebook for incoming calls.',
			ldap_lookup_for_dial: 'Searching display names in LDAP phonebook when dialling.',
			sort_result: 'Sorting the results of LDAP phonebook searching.'
		}
	}
},

XMLPhonebookHtml = {
	form1: {
        disable: 'Disable',
		enable: 'Enable',

        index:'Index',
        remote_url:'Remote URL',
        display_name:'Display Name',

		xml_remote_phonebook:'Search Settings',

        SRemoteName:'Search Remote Phonebook',
        SRemoteNameFlashTime:'Search Flash Time (sec)',

		butConfirm: 'Confirm',
		butCancel: 'Cancel',

		tips: {
			SRemoteName: 'Enable/disable a Remote Phonebook search for an incoming or outgoing call.',
			SRemoteNameFlashTime: 'Set the interval (in seconds) for the phone to update the data of the Remote Phonebook from the Remote Phonebook server. The value 0 means the phone will not regularly update the data.'
		}
	}
},

phoneCallInfoHtml = {
	mytabMenu: ['Dialled', 'Missed', 'Received', 'Forwarded'],
	tableHeader: ['Index', 'Date/Time', 'Duration', 'Local ID', 'Name', 'Phone no.']
};
//在node.js中有效
if (typeof exports === 'object' && typeof module === 'object') {
	module.exports = {commonValidMsg: commonValidMsg, 
					uploadCommon: uploadCommon,
					alertMsg: alertMsg,
					mainJs: mainJs,
					status401Html: status401Html,
					indexHtml: indexHtml,
					statusHtml: statusHtml,
					wizardHtml: wizardHtml,
					accountBasicHtml: accountBasicHtml,
					accountCodecsHtml: accountCodecsHtml,
					accountAdvancedHtml: accountAdvancedHtml,
					networkBasicHtml: networkBasicHtml,
					networkWIFIHtml: networkWIFIHtml,
					networkAdvancedHtml: networkAdvancedHtml,
					dssKeyHtml: dssKeyHtml,
					lineKeyHtml: lineKeyHtml,
					programKeyHtml: programKeyHtml,
					extKeyHtml: extKeyHtml,
					aetAdvHtml: aetAdvHtml,
					extKeyBackHtml: extKeyBackHtml,
					phonePreferenceHtml: phonePreferenceHtml,
					phoneFeaturesHtml: phoneFeaturesHtml,
					phoneDNDAndForwardHtml: phoneDNDAndForwardHtml,
					phoneUpgradeHtml: phoneUpgradeHtml,
					phoneTrustedCertificatesHtml: phoneTrustedCertificatesHtml,
					phoneDebugHtml: phoneDebugHtml,
					phoneAutoHtml: phoneAutoHtml,
					phoneConfigurationHtml: phoneConfigurationHtml,
					phoneActionUrlHtml: phoneActionUrlHtml,
					phoneTonesHtml:phoneTonesHtml,
					phoneDialPlanHtml: phoneDialPlanHtml,
					phoneVoiceHtml: phoneVoiceHtml,
					phoneRingHtml: phoneRingHtml,
					phoneLockHtml: phoneLockHtml,
					phoneSecurityHtml: phoneSecurityHtml,
					phoneTr069Html: phoneTr069Html,
					contactsHtml: contactsHtml,
					multicastHtml: multicastHtml,
					LDAPHtml: LDAPHtml,
					XMLPhonebookHtml: XMLPhonebookHtml,
					phoneCallInfoHtml: phoneCallInfoHtml
					};
}
