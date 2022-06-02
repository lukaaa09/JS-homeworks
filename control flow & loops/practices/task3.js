// Replace `switch` to operator `if..else`:
// switch (val) {
//     case 'a':
//       console.log( 'a' );
//       break;
  
//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//       console.log( 'others' );
//       break;
  
//     default:
//       console.log( 'unknown' );
// }
let val = 'l';
if(val === 'a'){
    console.log('a');
}else if(val === 'b' || val=== 'c' || val === 'd' || val === 'e'){
    console.log('others');
}else{
   console.log('unknow');
}
