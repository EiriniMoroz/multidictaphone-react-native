import React, {useState, useRef,createRef, setState} from 'react';
import{Navbar} from '../src/Navbar'
import { StyleSheet, Text, View,Button, TouchableOpacity, Image,ScrollView  } from 'react-native';
import { TrackItem } from '../src/TrackItem';

export default function EditModeScreen() {
    
    const childRef1 = useRef()

    const [tracks, setTracks] = useState([])
    const [isRec, SetIsRec] = useState(false);
    const [ trackCount, setTrackCount] = useState(0);
    const addTrack = () => {
        setTracks(prev => [
            ...prev, 
            {
             id: Date.now().toString(),
             isRecorded: false,
             isPlaying: false,
             childRef: createRef(), 
             number: trackCount
            }
    ])
    }

    const removeTrack = (id, e) => {
        const newData = [...tracks];
        const prevIndex = tracks.findIndex(item => item.id === id);
        newData.splice(prevIndex, 1);
        setTracks(newData);
    }

    const pressPlusButton = () => {
        setTrackCount(trackCount+1);
        addTrack()
    }
    const playAll = () => {
        
        tracks.forEach(track => {
            if(track.isRecorded){
                console.log("is rec ",track.id);
                track.childRef.current.playSound();
                tracks[tracks.findIndex(item => item.id === track.id)].isPlaying = true;
            }
        })
        
    }
    const stopAll = () => {
        tracks.forEach(track => {
            if(track.isPlaying){
                console.log("Stopping ",track.id);
                track.childRef.current.stopSound();
                tracks[tracks.findIndex(item => item.id === track.id)].isPlaying = false;
            }
        })
    }
    const updateRecState = (id) => {
        tracks[tracks.findIndex(item => item.id === id)].isRecorded = true;
    }
    return (
        <View style={styles.globalContainer}>
            <View style={styles.contentContainer}>
                <Navbar />
                <ScrollView>
                    {tracks.map((track, index) => (
                        <TrackItem track={track} 
                        key = {track.id}
                        id = {track.id}
                        onPress = {() => removeTrack(track.id)}                       
                        onChangeRecState = {() => updateRecState(track.id)}
                        ref={track.childRef}
                        number ={track.number}
                        />
                    ))
                    }
                </ScrollView>
            </View>
        
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={pressPlusButton}>
                    <Image source={require("../assets/plusBSmall2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={playAll}>
                    <Image source={require("../assets/bigPlay2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={stopAll}>
                    <Image source={require("../assets/bigStop.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );

    
}



const styles = StyleSheet.create({
    globalContainer: {
        flex:  1
    },
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
      },
    container: {
        //flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
      },
});