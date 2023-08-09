const updateTime= ()=>{
    const now = new Date()

    let hour = String(now.getHours())
    let minute = String(now.getMinutes())
    let second = String(now.getSeconds())

    let day = String(now.getDay())
    let month = String(now.getMonth())
    let year = String(now.getFullYear())

    // Document elements
    document.getElementById('hour').innerHTML = hour
    document.getElementById('min').innerHTML = minute
    document.getElementById('sec').innerHTML = second

    // Month
    const days = ['Mon.','Tue.','Wed.','Thur.','Fri.','Sat.','Sun.']
    const months = ['Jan.','Feb.','Mar.','Apr.','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.']
    
    document.getElementById('day').innerHTML = days[day-1]
    document.getElementById('month').innerHTML = month
    document.getElementById('year').innerHTML = year

    console.log(days[1])
}
setInterval(updateTime, 1000)
