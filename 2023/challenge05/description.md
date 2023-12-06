# Instructions

Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

- . = Road
- S = Santa's Sled
- * = Open barrier
- | = Closed barrier

Example of a road: S...|....|.....

Each unit of time, the sled moves one position to the right. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

All barriers start closed, but after 5 units of time, they all open forever.

Create a function that simulates the sled's movement for a given time and returns an array of strings representing the state of the road at each unit of time:

```js
const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

The result is an array where each element shows the road at each unit of time.

Take into account that if the sled is in the same position as a barrier, then it takes its place in the array.

The elves were inspired by this Code Wars challenge.

# Solutions

## Alternative I (160 points)

```js
function cyberReindeer(road, time) {
  const S = {
    SANTA: 'S',
    B_CERRADA: '|',
    B_ABIERTA: '*',
    PUNTO: '.'
  }
  let lastChar = S.PUNTO

  const movements = [road]
  for (let ut = 1; ut < time; ut++) {
    if(ut === 5) road = road.replaceAll(S.B_CERRADA, S.B_ABIERTA)   
    
    const matches = road.match(/S[\*\.]/g)

    if(matches) {
      road = road.replace(matches[0], lastChar + S.SANTA)
      lastChar = matches[0][1]
    }

    movements.push(road)
  }
  return movements
}
```

[Download](https://github.com/jpaddeo/tdd-adventjs/2023/challenge05/solution1.js)
