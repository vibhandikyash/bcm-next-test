import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Card from "../Components/Card";
import { RightArrowIcon } from "../Components/Icons";
import Layout from "../Layout";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState("");

  const handleOnCardClick = (name: string) => setSelectedCard(name);
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-5 mt-20 mb-16">
        <p className="font-normal text-xl leading-7 text-gray-400">
          Choose an option below to continue
        </p>
        <p className="mt-6 max-w-2xl font-bold text-5xl leading-tight">
          How would you like us to help you today?
        </p>
        <div className="mt-12 mb-16 flex flex-col md:flex-row gap-12">
          <Card
            imageUrl="images/in_crisis.png"
            title="I AM IN CRISIS!"
            description="Help me with a step-by step checklist of recovery steps"
            isActive={selectedCard === "error"}
            onClick={() => handleOnCardClick("error")}
          />
          <Card
            variant="primary"
            imageUrl="images/crisis_ready_new.png"
            title="BE CRISIS READY"
            description="Help me build and maintain a plan of action in case of a crisis"
            isActive={selectedCard === "primary"}
            onClick={() => handleOnCardClick("primary")}
          />
        </div>
        {selectedCard && (
          <div className="text-right">
            <Button
              onClick={() => navigate("/control-panel")}
              className="text-base font-normal leading-6"
            >
              <div className="flex  items-center">
                NEXT <RightArrowIcon className="ml-8" />
              </div>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
