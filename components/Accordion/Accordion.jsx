import { useState } from 'react';

import './Accordion.css';

const AccordionItem = ({ title, content, index, activeIndex, onItemClick }) => {
  const isActive = index === activeIndex;

  return (
    <div className={`item ${isActive ? 'open' : ''}`} key={title}>
      <div
        className="question"
        onClick={() => onItemClick(index)}
        aria-expanded={isActive}
        aria-controls={`content-${index}`}
      >
        <h3>{title}</h3>
        <span className="icon" />
      </div>
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        id={`content-${index}`}
        className="content"
        aria-hidden={!isActive}
      />
    </div>
  );
};

export const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          index={index}
          activeIndex={activeIndex}
          onItemClick={handleItemClick}
        />
      ))}
    </>
  );
};

export default Accordion;
