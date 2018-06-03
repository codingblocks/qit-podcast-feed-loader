import mirror from 'mirrorx'

export default mirror.model({
  name: 'player',
  initialState: {
    nowPlaying: {},
    playlist: []
  },
  reducers: {
    play (state, episode) {
      return {...state, nowPlaying: episode}
    },
    addToPlaylist (state, episode) {
      return {...state, playlist: [...state.playlist, episode]}
    },
    playNextEpisode (state) {
      const playlist = state.playlist.slice()
      const nowPlaying = playlist.shift()
      return {...state, nowPlaying, playlist}
    }
  }
})

export const logPlaylist = mirror.hook((action, getState) => {
  if (action.type !== 'player/addToPlaylist') return
  console.log('Playlist: ', getState().player.playlist)
})
