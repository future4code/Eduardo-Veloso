import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Avataaars from './img/avataaars.png';
import TechStars from './img/logo-techstars.png';
import Email from './img/email.jpg';
import Location from './img/location.png';




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Avataaars} 
          nome="Eduardo Veloso" 
          descricao="Oi, eu sou o Eduardo. Eu gosto de jogar video-game, muito muito mesmo!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      
      <div className="page-section-container">
        <CardPequeno 
          imagem={Email} 
          nome="Email" 
          descricao="deadzapdos@live.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={Location} 
          nome="Endereço" 
          descricao="Algum lugar em Fortaleza"
        />
      </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={TechStars} 
          nome="TechStars" 
          descricao="Estágio onde crio sites com Wordpress" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Alot" 
          descricao="Um monte de pequenas experiências que não são da área de programação. ( =\ )" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
