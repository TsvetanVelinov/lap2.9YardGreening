function yardGreening (input){

let sqMetersGreening = Number (input[0]);
let sqMetersPrice = 7.61;
let discount = 0.18;
let discountPrice = sqMetersGreening*sqMetersPrice*discount;

let TotalSum = ((sqMetersGreening*sqMetersPrice)-discountPrice);
console.log(`The final price is: ${TotalSum} lv.`);
console.log(`The discount is: ${discountPrice} lv.`);
}

yardGreening(["550"])