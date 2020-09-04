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

  pop(){
    //Function that grabs the last item and takes it away from the array (deletes it);
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    //Function that deletes the item/object at a given index.
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index){
    //Method that shifts the data of the array, given an index of an item to remove.
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i+1];
    }
    //This last part is to delete the last item and decrement the length.
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new myArray();
newArray.push('Hello World!');
newArray.push('Bye');
console.log(newArray);
