const WhyRecommended = ({ reasons }) => {
  return (
    <ul className="mt-3 text-sm text-gray-600 list-disc ml-5 space-y-1">
      {reasons.map((reason, i) => (
        <li key={i}>{reason}</li>
      ))}
    </ul>
  );
};

export default WhyRecommended;
