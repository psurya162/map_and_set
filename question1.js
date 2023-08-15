let str="aabbccddeeff"
let ans= new Set(str)
ans=[...ans] //convet into array
ans=ans.join('') // join the array
console.log(ans)


// return [...new Set(n)].join('')