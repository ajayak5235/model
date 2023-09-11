const fs = require('fs');

// Function to read data from a file
const readDataFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Function to write data to a file
const writeDataToFile = (filePath, data) => {
  fs.writeFileSync(filePath, JSON.stringify(data));
};

// Usage
const dataFilePath = 'data.json';
let products = readDataFromFile(dataFilePath);

// Add a new product
const newProduct = new Product(1, 'Product A', 10.99);
products.push(newProduct);

// Save the updated data
writeDataToFile(dataFilePath, products);
