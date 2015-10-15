"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([fFcC])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    num = parseFloat(num);
    if(m[2]!==undefined){
        var e = m[2];
        e = parseInt(e);
        
        if(e<0){
            e = -e;
            var final = num / (10*e);
        }
        
        else{
            var final = num * (10*e);
        }
        var type = m[3];
        
        if (type == 'c' || type == 'C') {
          result = (final * 9/5)+32;
          result = result.toFixed(1)+" Farenheit"
        }
        else {
          result = (final - 32)*5/9;
          result = result.toFixed(1)+" Celsius"
        }
    }
      
    else{
           var type = m[3];
        
            if (type == 'c' || type == 'C') {
              result = (num * 9/5)+32;
              result = result.toFixed(1)+" Farenheit"
            }
            else {
              result = (num - 32)*5/9;
              result = result.toFixed(1)+" Celsius"
            }
    }
    
    
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}