
setTimeout(() => {

    const ball = document.getElementById("ball-hover");
    
    // const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    // const mouse = { x: pos.x, y: pos.y };
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: -50, y: -50 };
    const speed = 0.35;

    const xSet = gsap.quickSetter(ball, "x", "px");
    const ySet = gsap.quickSetter(ball, "y", "px");

    // console.log(ball);

    window.addEventListener("mousemove", e => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    gsap.set(ball, { xPercent: -50, yPercent: -50, opacity: 1, background:'rgba(0,0,0,0)', width: 30, height: 30 });

    gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });


    var array = document.getElementsByClassName("vue-flow__node");
    let hover = gsap.to(document.getElementById('ball-hover'), {scale: 3, duration: 0.5,background: '#FF6400', falseease: "power1.inOut"});
    hover.reverse();

    for (var key = 0; key < array.length; key++) {
        
        array[key].addEventListener('mouseover', () => {
            hover.play();
        });
        array[key].addEventListener('mouseleave', () => {
            hover.reverse();
        });
    }
}, 500)

