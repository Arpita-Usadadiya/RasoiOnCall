import { useState } from "react";
import singlesImg from "../../assets/singles.png";   // replace with your image
import familyImg from "../../assets/family.png";     // replace with your image

const FoodTabs = () => {
  const [activeTab, setActiveTab] = useState("singles");

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Healthy food cooked in your kitchen, <br />
          whenever you want!
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-12">
          <button
            onClick={() => setActiveTab("singles")}
            className={`pb-2 text-lg font-medium ${
              activeTab === "singles"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            For Singles
          </button>

          <button
            onClick={() => setActiveTab("family")}
            className={`pb-2 text-lg font-medium ${
              activeTab === "family"
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400"
            }`}
          >
            For Families
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <img
              src={activeTab === "singles" ? singlesImg : familyImg}
              alt="Food"
              className="rounded-3xl w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            {activeTab === "singles" ? (
              <>
                <h3 className="text-3xl font-semibold text-gray-700 mb-4">
                  No more missing Ghar Ka Khana!
                </h3>
                <p className="text-gray-600 text-lg">
                  Let our cooks bring memories of home to your plate.
                </p>
              </>
            ) : (
              <>
                <h3 className="text-3xl font-semibold text-gray-700 mb-4">
                  Food catered to every family member!
                </h3>
                <p className="text-gray-600 text-lg">
                  Spend time with your loved ones as our best cooks take care
                  of the cooking.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTabs;
