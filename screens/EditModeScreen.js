import React, {useState, setState} from 'react';
import{Navbar} from '../src/Navbar'
import { StyleSheet, Text, View,Button, TouchableOpacity, Image  } from 'react-native';
import { TrackItem } from '../src/TrackItem';

export default function EditModeScreen() {
    const [tracks, setTracks] = useState([])

    const addTrack = () => {
        // const newTrack = {
        //     id: Date.now().toString(),
        // }

        //setTracks(tracks.concat([ newTrack]))
        // setTracks((prevTrack) => {
        //     return [
        //         ...prevTrack,
        //         newTrack
        //     ]
        // })

        setTracks(prev => [
            ...prev, 
            {
             id: Date.now().toString()
            }
    ])
    }

    const removeTrack = (id, e) => {
        //const tracks = Object.assign([], tracks);
        //tracks.splice(tracks.indexOf(id),1)
        //setTracks({tracks: tracks})
        // setTracks(prev => [
        //     tracks
        // ])
        const newData = [...tracks];
        const prevIndex = tracks.findIndex(item => item.key === id);
        newData.splice(prevIndex, 1);
        setTracks(newData);
    }

    const pressPlusButton = () => {
        addTrack()
    }
    return (
        <View style={styles.globalContainer}>
            <View style={styles.contentContainer}>
                <Navbar />
                <View>
                    {tracks.map((track, index) => (
                        <TrackItem track={track} 
                        key = {track.id}
                        onPress = {() => removeTrack(index)}
                        />
                    ))
                    }
                </View>
            </View>
        
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={pressPlusButton}>
                    <Image source={require("../assets/plusBSmall2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <Image source={require("../assets/bigPlay2.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <Image source={require("../assets/save.png")}/>
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