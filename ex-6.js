
let height = undefined;
let result;

function checkHeight(height) {
  let result = height ?? 'Height is not defined';
  return result;
}

result = checkHeight(height)

console.log(result); 


// ?? คือ Nullish เพื่อเลือกค่าระหว่างสองค่าที่อยู่ทางด้านซ้ายและขวาของตัวดำเนินการ ถ้าหาก value1 มีค่าเป็น null หรือ undefined ผลลัพธ์ที่ได้จะเป็นค่าจากทางด้านขวา value2 แต่ถ้าหากไม่ใช่ผลลัพธ์ทีไ่ด้จะเป็นค่าจากตัวแปร value1

//http://marcuscode.com/lang/javascript/operators-ii