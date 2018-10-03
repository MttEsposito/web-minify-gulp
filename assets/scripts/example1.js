let myarray=[1,2,3,4,5];
const sum = myarray.reduce((a, b) => {return a + b;}, 0);

const showSum = ()=>{
    alert(`the total sum is ${sum}`);
}
showSum();