
import LineChart from "../../../components/charts/LineChart";
import BarChart from "../../../components/charts/BarChart";
import SectionHeading from "../../../shared/SectionHeading";

const AdminHome = () => {

    return (
        <div>
            <SectionHeading heading={'Statistics'}></SectionHeading>

            <div>
                <BarChart></BarChart>
            </div>
            <div>
                <LineChart></LineChart>
            </div>
        </div>
    );
};

export default AdminHome;