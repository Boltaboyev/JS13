// 1 ---------------------------------------------------------------------------------------------------------------------
// let tel = "998.93,380 78-88"
// let regex = /(998)[\-\_\.\(\,\s]?(\d{2})[\-\_\.\)\,\s]?(\d{3})[\-\_\.\)\,\s]?(\d{2})[\-\_\.\(\,\s]?(\d{2})/gm

// console.log(tel.replace(regex, "+$1($2)-$3-$4-$5"))

// 2 ---------------------------------------------------------------------------------------------------------------------
// let url = "https://script.com"
// let url2 = "http://script.com"
// let url3 = "java.com"

// let regex = /^https?:\/\//gm
// console.log(regex.test(url3))

// 3 ---------------------------------------------------------------------------------------------------------------------
// let str = '1232'

// let regex = /[\D]/gm

// if (regex.test(str)) {
//     console.log(false);
// }else {
//     console.log(true);
// }


// 4 ----------------------------------------------------------------------------------------------------------------------
// const regex = /^a.*z$/i;
// let str = 'akdz'
// console.log(regex.test(str));


// 5 ----------------------------------------------------------------------------------------------------------------------
// let regex = /<([a-z]+)>$/
// let str = '<div>'

// console.log(regex.test(str));
``

// 6 ----------------------------------------------------------------------------------------------------------------------
// let str = 'AD123456'
// let regex = /^[A-Z]{2}\d{6}$/
// console.log(regex.test(str));