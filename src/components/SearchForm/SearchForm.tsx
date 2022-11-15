/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledInput, StyledForm } from './SearchForm-styles';

const API_KEY = 'jxSSnAhuGlxjA1SX9E99lGf9pYFeFf1x';

interface SuggestionsProps {
  Key: string;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    LocalizedName: string;
  };
}

interface SelectedProps {
  name: string;
  key: string;
}

export const SearchForm = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<SuggestionsProps[]>();
  const [selectedValues, setSelectedValues] = useState<SelectedProps | null>(null);

  useEffect(() => {
    if (!input.length && selectedValues) {
      setSelectedValues(null);
    }

    if (selectedValues) {
      return;
    }

    const timer = setTimeout(() => {
      void getSearched();
    }, 500);

    // return se volá ve dvou případech:
    // 1. unmount()
    // 2. při změně hodnoty v dependency - ale první se volá return a pak až samotné body useEffectu
    return () => clearTimeout(timer);
  }, [input]);

  const getSearched = async () => {
    try {
      const response = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}&language=cs&offset=5`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (selectedValues) {
      navigate(`/forecast/${selectedValues.name}/${selectedValues.key}`);
    }
  };

  const handleClick = (name: string, key: string, county: string) => {
    setInput(`${name}, ${county}`);
    setSelectedValues({
      name,
      key
    });
  };

  useEffect(() => {
    console.log(selectedValues);
  }, [selectedValues]);

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput list='suggestion' value={input} onChange={(e) => setInput(e.target.value)} />
      {suggestions ? (
        <ul id='suggestion'>
          {suggestions.map((item: SuggestionsProps) => (
            <li
              key={item.Key}
              onClick={() =>
                handleClick(item.LocalizedName, item.Key, item.AdministrativeArea.LocalizedName)
              }
            >
              {item.LocalizedName}, {item.AdministrativeArea.LocalizedName}
            </li>
          ))}
        </ul>
      ) : null}
    </StyledForm>
  );
};
