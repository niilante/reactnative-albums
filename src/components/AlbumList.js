import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import AlbumDetail from './AlbumDetail'

export default class AlbumList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      albums: []
    }
  }
  componentWillMount () {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        response.json()
          .then(json => {
            this.setState({
              albums: json
            })
            console.log(json)
          })
      })
  }
  renderAlbums () {
    let { albums } = this.state
    return albums.map(album => {
      return <AlbumDetail key={album.title} {...album} />
    })
  }
  render () {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}