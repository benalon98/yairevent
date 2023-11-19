import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

const Home2 = (props) => {
  return (
    <Layouts fullWidth>
      <HeroOneSection />
    </Layouts>
  );
};
export default Home2;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
