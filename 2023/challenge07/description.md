# Instructions

Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```
Important: We have been told that there is always to leave a newline at the end of the drawing.

# Solutions

## Alternative I (270 points)

```js
function drawGift(size, symbol) {
    if(size === 1) return '#\n'
  
    const filas = []
    const ultimoIndex = size * 2 - 2
    filas[0] = '#'.repeat(size).padStart(ultimoIndex + 1)
    filas[size -1 ] = `${'#'.repeat(size)}${symbol.repeat(size-2)}#` 
    filas[ultimoIndex] = '#'.repeat(size)
    
    for(let fila = 1; fila <= size -2; fila++) {
      let filaDraft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`
      filas[fila] = filaDraft.padStart(ultimoIndex + 1)
      filas[ultimoIndex - fila] = filaDraft
    }
    return filas.join('\n').concat('\n')
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge07/solution1.js)