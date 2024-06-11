import React from 'react'
import './contactUs.css';

function ContactUs() {

  return (
    <div className='container'>
      <div className="sideLeft">
      <h2>Get in Touch with Us</h2>
        <table>
          <tr>
            <td>Region:</td>
            <td>Telephone:</td>
          <tr>
            <td></td>
            <td>Arusha: 06245416517</td>
          </tr>
          <tr>
            <td></td>
            <td>Arusha: 06245416517</td>
          </tr>
          <tr>
            <td></td>
            <td>Dar es Salaam: 06245416517</td>
          </tr>
          <tr>
            <td></td>
            <td>Arusha: 06245416517</td>
          </tr>
          <tr>
            <td></td>
            <td>Dodoma: 06245416517</td>
          </tr>
          <tr>
            <td></td>
            <td>Morogoro: 06245416517</td>
          </tr>
          <tr>
            <td>.</td>
            <td>Mbeya: 06245416517</td>
          </tr>
          </tr>
          <tr>
            <td>Email:</td>
            <td>info@onbus.com</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>Kijitonyama DSM</td>
          </tr>
        </table>
      </div>
      <div className="sideRight">
        <form action="" method="post">
          <h2>Send us a Message</h2>
          <input type="text" name="" id="" placeholder='Full Name' />
          <input type="email" name="" id="" placeholder='Email Address' />
          <textarea name="" id="" placeholder='Message'></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs;
