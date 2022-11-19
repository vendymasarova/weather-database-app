/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { StyledBody, StyledGrid } from '../../App-styles';
import moment from 'moment';

const API_KEY = 'jxSSnAhuGlxjA1SX9E99lGf9pYFeFf1x';

interface forecastProps {
  DailyForecasts: [
    {
      EpochDate: number;
      Date: string;
      Day: {
        IconPhrase: string;
      };
    },
  ];
}

export const Forecast = () => {
  const [forecast, setForecast] = useState<forecastProps>();
  const { key } = useParams();

  useEffect(() => {
    void getForecast();
  }, []);

  const getForecast = async () => {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&language=cs`,
      );
      const data = await response.json();
      setForecast(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(forecast?.DailyForecasts);
  const dailyForecasts = forecast?.DailyForecasts;

  return (
    <StyledBody>
      <Card>
        <StyledGrid>
          {forecast?.DailyForecasts.map((item) => (
            <Card
              key={item?.EpochDate}
              title={`${moment(item.Date).utc().format('DD.MM.')}`}
              color='#fff'
            >
              <div>
                <p>{item?.Day.IconPhrase}</p>
              </div>
            </Card>
          ))}
        </StyledGrid>
      </Card>
    </StyledBody>
  );
};
