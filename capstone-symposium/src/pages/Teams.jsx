import { Default } from "../layouts/Default";
import { TeamCard } from "../components/TeamCard";
import { useEffect, useRef, useState } from "react";

export const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const teamRef = useRef([]);

  useEffect(() => {
    // Fetches team data from /public
    const getTeamData = async () => {
      try {
        const response = await fetch("/data/teams.json", {
          headers: { "Content-Type": "application/json" },
        });
        let teams = await response.json();
        if (response.ok) {
          // stores data across re-renders
          teamRef.current = teams;
          setTeamData(teams);
        }
        // if an error occurs
        throw new Error();
      } catch (err) {
        console.log("Error, unable to fetch data");
      }
    };
    getTeamData();
  }, []);
  return (
    <>
    <Default>
      <section className="flex flex-col md:flex-row justify-center align-center md:px-5 py-[5rem] md:py-[5rem] lg:py-[20rem]">
        <div className="teams-container lg:container md:h-[1250px] w-auto lg:w-[1500px] lg:h-[950px]">
          <h1 className="team-heading">
            Teams
          </h1>
          {teamData.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </Default>
  </>
  );
}
