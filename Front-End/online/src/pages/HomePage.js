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
            <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</td>
          </tr>
        </table>
      </div>
      <div className="popularRoutes">
        <h2 className="title">Popular Routes</h2>
        <h3 className="subtitle">*</h3>
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


