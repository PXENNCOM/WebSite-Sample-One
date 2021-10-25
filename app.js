gsap.from(".bannerimg", {
    opacity: 0, 
    y: -800,
    x:-200, 
    duration: 3,
    ease:Elastic.easeOut
  });
  gsap.from(".solbeyazh1",
    {y:-300,
     duration:2,
    })
  gsap.from(".solbeyazdesc",
    {x:200,
     duration:2,
    })
  gsap.from(".banner button",
    {y:100,
     duration:2,
    })
  gsap.from("containerportfolio img",{
      scale:1.1
  })