import Chart from 'react-apexcharts';
import db from '../../db.json';

// type FilterTypes = '성북구' | '강남구' | '노원구' | '중랑구';

const Home = () => {
  const response = db.response;
  const xAxisKeys = Object.keys(response)
    .slice(0, 10)
    .map((el, index) => {
      if (index % 6 === 0) {
        return el.replace('2023-02-01 ', '');
      }
      return '';
    });
  const values = Object.values(response).slice(0, 10);
  const areaList = values.map((el) => el['value_area']);
  const barList = values.map((el) => el['value_bar']);
  console.log(xAxisKeys);

  const chart = {
    id: 'time-series-chart',
    type: 'bar',
    height: 350,
    stacked: true,
    stackType: '100%',
  };

  const options = {
    chart: {
      id: 'time-series-chart',
    },
    xaxis: {
      categories: xAxisKeys,
    },
  };

  const series = [
    {
      name: 'area',
      data: areaList,
    },
    {
      name: 'bar',
      data: barList,
    },
  ];

  const plotOptions = {
    bar: {
      horizontal: false,
      borderRadius: 10,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: '13px',
            fontWeight: 900,
          },
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        chart={chart}
        series={series}
        type="bar"
        stacked={true}
        width={1200}
        height={600}
        plotOptions={plotOptions}
      />
    </div>
  );
};

export default Home;

// const styledHome = styled.div`
//   width: 60%;
//   height: 60%;

//   background-color: white;
// `;
