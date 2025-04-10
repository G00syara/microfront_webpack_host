import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';

import { HomePage } from './HomePage';
import { MainPage } from './MainPage';



// Главный компонент приложения с маршрутизацией
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mf/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
