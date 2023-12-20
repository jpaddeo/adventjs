function organizeGifts(gifts) {
    const PALLETS_SIZE = 50
    const BOXES_SIZE = 10
    const matches = gifts.match(/(\d*\w)/g)
    
    for(const match of matches) {
      const giftType = match.at(-1)
      let count = match.slice(0, -1)
      
      const pallets = Math.floor(count / PALLETS_SIZE)
      count -= pallets * PALLETS_SIZE
      const boxes = Math.floor(count / BOXES_SIZE)
      count -= boxes * BOXES_SIZE
      
      let replaceDraft  = ''
      if(pallets) replaceDraft += `[${giftType}]`.repeat(pallets)
      if(boxes) replaceDraft += `{${giftType}}`.repeat(boxes)
      if(count) replaceDraft += `(${giftType.repeat(count)})`
      gifts = gifts.replace(match, replaceDraft)
    }
    
    return gifts
  }