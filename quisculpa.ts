class Person {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      throw new Error('Name cannot be empty.');
    }
  }
}

// Usage
const person = new Person('Alice');
console.log(person.name); // Outputs: Alice
person.name = 'Bob';
console.log(person.name); // Outputs: Bob
