"use client";

import { useEffect, useState } from "react";
import AccordionListWithSearch from "./components/AccordionListWithSearch";
import FilterMenu from "./components/FilterMenu";
import { getData } from "./components/api";

import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    username: '',
    name: '',
    email: '',
    city: '',
    zipcode: '',
    address: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
    };

    fetchData();
  }, []);

  const filterData = () => {
    const filterKeys = ['username', 'name', 'email', 'city', 'zipcode', 'address'];
  
    return data.filter((item) => {
      return filterKeys.every((key) => {
        const filterValue = filters[key].toLowerCase();
        if (!filterValue) return true;
  
        if (key === 'address') {
          const addressValues = [item.address.street, item.address.suite, item.address.city].join(' ').toLowerCase();
          return addressValues.includes(filterValue);
        }
  
        return item[key]?.toLowerCase().includes(filterValue);
      });
    });
  };
  
  return (
    <div>
      <h1 className={styles.accordionTitle}>Accordion List with Search</h1>
      <div className={styles.accordionWrapper}>
        <FilterMenu filters={filters} setFilters={setFilters} />
        <main className={styles.accordionMenu}>
          <AccordionListWithSearch data={filterData()} />
        </main>
      </div>
    </div>
  );
}
