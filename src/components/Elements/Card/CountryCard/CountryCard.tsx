import React from "react";
import { Link } from "react-router-dom";
import styles from "./CountryCard.module.css";
import CountryImage from "@/components/Elements/Card/CountryImage/CountryImage";
import CountryDetails from "@/components/Elements/Card/CountryDetails/CountryDetails";
import { countries } from "@/data/Countries";

const CountryCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
      {countries.map((country) => (
        <Link
          to={`${country.id}`}
          key={country.id}
          className={styles.countryLink}
        >
          <div className={styles.countryCard}>
            <CountryImage image={country.image} name={country.name} />
            <CountryDetails
              id={String(country.id)}
              capital={country.capital}
              population={country.population}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryCard;
