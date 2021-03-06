fetch('https://api.nasa.gov/planetary/apod?api_key=8efwoPdq02GYBdDZqFNBDDfdJWqzcVFrEB2wBw3q')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('.title').innerText = data.title
        //document.querySelector('.url').src = data.url
        document.querySelector('.date').innerText = data.date
        document.querySelector('.copyright').innerText = data.copyright || ''
        if(data.media_type === 'image'){
            document.querySelector('.hdurl').src = data.hdurl
        } else if(data.media_type === 'video'){

            document.querySelector('.video-container').toggleAttribute('hidden')
            document.querySelector('.video').src = data.hdurl
        }
        
        document.querySelector('.mediaType').innerText = data.media_type
        document.querySelector('.explanation').innerText = data.explanation
    })
    .catch(err => console.log(`Error: ${err}`))