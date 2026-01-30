import PreferenceForm from "./PreferenceForm";
import RecommendationList from "./RecommendationList";

const Recommendations = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-8">
        Smart Chef Recommendations 🤖
      </h1>

      <PreferenceForm />
      <RecommendationList />
    </section>
  );
};

export default Recommendations;
