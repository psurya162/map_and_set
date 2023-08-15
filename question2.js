let a="abcdeabcdeff"
let ans=new Map()

for(let char of a){
    if(ans.has(char)){
        ans.set(char,ans.get(char)+1)
    }
    else{
        ans.set(char,1)
    }
}
console.log(ans)


for (let [key,value] of ans){
    console.log(`${key}=${value}`)
}