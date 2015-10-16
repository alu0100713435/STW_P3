var expect = chai.expect;

describe("Test Conversor", function() {

  var fin = document.getElementById("converted");

    it("Primera: 32F", function() {
      var t = new Temperatura(32,"F");
      expect(t.far()).to.equal("0.0 Celsius");
    });

    it("Segunda: -6C", function() {
      var t = new Temperatura(-6,"C");
      expect(t.celsius()).to.equal("21.2 Farenheit");
    });

    it("Tercera: Probando la funcion calculate", function() {
      var t = new Temperatura(0,"C");
      original.value = "0C";
      calculate();
      expect(converted.innerHTML).to.equal("32.0 Farenheit");
    });
});