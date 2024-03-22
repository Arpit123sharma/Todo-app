function getCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = currentDate.getFullYear().toString().slice(-2); // Extract last two digits of the year
  
    // Pad day and month with leading zeros if necessary
    const formattedDay = (day < 10 ? '0' : '') + day;
    const formattedMonth = (month < 10 ? '0' : '') + month;
  
    return `${formattedDay}-${formattedMonth}-${year}`;
  }

function increaseDate(currentDate, daysToAdd) {
    const [day, month, year] = currentDate.split('-').map(Number);
    const dateObject = new Date(2000 + year, month - 1, day); // Month is zero-based
    
    dateObject.setDate(dateObject.getDate() + daysToAdd);
    
    const newDay = dateObject.getDate();
    const newMonth = dateObject.getMonth() + 1; // Months are zero-based, so add 1
    const newYear = dateObject.getFullYear().toString().slice(-2); // Extract last two digits of the year
    
    const formattedNewDay = (newDay < 10 ? '0' : '') + newDay;
    const formattedNewMonth = (newMonth < 10 ? '0' : '') + newMonth;
  
    return `${formattedNewDay}-${formattedNewMonth}-${newYear}`;
  }

export {getCurrentDate,increaseDate}