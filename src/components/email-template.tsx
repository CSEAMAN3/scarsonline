import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  useremail: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, message, useremail
}) => (
  <div>
    <h3>My name is {name}!</h3>
    <h6>My email is {useremail}</h6>
    <p>{message}</p>
  </div>
);
