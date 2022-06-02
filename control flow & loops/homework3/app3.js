// Use following code to generate a random number between 0 and 9. : `Math.floor(Math.random() * 10);`.
// Write a while loop and print 'not 5' in every iteration until number 5 gets randomly generated.

// let number = 10;
// let i = 0;
// while(i !== number){
//   i = Math.floor(Math.random() * 10);
//   if(i !== 5){
//       console.log('not 5' )
//   }else if(i == 5){
//     break;
//   }
// }
let num = 5;
let rand = 0;
while(rand !== num){
  rand = Math.floor(Math.random() * 10);
  console.log('not 5')
}