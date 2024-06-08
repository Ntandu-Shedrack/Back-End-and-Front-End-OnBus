import React from 'react';
import './HomePage.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Home() {

  const handleClick = (e) => {

  }

  const routes = [
    { id: 1, image: '.', route: 'Dar es Salaam - Morogoro' },
    { id: 2, image: 'path/to/image2.jpg', route: 'Dar Es Salaam - Moshi' },
    { id: 3, image: 'path/to/image3.jpg', route: 'Dar Es Salaam - Arusha' },
    { id: 4, image: 'path/to/image4.jpg', route: 'Dar Es Salaam - Dodoma' },
    { id: 5, image: 'path/to/image5.jpg', route: 'Morogoro - Moshi - Arusha' },
    { id: 6, image: 'path/to/image6.jpg', route: 'Turiani - Dar Es Salaam' },
  ];

  return (
    <div >
      <table>
        <tbody>
        <tr className="container">
          <td className='sideLeft'>
              <h2>OnBus</h2>
              <h4>Luxury & Comfort In One Package</h4>
              <p>Welcome aboard and experience luxury and comfort</p>
              <p>In one package as you travel with our executive coaches,</p>
              <p>We wish you a happy and comfortable journey with us!</p>
          </td>
          <td className='sideRight'>
            <form action="" method="get">
              <h4>Choose your Journey</h4>
              <h2>Please choose your preferred journey starting point and destination.</h2>
              <input type="text" name="origin" id="" placeholder='Travel From' />
              <input type="text" name="destination" id="" placeholder='Travel To' />
              <input type="date" name="" id="" />
              <button type="submit" className='searchBtn' onClick={handleClick} >Search Route</button>
              {/* <button><Link to='./pages/BusesPage.js' >Search Route</Link></button> */}
            </form>
          </td>
        </tr>
        <tr>
          <td><h2 className='how'>How It Works</h2></td>
        </tr>
        <tr className="howItWorks">
            <td className='step'>
                <h4>1. Search Your Bus</h4>
                <p>Select where you are traveling from, traveling to, and the date of travel.</p>
            </td>
            <td className='step'>
                <h4>2. Search Your Bus</h4>
                <p>Choose the preferred bus, select a seat, boarding point, and dropping point.</p>
            </td>
            <td className='step'>
                <h4>3. Booking Payment</h4>
                <p>Select your payment method and proceed to pay.</p>
            </td>
            <td className='step'>
                <h4>4. Select & Confirm</h4>
                <p>Receive a confirmation ticket for your journey. Have a pleasant journey with us.</p>
            </td>
        </tr>
        </tbody>  
      </table>    
      <div className="whyUs">
        <h2>Why Us</h2>
        <table>
          <tr>
            <td>
              <p>We strive to provide an unparalleled travel experience, tailored to meet the needs of every traveler. Here's why you should choose us:</p>
              <p>1. Seamless Booking Process: Our user-friendly platform ensures a smooth and hassle-free booking experience. From selecting your destination to choosing your preferred seat, our system makes every step simple and intuitive.</p>
              <p>2. Wide Range of Options: Whether you're planning a short trip or a long journey, we offer an extensive network of routes and bus operators. With various options at your fingertips, finding the perfect trip that fits your schedule and budget is easier than ever.</p>
              <p>3. Transparent Pricing: We believe in honesty and transparency. Our pricing structure is clear and straightforward, with no hidden fees. What you see is what you pay, ensuring you can plan your journey without any surprises.</p>
              <p>4. Secure Transactions: Your security is our priority. Our platform employs the latest encryption technologies to protect your personal and payment information, giving you peace of mind while booking.</p>
              <p>5. Real-Time Updates: Stay informed with real-time updates on bus schedules, seat availability, and any changes to your itinerary. Our system keeps you in the loop, so you're always prepared for your journey.</p>
              <p>6. Exceptional Customer Support: Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues. From booking to boarding, we're here to help every step of the way.</p>
              <p>Experience convenience, reliability, and comfort like never before. Choose our bus booking system for your next journey and discover why we're the preferred choice for countless travelers.</p>
            </td>
          </tr>
        </table>
      </div>
      <div className="popularRoutes">
        <h2 className="title">Popular Routes</h2>
        <h3 className="subtitle">***</h3>
        <div className="routes-list">
          {routes.map(route => (
          <div key={route.id} className="route-item">
            {/* <img src={route.image} alt={route.route} className="route-image" /> */}
            <div className="route-name">{route.route}</div>
          </div>
          ))}
      </div>
      </div>
    </div>
  )
}

export default Home;


