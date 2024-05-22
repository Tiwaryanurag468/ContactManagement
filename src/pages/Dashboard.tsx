import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const { data: historicalData, isLoading: isLoadingHistorical } = useQuery('historicalData', () =>
    axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all').then(res => res.data)
  );

  const { data: countriesData, isLoading: isLoadingCountries } = useQuery('countriesData', () =>
    axios.get('https://disease.sh/v3/covid-19/countries').then(res => res.data)
  );

  if (isLoadingHistorical || isLoadingCountries) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: Object.keys(historicalData.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(historicalData.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(historicalData.deaths),
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(historicalData.recovered),
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h2 className="text-xl font-bold">COVID-19 Cases Over Time</h2>
      <Line data={chartData} />

      <h2 className="text-xl font-bold">Map</h2>
      {countriesData && (
        <MapContainer center={[20, 0]} zoom={2} className="h-96">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countriesData.map((country: any) => (
            <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
              <Popup>
                <div>
                  <h3>{country.country}</h3>
                  <p>Active: {country.active}</p>
                  <p>Recovered: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Dashboard;
