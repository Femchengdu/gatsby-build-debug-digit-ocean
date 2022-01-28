import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

const useGetShowList = () => {
  let show_data = false;
  const data = useStaticQuery(graphql`
    query ShowsQuery {
      allWpShow {
        nodes {
          title
          id
          databaseId
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED)
                }
              }
            }
          }
          showsAcf {
            ledgerMediaUrl
            ledgerUrl
          }
        }
      }
    }
  `);
  if (data) {
    //console.log("The data is :>>>>", data.allWpShow.nodes)
    show_data = data.allWpShow.nodes;
  }
  const [stateData] = useState(show_data);
  return stateData;
};

export default useGetShowList;
