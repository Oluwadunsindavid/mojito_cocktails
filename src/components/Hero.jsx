import { SplitText } from "gsap/all";
import leftLeaf from "../../public/images/hero-left-leaf.png";
import rightLeaf from "../../public/images/hero-right-leaf.png";
import video from "../../public/videos/output.mp4";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  // FOR THE VIDEO
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    // Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animation for the hero title
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo-out",
      stagger: 0.06,
    });

    // Animation for the hero subtitle
    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: "expo-out",
      stagger: 0.06,
      delay: 1,
    });

    // Animation for the hero image leaves
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      //   .to(
      //     ".left-leaf",
      //     { x: -100, y: -50, rotation: -15, duration: 1.5, ease: "power2.out" },
      //     0,
      //   )
      //   .to(
      //     ".right-leaf",
      //     { x: 100, y: -50, rotation: 15, duration: 1.5, ease: "power2.out" },
      //     0,
      //   );
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    // Video animation timeline
    // Create the timeline with a default duration
    //   videoTimelineRef.current = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "video",
    //       start: startValue,
    //       end: endValue,
    //       scrub: true,
    //       pin: true,
    //     },
    //   });

    //   videoRef.current.onloadedmetadata = () => {
    //     videoTimelineRef.to(videoRef.current, {
    //       currentTime: videoRef.current.duration,
    //     });
    //   };
    // }, []);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img src={leftLeaf} alt="left-left" className="left-leaf" />

        <img src={rightLeaf} alt="right-left" className="right-leaf" />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer with Mojito
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src={video}
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </>
  );
};

export default Hero;

// =========================================================== //
/* CODE FROM COPILOT FOR THE ANIMATION OF THE HERO SECTION VIDEO */
// =========================================================== //

// import { SplitText } from "gsap/all";
// import leftLeaf from "../../public/images/hero-left-leaf.png";
// import rightLeaf from "../../public/images/hero-right-leaf.png";
// import video from "../../public/videos/input.mp4";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";

// const Hero = () => {
//   // FOR THE VIDEO
//   const videoRef = useRef(null);

//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   useGSAP(() => {
//     const startValue = isMobile ? "top 50%" : "center 60%";
//     const endValue = isMobile ? "120% top" : "bottom top";

//     const heroSplit = new SplitText(".title", { type: "chars, words" });

//     const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

//     heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

//     // Animation for the hero title
//     gsap.from(heroSplit.chars, {
//       yPercent: 100,
//       duration: 1.8,
//       ease: "expo-out",
//       stagger: 0.05,
//     });

//     // Animation for the hero subtitle
//     gsap.from(paragraphSplit.lines, {
//       yPercent: 100,
//       opacity: 0,
//       duration: 1.8,
//       ease: "expo-out",
//       stagger: 0.06,
//       delay: 1,
//     });

//     // Animation for the hero image leaves
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: "#hero",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//         },
//       })
//       //   .to(
//       //     ".left-leaf",
//       //     { x: -100, y: -50, rotation: -15, duration: 1.5, ease: "power2.out" },
//       //     0,
//       //   )
//       //   .to(
//       //     ".right-leaf",
//       //     { x: 100, y: -50, rotation: 15, duration: 1.5, ease: "power2.out" },
//       //     0,
//       //   );
//       .to(".right-leaf", { y: 200 }, 0)
//       .to(".left-leaf", { y: -200 }, 0);

//     const videoElement = videoRef.current;
//     let videoTimeline;
//     const createVideoTimeline = () => {
//       if (
//         !videoElement ||
//         !Number.isFinite(videoElement.duration) ||
//         videoElement.duration <= 0
//       ) {
//         return;
//       }

//       videoTimeline = gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "#hero",
//             start: startValue,
//             end: endValue,
//             scrub: true,
//           },
//         })
//         .to(videoElement, {
//           currentTime: videoElement.duration,
//           ease: "none",
//         });
//     };

//     if (videoElement?.readyState >= 1) {
//       createVideoTimeline();
//     } else {
//       videoElement?.addEventListener("loadedmetadata", createVideoTimeline, {
//         once: true,
//       });
//     }

//     return () => {
//       videoElement?.removeEventListener("loadedmetadata", createVideoTimeline);
//       videoTimeline?.scrollTrigger?.kill();
//       videoTimeline?.kill();
//     };
//   }, []);
//   return (
//     <>
//       <section id="hero" className="noisy">
//         <h1 className="title">MOJITO</h1>

//         <img src={leftLeaf} alt="left-left" className="left-leaf" />

//         <img src={rightLeaf} alt="right-left" className="right-leaf" />

//         <div className="body">
//           <div className="content">
//             <div className="space-y-5 hidden md:block">
//               <p>Cool. Crisp. Classic.</p>
//               <p className="subtitle">
//                 Sip the Spirit <br /> of Summer with Mojito
//               </p>
//             </div>

//             <div className="view-cocktails">
//               <p className="subtitle">
//                 Every cocktail on our menu is a blend of premium ingredients,
//                 creative flair and timeless recipes - designed to delight your
//                 senses.
//               </p>
//               <a href="#cocktails">View Cocktails</a>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="video absolute inset-0">
//         <video
//           ref={videoRef}
//           src={video}
//           muted
//           playsInline
//           preload="auto"
//         ></video>
//       </div>
//     </>
//   );
// };

// export default Hero;
