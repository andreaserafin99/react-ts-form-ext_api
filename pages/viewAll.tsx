import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { User } from '../models/User';

interface viewAllProps {}
interface viewAllState {}

function ViewAll<viewAllProps, viewAllState>(props) {
  return (
    <div>
      {props.users.map((el) => (
        <Card
          title={el.username}
          subTitle={el.name}
          style={{ width: '25rem', marginBottom: '2em' }}
        >
          <div className="user-info-card">
            <span>
              Email: <b>{el.email}</b>
            </span>
            <span style={{ marginLeft: '2em' }}>
              Phone: <b>{el.phone}</b>
            </span>

            <span>
              WebSite: <a href={el.website}>{el.website}</a>
            </span>

            <span className="user-info-card">
              Address:
              <span>city: {el.address.city}</span>
              <span>street: {el.address.street}</span>
              <span>suite: {el.address.suite}</span>
              <span>zipcode: {el.address.zipcode}</span>
              <span>Latitude: {el.address.geo.lat}</span>
              <span>longitude: {el.address.geo.lng}</span>
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default ViewAll;
