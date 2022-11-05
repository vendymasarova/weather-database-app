import { useEffect, useState } from 'react';
import { StyledInput, StyledForm } from './SearchForm-styles';

export const SearchForm = () => {
	const [input, setInput] = useState('');
  const [city, setCity] = useState<object>()

  const apiKey = "jxSSnAhuGlxjA1SX9E99lGf9pYFeFf1x";

  const getSearched = async ( city: string ) =>{
    await fetch(`http://dataservice/accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${city}&language=cs`)
    .then((blob) => blob.json)
    .then((res) => setCity(res))
    console.log(city)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(city)
    getSearched(input)
  }

	// useEffect(() => {
	// }, []);

	return (
		<StyledForm onSubmit={onSubmit}> 
			<StyledInput
				value={input}
				onChange={((e) => setInput(e.target.value))}
			/>
		</StyledForm>
	);
};
