const names = ["Alice", "Bob", "Eve", "Oscar", "Uma", "Charlie", "David"];

const filteredNames = names.filter(name => !/^[AEIOU]/i.test(name));

console.log(filteredNames);
