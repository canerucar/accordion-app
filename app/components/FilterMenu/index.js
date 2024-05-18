import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function FilterMenu({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className={styles.filterWrapper}>
      <h1>Filter</h1>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="username" placeholder="Username" value={filters.username} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="name" placeholder="Name" value={filters.name} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="email" placeholder="Email" value={filters.email} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="city" placeholder="City" value={filters.city} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="zipcode" placeholder="Zip Code" value={filters.zipcode} onChange={handleChange} />
      </div>
      <div className={styles.inputWrapper}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input name="address" placeholder="Address" value={filters.address} onChange={handleChange} />
      </div>
    </div>
  );
}
