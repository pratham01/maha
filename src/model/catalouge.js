const Product = require('./product');

var catalogue = [new Product(001,'Rolex', 100, "3 for 200"), new Product(002, 'Michael Kors',80, '2 for 120'), new Product(003, 'Swatch', 50), new Product(004,'Casio',30) ];

exports.getCatalogue = function(){
    return catalogue;
}