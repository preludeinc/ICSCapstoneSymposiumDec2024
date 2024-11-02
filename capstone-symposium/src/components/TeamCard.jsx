import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { ProjectModal } from "./ProjectModal"; 

export const TeamCard = ({ team }) => {
  const [projectData, setProjectData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const projectRef = useRef([]);
  let sponsorLogo = `/images/${team.photo}`;
  let teamPhoto = `/images/${team.team_photo}`;
  let clickedTeam;

  useEffect(() => {
    // Fetches project data from /public
    const getProjectData = async () => {
      try {
        const response = await fetch("/data/projects.json", {
          headers: { "Content-Type": "application/json" },
        });
        let projects = await response.json();
        if (response.ok) {
          // stores data across re-renders
          projectRef.current = projects;
          setProjectData(projects);
        } else {
          throw new error();
        }
      } catch (err) {
        console.log("Error, unable to fetch data");
      }
    };
    getProjectData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  // Data passed to modal on button-click
  if (projectData != null) {
    clickedTeam = projectData[team.id];
  }

  return (
    <>
      <div className="team-card-container">
        <div className="flex col-span-3 row-span-3">
          {" "}
          <div className="justify-center align-middle relative group">
            <img
              className="w-[22em] h-[15em] md:w-[30em] md:h-[15em] lg:w-[40em] lg:h-[18em] object-contain mx-auto mt-4 md:mt-0 md:p-4 lg:p-4 aspect-square
              transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              src={sponsorLogo}
              alt="Sponsor Logo"
            />
            <img
              className="absolute left-0 top-0 w-full object-cover
              transition-opacity duration-300 ease-in-out opacity-0 mx-auto
              group-hover:opacity-100 justify-center"
              src={teamPhoto}
              alt="Teams"
            />
          </div>
        </div>
        <div className="grid rows-2 col-span-2 mr-auto">
          <div className="flex flex-row">
            <h1 className="team-card-heading">{team.team}</h1>
          </div>
        </div> 
        <div className="grid rows-1 col-span-1 md:-mx-4">
          <button
            className="arrow-button"
            onClick={() => setShowModal(true)}
          >
            <ArrowUpRightIcon className="arrow-icon" />
          </button>
        </div>
      </div>
      {showModal ? (
        <>
          <ProjectModal clickedTeam={clickedTeam} closeModal={closeModal} />
        </>
      ) : null}
    </>
  );
};
