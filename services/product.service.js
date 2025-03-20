const { faker } = require("@faker-js/faker");
class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }
  async generate(){
    // console.log(faker.string)
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        name: faker.commerce.productName(),
        id: faker.string.uuid(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url()
      });
    }
  }
  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2500);
    });
  }
  async findOne(id){
    const name = this.getTotal();
    return this.products.find(item => item.id === id);
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Product not found');
    }
    this.products[index] = {
      ...this.products[index],
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;