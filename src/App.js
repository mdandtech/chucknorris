import React,{useState, useEffect} from 'react';
    	import axios from 'axios'
    	import'./App.css';

    	function App(){
    		const [jokes, setJokes] = useState('')
    		const [query, setQuery] = useState('science')
    		useEffect(()=>{
				
    			getResults();
    		},[]
    			)
    		const getResults= async () =>{
				const response = await axios
				
				.get(`https://api.chucknorris.io/jokes/random?category=${query}`)
				
    			
    			setJokes(response.data.value)


    		}
    		const handleSearch = (e) =>{
    				e.preventDefault()
    				getResults();
    			}
    		
    		return(
				<center>
    			<div ClassName="App" class="box">
					<h1>Chuck Norris Jokes Generator</h1>
    			<form onSubmit={handleSearch}>
				<select onChange={e =>setQuery(e.target.value)} value={query}>
				<option value="Science">Select Category To search</option>		
  <option value="Science">Science</option>
  <option value="Animal">Animal</option>
  <option value="career">career</option>
  <option value="celebrity">celebrity</option>
  <option value="dev">Dev</option>
  <option value="explicit">explicit</option>
  <option value="fashion">fashion</option>
  <option value="food">food</option>
  <option value="history">history</option>
  <option value="money">money</option>
  <option value="movie">movie</option>
  <option value="music">music</option>
  <option value="political">political</option>
  <option value="religion">religion</option>
  <option value="sport">sport</option>
  <option value="travel">travel</option>
  
</select>
          
    			<button type="submit">Generate Joke</button>


    			</form>
    			
    					<p>{jokes}</p>
						<h5>nziokavictorkatua@gmail.com | +254708963044</h5>
    				
    				


    			</div>
				</center>

    			);



    	}
    	export default App;