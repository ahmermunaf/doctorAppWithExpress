import Main_Action from "./../actions/main_action.js";
import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
export default class MainMiddleware {
    static asyncMain() {
        return (dispatch) => {
            var StorageValue = []
            fetch('https://doctorappserver.herokuapp.com/api/patientdata')
            .then((response) => response.json())
            .then((responseJson) => {
              StorageValue = responseJson
              dispatch(Main_Action.mainData(StorageValue))
            })
        }
    } 
    static remove(id){
        return(dispatch) => {
            Reactotron.log(id)
            var dbId = JSON.stringify({id:id})
            var StorageValue = []
            fetch('https://doctorappserver.herokuapp.com/api/patientdata', {
                method: 'DELETE',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body:dbId
              })
              fetch('https://doctorappserver.herokuapp.com/api/patientdata')
              .then((response) => response.json())
              .then((responseJson) => {
                StorageValue = responseJson
                dispatch(Main_Action.mainData(StorageValue))
              })
        }
    }
}