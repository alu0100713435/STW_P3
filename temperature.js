/*"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
// Clase Medida
function Medida (valor, tipo) {
  this.valor_ = valor;
  this.tipo_ = tipo;
}

// Clase Temperatura
function Temperatura (valor, tipo) {
  Medida.call(this, valor, tipo);
}

//Temperatura hereda de Medida.
Temperatura.prototype = new Medida();

// Getters y Setters
Temperatura.prototype.get_valor = function(){return this.valor_;}

Temperatura.prototype.get_tipo = function(){return this.tipo_;}

Temperatura.prototype.set_valor = function(valor){this.valor_ = valor;}

Temperatura.prototype.set_tipo = function(tipo){this.tipo_ = tipo;}


// Pasamos C a F
Temperatura.prototype.to_f = function(){
  return (this.get_valor()*9/5)+32;
}

// Pasamos F a C
Temperatura.prototype.to_c = function(){
  return (this.get_valor()-32)*5/9;
}

function calculate() {
  var result = new Temperatura();
  var temp = original.value;
 
  if (temp) {
    var regexp = /([-+]?\d+(?:\.\d*)?(?:[eE][-+]?\d+)?)\s*([fFcC])/;
    var valor = temp.match(regexp);
    if(valor){
        var t = new Temperatura(); 
        
        t.set_valor(parseFloat(valor[1]));
        t.set_tipo(valor[2]);
        
        if (t.get_tipo() == 'c' || t.get_tipo() == 'C'){
            result.set_valor(t.to_f());
            result.set_tipo("F");
        }
        else{
            result.set_valor(t.to_c());
            result.set_tipo("C");
        }
    result = result.get_valor() + " " + result.get_tipo();
    converted.innerHTML = result;
    }
    else
        converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}*/

"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
}

function Temperatura(valor, tipo){
    Medida.call(this, valor, tipo); 
    //this.valor = valor;
    //this.tipo = tipo;
}

Temperatura.prototype = new Medida();

Temperatura.prototype.celsius = function(){
    this.valor = (this.valor * 9/5)+32;
    return (this.valor.toFixed(1)+" Farenheit");
}

Temperatura.prototype.far = function(){
    result = (this.valor - 32)*5/9;
    return (this.valor.toFixed(1)+" Celsius");
}

function calculate() {
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
        
        var t = new Temperatura(final,m[3])
        var type = m[3];

        if (type == 'c' || type == 'C') {
            converted.innerHTML = t.celsius();
        }
        else {
            converted.innerHTML = t.far();
        }
    }
      
    else{
        var type = m[3];
        var t = new Temperatura(num,m[3])

        if (type == 'c' || type == 'C') {
            converted.innerHTML = t.celsius();
        }
        else {
            converted.innerHTML = t.far();
        }
    }
    
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}