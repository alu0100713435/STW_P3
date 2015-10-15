var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('Buenos dias = error', function() {
        original.value = "Buenos dias";
        calculate();
        assert.equal(converted.innerHTML, 'ERROR! Prueba con algo como esto \'-4.2C\' ', /ERROR/);
    });
    test('45.3 = error', function() {
        original.value = "45.3";
        calculate();
        assert.notEqual(converted.innerHTML, 113.5, "/ERROR/");
    });
});