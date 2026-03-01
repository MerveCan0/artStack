import LandingPage from './pages/LandingPage';
// import Dashboard from './pages/Dashboard'; // Asıl uygulamaya geçtiğinde bunu açacaksın

function App() {
  return (
    <>
      {/* Şimdilik sadece ön tanıtım sayfanı gösteriyoruz */}
      <LandingPage />
      
      {/* İleride buraya "Router" gelecek. 
         Giriş yapıldıysa <Dashboard />, yapılmadıysa <LandingPage /> gibi.
      */}
    </>
  );
}

export default App;