# Description

A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

```js
const cube = createCube(3)

// output:
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

As you can see, the cube has three faces visually. The symbols used to build the cube faces are: /, \, \_. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character \n.

Other examples of cubes:

```js
const cubeOfOne = createCube(1)

// output:
/\_\
\/_/
```

```js
const cubeOfTwo = createCube(2)

// output:
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

Take into account:

- Pay attention to the spaces in the cube.
- The cube has to be symmetrical.
- Make sure you use the correct symbols.
- Each line must be separated by a new line character \n except for the last one.
- Based on this Codewars kata

# Solutions

## Alternative I

```js
function createCube(size) {
  const cube = [];
  for (let i = 1; i <= size; i++) {
    cube.push(`${' '.repeat(size - i)}${'/\\'.repeat(i)}${'_\\'.repeat(size)}`);
  }
  for (let i = size; i >= 1; i--) {
    cube.push(`${' '.repeat(size - i)}${'\\/'.repeat(i)}${'_/'.repeat(size)}`);
  }
  return cube.join('\n');
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge06/solution1.js)

## Alternative II

```js
function createCube(size) {
  const cube = [];
  for (let i = 1; i <= size; i++) {
    cube.push(' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size));
  }
  for (let i = size; i >= 1; i--) {
    cube.push(' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size));
  }
  return cube.join('\n');
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2022/challenge06/solution2.js)
