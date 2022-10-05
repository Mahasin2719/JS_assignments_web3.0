// Problem 40
function make_album(artistName,albumTitle,numberOfTracks= 0){
    if(numberOfTracks==0){
        var albumInfo = {artist: artistName,
                         album: albumTitle};
    
        console.log(albumInfo);
        
    }
    else{
        var albumInfo = {artist: artistName,
            album: albumTitle, trackCount:numberOfTracks}
    
    console.log(albumInfo);
    
    }
    }
    make_album("Artist-1","Album-1")
    make_album("Artist-2","Album-2",10)
    make_album("Artist-3","Album-3")
    
    
    
    