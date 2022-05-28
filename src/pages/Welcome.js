import '../styles/Welcome.css';
import '../styles/App.css'

function Welcome() {
  return (
    <div className="App">
        <div className='Welcome-message'>
          <h1>Wary</h1>
          <h3>“feeling or showing caution about possible dangers or problems.”</h3>
        </div>
        <div className='Report-Form'>
          <form>
            <label>Report Title</label>
            <input></input>
            <label>Report Content</label>
            <input></input>
          </form>
        </div>
    </div>
  );
}

export default Welcome;
