function nightdayhandler(self){
    var target = document.querySelector('body');      
        if(this.value == 'day'){
          target.style.backgroundColor = 'white';
          target.style.color = 'black';
          this.value = 'night';
          document.querySelector('#night_day_2').value = 'night';
        } else {
          target.style.backgroundColor = 'black';
          target.style.color = 'white';
          this.value = 'day';
          document.querySelector('#night_day_2').value = 'day';
        }
}