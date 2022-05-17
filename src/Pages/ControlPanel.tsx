import PieChart from "../Components/PieChart";
import { chartData } from "../Components/PieChart/data";
import Layout from "../Layout";

const ControlPanel = () => {
  return (
    <Layout>
      <div className="mx-11">
        <PieChart data={chartData} />
      </div>
    </Layout>
  );
};

export default ControlPanel;
