import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
const [courseText, setCourseText] = useState("")
const [courses,setCourses] = useState([])
function courseInputHanler(text) {
setCourseText(text)

}

function addCourseHandler(){
  setCourses((currentCourse) => [...currentCourse, courseText])

}

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput  
      onChangeText={courseInputHanler}
      style={styles.textInput} placeholder='Type your course'/>
      <Button 
      onPress={addCourseHandler}
      title='Add Course'/>
     </View>
     <View style={styles.courseContainer}>
     <FlatList 
     data={courses}
     renderItem={(itemData) => {
        return ( 
          <View   style={styles.courseItem}>
          <Text style={styles.courseText}>{itemData.item}</Text>
         </View>
        )
     }
    }
     />
     </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
   paddingTop: 50,
   paddingHorizontal: 16,
   flex: 1
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 24,
    borderBottomColor: '#cccccc',
    flex: 1
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  courseContainer:{
    flex: 4
  },
  courseItem:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  courseText:{
    color: 'white'
  }


});
