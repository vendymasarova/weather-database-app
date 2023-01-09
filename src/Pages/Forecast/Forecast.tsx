/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { StyledBody, StyledGrid } from '../../App-styles';
// import Icon from './22.png';
// import Icon from '../../images/22.png';
import moment from 'moment';
import { FavouriteBtn } from '../../components/FavouriteBtn/FavouriteBtn';

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
  ]
}

interface savedForecastProps {
  // icon: string | undefined;
  forecast: forecastProps | undefined;
  key: string | undefined;
}

export const Forecast = () => {
  const [forecast, setForecast] = useState<forecastProps>();
  const [savedForecast, setSavedForecast] = useState<savedForecastProps>();
  const [city, setCity] = useState<string>();
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const params = useParams();

  console.log(forecast);

  const { name } = useParams();
  const { key } = useParams();
  console.log(params.key);
  console.log(params.name);

  useEffect(() => {
    void getForecast();
  }, []);

  const getForecast = async () => {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}&language=cs`
      );
      const data = await response.json();
      setForecast(data);
      setCity(name);
    } catch (error) {
      console.log(error);
    }
  };

  const saveToFavorites = (key: string | undefined, forecast: any) => {
    setSavedForecast({
      forecast,
      key
    });
    console.log(savedForecast);
    // @ts-expect-errorx
    const myFavouriteForecastArr = JSON.parse(localStorage.getItem('myFavouriteForecastArr')) || [];

    if (savedForecast !== null) {
      myFavouriteForecastArr.push(savedForecast);
    }
    localStorage.setItem('myFavouriteForecastArr', JSON.stringify(myFavouriteForecastArr));
  };

  return (
    <StyledBody>
      <Card>
        <StyledGrid>
          {forecast?.DailyForecasts.map((item) => (
            <>
              <Card
                key={item.Date}
                title={`${moment(item.Date).utc().format('DD.MM.')}`}
                color='#fff'
              >
                <div>
                <div className="perex">
                  <p>{item?.Day.IconPhrase}</p>
                  <img src="images/22.png" alt="" />
                  {/* <img src={Icon}alt=""/>k */}
                </div>
                </div>
              </Card>
            </>
          ))}
          <button disabled={isDisabled} onClick={() => saveToFavorites(params.key, forecast?.DailyForecasts)}>Uložit do oblíbených</button>
        </StyledGrid>
      </Card>
    </StyledBody>
  );
};
