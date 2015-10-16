var expect = chai.expect;

describe("Test Conversor", function() {

  var fin = document.getElementById("converted");

    it("Primera: 32F", function() {
      var t = new Temperatura(32,"F");
      expect(t.far()).to.equal("0.0 Celsius");
    });

    it("Segunda: -6C", function() {
      var temp = new Temperatura(-6,"C");
      expect(t.celsius()).to.equal("21.2 Farenheit");
    });

    it("Debería ser: 3.2e4F", function() {
      var temp = new Temperatura(0,"C");
      temp.set_valor(3.2e4);
      temp.set_tipo("F");
      expect(temp.get_valor()).to.equal(3.2e4);
      expect(temp.get_tipo()).to.equal("F");
    });

    it("0.032C === 32.0576F", function() {
      var temp = new Temperatura();
      temp.set_valor(0.032);
      temp.set_tipo("C");
      var res = temp.to_f();
      expect(res).to.equal(32.0576);
    });

    it("32,0576F === 0.032C", function() {
      var temp = new Temperatura();
      temp.set_valor(32.0576);
      temp.set_tipo("F");
      var res = temp.to_c();
      expect(res).to.equal(0.032000000000000424);
    });

    it("mostrar_final()", function() {
      window.onload = function() {
        var temp = new Temperatura(5,0,"F");
        temp.mostrar_final();
        expect(fin.innerHTML).to.equal("El resultado es: 5 F");
      }
    });

    it("5X === ERROR", function() {
      window.onload = function() {
        var temp = new Temperatura(5,0,"X");
        conversor();
        expect(fin.innerHTML).to.match("/no es correcto/");
      }
    });
});