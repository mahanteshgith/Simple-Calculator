let String="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            try {
                String=eval(String);
                if(isNaN(String)|| !isFinite(String))
                {
                    throw new error("invalid input");
                }
                document.querySelector('input').value=String;
            } catch (error) {
                String="";
                document.querySelector('input').value="Error";
            }
        }
        else if(e.target.innerHTML=='AC')
        {
          String="";
          document.querySelector('input').value='';
        }
        else if(e.target.innerHTML=='Del')
        {
         String=String.slice(0,-1);
          document.querySelector('input').value=String;
        }
        else
        {
        console.log(e.target)
        String=String+e.target.innerHTML;
        document.querySelector('input').value=String;
        }
    })
});