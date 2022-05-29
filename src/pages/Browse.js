import '../styles/Browse.css';
import '../styles/App.css'
import Card from '../components/Card'
import {React, useState, useEffect} from 'react';

function Browse() {
  //search cataogory is tags
  const [searchCategory, setSearchCategory] = useState('')
  //search is the input bar
  const [search, setNewSearch] = useState('');


  useEffect(() => {
    
  }, [])


  //DUMMY DATA REPORTS
  const reports = [
    { date: '12/1/2011', title: 'why is there', tags: ['assualt', 'abuse'], content: ' content content content content  content content content content ' },
    { date: '13/1/2011', title: 'Another report', tags: ['assualt', 'racism'], content: ' content content content content  content content content content ' },
    { date: '14/1/2011', title: 'where is my cat', tags: ['violence', 'fraud', 'abuse'], content: ' content content content content  content content content content ' }
  ]

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  var filtered = reports
  if (searchCategory == "") {
      var filtered = !search
      ? reports
      : reports.filter((report) =>
          report.content.toLowerCase().includes(search.toLowerCase()));
  } else {
      var filtered = !search
      ? reports.filter((report) => report.tags.includes(searchCategory.toLowerCase()))
      : reports.filter((report) => report.tags.includes(searchCategory.toLowerCase()) & report.content.toLowerCase().includes(search.toLowerCase()));
  }



  return (
    <div className="App">
      <div>
        <div className='Welcome-message'>
            <h1>Browse Reports</h1>
            <h3>“feeling or showing caution about possible dangers or problems.”</h3>
          </div>
          <div className='Browse-search'>
          <input placeholder="search" type="text" value={search} onChange={handleSearchChange}  className="SearchBar" ></input>

            <div className='filterSection'>
                    <button style={{ color:  searchCategory == "Violence"? 'white': '#61dafb', backgroundColor:  searchCategory == "Violence"? '#61dafb': 'white'}} onClick={() => searchCategory !="Violence" ? setSearchCategory("Violence") : setSearchCategory("")}>Violence</button>
                    <button style={{ color:  searchCategory == "Harassment"? 'white': '#61dafb', backgroundColor:  searchCategory == "Harassment"? '#61dafb': 'white'}} onClick={() => searchCategory !="Harassment" ? setSearchCategory("Harassment") : setSearchCategory("")}>Harassment</button>
                    <button style={{ color:  searchCategory == "Fraud"? 'white': '#61dafb', backgroundColor:  searchCategory == "Fraud"? '#61dafb': 'white'}} onClick={() => searchCategory !="Fraud" ? setSearchCategory("Fraud") : setSearchCategory("")}>Fraud</button>
                    <button style={{ color:  searchCategory == "Abuse"? 'white': '#61dafb', backgroundColor:  searchCategory == "Abuse"? '#61dafb': 'white'}} onClick={() => searchCategory!="Abuse" ? setSearchCategory("Abuse") : setSearchCategory("")}>Abuse</button>
                    <button style={{ color:  searchCategory == "Racism"? 'white': '#61dafb', backgroundColor:  searchCategory == "Racism"? '#61dafb': 'white'}} onClick={() => searchCategory!="Racism" ? setSearchCategory("Racism") : setSearchCategory("")}>Racism</button>
                    <button style={{ color:  searchCategory == "Sexism"? 'white': '#61dafb', backgroundColor:  searchCategory == "Sexism"? '#61dafb': 'white'}} onClick={() => searchCategory!="Sexism" ? setSearchCategory("Sexism") : setSearchCategory("")}>Sexism</button>
                </div>
          </div>
      </div>
      <div>
        {filtered.map((report) => {
            return (
              <Card reportTitle={report.title} reportContent={report.content} reportDate={report.date} reportTags={report.tags} reportVotes="5"></Card>
            );
        })}
      </div>
    </div>
  );
}

export default Browse;
