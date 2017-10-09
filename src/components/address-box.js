import React, { Component } from 'react'
import { Textfit } from 'react-textfit'


class AddressBox extends Component {

  render() {

    return (
      <div className={'address-box'}>
        <Textfit mode="single">
          <span className={'text-gold'}>3109 M ST NW</span>
        </Textfit>
        <Textfit mode="single">
          <span className={'text-light-brown'}>WASHINGTON, DC 20007</span>
        </Textfit>
        <Textfit mode="single">
           <span className={'text-light-green'}>(202) 333-4213</span>
         </Textfit>
        <Textfit mode="single">
           <span className={'text-dark-green'}>MON-TH | 10 am - 7:30 pm</span>
         </Textfit>
         <Textfit mode="single">
           <span className={'text-dark-brown lighten'}>FRI-SAT | 10 am - 8:30 pm</span>
         </Textfit>
        <Textfit mode="single">
          <span className={'text-dark-brown'}>SUNDAY | 11 am - 6 pm</span>
        </Textfit>
      </div>
    )
  }
}

export default AddressBox