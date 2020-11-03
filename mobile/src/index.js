import React , { useEffect, useState} from 'react';
import { SafeAreaView,FlatList,StyleSheet,StatusBar,Text, TouchableOpacity } from 'react-native'

import api from './services/api'

export default function App(){
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    api.get('projects').then(response=>{
      console.log(response.data);
      setProjects(response.data)
    })
  },[]);

  async function handleAddProject(){
    const response = await api.post('projects',{
      title: `Novo projeto ${Date.now()}`,
      owner: 'Matheus Albuquerque'
    });

    setProjects([...projects,response.data])
  }


  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <SafeAreaView style={styles.container}>
      <FlatList
      data={projects}
      keyExtractor={project => project.id}
      renderItem={({item: project})=>(
      <Text style={styles.projects}>{project.title}</Text>
      )}
      ></FlatList>
      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>

    </SafeAreaView>
    {/*<View style={styles.container} >
      <Text style={styles.title}>Hello GoStack</Text>
      {projects.map(project=>(
        <Text style={styles.projects} key={project.id}>{project.title}</Text>
      ))}
      </View>*/}
  </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#7159c1',
  },
  title:{
    color:'#FFF',
    fontSize:32,
    fontWeight:'bold'
  },
  projects:{
    color:'#FFF',
    fontSize:20,
  },
  button:{
    backgroundColor:'#FFF',
    margin:20,
    height:50,
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16
  }
})