String.prototype.allReplace = function(args) {
  var str = this;
  for (var x in args) {
      str = str.replace(new RegExp(x, 'g'), args[x]);
  }
  return str;
};

String.prototype.toTitleCase(str: string) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}