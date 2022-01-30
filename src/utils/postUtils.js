module.exports = {
  remainingDays(post){
    const createdDate = new Date(post.date)
    
    const dueDay = createdDate.getDate() 

    const dueDate = createdDate.setDate(dueDay) 

    const timeDiffInMs = (dueDate - Date.now()) * -1

    const dayInMs = 1000* 60 * 60* 24

    const dayDiff = Math.floor(timeDiffInMs / dayInMs)

    if(dayDiff === 0){
      return 'hoje'
    }
    else if(dayDiff === 1){
      return `Ontem`
    }
    else if(dayDiff > 1){
      return `Há ${dayDiff} dias`
    }
    else if(dayDiff >= 7){
      return 'Há 1 semana'
    }
    else if(dayDiff >= 14){
      return 'Há 2 semanas'
    }
    else if(dayDiff >= 21){
      return 'Há 3 semanas'
    }
    else if(dayDiff >= 30){
      return '1 mês atrás'
    }
    
    return dayDiff
  }
}