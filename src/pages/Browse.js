import '../styles/Browse.css';
import '../styles/App.css'
import Card from '../components/Card'
import {React, useState, useEffect} from 'react';

function Browse() {
  const [searchCategory, setSearchCategory] = useState("")


  return (
    <div className="App">
      <div>
        <div className='Welcome-message'>
            <h1>Browse Reports</h1>
            <h3>“feeling or showing caution about possible dangers or problems.”</h3>
          </div>
          <div className='Browse-search'>
            <input placeholder="search"></input>

            <div className='filterSection'>
                    <button style={{ color:  searchCategory == "Saree"? 'white': '#61dafb', backgroundColor:  searchCategory == "Saree"? '#61dafb': 'white'}} onClick={() => searchCategory !="Saree" ? setSearchCategory("Saree") : setSearchCategory("")}>Saree</button>
                    <button style={{ color:  searchCategory == "Salwar Kameez"? 'white': '#61dafb', backgroundColor:  searchCategory == "Salwar Kameez"? '#61dafb': 'white'}} onClick={() => searchCategory !="Salwar Kameez" ? setSearchCategory("Salwar Kameez") : setSearchCategory("")}>Salwar Kameez</button>
                    <button style={{ color:  searchCategory == "Kurta"? 'white': '#61dafb', backgroundColor:  searchCategory == "Kurta"? '#61dafb': 'white'}} onClick={() => searchCategory !="Kurta" ? setSearchCategory("Kurta") : setSearchCategory("")}>Kurta</button>
                    <button style={{ color:  searchCategory == "Lehenga"? 'white': '#61dafb', backgroundColor:  searchCategory == "Lehenga"? '#61dafb': 'white'}} onClick={() => searchCategory!="Lehenga" ? setSearchCategory("Lehenga") : setSearchCategory("")}>Lehenga</button>
                    <button style={{ color:  searchCategory == "Churidaar"? 'white': '#61dafb', backgroundColor:  searchCategory == "Churidaar"? '#61dafb': 'white'}} onClick={() => searchCategory!="Churidaar" ? setSearchCategory("Churidaar") : setSearchCategory("")}>Churidaar</button>
                    <button style={{ color:  searchCategory == "Dresses"? 'white': '#61dafb', backgroundColor:  searchCategory == "Dresses"? '#61dafb': 'white'}} onClick={() => searchCategory!="Dresses" ? setSearchCategory("Dresses") : setSearchCategory("")}>Dresses</button>
                </div>
          </div>
      </div>
      <div>
          <Card reportTitle="Why is there a rat hair in my pasta" reportContent="report content report contente ncjdnv cj cdn cxsjcs cnjncs cjsc" reportDate="nov 22th 2021" reportVotes="5"/>
          <Card reportTitle="Why is there a rat hair in my pasta" reportContent="report content report contente ncjdnv cj cdn cxsjcs cnjncs cjsc" reportDate="nov 22th 2021" reportVotes="5"/>
          <Card reportTitle="Why is there a rat hair in my pasta" reportContent="report content report contente ncjdnv cj cdn cxsjcs cnjncs cjsc" reportDate="nov 22th 2021" reportVotes="5"/>
      </div>
    </div>
  );
}

export default Browse;
