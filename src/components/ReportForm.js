import {ReactComponentElement, useState} from 'react';
import '../styles/ReportForm.css'

function ReportForm(props) {
    const [visability, setVisability] = useState('Immediatly Visabile')
    
    return (
        <div className='FormParent'>
            <h1>Submit a suspesion report</h1>
            <form>
                <label>To Community</label>
                <select data-placeholder="Begin typing a name to filter..." name="cars" id="cars" multiple>
                    <option value="volvo">Neighbourhood</option>
                    <option value="saab">Lewis Office</option>
                    <option value="opel">Elitist University</option>
                    <option value="audi">New York City</option>
                </select>
                <label>Report Title</label>
                <input></input>
                <label>Report Content</label>
                <textarea></textarea>
                <label>Report Keywords</label>
                <input></input>
                <button onClick={() => setVisability('Hidden')}>{visability}</button>
                <button>Submit</button>
            </form>

        </div>
    );
}

export default ReportForm;