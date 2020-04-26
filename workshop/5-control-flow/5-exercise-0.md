# Question Summary

Oh no! We had a bunch of perfectly-fine code running along smoothly, but then
the Hamburglar swooped in and jumbled our code. We still have all the right
pieces, but they're in the wrong order!

Your mission is to rearrange each line of code so that it forms a coherent
program, and solves the given problem.

_NOTE:_ The lines don't include any indentation (since that would give the
answer away). You should add indentation as appropriate (see example)

_ANOTHER NOTE:_ There may be more than 1 correct answer. If multiple variables
are declared in a row, the order doesn't matter.

_LAST NOTE:_ Feel free to add blank lines between the lines of code, to make it
easier to read. Like the gap between 2. and 1. in the example's solution.

---

## EXAMPLE - log all even numbers


for (let i = 0; i < 10; i++) {
     let isEven = i % 2 === 0;
    if (isEven)
    {
 console.log( i, 'is an even number!');
 }
 }




#### Solution:

```
for (let i = 0; i < 10; i++) {
let isEven = i % 2 === 0;
 if (isEven) {
console.log(i, 'is an even number!');
}
}
```

## Question 1: Check if the sentence includes the word "Hello".DONE



Put your solution between the ```:
_THIS IS SUPER IMPORTANT_, otherwise Prettier might destroy your solution:

```
let sentence = 'Hello world!';
 if (sentence.includes('Hello')) {
console.log('Sentence DOES contain the word "Hello"');
} else {
console.log('Sentence DOES contain the word "Hello"');
 }

```

## Question 2: Get the specified item in the nested array
const array = [[1, [2, 3]]];
 const firstIndex = 0;

4. const secondIndex = 1;
5. const thirdIndex = = 0;
3. console.log(array[firstIndex][secondindex][thirdIndex])

```
console.log(array[0][1][0]);
```

## Question 3: Log all numbers from 10 to 5
GOOD VERSION
let currentNum = 10;
let min = 5;
while (currentNum > min) {
 console.log(currentNum);
 currentNum = currentNum - 1;
}
OR

NOT LIKE ONE BELOW BECAUSE 1ST SENTENCE UNDEFINED
while (currentNum > min) {
let currentNum = 10;
let min = 5; {
console.log(currentNum);
currentNum = currentNum - 1;
}
}

for (let i = 0; i < 10; i++) {
let isEven = i % 2 === 0;
 if (isEven) {
console.log(i, 'is an even number!');
}
}

## Question 4: Reverse the string to check for hidden messages

 
const encodedMessage = 'gnidliub gruobuaF eht rednu deirub si erusaert ehT';
const letterArray = encodedMessage.split('');
const reversedArray = letterArray.reverse();
const reversedString = reversedArray.join('');
 if (reversedString.includes('treasure')) 
{ console.log('Your message:', reversedString)
 }

encodedMessage
.split('')
.reverse()
.join('')
.includes('treasure')

 Your message: The treasure is buried under the Faubourg building

```

```

## Question 5: Add all the numbers from 10 to 0 REVIEW
let count = 10;
let total = 0;
count = count - 1;
total = total + count;
while (count > 0) {
console.log('The total is:', total)
 }

```
let count = 10;
let total = 0;
while (count > 0) {
   total = total + count; 
    count = count - 1;
} 
 console.log('The total is:', total);
 

## Question 6: Check if the array includes a specific number

let array = [1, 3, 7, 4, 5, 2, 1];
let numberToSearchFor = 5; 
let includesNumber;

for (let i = 0; i < array.length; i++){
   let item = array[i];

if (item === numberToSearchFor); {
console.log('Array includes the number!')
}
}





;



let array = [1, 3, 7, 4, 5, 2, 1];
let numberToSearchFor = 5; 
let includesNumber;

for (let i = 0; i < array.length; i++){
   let item = array[i];

if (item === numberToSearchFor); {
console.log('Array includes the number!')
}
}
