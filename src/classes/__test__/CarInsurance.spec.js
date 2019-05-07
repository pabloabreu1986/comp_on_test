const CarInsurance = require('../CarInsurance');
const Product = require('../Product');

describe('Set de pruebas para la clase CarInsurance', () => {

    test('metodo updatePrice para Medium Coverage', () => {
        const carInsuranceMC = new CarInsurance([new Product('Medium Coverage', 10, 20)]);
        const prod = carInsuranceMC.updatePrice();
        expect(prod[0].price).toBe(19);
        expect(prod[0].sellIn).toBe(9);
    })

    test('metodo updatePrice para Medium Coverage salleIn <= 0', () => {
        const carInsuranceMC = new CarInsurance([new Product('Medium Coverage', 0, 20)]);
        const prod = carInsuranceMC.updatePrice();
        expect(prod[0].price).toBe(18);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Low Coverage', () => {
        const carInsuranceLC = new CarInsurance([new Product('Low Coverage', 5, 7)]);
        const prod = carInsuranceLC.updatePrice();
        expect(prod[0].price).toBe(6);
        expect(prod[0].sellIn).toBe(4);
    })

    test('metodo updatePrice para Low Coverage salleIn <= 0', () => {
        const carInsuranceLC = new CarInsurance([new Product('Low Coverage', 0, 7)]);
        const prod = carInsuranceLC.updatePrice();
        expect(prod[0].price).toBe(5);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Low Coverage price = 1', () => {
        const carInsuranceLC = new CarInsurance([new Product('Low Coverage', 0, 1)]);
        const prod = carInsuranceLC.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Low Coverage price = -1', () => {
        const carInsuranceLC = new CarInsurance([new Product('Low Coverage', 0, -1)]);
        const prod = carInsuranceLC.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })
    
    test('metodo updatePrice para Full Coverage', () => {
        const carInsuranceFC = new CarInsurance([new Product('Full Coverage', 2, 0)]);
        const prod = carInsuranceFC.updatePrice();
        expect(prod[0].price).toBe(1);
        expect(prod[0].sellIn).toBe(1);
    })

    test('metodo updatePrice para Full Coverage price = 49', () => {
        const carInsuranceFC = new CarInsurance([new Product('Full Coverage', 0, 49)]);
        const prod = carInsuranceFC.updatePrice();
        expect(prod[0].price).toBe(50);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Full Coverage price > 50', () => {
        const carInsuranceFC = new CarInsurance([new Product('Full Coverage', 0, 51)]);
        const prod = carInsuranceFC.updatePrice();
        expect(prod[0].price).toBe(50);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Full Coverage sellIn <= 0', () => {
        const carInsuranceFC = new CarInsurance([new Product('Full Coverage', 0, 2)]);
        const prod = carInsuranceFC.updatePrice();
        expect(prod[0].price).toBe(4);
        expect(prod[0].sellIn).toBe(-1);
    })
    
    test('metodo updatePrice para Special Full Coverage', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 15, 20)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(21);
        expect(prod[0].sellIn).toBe(14);
    })

    test('metodo updatePrice para Special Full Coverage sellIn <= 5', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 5, 35)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(38);
        expect(prod[0].sellIn).toBe(4);
    })

    test('metodo updatePrice para Special Full Coverage sellIn <= 0', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 0, 35)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })
    
    test('metodo updatePrice para Special Full Coverage price = 48', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 1, 48)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(50);
        expect(prod[0].sellIn).toBe(0);
    })

    test('metodo updatePrice para Special Full Coverage sellIn > 5', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 6, 40)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(42);
        expect(prod[0].sellIn).toBe(5);
    })

    test('metodo updatePrice para Special Full Coverage sellIn > 5 & price 49', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 6, 49)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(50);
        expect(prod[0].sellIn).toBe(5);
    })

    test('metodo updatePrice para Special Full Coverage sellIn > 50', () => {
        const carInsuranceSFC = new CarInsurance([new Product('Special Full Coverage', 6, 54)]);
        const prod = carInsuranceSFC.updatePrice();
        expect(prod[0].price).toBe(50);
        expect(prod[0].sellIn).toBe(5);
    })
    
    test('metodo updatePrice para Mega Coverage', () => {
        const carInsuranceMC = new CarInsurance([new Product('Mega Coverage', 0, 80)]);
        const prod = carInsuranceMC.updatePrice();
        expect(prod[0].price).toBe(80);
        expect(prod[0].sellIn).toBe(0);
    })
    
    test('metodo updatePrice para Super Sale', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 3, 6)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(4);
        expect(prod[0].sellIn).toBe(2);
    })

    test('metodo updatePrice para Super Sale sellIn <= 0', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 0, 6)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(2);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Super Sale price = 3', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 0, 3)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Super Sale price = 3', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 0, 2)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Super Sale price = 1', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 0, 1)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })

    test('metodo updatePrice para Super Sale price = -1', () => {
        const carInsuranceSS = new CarInsurance([new Product('Super Sale', 0, -1)]);
        const prod = carInsuranceSS.updatePrice();
        expect(prod[0].price).toBe(0);
        expect(prod[0].sellIn).toBe(-1);
    })

})

describe('constructor CarInsurance', () => {

    test('constructor', () => {

        const arrProd = [new Product('Medium Coverage', 10, 20)];
        const carInsurance = new CarInsurance([new Product('Medium Coverage', 10, 20)]);
        expect(carInsurance.products).toStrictEqual(arrProd);

    })
})


