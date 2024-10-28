import { Image } from "@nextui-org/image";

const Bio = ({ name, bio }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 my-1 p-2">
        <div className="flex flex-col items-start mx-auto my-3">
          <Image
            src="images/gris_placeholder.png"
            alt="Student Photo"
            className="rounded-full h-[250px] w-[250px] lg:h-[450px] lg:w-[450px] object-cover mt-2"
          />
          <h3 className="modal-student-name">
            {name}
          </h3>
        </div>
        <div className="grid-cols-1 md:grid-cols-2 items-start">
          <p className="modal-student-bio-text">{bio}</p>
        </div>
      </div>
    </>
  );
};

export default Bio;
