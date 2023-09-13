import ReactApexChart from 'react-apexcharts';
import { styled } from 'styled-components';
import { Component } from 'react';
import { FilterTypes } from '../../pages/Home/Home';

interface ChartStates {
  series: any[];
  options: any;
}

interface Values {
  id: string;
  value_area: number;
  value_bar: number;
}

interface ChartProps {
  seletedFilter: FilterTypes;
  values: Values[];
  timeSeries: string[];
}

interface TooltipProps {
  dataPointIndex: number;
}

class ApexChart extends Component<ChartProps, ChartStates> {
  constructor(props: ChartProps) {
    super(props);

    const values = this.props.values;
    const timeSeries = this.props.timeSeries;

    const areaDataList = values.map((el) => el['value_area']);
    const barDataList = values.map((el) => el['value_bar']);
    const idDataList = values.map((el) => el['id']);

    this.state = {
      series: [
        { name: 'Area', type: 'area', data: areaDataList },
        { name: 'Bar', type: 'column', data: barDataList },
      ],
      options: {
        stroke: {
          width: [1, 1],
        },
        title: {
          text: 'Time Series Chart',
          align: 'center',
          style: { fontSize: '30px' },
        },
        xaxis: {
          categories: timeSeries,
          title: {
            text: '2023-02-01일자',
            style: {
              fontSize: '16px',
              fontWeight: 800,
            },
          },
        },
        yaxis: [
          {
            seriesName: 'Area',
            axisTicks: {
              show: true,
            },
            min: 0,
            max: 200,
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
        legend: { horizontalAlign: 'center' },
        tooltip: {
          custom: function ({ dataPointIndex }: TooltipProps) {
            const id = idDataList[dataPointIndex];
            const areaData = areaDataList[dataPointIndex];
            const barData = barDataList[dataPointIndex];

            const customTooltip = `
              <div class="custom-tooltip">
                <span>Id: ${id}</span><br>
                <span>Area: ${areaData}</span><br>
                <span>Bar: ${barData}</span><br>
              </div>
            `;

            return customTooltip;
          },
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
        />
      </StyledChart>
    );
  }
}

export default ApexChart;

const StyledChart = styled.div`
  .custom-tooltip {
    padding: 8px 15px;
  }
`;
