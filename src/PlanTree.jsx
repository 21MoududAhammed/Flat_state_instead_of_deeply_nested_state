export default function PlanTree({ travelPlan, id }) {
  const place = travelPlan[id];

  return (
    <li>
      {place.title}
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map((id) => (
            <PlanTree key={id} travelPlan={travelPlan} id={id} />
          ))}
        </ol>
      )}
    </li>
  );
}
