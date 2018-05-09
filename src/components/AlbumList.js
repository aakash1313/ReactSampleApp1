import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios'
import AlbumDetail2 from './AlbumDetail'


//Function Based Component. The other type of component is ClassBased Component
// const AlbumList = () => {
//   return(
//     <View>
//     <Text>AlbumList</Text>
//     </View>
//   );
//
// };

class AlbumList extends Component
{
  state = { albums: [] };
  componentWillMount()
  {
     console.log('Component will mount');
     axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));
  }


   renderAlbums()
   {
     return this.state.albums.map(album =>
       <AlbumDetail2 key = {album.title} album = {album}/>
     );
   }
   render()
   {
     console.log(this.state);
     return(
          <ScrollView>
         {this.renderAlbums()}
          </ScrollView>
        );
   }
}


 export default AlbumList;
