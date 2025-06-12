const trail = document.createElement("div");
  trail.style.position = "fixed";
  trail.style.width = "32px";
  trail.style.height = "32px";
  trail.style.backgroundImage = "url('./images/sparkle.png')";
  trail.style.backgroundSize = "contain";
  trail.style.pointerEvents = "none";
  document.body.appendChild(trail);

  document.addEventListener("mousemove", (e) => {
    trail.style.left = `${e.clientX}px`;
    trail.style.top = `${e.clientY}px`;
  });
//   window.addEventListener("load", () => {
//     // Timeline
//     const tl = gsap.timeline();

//     // Animate Banana Image (bounce in)
//     tl.from("img[alt='banana']", {
//       y: -200,
//       opacity: 0,
//       duration: 1.2,
//       ease: "bounce.out"
//     });

//     // Animate "CAUTION!" and "THIS BOOK IS BANANAS!"
//     tl.from("h1", {
//       scale: 0,
//       opacity: 0,
//       duration: 0.7,
//       ease: "back.out(1.7)"
//     }, "-=0.5");

//     tl.from("h2", {
//       scale: 0,
//       opacity: 0,
//       duration: 0.7,
//       ease: "back.out(1.7)"
//     }, "-=0.6");

//     // Animate the 3 lines of text one by one
//     tl.from(".text-yellow-300 p", {
//       x: -100,
//       opacity: 0,
//       stagger: 0.3,
//       duration: 0.6,
//       ease: "power2.out"
//     }, "-=0.4");

//     // Animate Buy Me button (pop-in)
//     tl.from("button", {
//       scale: 0,
//       duration: 0.6,
//       ease: "elastic.out(1, 0.5)"
//     });

//     // Optional hover effect after animation
//     gsap.to("button", {
//       scale: 1.05,
//       repeat: -1,
//       yoyo: true,
//       duration: 1,
//       ease: "sine.inOut"
//     });
//   });
//   const btn = document.getElementById("buyBtn");
//   const burst = document.getElementById("burst");

//   btn.addEventListener("click", () => {
//     // Button press animation
//     gsap.fromTo(btn, {
//       scale: 1
//     }, {
//       scale: 1.2,
//       rotate: 10,
//       duration: 0.2,
//       yoyo: true,
//       repeat: 1,
//       ease: "elastic.out(1, 0.4)"
//     });

//     // Fun spark burst animation
//     const { top, left, width } = btn.getBoundingClientRect();
//     burst.style.left = `${left + width / 2}px`;
//     burst.style.top = `${top - 40}px`;

//     gsap.fromTo(burst, {
//       opacity: 1,
//       scale: 0
//     }, {
//       opacity: 0,
//       scale: 2,
//       duration: 1,
//       ease: "power1.out"
//     });
//   });
//   gsap.to("#warning-strip", {
//     xPercent: -50,
//     repeat: -1,
//     duration: 40,
//     ease: "linear"
//   });

//   // Buy button sparkle effect
//   const buyBtn = document.getElementById("buyBtn");
//   const spark = document.getElementById("spark");

//   buyBtn.addEventListener("click", () => {
//     // Button scale bounce
//     gsap.fromTo(buyBtn, 
//       { scale: 1 }, 
//       { scale: 1.15, duration: 0.2, ease: "power1.out", yoyo: true, repeat: 1 }
//     );

//     // Sparkle animation
//     gsap.fromTo(spark, 
//       { opacity: 1, scale: 0 },
//       { opacity: 0, scale: 2, duration: 1, ease: "power1.out" }
//     );
//   });
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
  
 
    tl.from("#buyBtn", {
      scale: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  
   
    gsap.to("#buyBtn", {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut"
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


  document.querySelector(".bg-white").addEventListener("click", () => {
    const tl = gsap.timeline();


    tl.to("body", { backgroundColor: "#ffffff", duration: 0.1 });
    tl.to("body", { backgroundColor: "#FFD900", duration: 0.3 });

    tl.to(".relative", {
      x: -10,
      duration: 0.05,
      repeat: 5,
      yoyo: true,
      ease: "power1.inOut"
    });


    tl.to(".bg-white", { scale: 0.95, duration: 0.1 }, "<");
    tl.to(".bg-white", { scale: 1, duration: 0.1 });
  });



  gsap.from(".text-pink-500", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });


  gsap.from(".w-1/2 img", {
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });


  gsap.to(".text-white.font-bold", {
    color: "#FF499C",
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    ease: "power1.inOut"
  });


  gsap.from(".text-[#FF499C].font-bold", {
    y: -5,
    repeat: -1,
    yoyo: true,
    duration: 0.8,
    ease: "power1.inOut"
  });


  const friendText = document.querySelector("span.font-bold.text-white");
  friendText.addEventListener("mouseenter", () => {
    gsap.to(friendText, {
      scale: 1.15,
      rotate: -2,
      duration: 0.4,
      ease: "elastic.out(1, 0.5)"
    });
  });
  friendText.addEventListener("mouseleave", () => {
    gsap.to(friendText, {
      scale: 1,
      rotate: 0,
      duration: 0.4,
      ease: "power1.out"
    });
  });


  const logo1 = document.querySelector("img[alt='Logo']");
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo1, {
      rotate: -5,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out"
    });
  });
  logo1.addEventListener("mouseleave", () => {
    gsap.to(logo1, {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,             
    scrollingSpeed: 1000,
    easingcss3: 'ease-in-out',
    anchors: ['caution', 'banana'], 
    responsiveWidth: 768          
  });