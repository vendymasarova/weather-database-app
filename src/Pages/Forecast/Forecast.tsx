import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';

const API_KEY = 'jxSSnAhuGlxjA1SX9E99lGf9pYFeFf1x';

export const Forecast = () => {
  const [forecast, setForecast] = useState();
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

  return (
  <Card title='hello' color='#fff'>
    <p>něco mezi to </p>
  </Card>
  );
};
