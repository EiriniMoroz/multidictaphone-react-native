import React, {useState, useRef, forwardRef, useImperativeHandle } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import { Audio  } from 'expo-av';
import * as FileSystem from 'expo-file-system';

let recording = new Audio.Recording();

export const TrackItem = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    playSound: () => { playSound() },
    stopSound: () => { stopSound() }
  }))

    const {onPress} = props;
    const {id} = props;
    const {number} = props;
    const [count, setCount] = useState(0);
    const [audioRecorderPlayer, setRecorder] = useState();
    //const [recording, setRecording] = React.useState(new Audio.Recording());
    const [RecordedURI, SetRecordedURI] = useState("");
    const [isPLaying, SetisPLaying] = useState(false);
    const Player = useRef(new Audio.Sound());

    const [sound, setSound] = React.useState();
    const [isRecorded, SetisRecorded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    
  async function startRecording() { // expo
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await recording.prepareToRecordAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
              );
              await recording.startAsync();
    } catch (err) {
      console.error('Failed to start recording', err);
    }
           
  }

  const stopRecording = async () => { //expo
    console.log('Stopping recording..');

    try {
          await recording.stopAndUnloadAsync();
          const result = recording.getURI();
          SetRecordedURI(result); // Here is the URI
          console.log("uri ", result);
          recording = new Audio.Recording();
          SetisRecorded(true);
          props.onChangeRecState();
        } catch (error) {
          console.log(error);
        }

  }

  const playSound = async () => {

    try {

          Player.current.setOnPlaybackStatusUpdate(async (status) => {
                  if (status.didJustFinish === true) {
                    // audio has finished!
                    await Player.current.unloadAsync()
                    setIsLoaded(false);
                    console.log("finished");
                      setCount(count + count%2);
                  }
                })
      
          console.log(id, ".isloaded: ", isLoaded);
          if(!isLoaded){

          const result = await Player.current.loadAsync(
            { uri: RecordedURI },
            {},
            true
          );
          setIsLoaded(true);
          }

          const response = await Player.current.getStatusAsync();
          if (response.isLoaded) {
            if (response.isPlaying === false) {
              Player.current.playAsync();

              SetisPLaying(true);
            }
          }
                    

          console.log("playing", id);
        } catch (error) {
            console.log(error, "id is ", id);
          }

  }
const stopSound = async () => {
    try {
      const checkLoading = await Player.current.getStatusAsync();
      if (checkLoading.isLoaded === true) {
        await Player.current.stopAsync();
        await Player.current.unloadAsync();
        setIsLoaded(false);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = () => {
      if(count === 0){
          return require("../assets/recordButton.png");
      }
      if(count === 1){
          return require("../assets/stopRecordingButton.png");
      }   
      else{
            if(count%2 === 0){
                return require("../assets/play.png");
            }
            if(count%2 === 1){
                return require("../assets/stopPlaying.png");
            }
        }   
                        
  };
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text>NewTrack{props.number}</Text>
            </View>
            <View style={styles.buttons}>                                          
                    <TouchableOpacity //style={styles.buttons}
                        onPress={()=>{
                            setCount(count + 1);
                            if(count === 0){
                                //console.log(FileSystem.documentDirectory);

                                startRecording();
                            }
                            if(count === 1){
                                stopRecording();
                            }  
                            else{
                                if(count%2 === 0){
                                    playSound();
                                }
                                if(count%2 === 1){
                                   stopSound();
                                }
                            }   

                        }

                        }>
                        
                        <Image source= {getImage()}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPress}>
                        <Image source={require("../assets/croce2.png")}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        height: 57,
        //flex: 1,
        flexDirection: 'row',
        //flexWrap: "wrap",
        borderWidth: 1,

    },
    text: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 30
    },
    buttons: {
        alignItems: 'flex-end',
        justifyContent: 'center',

        flexDirection: 'row',

    }
})