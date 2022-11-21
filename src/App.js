import { BrowserRouter, Routes,Route,  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import ContentRight from "./components/Sidebar/Content/ContentRight";
import ContentLeft from "./components/Sidebar/Content/ContentLeft";
import  Pengguna  from "./components/Sidebar/Content/Pengguna";
import Guru from "./components/Sidebar/Content/Guru";
import Siswa from "./components/Sidebar/Content/Siswa";
import Buku from "./components/Sidebar/Content/Buku";
import TanggalPengambilan from "./components/Sidebar/Content/TanggalPengambilan";




export default function App() {
  return (
    <>
  <div className="w-full min-h-screen bg-gray-300 flex flex-row">
    {/* <ContentLeft /> */}
    <Sidebar />
    <ContentRight />
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<ContentLeft />}>
          <Route to='/Pengguna' element={<Pengguna />}/>
          <Route to='/Guru' element={<Guru />}/>
          <Route to='/Siswa' element={<Siswa />}/>
          <Route to='/Buku' element={<Buku />}/>
          <Route to='/TanggalPengambilan' element={<TanggalPengambilan />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
