let input = 'Just keep swimming';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

/// first loop, taking us through input
for (let i = 0; i < input.length; i++) {
  /// second loop, applying rule to each part of first loop
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee')
      }
      else if (input[i] === 'u') {
        resultArray.push('uu')
      }
      else {
        resultArray.push(input[i])
      };
    };
  };
};

/// sample input
console.log(resultArray.join("").toUpperCase());
/// output 'UUEEEEII'
