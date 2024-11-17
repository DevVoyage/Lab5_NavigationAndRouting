import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ToDoForm from "../components/toDoForm";
import ToDoList from "../components/toDoList";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
function HomeScreen({ navigation }) {
    const addTask=(task)=>{
        if(tasks.some((ListTask) => 
           ListTask===task)){
            alert("Task already exists")
            return;
          }
        setTasks([...tasks, task]);
        };
      const [tasks, setTasks] = useState([]);
    
    return (
        <MainLayout>    
            <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            />
            <ToDoForm OnAddTask={addTask} />
            <ToDoList tasks={tasks} />
        </MainLayout>
    );
}
export default HomeScreen;