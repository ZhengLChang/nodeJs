var macPlusPlus = function(macAddr){
	var macAddrExample = "00:01:02:03:04:05";
	try{
	var mac_space = 0,
    		i = 0, count = macAddr.length;	    
	var newMacAddr = "00:01:02:03:04:05";
	if(macAddrExample.length != count)
		return macAddrExample;
	for(i = 0, mac_space = 0; i < count; i++)
	{
		var curNum = macAddr.charCodeAt(i);
		if(curNum >= '0'.charCodeAt(0) && 
				curNum <= '9'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - '0'.charCodeAt(0);
			//console.log(curNum - '0'.charCodeAt(0));
		}
		else if(curNum >= 'a'.charCodeAt(0) && 
				curNum <= 'f'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - 'a'.charCodeAt(0) + 10;
		}
		else if(curNum >= 'A'.charCodeAt(0) && 
				curNum <= 'F'.charCodeAt(0))
		{
			mac_space = (mac_space << 4);
			mac_space += curNum - 'A'.charCodeAt(0) + 10;
		}
		else if(curNum == ':'.charCodeAt(0) && (i + 1) % 3 == 0)
		{
			continue;
		}
		else
		{
			return macAddrExample;
		}
	}
		mac_space++;
		newMacAddr = newMacAddr.split('');
		for(i = 0; i < count; i++)
		{
			var num = 0;
			if((i + 1) % 3 == 0)
			{
				continue;
			}
			num = mac_space - (mac_space & (~0x0f));

			if(num >= 0 && num <= 9)
			{
				newMacAddr[i] = num;
			}
			else
			{
				newMacAddr[i] = String.fromCharCode(num + 'A'.charCodeAt(0) - '' - 10);
			}
			mac_space = mac_space >> 4;
		}
		newMacAddr = newMacAddr.reverse().join('');
//		console.log(newMacAddr);
		return newMacAddr;
	}catch(err)
	{
		console.log("error occur: " + err.message);
		return macAddrExample;
	}
}
var i = 0;
var myMac = "00:01:02:03:04:0a";
for(i = 0; i < 1000; i++)
{
console.log(myMac = macPlusPlus(myMac));
}


