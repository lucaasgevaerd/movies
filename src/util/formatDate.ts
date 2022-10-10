export const formatDate = (date: string) => {

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if (date !== undefined) {
    const year = stripLeadingZerosDate(date.split('-')[0]);
    const month = stripLeadingZerosDate(date.split('-')[1]);
    const day = stripLeadingZerosDate(date.split('-')[2]);
    const formatedMonth = months[parseInt(month) - 1];

    formatDay(day)

    return `${formatedMonth} ${formatDay(day)}, ${year}.`;
  }
}

const formatDay = (day: string) => {
  if (day === '1') {
    return day + 'st';
  } else if (day === '2') {
    return day + 'nd';
  } else if (day === '3') {
    return day + 'rd';
  } else {
    return day + 'th';
  }
}

const stripLeadingZerosDate = (value: string) => {
  return value.split('-').reduce(function (date, datePart) {
    return date += parseInt(datePart) + '-'
  }, '').slice(0, -1);
}