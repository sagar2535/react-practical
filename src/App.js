import './App.css';
import WeekDays from './component/WeekDays';
import TimezoneSelect from './component/TimeZone';
import WorkSchedule from './component/WorkSchedule';

function App() {
  return (
    <div className='App'>
      <WeekDays />
      <TimezoneSelect />
      <WorkSchedule />
    </div>
  );
}

export default App;
