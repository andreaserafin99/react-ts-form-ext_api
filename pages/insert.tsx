import axios from 'axios';
import { Button } from 'primereact/button';
import { GMap } from 'primereact/gmap';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Address, Company, Geo, User } from '../models/User';

interface insertProps {}
interface insertState {}

function Insert(props) {
  let [currentUser, setCurrentUser] = useState<User>(null);

  let [currentAddress, setCurrentAddress] = useState<Address>(null);

  let [currentPosition, setCurrentPosition] = useState<Geo>(null);

  let [currentCompany, setCurrentCompany] = useState<Company>(null);

  let [map, setMap] = useState<any>('');

  return (
    <div>
      <form>
        <span className="p-float-label input-span">
          <InputText
            id="name"
            onChange={(e) => {
              setCurrentUser({
                ...currentUser,
                name: e.target.value,
              });
              // setCurrentUser({ name: e.target.value });
            }}
          />
          <label htmlFor="in">Name</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="username"
            onChange={(e) => {
              setCurrentUser({
                ...currentUser,
                username: e.target.value,
              });
            }}
          />
          <label htmlFor="in">Username</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="email"
            onChange={(e) => {
              setCurrentUser({
                ...currentUser,
                email: e.target.value,
              });
            }}
          />
          <label htmlFor="in">Email</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="city"
            onChange={(e) => {
              setCurrentAddress({
                ...currentAddress,
                city: e.target.value,
              });
            }}
          />
          <label htmlFor="in">City</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="street"
            onChange={(e) => {
              setCurrentAddress({
                ...currentAddress,
                street: e.target.value,
              });
            }}
          />
          <label htmlFor="in">Street</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="suite"
            onChange={(e) => {
              setCurrentAddress({
                ...currentAddress,
                suite: e.target.value,
              });
            }}
          />
          <label htmlFor="in">Suite</label>
        </span>
        <span className="p-float-label input-span">
          <InputText
            id="zipcode"
            onChange={(e) => {
              setCurrentAddress({
                ...currentAddress,
                zipcode: e.target.value,
              });
            }}
          />
          <label htmlFor="in">Zip Code</label>
        </span>

        <span className="p-float-label input-span">
          <InputText id="map" />
          <label htmlFor="in">Position</label>

          <Button
            label="Submit"
            type="button"
            className="p-button-raised p-button-text"
            onClick={() => {
              axios
                .get(
                  'https://geocode.xyz/' +
                    currentAddress.city +
                    '?map=1&auth=514218058354284924994x121254'
                )
                .then((data) => {
                  console.log(data.data);
                  setMap((map = data.data));
                });
            }}
          />
        </span>

        <Button
          label="Submit"
          type="button"
          className="p-button-raised p-button-text"
          onClick={() => {
            props.users(currentUser);
            console.log('LOG: submit function', currentUser);
          }}
        />

        <Button
          label="Clear"
          type="button"
          className="p-button-raised p-button-danger p-button-text"
          onClick={() => {
            setCurrentUser({
              username: '',
              name: '',
              email: '',
            });
          }}
        />

        <div>
          {() => {
            return map;
          }}
        </div>
      </form>
    </div>
  );
}
export default Insert;
