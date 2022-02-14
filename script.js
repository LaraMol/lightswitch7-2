var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Button';
document.body.appendChild(btn);
body = document.getElementsByTagName('body')[0];

// schijf hier tussen je code
btn.onclick = function(){
    console.log("clicked");
    color = body.style.backgroundColor;
            if(color === 'yellow'){
                body.style.backgroundColor = 'black';
            }else{
                body.style.backgroundColor = 'yellow';
            }
    };
// schijf hier tussen je code/