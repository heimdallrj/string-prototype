# string-prototype

A modified JS `String.prototype` Object.

## Installation

```
npm install string-prototype
```

## Usage

### String.allReplace()

```
import 'string-prototype';

var str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

var list = {
    'ipsum': 'REPLACED-ipsum',
    'amet': 'REPLACED-amet'
};
var newStr = str.allReplace(list);
console.log(newStr); // Lorem REPLACED-ipsum dolor sit REPLACED-amet, consectetur adipiscing elit.
```

### String.toTitleCase()

```
import 'string-prototype';

var str = 'Lorem ipsum dolor';
var result = str.toTitleCase();
console.log(result); // Lorem Ipsum Dolor

```