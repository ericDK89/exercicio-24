class Vehicle {
  constructor(color, year, brand) {
    this.color = color;
    this.year = year;
    this.brand = brand;
  }
}

class Car extends Vehicle {
  #name;

  setCarName(name) {
    this.#name = name;
  }

  getCarName() {
    console.log(this.#name);
  }
}

class Motorbike extends Vehicle {
  #name;

  setMotorBike(name) {
    this.#name = name;
  }

  getMotorBike() {
    console.log(this.#name);
  }
}

const car1 = new Car("black", 2022, "Ford");
car1.setCarName("Mustang");
car1.getCarName();

const car2 = new Car("white", 2013, "Hyundai");
car2.setCarName("HB20");
car2.getCarName();

const motorbike = new Motorbike("red", 2019, "Honda");
motorbike.setMotorBike("Fazer");
motorbike.getMotorBike();
