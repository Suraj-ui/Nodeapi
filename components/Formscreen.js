import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,DatePickerAndroid   } from 'react-native';
export const Formscreen = (props) =>{
const [selectedDate, setSelectedDate] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);

    


      const openDatePicker = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        mode: 'spinner', // 'calendar' or 'spinner'
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        const selectedDate = new Date(year, month, day);
        setSelectedDate(selectedDate);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

    const handleSubmit = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Perform validation
        if (name.trim() === '') {
          alert('Please enter your name');
          return;
        }
        if (email.trim() === '') {
          alert('Please enter your email address');
          return;
        }
        if (password.trim() === '') {
          alert('Please enter a password');
          return;
        }
        if (confirmPassword.trim() === '') {
          alert('Please confirm your password');
          return;
        }
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        if (gender === '') {
          alert('Please select your gender');
          return;
        }
        if (!termsAgreed) {
          alert('Please agree to the terms and conditions');
          return;
        }
         if (emailRegex.test(email)) {
     console.log("Valid Email");
    } else {
    alert('Invalid Email', 'The email address is invalid.');
    }
    
        // Submit form
        // ...
      };
    return(
        <View style={styles.container}>
 
      <TextInput style={styles.input} 
      placeholder="Enter Name"
        placeholderTextColor="#999"
        underlineColorAndroid="transparent"
         value={name} onChangeText={setName} />


      <TextInput style={styles.input} 
      placeholder="Enter Email"
        placeholderTextColor="#999"
        underlineColorAndroid="transparent"
         value={email} onChangeText={setEmail} />


      <TextInput style={styles.input} 
      placeholder="Enter Password"
        placeholderTextColor="#999"
        underlineColorAndroid="transparent"
         value={password} onChangeText={setPassword} secureTextEntry />

   
      <TextInput style={styles.input} 
      placeholder="Confirm Password"
        placeholderTextColor="#999"
        underlineColorAndroid="transparent"
         value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
 <TouchableOpacity onPress={openDatePicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      {selectedDate && <Text>Selected Date: {selectedDate.toLocaleDateString()}</Text>}
      <Text>Gender</Text>
      <TouchableOpacity  style={styles.radioButton} onPress={() => setGender('male')}>
       
        <Radio selected={gender === 'male'} color="#2196F3"
            uncheckedColor="#757575"
            size={20}/>
             <Text style={styles.radioLabel}>Male</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.radioButton} onPress={() => setGender('female')}>
     
        <Radio selected={gender === 'female'} color="#2196F3"
            uncheckedColor="#757575"
            size={20}/>
               <Text style={styles.radioLabel}>Female</Text>
      </TouchableOpacity>

      <Text>Terms and Conditions</Text>
      <TouchableOpacity onPress={() => setTermsAgreed(!termsAgreed)}>
     
        <Text style={styles.termsAndConditionsText}> <Checkbox selected={termsAgreed}  checkedIcon="check-square"
        uncheckedIcon="square"
        checkedColor="#2196F3"
        uncheckedColor="#757575"
        containerStyle={styles.checkBoxContainer} />  Agree to terms and conditions</Text>
       
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
    );
  };

  const Radio = ({ selected }) => (
    <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
      {selected && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'black' }} />}
    </View>
  );
  
  const Checkbox = ({ selected }) => (
    <View style={{ width: 20, height: 20, borderWidth: 1, borderColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
      {selected && <View style={{ width: 12, height: 12, backgroundColor: 'black' }} />}
    </View>
  );

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    marginRight:10,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  termsAndConditionsText: {
    fontSize: 20,
    margin:10,
    color: '#757575',
  },
  input: {
    margin:10,
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: '#333',
  },
  radioGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  radioButton: {
    borderRadius:50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 15,
  },
});