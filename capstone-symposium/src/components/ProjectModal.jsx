import Bio from "./Bio.jsx";
import { Button } from "@nextui-org/button";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export const ProjectModal = ({ clickedTeam, closeModal }) => {
  let sponsorText = clickedTeam.sponsor;
  let teamPhoto = `/images/${clickedTeam.photo}`;
  let students = clickedTeam.students;
  return (
    <>
      <div className="project-modal">
        <div className="max-w-[1500px] md:mx-auto max-h-[98vh] lg:max-h-[90vh] md:mb-40">
          <div className="project-modal-container">
            {/* header */}
            <Button
              className="modal-cb-button"
              onPress={() => closeModal()}
            >
              <span className="modal-code-bracket">
                <CodeBracketIcon />
              </span>
            </Button>
            <div className="flex flex-col items-center justify-center p-2 py-2">
              <img
                src={teamPhoto}
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
            <div className="relative p-4 md:p-5 md:flex-auto">
              <h2 className="modal-heading my-2">Project Description</h2>
              <p className="modal-text">
                Concept of the number one Vangelis permanence of the stars
                galaxies preserve and cherish that pale blue dot emerged into
                consciousness. Vastness is bearable only through love
                circumnavigated great turbulent clouds white dwarf two ghostly
                white figures in coveralls and helmets are softly dancing
                something incredible is waiting to be known.
              </p>
              <div className="flex flex-col md:items-start">
                {/* Names are passed to bio as a placeholder - if mobile 250 if large 400 */}
                {students.map((student) => (
                  <Bio key={student} name={student} bio={student} />
                ))}
                </div>
                <h2 className="modal-heading mt-5">Conclusion</h2>
                <p className="modal-text">
                  Galaxies as a patch of light Euclid corpus callosum
                  extraordinary claims require extraordinary evidence of
                  brilliant syntheses? Vastness is bearable only through love
                  something incredible is waiting to be known a still more
                  glorious dawn awaits shores of the cosmic ocean another world
                  citizens of distant epochs. The carbon in our apple pies
                  gathered by gravity concept of the number one paroxysm of
                  global death dream of the mind's eye Orion's sword?
                </p>
              </div>
            </div>
            {/* footer */}
          </div>
        </div>
    </>
  );
};

