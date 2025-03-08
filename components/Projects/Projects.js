import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !sectionTitleRef.current) return;

    let projectsTimeline, projectsScrollTrigger, revealTimeline, revealScrollTrigger;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = setupProjectsScroll();
    } else {
      adjustMobileView();
    }

    [revealTimeline, revealScrollTrigger] = setupRevealScroll();

    return () => {
      projectsScrollTrigger?.kill();
      projectsTimeline?.kill();
      revealScrollTrigger?.kill();
      if (revealTimeline) revealTimeline.progress(1);
    };
  }, [isDesktop]);

  // Adjusts styling for mobile/tablet views
  const adjustMobileView = () => {
    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");
    if (projectWrapper) {
      projectWrapper.style.width = "calc(100vw - 1rem)";
      projectWrapper.style.overflowX = "auto";
    }
  };

  // Sets up the reveal animation for section elements
  const setupRevealScroll = () => {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.6 } });
    const revealElements = sectionRef.current.querySelectorAll(".staggered-reveal");

    timeline.from(revealElements, { opacity: 0, y: 20, stagger: 0.3 }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: false,
      animation: timeline,
    });

    return [timeline, scrollTrigger];
  };

  // Sets up the horizontal scroll animation for projects
  const setupProjectsScroll = () => {
    const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });
    const innerContainer = sectionRef.current.querySelector(".inner-container");
    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");

    if (!innerContainer || !projectWrapper) return [null, null];

    const sidePadding = document.body.clientWidth - innerContainer.clientWidth;
    const elementWidth = sidePadding + projectWrapper.clientWidth;
    sectionRef.current.style.width = `${elementWidth}px`;

    const xMovement = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;

    timeline
      .to(sectionRef.current, { x: xMovement, duration: 1 })
      .to(sectionTitleRef.current, { x: -xMovement, duration: 1 }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: duration,
      scrub: true,
      pin: true,
      animation: timeline,
      pinSpacing: true,
    });

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`w-full relative select-none section-container transform-gpu ${
        isDesktop ? "min-h-screen" : ""
      }`}
    >
      <div className="flex flex-col py-8 justify-center h-full">
        {/* Section Title */}
        <div className="flex flex-col inner-container transform-gpu" ref={sectionTitleRef}>
          <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
            My Projects
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg max-w-sm mt-2 staggered-reveal">
            Some things I&apos;ve built with love, expertise, and a pinch of magical ingredients.
          </h2>
        </div>

        {/* Project Tiles */}
        <div
          className={`flex project-wrapper no-scrollbar w-fit staggered-reveal ${
            clientHeight > 650 ? "mt-12" : "mt-8"
          }`}
        >
          {PROJECTS.map((project, index) => (
            <ProjectTile
              key={project.name}
              project={project}
              classes={index === PROJECTS.length - 1 ? "" : "mr-10 xs:mr-12 sm:mr-16"}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
