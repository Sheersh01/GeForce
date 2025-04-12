var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

function fulltimeline(){
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
  });
 
  tl.to("#loader", {
    display: "none",
  });
  
}
fulltimeline()

function nav() {
  gsap.to(".banner", {
    backgroundColor: "#00000090",
    backdropFilter: "blur(10px)",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: ".banner",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });


  // Use a single DOMContentLoaded handler for everything.
  if (window.innerWidth > 438) {
    document.addEventListener("DOMContentLoaded", function () {
      // ---------------------------
      // Nav open/close animation
      // ---------------------------
      const overlay = document.querySelector(".overlay");
      const openBtn = document.querySelector(".open");
      const closeBtn = document.querySelector(".close");

      let menuAnimation = gsap.timeline({ paused: true });
      menuAnimation.to(overlay, {
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        duration: 0.5,
        ease: "power2.out",
      });

      openBtn.addEventListener("click", () => {
     
        menuAnimation.play();
      });
      document.addEventListener("click", (event) => {
        // Check if the clicked element is NOT inside secondBox, secondBox2, or a menu item
       
      });
      // When closing the nav, also hide the subheading div.
      closeBtn.addEventListener("click", () => {
        menuAnimation.reverse();
    });

      // -----------------------------------
      // Subheading (secondBox) functionality
      // -----------------------------------
      

    })}
}
nav();

function boxAnim(){
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
  // animate all boxes
  gsap.to(box, {
    scrollTrigger: {
      scroller: "body", // use body as scroller
      trigger: box,       // each box is its own trigger
      start: "top 85%", 
      end:"bottom 10%",     // when the top of the box hits 85% down the viewport
      // toggleActions: "play none none none",
      // markers: true,      // uncomment to debug start/end positions
    },
    opacity: 1,
    duration: 1.0,
    stagger: 0.2,
    ease: "easeIn"
  })
  }
  );
  
  
}
boxAnim()

function textAnim(){

  const heading = document.querySelector('.clutter-heading');
  const text = heading.textContent;
  heading.textContent = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    heading.appendChild(span);
  });
  
  // Animate letters in with random rotation/position
  gsap.from(".clutter-heading span", {
    scrollTrigger: {
      trigger: ".clutter-heading",
      start: "top 80%",
      toggleActions: "play none none none",
      // markers: true
    },
    opacity: 0,
    x: () => gsap.utils.random(-100, 100),
    y: () => gsap.utils.random(-100, 100),
    rotation: () => gsap.utils.random(-90, 90),
    duration: 1,
    ease: "power4.out",
    stagger: {
      each: 0.03,
      from: "center"
    }
  });
  
  const headingA = document.querySelector('.clutter-heading2');
  const textA = headingA.textContent;
  headingA.textContent = '';
  textA.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    headingA.appendChild(span);
  });
  
  // Animate letters in with random rotation/position
  gsap.from(".clutter-heading2 span", {
    scrollTrigger: {
      trigger: ".clutter-heading2",
      start: "top 80%",
      toggleActions: "play none none none",
      // markers: true
    },
    opacity: 0,
    x: () => gsap.utils.random(-100, 100),
    y: () => gsap.utils.random(-100, 100),
    rotation: () => gsap.utils.random(-90, 90),
    duration: 1,
    ease: "power4.out",
    stagger: {
      each: 0.03,
      from: "center"
    }
  });
}
textAnim()

// const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', function() {
  if (searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
    if(window.innerWidth<1024)
    title2.style.display = 'block'; // Show title2 when search is hidden
  } else {
    searchForm.classList.add('active');
    searchInput.focus();
    if(window.innerWidth<1024)
    title2.style.display = 'none'; // Hide title2 when search is active
  }
});
searchInput.addEventListener('blur', function() {
      if (searchInput.value.trim() === '') {
        searchForm.classList.remove('active');
        if(window.innerWidth<1024)
        title2.style.display = 'block';
      }
});
