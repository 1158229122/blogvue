import CryptoJS from 'crypto-js'


const SecurityUtils = {

  getSign: function (data, timestamp,token,userID) {


    let paramsString = "";

    let key = new Array();
    for (var params in data) {
      key.push(params)
    }
    key.push("token");
    key.push("userID")
    key.push("timestamp")


    key = key.sort();
		let userIDIsExist=false;
    for (let i = 0; i < key.length; i++) {
      if (key[i] != "token" && key[i] != "userID" && key[i] != "timestamp" && typeof(data[key[i]]) != "undefined") {
        paramsString = paramsString + key[i] + "=" + data[key[i]];
      } else if (key[i] == "token") {
        paramsString = paramsString + "token=" + token;
      } else if (key[i] == "userID") {
				if(!userIDIsExist){
					userIDIsExist=true;
					paramsString = paramsString + "userID=" + userID;
				}
      } else if (key[i] == "timestamp") {
        paramsString = paramsString + "timestamp=" + timestamp;
      }
    }

    paramsString = paramsString.replace(/[&\|\\\*$]/g, "") + "gtcmail0716";
    let sign = CryptoJS.MD5(paramsString).toString();
    return sign;
  }
}


export default SecurityUtils;
