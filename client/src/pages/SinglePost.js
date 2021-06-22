import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import { FETCH_POSTS_QUERY } from "../utils/graphql";

function SinglePost(props) {
  const postId = props.match.params.postId;
  console.log(postId);

  const {
    data: { getPost },
  } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });
}

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default SinglePost;
