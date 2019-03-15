           function createRect(){
                var n = 1;
                var minSize = 80;
                var linha, coluna;
                var x = false;
                //while(x == false){
                    
                //}

                var x = 0;
                var y = 0;
                var width = 200;
                var height = 150;
            
                var canvas = document.createElement('canvas'); //Create a canvas element
                //Set canvas width/height
                canvas.style.width='100%';
                canvas.style.height='100%';
                //Set canvas drawing area width/height
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                //Position canvas
                canvas.style.position='absolute';
                canvas.style.left=0;
                canvas.style.top=0;
                canvas.style.zIndex=100000;
                canvas.style.pointerEvents='none'; //Make sure you can click 'through' the canvas
                document.body.appendChild(canvas); //Append canvas to body element
                var context = canvas.getContext('2d');
                //Draw rectangle
                context.rect(x, y, width, height);
                
                context.fillStyle = 'yellow';
                context.fill();
                context.rect(x+x, y+y, width, height);
                

                context.fillStyle = 'yellow';
                context.fill();

              // alert("ended!");
           }
           function polimorph(){
           
               
                if (document.getElementById("animal").name == "cato"){
                    document.getElementById("animal").src = "img/dog.jpg";
                    document.getElementById("animal").name = "dogo";
                    
                }else{
                
                    document.getElementById("animal").src = "img/cat.jpg";
                    document.getElementById("animal").name = "cato";
                    
                }
                
            }