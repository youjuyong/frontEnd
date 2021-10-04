const obj = {
name : 'sana',
age : 23,
gender : 'female',
hobby:['노래','달리기']
};

/* json 은 키 이름도 "" 기호 사용 문자열도 "" 꼭 사용 */
/*Json은 하나의 문자열 이기때문에 둘사이에 변환 필요*/

const json = JSON.stringify(obj); /* */
const json2 = JSON.stringify(obj,null,3);/*두번째 인자는 함수,2는 들여쓰기 칸 */
console.log(typeof obj);
console.log(obj);
console.log("=======================================================================");
console.log(typeof json);
console.log(json);
console.log("=======================================================================");
console.log(typeof json2);
console.log(json2);
console.log("=======================================================================");

const json3 = `{"name":"sana","age":23,"gender":"female","hobby":["노래","독서"]}`;
const obj2 = JSON.parse(json3);
console.log(typeof obj2);
console.log(obj2);
