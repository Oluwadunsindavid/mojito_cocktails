import { SplitText } from "gsap/all";
import leftLeaf from "../../public/images/hero-left-leaf.png";
import rightLeaf from "../../public/images/hero-right-leaf.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });

    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Animation for the hero title
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo-out",
      stagger: 0.05,
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
    </>
  );
};

export default Hero;
