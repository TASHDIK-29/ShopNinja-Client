import { useEffect, useState } from "react";
import Chart from 'react-apexcharts';


const BarChart = () => {


    const [options, setOptions] = useState({
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: []
        }
    });

    const [series, setSeries] = useState([{
        name: 'Bookings',
        data: []
    }]);

    useEffect(() => {
        fetch('https://assignment-12-server-sand-delta.vercel.app/barChart')
            .then(response => response.json())
            .then(data => {
                console.log('data = ',data);
                const dates = data.slice(1, data.length).map(item => item._id);
                const counts = data.slice(1, data.length).map(item => item.count);

                setOptions(prevOptions => ({
                    ...prevOptions,
                    xaxis: {
                        categories: dates
                    }
                }));

                setSeries([{
                    name: 'Bookings',
                    data: counts
                }]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>
            <Chart options={options} series={series} type="bar" width={800} height={350} />
        </div>
    );
};

export default BarChart;