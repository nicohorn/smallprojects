//Building my own array from scratch. This data structure already exists in JavaSript, but I'm doing it anyways to get a better insight of how data structures work.
//Author: Nicolas Horn.

class myArray {
  constructor(){
    this.length = 0; //At the beggining, it's zero.
    this.data = {}; //Empty object.
  }

  get(index){
    //Function that gets the element of the index that we wanna check.
    return this.data[index];
  }
  push(item){
    //Function that pushes an element an the end of the array (index + 1);
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
}

const newArray = new myArray();
newArray.push('Hello World!');
newArray.push('Bye!');
console.log(newArray);
