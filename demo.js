let arr = [1,2,3]
let fn = (arr) => {
	arr.splice(0,1,'a')
}
console.log(arr)
fn(arr)
console.log(arr)