import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

const ProjectTile = ({ project, classes = "", isDesktop }) => {
  const { name, image, blurImage, description, gradient, url, tech } = project;
  const projectCardRef = useRef(null);

  const tiltOptions = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  useEffect(() => {
    const tiltNode = projectCardRef.current;
    if (!tiltNode) return;
    VanillaTilt.init(tiltNode, tiltOptions);
    return () => tiltNode.vanillaTilt && tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${classes}`}
      ref={projectCardRef}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[25rem] w-[38rem] bg-black ${styles.ProjectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        {/* Background Overlay */}
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
        />

        {/* Content Section */}
        <div className="relative flex items-center gap-6 p-6 bg-gradient-to-r from-orange-500/20 to-orange-700/40 rounded-3xl shadow-lg">
          
          {/* Left Section - Title & Description */}
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold text-white drop-shadow-md">{name}</h2>
            <p className="text-white/90 text-sm drop-shadow-md">{description}</p>
          </div>

          {/* Right Section - Image */}
          <div className="relative w-60 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurImage}
              className="rounded-xl transition-all hover:scale-105"
            />
          </div>
        </div>

        {/* Gradient Overlays for Styling */}
        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />

        {/* Title and Description */}
        <h1
          className="font-medium text-3xl sm:text-4xl z-10 pl-2"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>

        {/* Tech Stack Icons */}
        <div
          className={`${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden`}
        >
          <div className="flex flex-col pb-8">
            {tech.map((el, i) => (
              <img
                key={el}
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                className={`${i % 2 === 0 ? "ml-16" : ""} mb-4`}
              />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
