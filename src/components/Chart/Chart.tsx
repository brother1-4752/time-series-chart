import { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { styled } from 'styled-components';

interface ChartStates {
  series: any[];
  options: any;
}

interface ChartProps {
  categories: string[];
  areaDataList: number[];
  barDataList: number[];
}

class ApexChart extends Component<ChartProps, ChartStates> {
  constructor(props: ChartProps) {
    super(props);

    const cetegories = this.props.categories;
    const areaDataList = this.props.areaDataList;
    const barDataList = this.props.barDataList;

    this.state = {
      series: [
        {
          name: 'Area',
          type: 'area',
          data: areaDataList,
        },
        {
          name: 'Bar',
          type: 'column',
          data: barDataList,
        },
      ],
      options: {
        chart: {
          type: 'line',
          stacked: true,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1],
        },
        title: {
          text: '시계열 차트',
          align: 'center',
        },
        xaxis: {
          categories: cetegories,
        },
        yaxis: [
          {
            seriesName: 'Area',
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB',
            },
            labels: {
              style: {
                colors: '#008FFB',
              },
            },
            title: {
              text: 'Area',
              style: {
                color: '#008FFB',
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            seriesName: 'Bar',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396',
            },
            labels: {
              style: {
                colors: '#00E396',
              },
            },
            title: {
              text: 'Bar',
              style: {
                color: '#00E396',
              },
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft',
            offsetY: 60,
            offsetX: 80,
          },
        },
        legend: {
          horizontalAlign: 'center',
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <StyledChart>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="100%"
          width="100%"
        />
      </StyledChart>
    );
  }
}

export default ApexChart;

const StyledChart = styled.div`
  width: 100vw;
  height: 100vh;
`;
