function show(){
              
    const div0=document.createElement('div');
    div0.setAttribute('id','div_0')
    const div1 =document.createElement('div');
    div1.setAttribute('id','ab')
    const p1=document.createElement('img')
    p1.setAttribute('id','im_1')
    p1.src='editer.png'
    const p2=document.createElement('img')
    p2.setAttribute('id','im_2')
    p2.src='delete.jpg'
    const bn_1=document.createElement('button')
    bn_1.setAttribute('id','bn1')
    const bn_2=document.createElement('button')
    bn_2.setAttribute('id','bn2')
    bn_1.appendChild(p1)
    bn_2.appendChild(p2)             
    div1.appendChild(bn_1)
    div1.appendChild(bn_2)
    
    div1.appendChild(bn_2)
    const text =document.createElement('textarea')
    text.setAttribute('id','textarea')
    div0.appendChild(div1)
    div0.appendChild(text)
    document.getElementById('cont').appendChild(div0)
    bn_2.addEventListener("click", function() {
     div0.remove();
   });

   
   bn_1.addEventListener("click", () => {
     var disabled = document.getElementById("textarea").disabled;
     if (disabled) {
         document.getElementById("textarea").disabled = true;
     }
     else {
         document.getElementById("textarea").disabled = false;
     }
   });

     };