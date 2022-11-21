import { BrowserRouter, Switch, Route  } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import ContentRight from "./components/ContentRight";
import ContentLeft from "./components/ContentLeft";
import  Pengguna  from "./components/Pengguna";
import Guru from "./components/Guru";
import Siswa from "./components/Siswa";
import Buku from "./components/Buku";
import TanggalPengambilan from "./components/TanggalPengambilan";

export default function App() {
  return (
    <>
  <div className="w-full min-h-screen bg-gray-300 flex flex-row">
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Sidebar />
          <ContentLeft />
          <ContentRight />
        </Route>
        <Route path='/pengguna'>
          <Sidebar />
          <Pengguna />
          <ContentRight />
        </Route>
        <Route path='/guru'>
          <Sidebar />
          <Guru />
          <ContentRight />
        </Route>
        <Route path='/siswa'>
          <Sidebar />
          <Siswa />
          <ContentRight />
        </Route>
        <Route path='/buku'>
          <Sidebar />
          <Buku />
          <ContentRight />
        </Route>
        <Route path='/tanggal-pengambilan'>
          <Sidebar />
          <TanggalPengambilan />
          <ContentRight />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
    </>
  );
}
