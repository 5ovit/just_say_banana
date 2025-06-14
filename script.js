

window.addEventListener("load", () => {
    const tl = gsap.timeline();
  
    
    tl.from("img[alt='banana']", {
      y: -200,
      opacity: 0,
      duration: 1.2,
      ease: "bounce.out"
    });
  
   
    tl.from("h1", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.3");

    tl.from("h2", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=0.6");
  
   
    document.querySelectorAll(".text-yellow-300 p").forEach((p, i) => {
      tl.from(p, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: i * 0.2
      }, "-=0.3");
    });
  
 
   
    // Hover Animation — simple and interactive
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        scale: 1.08,
        duration: 0.25,
        ease: "power1.out"
      });
    });
    
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.25,
        ease: "power1.out"
      });
    });

  });
  

  const btn = document.getElementById("buyBtn");
  const burst = document.getElementById("burst");
  
  btn.addEventListener("click", () => {
    gsap.fromTo(btn, {
      scale: 1
    }, {
      scale: 1.2,
      rotate: 10,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "elastic.out(1, 0.4)"
    });
  
    const { top, left, width } = btn.getBoundingClientRect();
    burst.style.left = `${left + width / 2}px`;
    burst.style.top = `${top - 40}px`;
  
    gsap.fromTo(burst, {
      opacity: 1,
      scale: 0
    }, {
      opacity: 0,
      scale: 2,
      duration: 1,
      ease: "power1.out"
    });
  });
  

  gsap.to("#warning-strip", {
    xPercent: -50,
    repeat: -1,
    duration: 40,
    ease: "linear"
  });
  
  window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2",
        start: "top 70%",  
        toggleActions: "play none none none"
      }
    });
  
 
    tl2.from("#section2 h1", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.7)"
    });
  
    tl2.from("#section2 h2", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.7)"
    }, "-=0.5");
  

    tl2.from("#section2 .cursor-pointer", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.4");
  

    tl2.from("#section2 img", {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.5,
      ease: "power1.out"
    }, "-=0.6");
  });

  


  gsap.registerPlugin(ScrollTrigger);


  gsap.to("#breathe", {
    color: "#fff",
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    ease: "power1.inOut"
  });

  
  document.querySelectorAll("h1 span, h2").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.fromTo(el, { scale: 1 }, {
        scale: 1.08,
        y: -5,
        duration: 0.3,
        ease: "elastic.out(1, 0.5)"
      });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(el, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });


  const logo = document.querySelector("img[alt='Just Say Banana Logo']");
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  const logo2 = document.querySelector("img[alt='Just Say Banana Logo2']");
  logo2.addEventListener("mouseenter", () => {
    gsap.to(logo2, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo2.addEventListener("mouseleave", () => {
    gsap.to(logo2, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  const logo3 = document.querySelector("img[alt='Just Say Banana Logo3']");
  logo3.addEventListener("mouseenter", () => {
    gsap.to(logo3, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo3.addEventListener("mouseleave", () => {
    gsap.to(logo3, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  const logo4 = document.querySelector("img[alt='Just Say Banana Logo4']");
  logo4.addEventListener("mouseenter", () => {
    gsap.to(logo4, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo4.addEventListener("mouseleave", () => {
    gsap.to(logo4, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  const logo5 = document.querySelector("img[alt='Just Say Banana Logo5']");
  logo5.addEventListener("mouseenter", () => {
    gsap.to(logo5, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo5.addEventListener("mouseleave", () => {
    gsap.to(logo5, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  const logo6 = document.querySelector("img[alt='Just Say Banana Logo6']");
  logo6.addEventListener("mouseenter", () => {
    gsap.to(logo6, { rotate: -5, scale: 1.1, duration: 0.4, ease: "power1.out" });
  });
  logo6.addEventListener("mouseleave", () => {
    gsap.to(logo6, { rotate: 0, scale: 1, duration: 0.4, ease: "power1.out" });
  });

  // document.querySelector(".bg-white").addEventListener("click", () => {
  //   const tl = gsap.timeline();


  //   tl.to("body", { backgroundColor: "#ffffff", duration: 0.1 });
  //   tl.to("body", { backgroundColor: "#FFD900", duration: 0.3 });

  //   tl.to(".relative", {
  //     x: -10,
  //     duration: 0.05,
  //     repeat: 5,
  //     yoyo: true,
  //     ease: "power1.inOut"
  //   });


  //   tl.to(".bg-white", { scale: 0.95, duration: 0.1 }, "<");
  //   tl.to(".bg-white", { scale: 1, duration: 0.1 });
  // });



  // gsap.from(".text-pink-500", {
  //   x: -100,
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power2.out"
  // });


  // gsap.from(".w-1/2 img", {
  //   x: 100,
  //   opacity: 0,
  //   duration: 1.2,
  //   ease: "power2.out"
  // });


  // gsap.to(".text-white.font-bold", {
  //   color: "#FF499C",
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 0.6,
  //   ease: "power1.inOut"
  // });


  // gsap.from(".text-[#FF499C].font-bold", {
  //   y: -5,
  //   repeat: -1,
  //   yoyo: true,
  //   duration: 0.8,
  //   ease: "power1.inOut"
  // });


  // const friendText = document.querySelector("span.font-bold.text-white");
  // friendText.addEventListener("mouseenter", () => {
  //   gsap.to(friendText, {
  //     scale: 1.15,
  //     rotate: -2,
  //     duration: 0.4,
  //     ease: "elastic.out(1, 0.5)"
  //   });
  // });
  // friendText.addEventListener("mouseleave", () => {
  //   gsap.to(friendText, {
  //     scale: 1,
  //     rotate: 0,
  //     duration: 0.4,
  //     ease: "power1.out"
  //   });
  // });


  // const logo1 = document.querySelector("img[alt='Logo']");
  // logo.addEventListener("mouseenter", () => {
  //   gsap.to(logo1, {
  //     rotate: -5,
  //     scale: 1.05,
  //     duration: 0.4,
  //     ease: "power2.out"
  //   });
  // });
  // logo1.addEventListener("mouseleave", () => {
  //   gsap.to(logo1, {
  //     rotate: 0,
  //     scale: 1,
  //     duration: 0.4,
  //     ease: "power2.out"
  //   });
  // });


  gsap.utils.toArray("img[src*='star.png']").forEach((star, i) => {
    gsap.to(star, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1.5 + Math.random(),
      ease: "sine.inOut",
      delay: i * 0.2
    });
  });


  gsap.to("img[src*='misc.png']", {
    y: -12,
    repeat: -1,
    yoyo: true,
    duration: 1.4,
    ease: "sine.inOut"
  });
  gsap.to("img[src*='white.png']", {
    y: -12,
    repeat: -1,
    yoyo: true,
    duration: 1.4,
    ease: "sine.inOut"
  });

  gsap.to("img[src*='boy.png']", {
    y: -12,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "sine.inOut"
  });

  // window.addEventListener("load", () => {
  //   const logo = document.getElementById("logo");
  //   const letters = document.querySelectorAll(".letter");
  //   const loader = document.getElementById("loader");
  //   const main = document.getElementById("main-content");

  //   const tl = gsap.timeline();

  //   // Floating background image animations (infinite loop)
  //   gsap.utils.toArray(".floating-image").forEach(img => {
  //     gsap.to(img, {
  //       y: "+=20",
  //       duration: 3,
  //       repeat: -1,
  //       yoyo: true,
  //       ease: "sine.inOut",
  //       delay: Math.random()
  //     });
  //   });

  //   // Logo bounce in
  //   tl.to(logo, {
  //     y: 0,
  //     opacity: 1,
  //     scale: 1,
  //     duration: 1.2,
  //     ease: "bounce.out",
  //     from: { y: -200, scale: 1.4 }
  //   });

  //   // Animate letters one by one
  //   tl.to(letters, {
  //     opacity: 1,
  //     stagger: 0.1,
  //     duration: 0.3,
  //     ease: "power2.out"
  //   });

  //   // Slide loader up to reveal main site
  //   tl.to(loader, {
  //     y: "-100%",
  //     duration: 1.2,
  //     delay: 0.5,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       gsap.set("#loader", { display: "none" });
  //       gsap.to("#main-content", {
  //         opacity: 1,
  //         visibility: "visible",
  //         duration: 0.5,
  //         ease: "power1.out"
  //       });
  //       document.body.style.overflow = "auto";
  //     }
      
  //   });
  // });
  new fullpage('#main-content', {
    autoScrolling: true,
  });