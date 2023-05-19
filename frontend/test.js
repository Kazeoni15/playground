

const sortArr = (arr)=>{

  return  arr.sort((string1, string2)=> string1.length - string2.length)
}

console.log(sortArr(["ab", "abc", "a"]))