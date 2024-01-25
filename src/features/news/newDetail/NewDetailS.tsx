import React from 'react';
import styled from 'styled-components/native';
import { Background } from '../../../common/components/Layout';
import { TextT1 } from '../../../common/components/Text';
import { NewsStackParamList } from '../../../navigation/NewsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

type ScreenProps = NativeStackScreenProps<NewsStackParamList, 'newDetail'>;

export default function NewDetailS(props: ScreenProps) {
  return (
    <SafeAreaView>
      <Container>
        <Background />
        <HeaderImage
          source={{ uri: 'props.image' }}
          defaultSource={require('../../../assets/images/defaultBackground.png')}
        />
        <WebViewContainer>
          <WebView
            source={{ html: htmlContent, headers: { style: '' } }}
            // source={{ uri: 'https://google.com/' }}
            // source={{ html: '<h1>Hello world</h1>' }}
            originWhitelist={['*']}
            style={{ flex: 1, backgroundColor: '#fff' }}
          />
        </WebViewContainer>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #000;
  align-items: center;
`;
const HeaderImage = styled.Image`
  width: 100%;
  aspect-ratio: 2;
  border-radius: 26px;
  z-index: 2;
`;
const WebViewContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: #fff;
  top: -26px;
  padding-top: 28px;
  z-index: 1;
`;

const htmlContent = `
<style>
  *{
    font-size: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #333;
  }
  #content{
    padding: 10px 28px 60px 28px;
  }
</style>
<div id="content">
<h2><strong>Estrategias Avanzadas para Dominar en Fortnite</strong></h2>
<p>&nbsp;</p>
<h2><strong>Introducción</strong></h2>
<p><strong>Fortnite</strong> no es solo un juego de batalla real; es un escenario donde las habilidades estratégicas y la rapidez de decisión son clave. Aquí te presentamos técnicas avanzadas que te ayudarán a elevar tu nivel de juego en Fortnite.</p>
<h2><strong>1. Conoce el Mapa</strong></h2>
<ul>
  <li><strong>Exploración</strong>: Familiarízate con cada rincón del mapa.</li>
  <li><strong>Puntos Estratégicos</strong>: Identifica zonas de alta actividad y rutas de escape.</li>
  <li><strong>Dominio del Terreno</strong>: Aprovecha el conocimiento del mapa para tomar decisiones tácticas.</li>
</ul>
<h2><strong>2. Gestión del Inventario</strong></h2>
<ul>
  <li><strong>Priorización</strong>: Alinea tu inventario con tu estilo de juego.</li>
  <li><strong>Preparación</strong>: Mantén siempre materiales de construcción y elementos de curación.</li>
  <li><strong>Organización</strong>: Una gestión rápida puede ser decisiva.</li>
</ul>
<h2><strong>3. Construcción y Edición Eficiente</strong></h2>
<ul>
  <li><strong>Habilidad en Construcción</strong>: Aprende a construir rápidamente para defensa y ataque.</li>
  <li><strong>Edición Creativa</strong>: Usa la edición para crear oportunidades de ataque sorpresivas.</li>
</ul>
<h2><strong>4. Mejora tu Puntería</strong></h2>
<ul>
  <li><strong>Práctica Constante</strong>: Utiliza el modo creativo y minijuegos para afinar tu precisión.</li>
  <li><strong>Precisión sobre Velocidad</strong>: Apunta con cuidado, no solo rápidamente.</li>
</ul>
<h2><strong>5. Toma de Decisiones en Combate</strong></h2>
<ul>
  <li><strong>Estrategia de Combate</strong>: Decide cuándo atacar, esconderte o huir.</li>
  <li><strong>Posicionamiento Inteligente</strong>: La ubicación y el momento pueden cambiar el rumbo de una batalla.</li>
</ul>
<h2><strong>6. Juega con Amigos y Aprende de Otros</strong></h2>
<ul>
  <li><strong>Trabajo en Equipo</strong>: Colabora y desarrolla tácticas con amigos.</li>
  <li><strong>Aprendizaje Continuo</strong>: Observa y aprende de jugadores experimentados.</li>
</ul>
<h2><strong>Conclusión</strong></h2>
<p>Dominar Fortnite requiere más que habilidad; necesita una mentalidad estratégica y adaptativa. Con estas técnicas, no solo mejorarás tu juego, sino que disfrutarás cada partida al máximo.</p>
</div>
`;
