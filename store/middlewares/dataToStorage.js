import PatientData_Action from "./../actions/patientData_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
export default class CounterMiddleware {
    static asyncPatientData(data) {
        return (dispatch) => {
            var JSONdata = JSON.stringify(data)
            Reactotron.log(JSONdata)
            fetch('https://doctorappserver.herokuapp.com/api/patientdata', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:JSONdata
              })
            dispatch(PatientData_Action.patientData(data))
        }
    } 
}