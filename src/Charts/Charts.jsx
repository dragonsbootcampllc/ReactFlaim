import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Charts() {
  const directors = [
    {
      title: 'Success Rate',
      num: '545%',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            fill: true,
            label: 'Dataset',
            data: [100, 120, 340, 266, 402, 604, 842],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
    {
      title: 'Number of Servers',
      num: '5',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            fill: true,
            label: 'Dataset',
            data: [100, 120, 340, 266, 402, 604, 842],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
    {
      title: 'Average Deploy Time',
      num: '5.52',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            fill: true,
            label: 'Dataset',
            data: [100, 120, 340, 266, 402, 604, 842],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
    {
      title: 'Number of Deploys',
      num: '552',
      data: {
        labels: ['', '', '', '', '', '', ''],
        datasets: [
          {
            fill: true,
            label: 'Dataset',
            data: [100, 10, 340, 266, 402, 604, 842],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',

      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className='w-screen'>
      <div className='grid grid-cols-4 gap-4 text-center w-3/4 mx-auto pt-10'>
        {directors.map(({title, data, num}, index) => (
          <div key={index} className='rounded-lg overflow-hidden shadow-lg text-black'>
            <h2>{title}</h2>

            <span className='font-bold'>{num}</span>

            <div className=''>
              <Line options={options} data={data} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
