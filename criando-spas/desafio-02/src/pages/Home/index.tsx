import { CoffeeCard, CoffeeList, CoffeeListContainer, IconContainer, IntroContainer, IntroContainerItems, IntroImage, IntroTitleContainer } from './styles';

import introImagePath from "../../assets/intro-image.png";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

import coffee1 from "../../assets/produts/expresso.png"

export function Home() {

  const theme = useTheme();

  return (
    <>
      <IntroContainer>
        <div className='introContainer'>
          <IntroTitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          </IntroTitleContainer>
          <IntroContainerItems>
            <div>
              <IconContainer colorItem={ theme['yellow-dark'] }>
                <ShoppingCart size={ 16 } weight="fill" color='#FFFFFF' />
              </IconContainer>
              Compra simples e segura
            </div>
            <div>
              <IconContainer colorItem={ theme['text'] }>
                <Package size={ 16 } weight="fill" color='#FFFFFF' />
              </IconContainer>
              Embalagem mantém o café intacto
            </div>
            <div>
              <IconContainer colorItem={ theme['yellow'] }>
                <Timer size={ 16 } weight="fill" color='#FFFFFF' />
              </IconContainer>
              Entrega rápida e rastreada
            </div>
            <div>
              <IconContainer colorItem={ theme['purple'] }>
                <Coffee size={ 16 } weight="fill" color='#FFFFFF' />
              </IconContainer>
              O café chega fresquinho até você
            </div>

          </IntroContainerItems>
        </div>

        <IntroImage>
          <img src={ introImagePath } alt="Xícara de Café" />
        </IntroImage>
      </IntroContainer>
      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          <CoffeeCard>
            <img src={coffee1} alt="Expresso" />
            <div className='coffeeType'>
              <span>Tradicional</span>
            </div>
            <h4>Café Expresso</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className='cardFooter'>
              <span>R$ 9,90</span>
              
              <button>
                <ShoppingCart size={22} weight="fill" color='#FFFFFF' />
              </button>
            </div>
          </CoffeeCard>

          <CoffeeCard>
            <img src={coffee1} alt="Expresso" />
            <div className='coffeeType'>
              <span>Tradicional</span>
            </div>
            <h4>Café Expresso</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className='cardFooter'>
              <span>R$ 9,90</span>
              
              <button>
                <ShoppingCart size={22} weight="fill" color='#FFFFFF' />
              </button>
            </div>
          </CoffeeCard>

          <CoffeeCard>
            <img src={coffee1} alt="Expresso" />
            <div className='coffeeType'>
              <span>Tradicional</span>
            </div>
            <h4>Café Expresso</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className='cardFooter'>
              <span>R$ 9,90</span>
              
              <button>
                <ShoppingCart size={22} weight="fill" color='#FFFFFF' />
              </button>
            </div>
          </CoffeeCard>

          <CoffeeCard>
            <img src={coffee1} alt="Expresso" />
            <div className='coffeeType'>
              <span>Tradicional</span>
            </div>
            <h4>Café Expresso</h4>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className='cardFooter'>
              <span>R$ 9,90</span>
              
              <button>
                <ShoppingCart size={22} weight="fill" color='#FFFFFF' />
              </button>
            </div>
          </CoffeeCard>
        </CoffeeList>
      </CoffeeListContainer>
    </>
  );
}