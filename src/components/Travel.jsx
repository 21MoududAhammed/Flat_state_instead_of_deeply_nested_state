import { useState } from "react";
import { initialTravelPlan } from "../data.js";
import PlanTree from "../PlanTree.jsx";
export default function Travel() {
  const [travelPlan, setTravelPlan] = useState(initialTravelPlan);
  const root = travelPlan[0];
  const childIds = root.childIds;

  function handleDelete(childId, parentId) {
    const parent = travelPlan[parentId];
    const nextParent = {
        ...parent, 
        childIds: parent.childIds.filter(id => id !== childId),
    }
    setTravelPlan({
        ...travelPlan, 
        [parentId]: nextParent,
    })
  }

  return (
    <ol>
      {childIds.map((id) => (
        <PlanTree
          key={id}
          travelPlan={travelPlan}
          onDelete={handleDelete}
          id={id}
          parentId={0}
        />
      ))}
    </ol>
  );
}
