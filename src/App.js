import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import defaultFiles from './utils/defaultFiles';
import BottomBtn from './components/BottomBtn';
import "easymde/dist/easymde.min.css";
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import TabList from './components/TabList';
import SimpleMED from 'react-simplemde-editor';

function App() {
  return (
    <div className="App container-fluid px-0">
      <div className="row no-gutters">
        <div className="col-3 left-panel">
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
        <div className="col-9 right-panel">
          <TabList
            files={defaultFiles}
            onTabClick={(id) => { console.log(id) }}
            activeId="1"
            unsaveIds={["1","2"]}
            onCloseTab={ (id) => {console.log('closing',id)}}
          />
          <SimpleMED
            value={defaultFiles[1].body}
            onChange={(value) => { console.log(value) }}
            options={{
              minHeight: '515px'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
