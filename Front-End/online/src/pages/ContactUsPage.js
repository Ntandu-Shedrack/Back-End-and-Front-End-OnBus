import React from 'react';
import './ContactUsPage.css';

function Contact() {
  return (
    <div className='container3'>
      <div className="sideLeft3">
        <h2>Get in Touch with Us</h2>
        <table>
          <tbody>
            <tr>
              <td>Region:</td>
              <td>Telephone:</td>
            </tr>
            <tr>
              <td>Arusha:</td>
              <td>06245416517</td>
            </tr>
            <tr>
              <td>Dar es Salaam:</td>
              <td>06245416517</td>
            </tr>
            <tr>
              <td>Dodoma:</td>
              <td>06245416517</td>
            </tr>
            <tr>
              <td>Morogoro:</td>
              <td>06245416517</td>
            </tr>
            <tr>
              <td>Mbeya:</td>
              <td>06245416517</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>info@onbus.com</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>Kijitonyama DSM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="sideRight3">
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

export default Contact;
