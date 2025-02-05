// components/AboutMe.js
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='about-wrapper'>
    <div className="about">
      <h2 className='about-title'>Обо мне</h2>
      <p className='about-text'>
        Сертифицированный <strong>Full-Stack разработчик</strong> с опытом в проектировании и создании веб-приложений, решающих реальные задачи. 
        Разработка систем с нуля, модернизирование унаследованных проектов и оптимизация процессов во благо максимальной эффективности.
      </p>
      <ul className="about-list">
        <li><strong>Инженерный подход к бизнес-логике:</strong> трансформация хаоса в структурированную систему с заделом на масштабируемость.</li>
        <li><strong>Микросервисные архитектуры (Node.js):</strong> умение разбирать монолит и собирать его обратно без потерь.</li>
        <li><strong>Производительность и отказоустойчивость:</strong> обеспечение стабильной работы системы при высокой нагрузке и непредвиденных ситуациях.</li>
        <li><strong>Интерфейсы:</strong> создание точных и эстетически совершенных интерфейсов, полностью соответствующих дизайн-макетам.</li>
        <li><strong>SEO-оптимизация и видимость:</strong> эффективное продвижение проектов в поисковых системах через продуманные и проверенные стратегии.</li>
        <li><strong>Деплой и инфраструктура:</strong> автоматизация CI/CD, настройка серверов и мониторинг.</li>
        <li><strong>Тестирование финального продукта:</strong> юнит, интеграционное и UI тестирование.</li>
      </ul>
      <div className="additional">
      <h2 className='about-title'>А еще </h2>
        <ul className="about-list">
          <li><strong>Дизайн и визуальные решения:</strong> разработка уникальных и функциональных дизайн-макетов, логотипов и айдентики брендов, создающих яркий и запоминающийся образ для продукта.</li>
          <li><strong>3D-анимации:</strong> создание динамичных и выразительных анимаций для контента, которые оживляют и подчеркивают его и блаблабла.</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;