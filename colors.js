var Body = {
  setColor : function(color){
    $('body').css('color', color);
  },
  setBackgroundColor : function(color){
    $('body').css('backgroundColor', color);
  }
}
var Links = {
  setColor : function(color){
    $('a').css('color', color);
  }
}
function NDHandler(self){
  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day';
    Links.setColor('skyblue');
  } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('#0F52BA')
  }
}

/* jQuery 사용하기 전 버전

var Body = {
  setColor : function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor : function(color){
    var alist = document.querySelectorAll('a')
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color
      i = i + 1;
  }
}
function NDHandler(self){
  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day';
    Links.setColor('skyblue');
  } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('#0F52BA')
  }
}

*/
