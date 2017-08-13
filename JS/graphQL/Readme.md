#### Query syntax

 Basic

 ```
 {
  songs {
    id
    title
    lyrics {
      content
    }
  }
}

{
  "data": {
    "songs": [
      {
        "id": "5982f456e50617625131c8d7",
        "title": "hellyeah",
        "lyrics": [
          {
            "content": "long back for"
          }
        ]
      }
    ]
  }
}

// see mutations for add

 ```


 Mutations
```

//add song

mutation {
  addSong(title: "hellyeah") {
    id
  }
}

// returns
{
  "data": {
    "addSong": {
      "id": "5982f456e50617625131c8d7"
    }
  }
}

mutation {
  addLyricToSong(songId:"5982f456e50617625131c8d7", content:"long back for") {
    id
  }
}

```
