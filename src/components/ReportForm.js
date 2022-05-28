import React from 'react';
import '../styles/ReportForm.css'

function ReportForm(props) {
    return (
        <div className='FormParent'>
            <h1>Submit a suspesion report</h1>
            <form>
                <label>To Community</label>
                <select data-placeholder="Begin typing a name to filter..." name="cars" id="cars" multiple>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
                <label>Report Title</label>
                <input></input>
                <label>Report Content</label>
                <textarea></textarea>
                <label>Report Keywords</label>
                <input></input>
                <button>Visability</button>
                <button>Submit</button>
            </form>

        </div>
    );
}

export default ReportForm;