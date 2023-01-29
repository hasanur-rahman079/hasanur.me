import React from "react";
import styled from "styled-components";
import { PageTitle, PubCard } from "../components";
import { StatSection } from "../container";
import SEO from "../lib/SEO";
// import { MdSearch } from "react-icons/md";
// import statData from "../constants";

const PublicationsStyles = styled.div`
  .pubSearch {
    position: relative;
    width: 300px;
    margin-top: 5rem;

    form {
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
  }

  .allpub {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 768px) {
  }
`;

export default function Research() {
  // capture the search text that we'll search in the input box
  // calling all the data from stat data by using useState (hook) N.B. Dont forget to import the hook here
  // const [pubData, setPubdata] = useState(PubInfo);

  // Using UseEffect funciton for filter the search data
  // useEffect(() => {
  //   if (searchText === "") return;
  //   setPubdata(() =>
  //     PubInfo.filter((publication) =>
  //       publication.title.toLowerCase().match(searchText.toLowerCase())
  //     )
  //   );
  // }, [searchText]);

  // creating the function that we assigned handleChange for the onChange object.
  // preventDefault will prevent the default behaviour of the search box
  // setSearchText state will show the typed search text in the box
  // function handleChange(e) {
  //   e.preventDefault();
  //   setSearchText(e.target.value);
  // set the default value if the search item is 0
  //   if (!e.target.value.length > 0) {
  //     setPubdata(PubInfo);
  //   }
  // }  // const [searchText, setSearchText] = useState("");

  return (
    <>
      <SEO pageTitle="Activities" />

      <PublicationsStyles className="pageContainer">
        {/* <div className="container">
        <SectionTitle
          title="Publications"
          subTitle="Find my recent publications here"
        />

        <div className="pubNumber">
          <h1>Total publicaitons {publications.length} </h1>
        </div>

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
        </div> */}

        <PageTitle pageTitle="Research Records" />

        <StatSection />

        <div className="allpub">
          <PubCard />
        </div>
      </PublicationsStyles>
    </>
  );
}
