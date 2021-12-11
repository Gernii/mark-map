import { useState} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {ShowMarkMap, GUIViewer, GetMDFile } from './assets/FunctionStorage';
function Root() {
    const [checked, setChecked] = useState(0)
    const markDown = GetMDFile()
    return (
        <div>
          <GUIViewer checked={checked} onChange={setChecked} />
          <ShowMarkMap markDown={markDown[checked]} option={{autoFit: true}}/>
        </div>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));