import React,{ useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg'
import Header from './components/Header'

function App(){
  const [projects,setProjects] = useState(['Desenvolvimento de app','Front-end web']);

  function handleAddProject(){
    //projects.push(`Novo Projeto ${Date.now()}`);
    setProjects([...projects,`Novo Projeto ${Date.now()}`]);
    console.log(projects);
  }
  return (
  <>
  <Header title="Homepage">
    <ul>
      <li>menu</li>
      <li>perfil</li>
    </ul>
  </Header>
  <img src={backgroundImage}/>
  <ul>
    {projects.map(project => <li key={project}>project</li>)}
  </ul>
  <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;

