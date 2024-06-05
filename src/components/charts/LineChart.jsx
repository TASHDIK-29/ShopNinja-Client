import { useEffect, useState } from "react";
import Chart from 'react-apexcharts';


const LineChart = () => {


    const [options, setOptions] = useState({
        chart: {
            id: 'apexchart-example'
        },
        xaxis: {
            categories: []
        }
    });

    const [series, setSeries] = useState([
        {
            name: 'Booked',
            data: []
        },
        {
            name: 'Delivered',
            data: []
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/lineChart');
                // if (!response.ok) {
                //   throw new Error(`HTTP error! Status: ${response.status}`);
                // }
                const data = await response.json();
                console.log('linechart data = ', data);
                // if (!data || !Array.isArray(data)) {
                //   throw new Error('Invalid data format');
                // }

                const datesSet = new Set();
                const booked = {};
                const delivered = {};

                data.forEach(item => {
                    const date = item._id.deliveryDate;
                    datesSet.add(date);
                    if (item._id.status === 'pending') {
                        booked[date] = item.count;
                    } else if (item._id.status === 'Delivered') {
                        delivered[date] = item.count;
                    }
                });

                const dates = Array.from(datesSet).sort();
                const bookedData = dates.map(date => booked[date] || 0);
                const deliveredData = dates.map(date => delivered[date] || 0);

                setOptions(prevOptions => ({
                    ...prevOptions,
                    xaxis: {
                        categories: dates
                    }
                }));

                setSeries([
                    {
                        name: 'Booked',
                        data: bookedData
                    },
                    {
                        name: 'Delivered',
                        data: deliveredData
                    }
                ]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            {options.xaxis.categories.length > 0 ? (
                <Chart options={options} series={series} type="line" width={500} height={320} />
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default LineChart;