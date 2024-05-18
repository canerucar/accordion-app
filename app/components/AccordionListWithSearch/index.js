import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight, faArrowUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import LoadingIndicator from '../LoadingIndicator';
import styles from './index.module.scss';

export default function AccordionListWithSearch({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(data);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setLoading(false);
    setItems(data);
  }, [data]);

  const moveUp = (index) => {
    if (index === 0) return; 

    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[index - 1];
    newItems[index - 1] = temp;

    newItems[index].id = index + 1;
    newItems[index - 1].id = index;

    setItems(newItems);
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.id}>
          <div onClick={() => toggleAccordion(index)} className={styles.toggleAcordion}>
            <div className={styles.toggleAcordionItem}>
              <FontAwesomeIcon icon={activeIndex === index ? faAngleDown : faAngleRight} />
            </div>
            <div className={styles.itemWrapper}>
              <p><b>ID:</b> {item.id}</p>
              <p><b>Username:</b> {item.username}</p>
              <p><b>Name:</b> {item.name}</p>
            </div>
            <button onClick={(e) => {
                e.stopPropagation();
                moveUp(index);
            }} disabled={index === 0}>
                {index === 0 ? (
                    <FontAwesomeIcon icon={faTimes} />
                ) : (
                    <FontAwesomeIcon icon={faArrowUp} />
                )}
            </button>
          </div>
          {activeIndex === index && (
            <div className={styles.activeItem}>
              <p>Email: {item.email}</p>
              <p>Phone: {item.phone}</p>
              <p>Website: {item.website}</p>
              <p>City: {item.address.city}</p>
              <p>Zip Code: {item.address.zipcode}</p>
              <p>Address: {item.address.street}, {item.address.suite}</p>
              <p>Company: {item.company.name}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
