import React, { useCallback } from "react";
import useTextToSpeech from "../components/SpeakSynthesis";
import PhoneticsCourse from "../components/Phonics";
import DateCalender from "../components/utils/DateCalender";

const Dashboard = () => {
  
  return (
    <div>
      {/* <DateCalender/> */}
    <PhoneticsCourse/>

    </div>
  );
};

export default Dashboard;
