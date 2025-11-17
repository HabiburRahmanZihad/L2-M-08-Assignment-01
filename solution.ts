type TypeOfValue = string | number | boolean;

const formatValue = (value: TypeOfValue): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
};

type TypeOfLength = string | any[];

const getLength = (value: TypeOfLength): number => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Item {
  title: string;
  rating: number;
}

const filterByRating = (items: Item[]): Item[] => {

  return items.filter((item) => item.rating >= 4);

};


interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const available = book.isAvailable ? 'Yes' : 'No';
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
};


const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {

  const result: (string | number)[] = [];

  for (const value of arr1) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  for (const value of arr2) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }

  return result;
};




interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {

  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;

    const finalPrice =
      product.discount !== undefined
        ? basePrice - (basePrice * product.discount) / 100
        : basePrice;

    return total + finalPrice;
  }, 0);
};