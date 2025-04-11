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
      const menuContent = {
        about: `
        `,
        explore: `
    <div class="flex justify-between py-2">
        <div class="w-[30%]">
          <h1 class=" lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular bg-[#f26e32] text-center font-bold text-white">
            <a href="#">Technical Clubs</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/dotslash">Dotslash</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/elevate">Elevate</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/crispr">Crispr</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/udhyam">Udhyam</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/iotics">Iotics</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/strokes">Strokes</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/dimensions">Dimensions</a>
          </h1>
        </div>
      
        <div class="w-[30%]">
          <h1 class=" lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular bg-[#f26e32] text-center font-bold text-white border-b-2 border-[#00457b]/20">
            <a href="#">Cultural Clubs</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/crescendo">Crescendo</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/dtraxia">Dtraxia</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/estoria">Estoria</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/orator">Orator</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="/club/probe">Probe</a>
          </h1>
        </div>
      
        <div class="w-[30%]">
          <h1 class=" lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular bg-[#f26e32] text-center font-bold text-white">
            <a href="#">Events</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="https://www.tantrafiesta.in/">Tantrafiesta</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
            <a href="https://www.abhivyaktifest.in/">Abhivyakti</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
               <a href="/others/Kshitij">Kshitij</a>
          </h1>
        </div>
      </div>
        `,
        governance: `
          <div class="flex justify-between py-2">
            <div class="w-[48%]">
                <h1 class=" lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular bg-[#f26e32] text-center font-bold text-white">
                <a href="#">Committee</a>
              </h1>
                <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/board-of-governors">Board of Governors</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/finance-committee">Finance Committee</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/senate">Senate</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/building-works-committee">Building Works Committee</a>
              </h1>
            </div>
            <div class="w-[48%]">
              <h1 class=" lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular bg-[#f26e32] text-center font-bold text-white">
                <a href="#">Admintration</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/chairman">Chairman</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/director">Director</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/registrar">Registrar</a>
              </h1>
              <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border-b-2 border-[#00457b]/20">
                <a href="/governance/staff">Staff</a>
              </h1>
            </div>
          </div>
        `,
        department: `
        `,
        admissions: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="admissions/undergraduate-btech">Undergraduate B.Tech</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="admissions/postgraduate">Postgraduate</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="admissions/ug-academic-rule-book">UG Academic Rule Book</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="admissions/pg-academic-rule-book">PG Academic Rule Book</a>
          </h1>
       
        `,
        alumni: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/alumni/Member">Members</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/alumni/MemberLogin">Member Login</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/alumni/AboutUs">About Us</a>
          </h1>
        `,
        placements: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/about-us">About Us</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/why-recruit-from-iiit-nagpur">Why Recruit from IIITN Nagpur?</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/placement-statistics">Placement Statistics</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/for-companies">For Companies</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/for-students">For Students</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/contact-tp">Contact T&amp;P</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/placements/internships">Internships</a>
          </h1>
        `,
        student: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/activities">Activities</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/achievements">Achievements</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/clinical-counselling">Clinical Counselling</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/scholarship">Scholarships</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/hostel">Hostel</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/student-mess">Student Mess</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/download">Download</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/convocation-2023">Convocation 2023</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/student/fees">Fees</a>
          </h1>
        `,
        nirf: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/nirf/nirf-2025">NIRF 2025</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/nirf/nirf-2024">NIRF 2024</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/nirf/nirf-2023">NIRF 2023</a>
          </h1>
        `,
        others: `
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/consultancy">Consultancy</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/institution-innovation-council">Institution Innovation Council</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/offcial-documents">Offcial Documents</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/electoral-literacy-club">Electoral Literacy Club</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/guest-house">Guest House</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/press-release">Press Release</a>
          </h1>
           <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/tender">Tender</a>
          </h1>
          <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/rti">RTI</a>
          </h1>
               <h1 class="hover:bg-[#00457b] hover:text-white lg:py-2 md:py-[2.5px] px-4 lg:text-[1vw] md:text-[1.2vw] font-regular text-[#00457b] border border-[#00457b]/20">
            <a href="/others/recruitment">Recruitment</a>
          </h1>
        `,
      };

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

const searchIcon = document.querySelector('.search-icon');
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
