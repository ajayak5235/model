const fs = require('fs');

// Saving data to a file
const saveDataToFile = (data) => {
  fs.writeFileSync('data.json', JSON.stringify(data));
};

// Loading data from a file
const loadDataFromFile = () => {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Usage
let products = loadDataFromFile();

// Add a new product
const newProduct = new Product(1, 'Product A', 10.99);
products.push(newProduct);

// Save the updated data
saveDataToFile(products);
