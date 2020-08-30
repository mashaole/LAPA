import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  font-size: 30px;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  a{
    text-decoration: none;
    color:#000000;
    text-shadow: -6px -6px 5px #FFFFFF, 6px 6px 10px rgba(0, 0, 0, 0.3);
  }

  a:hover{
    color:#f80;  
  }
  
  a:active{
    color:#f80;
  }

  @media (max-width: 768px) {
    z-index:1;
    flex-flow: column nowrap;
    background-color: #ffff;
    position: fixed;
    font-size: 40px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color:#000000;
    }

    li:hover{
      color:#f80
    }
    
    li:active{
      color:#f80
    }
  }
`;
const li = [
  {
    link: "/",
    text: "Home"
  },
  {
    link: "/products",
    text: "Products"
  },
  {
    link: "/about",
    text: "About Us"
  },
  {
    link: "/contact",
    text: "Contact Us"
  }
];

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {
        li.map((objLink, i) => {
          return (<li><a href={objLink.link}>{objLink.text}</a></li>)
        })
      }
    </Ul>
  )
}

export default RightNav