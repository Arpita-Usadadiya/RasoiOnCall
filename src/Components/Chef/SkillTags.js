const SkillTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default SkillTags;
