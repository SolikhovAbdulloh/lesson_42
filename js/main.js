// 1-masala

// let str = "HELLOhello";

// console.log(lowerUppercase(str));

// function lowerUppercase(string) {
//   let str1 = "";

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() == string[i]) {
//       str1 += string[i].toLowerCase();
//     } else if (string[i].toLowerCase()) {
//       str1 += string[i].toUpperCase();
//     }
//   }
//   return str1;
// }

// 2-masala

// function password(str) {
//   if (str.length < 8) {
//     return false;
//   }

//   let Toupper = false;
//   let Tolower = false;
//   let num = false;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase() && isNaN(str[i])) {
//       Toupper = true;
//     }
//     if (str[i] == str[i].toLowerCase() && isNaN(str[i])) {
//       Tolower = true;
//     }
//     if (!isNaN(str[i])) {
//       num = true;
//     }
//   }
//   if (Toupper && num && Tolower) {
//     return true;
//   }
//   return false;
// }

// let str = "Abdc12421";

// console.log(password(str));

//3-masala

// function getDivisorsCnt(n) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     if (n % i == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// getDivisorsCnt(4);


//4-masala yoq tushunmadm




//5-masala
// function inAscOrder(arr){

//     let count = 0;

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] > arr[i]){
//             count++;
//             console.log(arr[i]);
            
//         }
        
        
//     }
//         if (count+1 === arr.length) {
//           return true;
//         }
//         return false;
// }
// let arr = [1,2,3,4,5]


// console.log(inAscOrder(arr));
 //
