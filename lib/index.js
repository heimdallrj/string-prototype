String.prototype.allReplace = function(args) {
  var str = this;
  for (var x in args) {
      str = str.replace(new RegExp(x, 'g'), args[x]);
  }
  return str;
};
