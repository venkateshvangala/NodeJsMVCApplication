(function($){
     var testView = {
        init: function(){
          var self = this;
          // $("a").bind("click", self.testing());
        },

        testing: function(){
          alert("mytest")
        }
     }

     testView.init();
})($);
