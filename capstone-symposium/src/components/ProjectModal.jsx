import Bio from "./Bio.jsx";
import { Button } from "@nextui-org/button";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const ProjectModal = ({ clickedTeam, closeModal }) => {
  let bios = clickedTeam.bios;
  let sponsorText = clickedTeam.sponsor;
  let sponsorPhoto = `/images/sponsors/${clickedTeam.photo}`;
  
  return (
    <>
      <div className="project-modal">
        <div className="md:max-w-[92%] md:mx-auto max-h-[98vh] lg:max-h-[90vh] md:mb-40">
          <div className="project-modal-container">
            {/* header */}
            <Button
              className="modal-close-button"
              onPress={() => closeModal()}
            >
              <span className="modal-close">
                <XCircleIcon />
              </span>
            </Button>
            <div className="flex flex-col items-center justify-center">
              <img
                src={sponsorPhoto}
                className="team-logo"
                alt="Sponsor"
              />
                <h2 className="modal-team-heading">
                  {clickedTeam.team}
                </h2>
                <h3 className="modal-sponsor-heading">
                  {sponsorText}
                </h3>
            </div>
            {/* body */}
            <div className="relative md:flex-auto">
              <h2 className="modal-heading">Project Description</h2>
              <p className="modal-text">
                {clickedTeam.intro}
              </p>
              <div className="flex flex-col">
                {bios.map((bio) => (
                  <Bio key={bio.id} {...bio} />
                ))}
                </div>
                <h2 className="modal-heading mt-5">Conclusion</h2>
                <p className="modal-text">
                  {clickedTeam.conclusion}
                </p>
              </div>
            </div>
            {/* footer */}
          </div>
        </div>
    </>
  );
};

