//import logo from './logo.svg';
import './App.css';
import './css/main.css';
import Main from './components/Main';
import Layout from './components/Layout'
import MovieCard from './components/MovieCard';
import ReadMore from './components/ReadMore';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    
      /*<Routes>
        <Route element={<Layout/> }>
          <Route index element={<Main search={search} setSearch={setSearch} movies={movieInfo}/>} />
          <Route path=':slug' element={<ReadMore movies={movieInfo} />}/>
        </Route>
      </Routes>*/

      <div className='app container'>
        <Main/>
      </div>
    
  );
}

export default App;
