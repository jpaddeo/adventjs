function adjustLights(lights) {
    const countChanges = (lights) => {
      let changes = 0
      for(let idx = 1; idx < lights.length; idx++) {
        if(lights[idx] === lights[idx -1]) {
          changes++
          lights[idx] = lights[idx] === '🟢' ? '🔴' : '🟢'
        }
      }
      return changes
    }
    
    return Math.min(
      countChanges([...lights]), 
      countChanges([...lights].reverse())
    )
  }