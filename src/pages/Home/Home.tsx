import Chart from '../../components/Chart/Chart';
import db from '../../db.json';

// type FilterTypes = '성북구' | '강남구' | '노원구' | '중랑구';

const Home = () => {
  const response = db.response;
  const categories = Object.keys(response).map((el, index) => {
    if (index % 5 === 0) {
      return el.replace('2023-02-01 ', '');
    }
    return '';
  });
  const values = Object.values(response);
  const areaDataList = values.map((el) => el['value_area']);
  const barDataList = values.map((el) => el['value_bar']);

  return (
    <div>
      <Chart
        categories={categories}
        areaDataList={areaDataList}
        barDataList={barDataList}
      />
    </div>
  );
};

export default Home;
