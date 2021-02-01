import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 70px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.campodegelo.com/">
        <img src="https://eisfeld-bucket.s3.amazonaws.com/globe-white.png" alt="Logo Campo de Gelo" />
      </a>
      <p>
        Fotos autorais.<br></br> Fatos contados por locais. <br></br>
        {' '}
        <a href="https://www.campodegelo.com">
          <span>Histórias. Relatos. Devaneios</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
