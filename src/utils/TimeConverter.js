
export const TimeConverter = ({ unixTime }) => {
  var createDate = new Date(unixTime * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = createDate.getFullYear();
  var month = months[createDate.getMonth()];
  var date = createDate.getDate();
  var hour = createDate.getHours();
  var min = createDate.getMinutes();
  var sec = createDate.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;

};