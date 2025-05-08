import LinkedList from "./linked-list-class.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.size());
console.log(list.toString());
console.log(list.find("cat"));
console.log(list.find("cock"));
console.log(list.contains("parrot"));
console.log(list.contains("cock"));
console.log(list.toHead());
console.log(list.tail());
console.log(list.at(3));
list.pop();
console.log(list.toString());