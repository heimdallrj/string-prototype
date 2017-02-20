String.prototype.allReplace = function(list) {
  var str = this;
  for (var x in list) {
      str = str.replace(new RegExp(x, 'g'), list[x]);
  }
  return str;
};
