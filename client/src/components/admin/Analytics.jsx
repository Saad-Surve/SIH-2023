import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";
import "./Analytics.css";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const startDate = "2023-12-19T00:00:00.000Z";
        const endDate = "2023-12-20T00:00:00.000Z";

        const encodedStartDate = encodeURIComponent(startDate);
        const encodedEndDate = encodeURIComponent(endDate);

        const requestConfig = {
          headers: {
            Authorization: "Bearer bp_pat_ekZzHVyZpKK3DGUm5aB9Yv0Y4WuyCZp4fR15",
            "x-workspace-id": "wkspace_01HHS5SK8R4R7MAJBMG0ZDDQBX",
          },
        };

        const response = await axios.get(
          `https://api.botpress.cloud/v1/admin/bots/39087857-853a-4442-b7a5-678a1be45b82/analytics?startDate=${encodedStartDate}&endDate=${encodedEndDate}`,
          requestConfig
        );

        // Assuming the response data is what you want to display
        setAnalyticsData(response.data.records);
        // console.log(analyticsData);
      } catch (error) {
        console.error("Error fetching analytics data:", error);
        // Handle the error as needed
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  // Dynamically generate labels and datasets from analyticsData
  const generateChartData = () => {
    if (!analyticsData) return null;

    const labels = analyticsData.map(
      (data) =>
        `${data.startDateTimeUtc.split("T")[0]}\n\n${
          data.startDateTimeUtc.split("T")[1].split(".")[0]
        }`
    );
    const datasets = [
      {
        label: "New Users",
        data: analyticsData.map((data) => data.newUsers),
        borderColor: "black",
        backgroundColor: "white",
      },
      // Add more datasets as needed
    ];

    return { labels, datasets };
  };

  const data = generateChartData();

  return (
    <div className="container bg-white w-full h-full ">
      <h2 className="chart-title pt-2">Analytics Data</h2>
      <div className="chart-container justify-self-center ">
        {data ? (
          <Line
            data={data}
            options={{
              responsive: true,
            }}
          />
        ) : (
          <p className="loading-message">Loading analytics data...</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
