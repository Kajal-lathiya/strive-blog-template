import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const BlogList = (props) => {
  useEffect(() => {
    fetchStriveBlogposts();
  }, []);
  const fetchStriveBlogposts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/mongoBlogPosts`);
      const result = await response.json();
      console.log("RESULT:-", result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
