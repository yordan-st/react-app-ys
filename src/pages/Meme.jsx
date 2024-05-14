import './../App.css'
import Memes from '../Memes'
import { useState } from 'react';

function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */
    const [memeImage, setMemeImage] = useState('')
    
    function getMemeImage() {
        const memesArray = Memes.data.memes
        // From right to left: get the length of memesArray,
        // pick a random number from all avaiable (returns decimal),
        // and round it floor so you get a whole number.
        const randomMeme = Math.floor(Math.random() * memesArray.length);
        // In the random item picked from the memesArray, get the value of url
        // and assign it as a new value of memeImage trough the setMemeImage function.
        setMemeImage(memesArray[randomMeme].url);
    }

  return (
    <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom text"
                className="form--input"
            />
            <button
                className="form--button"
                onClick={getMemeImage}
            >
                Get a new meme image 🖼
            </button>
        </div>
        <img className='meme--img' src={memeImage} alt="" />
    </main>
  )
}

export default Meme
