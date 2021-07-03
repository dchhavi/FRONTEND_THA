
//ques 1 determining array or not
function is_array(arg)
{
    return Array.isArray(arg);
}
console.log(is_array('w3resource'));
console.log(is_array([1,2,3,4]));

//2 clone an array
 const b1 = [1, 2, 4, 0];
 const b2 = [1, 2, [4, 0]]

const d1 = b1.slice(0);
console.log(d1);
const d2 = b2.slice(0);
console.log(d2);


//3 to get first elements of an array
const arry =[];
function first(arr, n) {
    if (n === undefined) {
      return arr[0];
    }
    else if(n<0)
    return arry;
     
    return arr.slice(0, n);
  }
 
  console.log(first([7, 9, 0, -2]));
  console.log(first([], 3));
  console.log(first([7, 9, 0, -2], 3));
  console.log(first([7, 9, 0, -2], 6));
  console.log(first([7, 9, 0, -2], -3));
  


//4 joining elements of an array
 const myColor = ["Red", "Green", "White", "Black"];

 console.log(myColor.join(","));
 console.log(myColor.join(","));
 console.log(myColor.join("+"));
 

//5  most frequent item of an array
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

