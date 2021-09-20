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
          <div>
            <span>
              Email: <b>{el.email}</b>
            </span>
            <span style={{ marginLeft: '2em' }}>
              Age: <b>{el.phone}</b>
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
export default ViewAll;
