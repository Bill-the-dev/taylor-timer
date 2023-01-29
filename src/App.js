import './App.css';
import CountdownTimer from './CountdownTimer';
import RecordPlayer from './RecordPlayer';


function App() {
  const dateTarget = new Date('May 27, 2023 18:30:00');
  // const dateTarget2 = new Date('May 26, 2023 18:30:00');
  // const dateNow = new Date().getTime();

  return (
    <div className="App d-flex h-100 text-center">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

        <main className="px-3 my-auto">
          <h1 className='til-title'>Time Til Taylor</h1>
          <h3 className="target-date my-3 py-3">Saturday, May 27th, 2023 at 18:30</h3>
          <CountdownTimer targetDate={dateTarget} />
          <div className='record-cabinet'>
            <RecordPlayer />
          </div>
        </main>

        <footer className="mt-auto text-white-50">

        </footer>
      </div>
    </div>
  );
}

export default App;
