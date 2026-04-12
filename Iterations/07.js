const MyNum=[1,2,3,4,5,6,7,8,9,10]

// const newNum=MyNum.map( (num) => num+10)
// console.log(newNum);

const newnum= MyNum
                    .map( (num) => num*10)
                    .map( (num) => num+10)
                    .filter( (num) => num>50)       
console.log(newnum);