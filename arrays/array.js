//find the product

const Find_Prod = (array, N) => 
{
  let pro=1;
 for(let element of array){
   pro=pro*element;
 }
   return pro;  

};

//Find the sum

const Find_Sum = (array, N) => 
{
  let sum=0;
  for(let element of array){
    sum=sum+element;
  }
  return sum;
};

//count occurences

const findCount = (N, K, Arr) => 
{
   let count=0;
   for(let element in Arr){
     if(Arr[element]===K){
       count++;
     }
   }
   return count;
};

//Even odd

const findEvenOdd = (N, Arr) => 
{
  let even=0;
  let odd=0;
  let B=[];
  for(let element in Arr){
    if(Arr[element]%2===0){
      even=even+Arr[element];
    }
    else{
      odd=odd+Arr[element];
    }
  }
  B[0]=even;
  B[1]=odd;
  return B;
  
};

//Find whether the number is present or not

const Find_Num = (array,N,M) => 
{
  let count=0;
  for(let element of array){
    if(element==M)
    {
      count+=1;
    }
  }
  if(count>0)
   return "YES";
  else
   return "NO";
};

//Higher Age

const highAge = (N, Arr) => 
{
   let B=[];
   for(let element of Arr){
     if(element>=18){
       B.push(element);
     }
   }
   return B;
};

//Increment the array elements

const Inc_Arr = (array,N) => 
{
 array.forEach(function(val){
   val+=1;
   console.log(val);
 })
  

};

//Pass or fail

const isAllPass = (N, Arr) => 
{
   return Arr.every((i)=>i>=32)?"YES":"NO"; 
};

//Unique color shirt

function Unique_Shirts (arr,N) {

  let unique=arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
  return (unique.length); 
  };

//Min and Max

function arrayMin(arr) {
  let min=arr[0];
    for (let ele of arr){
      if(min>ele){
        min=ele;
      }
    }
    return min;
  
  }
  
  function arrayMax(arr) {
   let max=arr[0]
   for(let ele1 of arr){
     if(max<ele1){
       max=ele1;
     } 
   }
   return max;

}

//Birthday game

function Birthday_Game(arr,D ,M) {
  let fin_Count=0;
    for(let i=0;i<(arr.toString().length-M);i++){
      let count=0;
      for(let j=i;j<(i+M);j++)
        count+=arr[j];
      if(count===D)
        fin_Count+=1
    }
    return fin_Count;

}