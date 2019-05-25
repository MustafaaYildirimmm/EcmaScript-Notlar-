const arr=['foo','faa','daa'];
console.log(...arr);

const arr2=[2,3,4];
const arr3=[...arr2,5,6,7];

console.log(arr3);

//rest operator
//...rest olarak kullanılmalıdır!.
const values=[2,3,5,6,7,8];
const [val1,val2,...rest]=values;
console.log(...rest);