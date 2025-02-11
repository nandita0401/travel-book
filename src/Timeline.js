import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  const events = [
    {
      //date: '',
      title: 'Jammu & Kashmir, India 🏔️',
      description: 'It is the crown of India, is a paradise of breathtaking landscapes. Snow-capped mountains, lush valleys, and the mesmerizing Dal Lake make it a must-visit destination. The shikaras floating on the water and the aroma of Kashmiri saffron add a magical touch to this heavenly abode.',
      image: '/media/2.jpg',
      //video: '/media/firstnightout.mp4',
    },
    {
      //date: '',
      title: 'Dalhousie, Himachal Pradesh, India ⛰️',
      description: 'Nestled in the lap of the Himalayas, Dalhousie is a quaint hill station offering colonial charm, pine-clad valleys, and serene landscapes. The panoramic views from Khajjiar, often called the \'Mini Switzerland of India,\' make it a perfect retreat for nature lovers.',
      image: '/media/1.jpg',
    },
    {
      //date: '',
      title: 'Goa, India 🏝️',
      description: 'Golden beaches, vibrant nightlife, and a blend of Portuguese and Indian culture make Goa a dream destination. From the stunning Dudhsagar waterfalls to the serene beaches of South Goa, every corner of this coastal paradise has a unique charm waiting to be explored."',
      image: '/media/3.jpg',
    },
    {
      //date: '',
      title: 'Amritsar, Punjab, India 😇',
      description: 'Home to the majestic Golden Temple, Amritsar is a city rich in history and spirituality. The Wagah Border ceremony and the historic Jallianwala Bagh add a deep sense of patriotism, while the aroma of delicious Amritsari kulchas completes the experience.',
      image: '/media/4.jpg',
    },
    {
      //date: '',
      title: 'Rishikesh, Uttarakhand, India 🛳️',
      description: 'The yoga capital of the world, Rishikesh is where spirituality meets adventure. From serene Ganga Aarti at Triveni Ghat to thrilling white-water rafting in the Ganges, this mystical town offers a soul-enriching experience like no other.',
      image: '/media/5.jpg',
    },
    {
      //date: '',
      title: 'Nainital, Uttarakhand, India 🥰',
      description: 'The city of lakes, Nainital, is a picturesque retreat nestled in the Kumaon hills. Boating in the emerald-green Naini Lake, enjoying scenic views from Snow View Point, and walking along Mall Road make for an unforgettable mountain getaway.',
      image: '/media/6.jpg',
    },
    {
      //date: '',
      title: 'Jaipur, Rajasthan, India ✈️',
      description: 'The Pink City of India, Jaipur, is a perfect blend of royal heritage and vibrant culture. Majestic forts like Amer and Nahargarh, bustling bazaars, and the iconic Hawa Mahal transport you back to the grandeur of the Rajput era.',
      image: '/media/7.jpg',
    },
    {
      //date: '',
      title: 'Jaisalmer, Rajasthan, India 🐪',
      description: 'Amidst the golden dunes of the Thar Desert, Jaisalmer stands as a living heritage site. The majestic Jaisalmer Fort, camel safaris, and stargazing under the desert sky make this place a timeless marvel.',
      image: '/media/8.jpg',
    },
    {
      //date: '',
      title: 'Kasol, Himachal Pradesh, India 🏞️',
      description: 'Tucked away in the Parvati Valley, Kasol is a haven for backpackers and nature lovers. The mesmerizing riverside views, lush green landscapes, and the trek to Kheerganga make it a paradise for adventure seekers and peace seekers alike.',
      image: '/media/9.jpg',
    },

    // Add more events here
  ];

  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement key={index} date={event.date}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          {event.video ? (
            <video width="100%" height="315" controls>
              <source src={event.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={event.image} alt={event.title} />
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;