// 6.	Write a JavaScript program to check if the provided argument is a valid JSON

const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"Adam","age":20}'));
  console.log(isValidJSON('{"name":"Adam",age:"20"}'));
  console.log(isValidJSON(null));
  