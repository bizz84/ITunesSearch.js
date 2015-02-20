function appIdFromNumericString(appString) {

  if (appString.length != 9) {
    return '';
  }
  var appNumber = parseInt(appString)
  var parsedString = appNumber.toString()
  //console.log("appString: " + appString + ", appNumber: " + appNumber);
  if (appString == parsedString) {
    return appString;
  }
  return '';
}

function appIdFromInputString(inputString) {

  if (inputString.length < 9) {
    return '';
  }
  // Extract id and make searchURL
  var indexOfId = inputString.indexOf('/id');
  var appString = '';
  if (indexOfId >= 0) {
    // Skip 3 characters and get the next 9
    appString = inputString.substring(indexOfId + 3, indexOfId + 12);
    //console.log("index: " + indexOfId + ", appString: " + appString);
  }
  else {
    // try id directly (parse string to number)
    appString = inputString
  }
  return appIdFromNumericString(appString);
}
