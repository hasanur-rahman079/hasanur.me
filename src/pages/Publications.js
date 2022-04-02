import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import PubItems from "../components/PubItems";
import PubInfo from "../assets/data/publications";

const PublicationsStyles = styled.div`
  padding: 10rem 0;

  .pubSearch {
    position: relative;
    width: 300px;
    margin-top: 5rem;

    input {
      width: 100%;
      font-size: 2rem;
      padding: 0.8rem;
      color: var(--black);
      border-radius: 6px;
      outline: none;
      border: none;
    }

    .searchIcon {
      position: absolute;
      width: 2rem;
      right: 1rem;

      path {
        color: var(--deep-dark);
      }
    }
  }

  .allpub {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.8em;
  }

  @media only screen and (max-width: 768px) {
    .pubSearch {
      width: 100%;
    }

    .allpub {
      grid-template-columns: 1fr;
    }
  }
`;

export const Publications = () => {
  // capture the search text that we'll search in the input box
  const [searchText, setSearchText] = useState("");

  // calling all the data from stat data by using useState (hook) N.B. Dont forget to import the hook here
  const [pubData, setPubdata] = useState(PubInfo);

  // Using UseEffect funciton for filter the search data
  useEffect(() => {
    if (searchText === "") return;
    setPubdata(() =>
      PubInfo.filter((publication) =>
        publication.title.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  // creating the function that we assigned handleChange for the onChange object.
  // preventDefault will prevent the default behaviour of the search box
  // setSearchText state will show the typed search text in the box
  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    // set the default value if the search item is 0
    if (!e.target.value.length > 0) {
      setPubdata(PubInfo);
    }
  }

  return (
    <PublicationsStyles>
      <div className="container">
        <SectionTitle
          title="Publications"
          subTitle="Find my recent publications here"
        />

        <div className="pubSearch">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Search title/author"
            />
            <MdSearch className="searchIcon"></MdSearch>
          </form>
        </div>

        <div className="allpub">
          {pubData.map((publication) => (
            <PubItems
              key={publication.id}
              title={publication.title}
              authors={publication.authors}
              journaL={publication.journal}
              issue={publication.issue}
              date={publication.date}
              doi={publication.doi}
              impact={publication.if}
            />
          ))}
        </div>
      </div>
    </PublicationsStyles>
  );
};
