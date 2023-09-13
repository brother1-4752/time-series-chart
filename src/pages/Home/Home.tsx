import { HTMLAttributes, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import Chart from '../../components/Chart/Chart';
import db from '../../db.json';

export type FilterTypes = '전체' | '성북구' | '강남구' | '노원구' | '중랑구';
export const filterTypesList: FilterTypes[] = [
  '전체',
  '성북구',
  '강남구',
  '노원구',
  '중랑구',
];

type ButtonsProps = {
  setSelectedFilter: React.Dispatch<React.SetStateAction<FilterTypes>>;
} & HTMLAttributes<HTMLDivElement>;

const Buttons = ({ setSelectedFilter, ...rest }: ButtonsProps) => {
  const onClickHandler = (
    event: MouseEvent<HTMLButtonElement>,
    filterType: FilterTypes = '전체'
  ) => {
    event.preventDefault();
    setSelectedFilter(filterType);
  };
  return (
    <StyledButton {...rest}>
      {filterTypesList.map((type, index) => (
        <button
          className="button"
          dataset-button={type}
          key={index}
          onClick={(event) => onClickHandler(event, type)}
        >
          {type}
        </button>
      ))}
    </StyledButton>
  );
};

const Home = () => {
  const [seletedFilter, setSelectedFilter] = useState<FilterTypes>('전체');

  const response = db.response;
  const timeSeries = Object.keys(response).map((el, index) =>
    index % 5 === 0 ? el.replace('2023-02-01 ', '') : ''
  );
  const values = Object.values(response);

  return (
    <StyledHome>
      <Buttons setSelectedFilter={setSelectedFilter} />
      <Chart
        seletedFilter={seletedFilter}
        values={values}
        timeSeries={timeSeries}
      />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  width: 80%;
  height: 100%;
`;

const StyledButton = styled.div`
  width: 350px;
  height: 30px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;

  .button {
    border: none;
    background-color: #008ffb;
    color: white;
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid transparent;

    &:hover {
      background-color: white;
      color: #008ffb;
      border: 1px solid #008ffb;
      cursor: pointer;
    }
  }
`;
