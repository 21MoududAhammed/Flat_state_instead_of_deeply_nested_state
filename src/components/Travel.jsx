import { useState } from "react";
import { initialTravelPlan } from "../data.js";
import PlanTree from "../PlanTree.jsx";
export default function Travel() {
  const [travelPlan, setTravelPlan] = useState(initialTravelPlan);
  const root = travelPlan[0];
  const childIds = root.childIds;

  return (
    <ol>
      {childIds.map((id) => (
        <PlanTree key={id} travelPlan={travelPlan} id={id} />
      ))}
    </ol>
  );
}
