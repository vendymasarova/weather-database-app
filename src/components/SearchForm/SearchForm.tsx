import { useEffect, useState, useContext } from 'react';
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

export const SearchForm = () => {
	const [input, setInput] = useState<string>('');
  const navigate = useNavigate();
	const [suggestions, setSuggestions] = useState<SuggestionsProps[]>();
  const [result, setResult] = useState<SuggestionsProps[]>();

	useEffect(() => {
		const timer = setTimeout(() => {
			getSearched();
		}, 500);

		//return se volá ve dvou případech:
		//1. unmount()
		//2. při změně hodnoty v dependency - ale první se volá return a pak až samotné body useEffectu
		return () => clearTimeout(timer);
	}, [input]);

	const getSearched = async () => {
		try {
			const response = await fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${input}&language=cs&offset=5`,
			);
			const data = await response.json();
			setSuggestions(data);

		} catch (error) {
			console.log(error);
		}
	};

	const onSubmit = (e: any) => {
		e.preventDefault();
    
    setResult(suggestions)
    console.log(result)
    navigate("/" + input)
	};

	return (
		<StyledForm onSubmit={onSubmit}>
			<StyledInput list='suggestion' value={input} onChange={(e) => setInput(e.target.value)} />
			{suggestions && (
				<datalist id='suggestion'>
					{suggestions.map((item: SuggestionsProps) => (
						<option key={item.Key}>
							{item.LocalizedName}, {item.AdministrativeArea.LocalizedName}
						</option>
					))}
				</datalist>
			)}
		</StyledForm>
	);
};
