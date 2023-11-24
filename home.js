var sound1= new Audio();
sound1.src = "click.wav";

const headerBg = () =>{
    const header = document.querySelector(".js-header");

    window.addEventListener("scroll", function(){
       if(this.scrollY > 0){
        header.classList.add("bg-reveal");
       } 
       else{
        header.classList.remove("bg-reveal");
       }
    })
}

const image = document.getElementById('shakeImage');

    function shakeImage() {
      
      image.classList.add('shake');

      setTimeout(() => {
        image.classList.remove('shake');
      }, 500);
    }
    
    const shakeButton = document.createElement('button');
    shakeButton.textContent = 'Shake Image';
    shakeButton.addEventListener('click', shakeImage);

    document.body.appendChild(shakeButton);

