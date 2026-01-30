const HygieneBadge = ({ score }) => {
  const color =
    score >= 8
      ? "bg-green-100 text-green-700"
      : score >= 6
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      🧼 Hygiene {score}/10
    </span>
  );
};

export default HygieneBadge;
