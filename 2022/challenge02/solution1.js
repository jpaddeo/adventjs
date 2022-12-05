countHours = (year, holidays) => {
    let horasExtras = 0
    const NO_LABORALES = [0, 6]
    holidays.forEach(mesDia => {
      const [mes, dia] = mesDia.split('/')
      const numeroDia = (new Date(year, (mes - 1), dia)).getDay()
      if(!NO_LABORALES.includes(numeroDia)) {
        horasExtras += 2
      }
    })
    return horasExtras
  }