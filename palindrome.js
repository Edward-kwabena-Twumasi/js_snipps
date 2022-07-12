var jsSnippets={

// // //Check if string is palindrome
// // //f1
"palindrome":()=> {let getPals=(string)=>{
    let nstr=string.replace(/\W/g, '').toLowerCase();
    let half=Number.parseInt(nstr.length/2+"")
    let a="",b="";
    for (let index = 0; index < half; index++) {
       a+=nstr[index]
       b+=nstr[nstr.length-(index+1)]    
    }
    console.log(a+"."+b)
    return a.toLowerCase()===b.toLowerCase();
}
console.log(getPals("Ab,.ba"))

// //f2
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

  console.log(isPalindrome("Ab,.ba"))
},
  //f1

"palindrome1":()=> {let getPalin=(string)=>{
    let nstr=string.replace(/\W/g, '').toLowerCase();
    let half=Number.parseInt(nstr.length/2+"")
    
    return nstr.substring(0,half)===nstr.substring(half).split("").reverse().join("");
}

console.log(getPalin("Ab,.ba"))
}    ,                   

//Reverse references an array
"arraySplit":()=>{var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
},
//Function calls
"functionCallse":()=>{var a = 10;
 
function functionA() {

    let a=2;
    let b=4;
	console.log("Start function A");

	function functionB(){
        console.log("In function B " + (a+b) );
    }

 return functionB;

}


const bFunction=functionA();

bFunction();

console.log("GlobalContext");
},

"smallestIntNotInArr":()=>{
function smallest(arr)
{
   
    if (Math.max(...arr)<0) {
       return 1;
    }

    arr.sort(((a, b) => a - b)).filter(a=>a>0)
    console.log(arr)
    var nextInt=Math.max(...arr)+1;
    for (let index = arr.length-1; index >0; index--) {
        var diff=arr[index]-arr[index-1]
        if (diff>=2) {
          
            nextInt=  arr[index-1]+1
            //console.log(smallest);
        }   
       
    }

    return nextInt;
    
 }
  console.log(smallest([4,7,2,8,3]))
},

//valid parenthesis
"validParenthesis":()=>{const isValidParenthesis=(s)=>{

    if (s.length<2 && s.length >104) {
        return false;
    }
var open=["(","{","["]
var close=[")","}","]"]
var stack=[];

for (let char = 0; char < s.length; char++) {

   if (open.includes(s[char])) {
    stack.push(s[char])
   }
   else if (close.includes(s[char]) && open.indexOf(stack[stack.length-1])==close.indexOf(s[char])) {
    stack.pop()
   }
    
}
return stack.length===0?true:false

}

console.log(isValidParenthesis("[(){}[]]],/;p"))}
}

jsSnippets.palindrome1()

