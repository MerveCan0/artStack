import Navbar from './components/Navbar'; // Parçayı içeri alıyoruz

function App() {
  return (
    <div>
      <Navbar /> {/* Parçayı burada kullanıyoruz */}
      <main>
        <h2>Hoş Geldin Mero!</h2>
        <p>Pinterest benzeri projenin temelleri burada atılıyor.</p>
      </main>
    </div>
  );
}

export default App;