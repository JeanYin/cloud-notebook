import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';
import BottomBtn from './components/BottomBtn';
import { faPlus, faFileImport} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col left-panel">
          <FileSearch title='My Document' onFileSearch={(value) => { console.log(value) }}/>
          <FileList
            files={defaultFiles}
            onFileClick={(id) => { console.log(id) }}
            onFileDelete={(id) => { console.log('deleted', id) }}
            onSaveEdit={(id, newValue) => { console.log(id); console.log(newValue);}}
          />
          <div className="row no-gutters">
            <div className="col">
              <BottomBtn
                text="Create"
                colorClass="btn-primary"
                icon={faPlus}
              />
            </div>
            <div className="col">
              <BottomBtn
                text="Import"
                colorClass="btn-success"
                icon={faFileImport}
              />
            </div>
          </div>
        </div>
        <div className="col bg-primary right-panel">
          <h1>THIS IS THE RIGHT</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
