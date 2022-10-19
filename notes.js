const fs = require('fs')


function getNotes(){
    return 'your notes...'    
}


const addNotes = function(title, body){
    const notes = loadNotes()
    const dupNotes = notes.filter(function(note){
        return note.title == title
    })

    if(dupNotes.length == 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log('Notes added')
    }
    else{
        console.log('Note title already exists!!!')
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const listNotes = function(){
    const data = loadNotes()
    console.log(data)
}

const readList = function(titleNote){
    const data = loadNotes()
    data.map(({ title, body}) => {
        if(title == titleNote){
            console.log("Title: ",title) 
            console.log("Body: ",body)
        }
      })
}

const removeItem = function(titleNote){
    const data = loadNotes()
    const indexOfElementToRemove = data.findIndex(function(element){
        return element.title == titleNote
    })
    if(indexOfElementToRemove != -1){
        data.splice(indexOfElementToRemove, 1)
    }
    saveNotes(data)
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    listNotes: listNotes,
    readList: readList,
    removeItem: removeItem
}