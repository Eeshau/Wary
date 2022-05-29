import '../styles/Welcome.css';
import '../styles/App.css'
import ReportForm from '../components/ReportForm';

function Welcome() {
  return (
    <div className="App">
      <div className='Welcome-main'>
        <div className='Welcome-message'>
            <h1>Wary</h1>
            <h3>“Feeling or showing caution about possible dangers or problems.”</h3>
            <p>Anonymously report any suspicions within a community or area.  </p>
          </div>
          <ReportForm/>
      </div>

    </div>
  );
}

export default Welcome;
