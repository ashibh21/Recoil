import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { notifAtom, JobsAtom, messagingAtom, networkAtom, sum } from "./Atoms";

function App() {
  const notif = useRecoilValue(notifAtom);
  const Jobs = useRecoilValue(JobsAtom);
  const [messaging, setMessage] = useRecoilState(messagingAtom);
  const network = useRecoilValue(networkAtom);
  const total = useRecoilValue(sum);

  return (
    <div>
      <button>Home</button>
      <button>Notif({notif > 100 ? "99+" : notif})</button>
      <button>Messaging({messaging > 15 ? "14+" : messaging})</button>
      <button>Jobs</button>

      <button
        onClick={() => {
          setMessage(messaging + 1);
        }}
      >
        Me({total})
      </button>
    </div>
  );
}

export default App;
