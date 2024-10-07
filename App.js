import { SafeAreaView, Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import {useState} from 'react';

export default function App() {
  const gradePoints = {'F': 0,'D': 1.5,'C': 2,'C+': 2.75, 'B': 3, 'B+': 3.5,  'A': 4 };5
  
  const [sswd, setSswd] = useState('D');
  const [ob, setOb] = useState('D');
  const [ma, setMa] = useState('D');
  const [dm, setDm] = useState('D');
  const [ooad, setOoad] = useState('D');
  const [fm, setFm] = useState('D');
  
  var gpa=0;
  var credits=5;
  var totalPossibleCredits = 30; //change 10 to 30 for 6 modules!!!!
  var totalGradeScores = 0;
  
  function clickMe(){
    //alert("this is the click me button"); //alert for web
    //Alert.alert("this is the click me button"); //alert for phone

    //get the studnet's gradePointsfor SSWD, multiply it by the credits 
    totalGradeScores += (gradePoints[sswd]) * credits;
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+sswd)

    //get the student's gradePointsfor Ob, multiply it by the credits
    totalGradeScores += (gradePoints[ob]) * credits;
    //add the result to totalGradeScores as an accumulator variable (e.g. tgs=tgs+ob)
    
    totalGradeScores += (gradePoints[ma]) * credits;
    totalGradeScores += (gradePoints[dm]) * credits;
    totalGradeScores += (gradePoints[ooad]) * credits;
    totalGradeScores += (gradePoints[fm]) * credits;
   
    //calculate the gpa as the totalsGradeScores divided by the totalPossibleCredits
    const gpa = totalGradeScores / totalPossibleCredits;
    //Output the calculated GPA result to the user using an alert (you must concatenate the gpa)

    alert("Your GPA is: " + gpa);
    Alert.alert("Your GPA is: " + gpa);
  }


const styles = StyleSheet.create({
  container: {
    justifyContent:"row",
    flex: 3,

  },
  row: {
    flexDirection: "row",
    marginBottom:"0%",
    marginTop:"2%",
    padding: "2%"

  },
  label: {
    marginTop:"2%",
    marginLeft:"5%",
    flex: 1,
    textAlign: "right",

  },
  textInput: {
    marginLeft:"2%",
    marginRight:"5%",
    padding:"1%",
    borderRadius:"5px",
    border:"1px solid black",
    flex: 2,
    minWidth: "25%",
    backgroundColor:"yellow",
    

  }
});



return (
    <SafeAreaView style={styles.container}>
      <View><Text style={{flexDirection: "row", fontWeight: "bold", fontSize: 24, textAlign:"center", marginTop: "%10"}}>GPA Calculator</Text></View>
      <View style={styles.row}>
        <Text style={styles.label}>Sever Side Web</Text>
        <TextInput style={styles.textInput}  placeholder="Grade" onChangeText={(val) => setSswd(val)}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Organisational Behaviour</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={(val) => setOb(val)}/>
      </View>


            <View style={styles.row}>
        <Text style={styles.label}>Mobile Application</Text>
        <TextInput style={styles.textInput}  placeholder="Grade" onChangeText={(val) => setMa(val)}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Digital Marketing</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={(val) => setDm(val)}/>
      </View>
      

      <View style={styles.row}>
        <Text style={styles.label}>Object Oriented Analysis & Design</Text>
        <TextInput style={styles.textInput}  placeholder="Grade" onChangeText={(val) => setOoad(val)}/>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Financial Management</Text>
        <TextInput style={styles.textInput} placeholder="Grade" onChangeText={(val) => setFm(val)}/>
      </View>


      <View >
        <Button title="submit" onPress={clickMe}/>
      </View>
    </SafeAreaView>
  );
}
