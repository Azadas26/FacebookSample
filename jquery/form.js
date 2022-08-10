$(document).ready(function()
       {
          $("#button").mouseenter(function()
          {
            $(this).css({"background":"red"})
          })
         
          $("#button").mouseleave(function()
          {
            $(this).css({"background":"#ffff",})
          })

           $("#button").click(function()
           {
               $("#root").toggle(5000).show()
           })
           $("#fname").blur(function()
           {   
                $("#sub").click(function(){
                    
                    
                    var a=$(this).val()
            if(a.length<4)
            {
               
               $("#ferror").show()
            }
            else
            {
                $("#ferror").hide()
            }

           })
        })

        


       })