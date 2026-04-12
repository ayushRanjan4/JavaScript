// const MyNum=[1,2,3,4,5,6,7,8,9,10]


// const sum=MyNum.reduce( ( i, j) => i+j,0)
// console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
        take : false
    },
    {
        itemName: "py course",
        price: 999,
        take : false
    },
    {
        itemName: "mobile dev course",
        price: 5999,
        take : false
    },
    {
        itemName: "data science course",
        price: 12999,
        take : false
    },
]

const prompt = require("prompt-sync")();
const pruchase= shoppingCart
                    .map( (item) => {
                        const check=prompt()
                        if(check === 'y'){
                            item.take=true;
                        }
                        return item;
                    })
                    .reduce( (total , item) =>{
                        if(item.take){
                            return total+item.price;
                        }
                        return total;
                    },0 );
console.log(pruchase);

    

