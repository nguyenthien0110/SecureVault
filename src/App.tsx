import "./App.css";
import SuccessNotification from "./components/common/SuccessNotification";

function App() {
  const isShow = true;
  return (
    <div>
      {isShow && <SuccessNotification />}
    </div>
  );
}

export default App;
