import React from 'react';
import { Link } from 'react-router-dom';

import ButtonStyles from './Button.module.scss';

const Button = ({ buttonType, linkPath, href, buttonStyle, text, eventHandler}) => {
  if (buttonType === 'submit') {
    return (
      <button className={`btn ${ButtonStyles[buttonStyle]}`} type="submit">
        {text}
      </button>
    );
  }

  if (buttonType === 'link') {
    return (
      <Link className={`btn ${ButtonStyles[buttonStyle]}`} to={linkPath}>
        {text}
      </Link>
    );
  }

  if (buttonType === 'href') {
    return (
      <a className={`btn ${ButtonStyles[buttonStyle]}`} href={href} onClick={eventHandler}>
        {text}
      </a>
    );
  }

  if (buttonType === 'button') {
    return (
      <button className={`btn ${ButtonStyles[buttonStyle]}`} type="button" onClick={eventHandler}>
        {text}
      </button>
    );
  }
};

export default Button;