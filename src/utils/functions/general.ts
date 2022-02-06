const formatDate:Function = (seconds:number) => {
  const date:Date = new Date(1970, 0, 1);
  date.setSeconds(seconds);
  const firstOptions: Intl.DateTimeFormatOptions = {weekday: 'short', minute: '2-digit', hour: '2-digit'};
  const longOptions:Intl.DateTimeFormatOptions = {weekday: 'short', minute: '2-digit', hour: '2-digit', day: 'numeric', month: 'long'};
  const monthOptions: Intl.DateTimeFormatOptions = {month: 'short'};
  const dayOptions: Intl.DateTimeFormatOptions = {day: 'numeric'};
  return {
    dayHour: date.toLocaleDateString('en-US', firstOptions),
    month: date.toLocaleDateString('en-US', monthOptions),
    day: date.toLocaleDateString('en-US', dayOptions),
    long: date.toLocaleDateString('en-US', longOptions),
  };
};

export {
  formatDate,
};
