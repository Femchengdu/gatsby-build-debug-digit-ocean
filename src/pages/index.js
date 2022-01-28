import * as React from "react";
import Shows from "../components/home_page_components/shows";
//import Videos from "../components/home_page_components/videos"
//import Podcasts from "../components/home_page_components/podcasts" // again
//import Articles from "../components/home_page_components/articles"
// Test the database data here
//import useGetPodcastList from "../hooks/useGetPodcastList"
//import useGetShowList from "../hooks/useGetShowList"
//import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = () => {
  // const list = useGetShowList()
  // const data = list[6]
  // const { title, featuredImage } = data
  // console.log("The list data is: ", title, featuredImage)
  //console.log("The list data is: ", featuredImage.node)
  //
  /* New fallback image API
  featuredImage.node.localFile.childImageSharp.gatsbyImageData.images.fallback
  */
  return (
    <div>
      <h1 className="margin-sm">Learn</h1>

      <Shows />
      {/* 
       {featuredImage && (
        <GatsbyImage
          image={featuredImage.node.localFile.childImageSharp.gatsbyImageData}
        />
      )}
      {featuredImage && (
        <img
          src={
            featuredImage.node.localFile.childImageSharp.gatsbyImageData.images
              .fallback.src
          }
          alt={featuredImage.node.altText}
          className="margin-xxs"
        />
      )}
      
      <Videos />
      <Podcasts />
      <Articles /> 
      */}
    </div>
  );
};

export default IndexPage;
