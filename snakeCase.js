var snakeCase = function(input) {
  let array = input.split("");
  let smallArray = [];
  let newestArray = [];
  for (let i = 0; i < array.length; i++) {
    /*Long Phrase*/
    if (array[i] == "." && array[i+1] == "." && array[i+2] == ".") {
      input = input.replace(/[^A-z]/g,"_");
      let array = input.split("");

      for (let i = 0; i < array.length; i++) {
        if (array[0] == "_") {
          array.splice(0,1)
        }
      }
      for (let i = 0; i < array.length; i++) {
        if (array[array.length-1] == "_") {
          array.splice(array.length-1,1)
        }
      }
      let string = array.join("");
      string = string.toLowerCase();
      return string;
    }

    /*WTFCase*/
    if (array[i] == "." && array[i+1] == ".") {
      definition = "wtfCase"
      input = input.replace(/[^A-z]/g,"_");
      let array = input.split("");
      for (let i = 0; i < array.length; i++) {
        if (array[i] == "_" && array[i+1] == "_") {
          array.splice(i, 1);
          i = i - 1;
        };
      };
      let string = array.join("");
      string = string.toLowerCase();
      return string;
    }
  }
  /*Everything else*/
  definition = "NotWtfCaseOrLongPhrase";
  let underlinedString = input.replace(/[^A-z]/g,"_");

  let smallUnderlinedArray = [];
  let capitalizedLetters = [];
  let underlinedArray = underlinedString.split("");

  for (let i = 0; i < underlinedArray.length; i++) {
    smallUnderlinedArray[i] = underlinedArray[i].toLowerCase();
  }

  for (let i = 1; i < underlinedArray.length; i++) {
    if (underlinedArray[i] !== smallUnderlinedArray[i]) {
      capitalizedLetters.push(i);
    };
  };

  for (let i = 0; i < capitalizedLetters.length; i++) {
    underlinedArray.splice(capitalizedLetters[i], 0, "_");
  }

  let i = 0;
  for (i; i < underlinedArray.length; i++) {
    if (underlinedArray[i] == "_" && underlinedArray[i+1] == "_") {
      underlinedArray.splice(i, 1);
      i = i - 1;
    };
  };

  if (underlinedArray[underlinedArray.length-1] == "_") {
    underlinedArray.splice(underlinedArray.length-1, 1);
  }

  if (underlinedArray[0] == "_") {
    underlinedArray.splice(0, 1);
  }


  let underlinedStringNew = underlinedArray.join("");
  lowerCaseUnderlinedStringNew = underlinedStringNew.toLowerCase();
  return(lowerCaseUnderlinedStringNew);
}

module.exports = snakeCase
