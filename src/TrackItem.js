import React, {useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
    Player,
    Recorder,
    MediaStates
} from '@react-native-community/audio-toolkit';

export const TrackItem = (props) => {
    const {onPress} = props;
    const {id} = props;
    const {isRecording, isRecorded,isPlaying} = props;
    const [count, setCount] = useState(0);

  const render1 = (id) => {
      <TouchableOpacity //style={styles.buttons}
            onPress={()=>{
                let rec = new Recorder(id +".mp3").record();
                 setTimeout(() => {
                    rec.stop((err) => {
                    // NOTE: In a real situation, handle possible errors here

                    // Play the file after recording has stopped
                    new Player(id +".mp3")
                    .play()
                    .on('ended', () => {
                        // Enable button again after playback finishes
                        //this.setState({disabled: false});
                    });
                    });
                }, 3000);

                isRecording = true;

            }

            }>
            <Image source={require("../assets/recordButton.png")}/>
        </TouchableOpacity>

  }
  const whereToG0 = () => {
      if(!isRecording && !isRecorded && !isPlaying){
            <TouchableOpacity //style={styles.buttons}
            onPress={()=>{
                let rec = new Recorder(id +".mp3").record();
                 setTimeout(() => {
                    rec.stop((err) => {
                    // NOTE: In a real situation, handle possible errors here

                    // Play the file after recording has stopped
                    new Player(id +".mp3")
                    .play()
                    .on('ended', () => {
                        // Enable button again after playback finishes
                        //this.setState({disabled: false});
                    });
                    });
                }, 3000);

                isRecording = true;

            }

            }>
            <Image source={require("../assets/recordButton.png")}/>
        </TouchableOpacity>
        }
        else{
            return render1(id);
        }
  }

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
                <Text>TrackName</Text>
            </View>
            <View style={styles.buttons}>
                    
                       
                           
                    <TouchableOpacity //style={styles.buttons}
                        onPress={()=>{
                            setCount(count + 1);
                            //getImage();
                            

                        }

                        }>
                        
                        <Image source= {getImage()}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={onPress}>
                        <Image source={require("../assets/croce.png")}/>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        //flex: 1,
        flexDirection: 'row',

    },
    text: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        fontSize: 30
    },
    buttons: {
        alignItems: 'flex-end',
        //justifyContent: 'space-around',
        flexDirection: 'row',

    }
})