export default function PlanTree({ travelPlan, onDelete, id, parentId }) {
  const place = travelPlan[id];

  return (
    <li>
      {place.title} <button onClick={()=>onDelete(place.id, parentId)}>Delete</button>
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map((id) => (
            <PlanTree key={id} 
            travelPlan={travelPlan}
            onDelete={onDelete} 
            id={id}
            parentId={place.id} />
          ))}
        </ol>
      )}
    </li>
  );
}
