document.addEventListener('DOMContentLoaded', ()=>{
    const stars =[];

    for(let i = 0; i < 500; i++){
        const star = document.createElement("div");
        star.className = 'star';
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        document.body.appendChild(star);
        stars.push(star)
    }

    function animate(){
        stars.forEach(star =>{
            let x = parseFloat(star.style.left);
            let y = parseFloat(star.style.top);

            let dx = window.innerWidth / 2 - x;
            let dy = window.innerHeight / 2 -y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if(dist > 5){
                star.style.left = `${x + dx / dist * 0.8}px`;
                star.style.top = `${y + dy /dist * 0.8}px`;
            }else{
                star.style.opacity =0;
            }
        })
        requestAnimationFrame(animate);
    }
    animate();
})