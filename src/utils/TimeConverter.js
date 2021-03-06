import React from "react";


export const TimeConverter = ({ unixTime }) => {
  var createDate = new Date(unixTime);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = createDate.getFullYear();
  var month = months[createDate.getMonth()];
  var date = createDate.getDate();

  var time = date + ' ' + month + ' ' + year;
  return time;

};