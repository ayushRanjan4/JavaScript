const marvel_heros=["thor", "ironman", "spiderman"]
const dc_heros=["superman", "batman","superman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHero=marvel_heros.concat(dc_heros)
// // console.log(marvel_heros);
// console.log(allHero);

// const all_new_Hero=[...marvel_heros,...dc_heros]
// console.log(all_new_Hero);

// const another_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_arr=another_arr.flat(Infinity)
// console.log(real_another_arr);


Array.isArray("Ayush") // false
Array.from("Ayush") // ['A', 'y', 'u', 's', 'h']
Array.from({name:"Ayush"}) // []


let score=100
let score2=200
let score3=300

Array.of(score,score2,score3) // [100, 200, 300]