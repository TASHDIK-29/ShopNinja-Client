
import LineChart from "../../../components/charts/LineChart";
import BarChart from "../../../components/charts/BarChart";
import SectionHeading from "../../../shared/SectionHeading";

const AdminHome = () => {

    return (
        <div className="space-y-10">
            <SectionHeading heading={'Statistics'}></SectionHeading>

            <div className="flex flex-col items-center">
                <div className="text-center text-xl font-semibold space-y-2">
                    <h1>Bookings VS Date</h1>
                    <BarChart></BarChart>
                </div>
                <div className="text-center text-xl font-semibold space-y-2 mt-10">
                    <h1>Bookings VS Delivery</h1>
                    <LineChart></LineChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;