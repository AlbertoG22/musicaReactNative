import React, { Component } from 'react';
import {
    FlatList, 
    TouchableOpacity
} from 'react-native';

import ArtistBox from './ArtistBox'

import {Action, Actions} from 'react-native-router-flux';

export default class ArtistList extends Component<Props>{
    
    handlePress(artists){
        Actions.artistDetail({ artist: artist })
    }
    render(){
        const artists = this.props.artists;
        return(
            <FlatList
                data = {artist}
                renderItem ={({item: artist}) =>(
                    <TouchableOpacity onPress={() => this.handlePress(artist)}>
                            <ArtistBox artist={artist}/>
                        </TouchableOpacity>
                )}
            />
        );
    }

    /*constructor(props){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds
        }
    }
    componentDidMount(){
        this.updateDataSource(this.props.artists)
    }
    componentWillReceiveProps(newProps){
        if(newProps.artists !== this.props.artists){
            this.updateDataSource(newProps.artists)
        }
    }
    updateDataSource = (data) => {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(data)
        })
    }
    handlePress(artists){
        Actions.artistDetail({ artist: artist })
    }
    render(){
        return(
            <ListView
            enableEmptySections = {true}
                dataSource={this.state.dataSource}
                renderRow={(artist) => {
                    return (
                        <TouchableOpacity onPress={() => this.handlePress(artist)}>
                            <ArtistBox artist={artist}/>
                        </TouchableOpacity>
                    )
                }}
            />
        );
    }*/
}