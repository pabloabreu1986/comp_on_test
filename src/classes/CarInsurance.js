'use-strict';

class CarInsurance {

  constructor(products = []) {

    this.products = products;

  };

  updatePrice() {

    this.products.forEach(element => {

      switch (element.name) {

        case 'Full Coverage':
          element = this.fullCoverage(element);
          break;

        case 'Special Full Coverage':
          element = this.specialFullCoverage(element);
          break;

        case 'Low Coverage':
        case 'Medium Coverage':
          element = this.lowMediumCoverage(element);
          break;

        case 'Super Sale':
          element = this.superSale(element);
          break;

        default:
          break;
      }

      element.sellIn = element.name != 'Mega Coverage' ? --element.sellIn : element.sellIn;
    });

    return this.products;
  };

  specialFullCoverage(product) {

    if (product.sellIn <= 0) {

      product.price = 0;

    } else {

      if (product.price < 50) {

        if (product.sellIn <= 10) {

          product.price = product.price + 1 < 50 ? product.price + 2 : product.price + 1;

          if (product.sellIn <= 5) {

            product.price = product.price < 50 ? product.price + 1 : 50;

          }
        } else {

          product.price = product.price + 1;

        }

      }else {

        product.price = 50;

      }

    }

    return product;
  };


  fullCoverage(product) {

    if (product.price < 50) {

      if (product.sellIn <= 0) {

        product.price = product.price + 1;

      }

      product.price = product.price < 50 ? product.price + 1 : 50;

    }else {

      product.price = 50;

    }

    return product;
  };

  superSale(product) {

    if (product.price > 0) {

      if (product.sellIn <= 0) {

        product.price = product.price - 1 > 0 ? product.price - 2 : product.price - 1;

      }

      product.price = product.price > 0 ? product.price - 1 > 0 ? product.price - 2 : product.price - 1 : 0;
      
    }else {

      product.price = 0;

    }

    return product;
  };

  lowMediumCoverage(product) {

    if (product.price > 0) {

      if (product.sellIn <= 0) {

        product.price = product.price - 1;

      }

      product.price = product.price > 0 ? product.price - 1 : 0;

    }else {

      product.price = 0;

    }

    return product;
  };

}

module.exports = CarInsurance;