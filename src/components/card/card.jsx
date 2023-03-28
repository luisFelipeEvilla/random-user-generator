import React, { useState, useEffect } from 'react';

import './Card.css';
import { BsPerson, BsMap, BsPhone, BsLock } from "react-icons/bs";
import { MdMailOutline, MdCalendarToday } from "react-icons/md";

export default function Card(props) {
  const [ subtitle, setSubtitle ] = React.useState("My email address is");
  const [ title, setTitle ] = React.useState(props.email);

  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (loading == false) return ; 
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        setImg(data.results[0].picture.large);
        setName(data.results[0].name.first + ' ' + data.results[0].name.last);
        setEmail(data.results[0].email);
        setPhone(data.results[0].phone);
        setBirthday(data.results[0].dob.date);
        setAddress(data.results[0].location.street.number + ' ' + data.results[0].location.street.name + ', ' + data.results[0].location.city + ', ' + data.results[0].location.country);
        
        setTitle(data.results[0].email);
      });

    setLoading(false);
  }, []);

  const showName = () => {
    setSubtitle("My name is");
    setTitle(name);
  };

  const showEmail = () => {
    setSubtitle("My email address is");
    setTitle(email);
  };

  const showPhone = () => {
    setSubtitle("My phone number is");
    setTitle(phone);
  };

  const showAddress = () => {
    setSubtitle("My address is");
    setTitle(address);
  };

  const showBirthday = () => {
    setSubtitle("My birthday is");
    setTitle(birthday);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-avatar">
          <img src={img} alt="Avatar" />
        </div>
      </div>

      <div className="container">
        <p className="card-subtitle">{subtitle}</p>
        <h4 className="card-title">
          {title}
        </h4>
        <div className="card-buttons">
          <BsPerson onClick={showName} />
          <MdMailOutline onClick={showEmail} />
          <MdCalendarToday onClick={showBirthday} />
          <BsMap onClick={showAddress} />
          <BsPhone onClick={showPhone} />
          <BsLock />
        </div>
      </div>
    </div>
  );
}