import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";

type jobMode = "aglint" | "ats";
const modes: {
  name: string;
  value: jobMode;
}[] = [
  { name: "Aglint", value: "aglint" },
  { name: "ATS Sync", value: "ats" },
];

function Mode() {
  const { recruiterId } = useAppContext();
  const [jobMode, setJobMode] = useState<jobMode>("aglint");
  const [isSourcing, setIsSourcing] = useState<boolean>(false);
  const [isScoring, setIsScoring] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<{
    jobMode: boolean;
    scoring: boolean;
    sourcing: boolean;
  }>({
    jobMode: false,
    scoring: false,
    sourcing: false,
  });

  const supabase = window.supabase;

  const jobModeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as jobMode;
    setJobMode(value);
  };

  const fetchScoring = async () => {
    setIsLoading((pre) => ({ ...pre, scoring: true }));
    const {
      data: { scoring },
      error,
    } = await supabase
      .from("recruiter_preferences")
      .select("scoring")
      .eq("recruiter_id", recruiterId)
      .single();

    if (error) {
      console.log(error.message);
      return;
    }
    setIsScoring(scoring);
    setIsLoading((pre) => ({ ...pre, scoring: false }));
  };

  useEffect(() => {
    if (recruiterId) fetchScoring();
  }, [recruiterId]);

  const updateScoring = async () => {
    setIsScoring((pre) => !pre);
    setIsLoading((pre) => ({ ...pre, scoring: true }));
    const { error } = await supabase
      .from("recruiter_preferences")
      .update({ scoring: !isScoring })
      .eq("recruiter_id", recruiterId)
      .single();

    if (error) {
      console.log(error.message);
      return;
    }
    setIsScoring(!isScoring);
    setIsLoading((pre) => ({ ...pre, scoring: false }));
  };

  const sourcingHandler = () => {
    setIsSourcing((pre) => !pre);
  };

  const handleSourcing = () => {
    const url = "/candidates/history?currentTab=discover%20talent";
    window.open(url, "_blank");
  };

  return (
    <div id="mode">
      <div className="job-mode">
        <h5>Job Modes</h5>
        <div className="ats" style={{ display: "flex", gap: "10px" }}>
          {modes.map((mode) => (
            <label>
              <input
                disabled
                type="radio"
                name={"job"}
                value={mode.value}
                checked={mode.value === jobMode}
                onChange={jobModeHandler}
              />
              {mode.name}
            </label>
          ))}
        </div>
      </div>

      <div className="score">
        <h5>Enable Scoring</h5>

        {isLoading.scoring ? (
          "Updating..."
        ) : (
          <label>
            <input
              type="checkbox"
              onChange={updateScoring}
              checked={isScoring}
            />
            Scoring
          </label>
        )}
      </div>

      <div className="Sourcing">
        <h5>Enable Sourcing</h5>

        {isLoading.sourcing ? (
          "Updating..."
        ) : (
          <label>
            <input
              disabled
              type="checkbox"
              onChange={sourcingHandler}
              checked={isSourcing}
            />
            Sourcing
          </label>
        )}
      </div>

      {/* <div>
        <h5>Sourcing Page</h5>

        <button onClick={handleSourcing}>Click here</button>
      </div> */}
    </div>
  );
}

export default Mode;
