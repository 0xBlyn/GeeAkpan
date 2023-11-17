import React, {useState, useEffect} from 'react'
import './Card.css'
import pic from './assets/Rectangle 25.png'

function Card({image, title, sublet, button}) {
  return (
    <div className='card'>
        <img src={image} alt="event images" />
        <h2>{title}</h2>
        <button>{button}</button>
    </div>
  )
}

export default Card 


export function Card1({photo, name, company, testimony}) {
  return(
    <div className='testimony'>
    <div className='tleft'>
      <img className='pic' src={pic} alt='human' />
      <h3>{name}</h3>
      <h4>Shardeum Co.</h4>
    </div>
    <div className='tright'>
      {testimony}
    </div>
  </div>
  )

}

export function YoutubeCard({ videoId, title, button }) {
  const [thumbnail, setThumbnail] = useState('');

  useEffect(() => {
    const fetchThumbnail = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyDvk-hnxvC0lXPa7RQK-wHdB09h0kB1LQA`
        );
        const data = await response.json();
        const thumbnailUrl =
          data.items && data.items.length > 0
            ? data.items[0].snippet.thumbnails.medium.url
            : '';
        setThumbnail(thumbnailUrl);
      } catch (error) {
        console.error('Error fetching YouTube video thumbnail:', error);
      }
    };

    fetchThumbnail();
  }, [videoId]);

  return (
    <div className='card'>
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={thumbnail} alt='YouTube video thumbnail' />
      </a>
      <h2>{title}</h2>
      <button>{button}</button>
    </div>
  );
}