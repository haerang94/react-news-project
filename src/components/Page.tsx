import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "components/sharedComponents";

const Page = ({totoalResults}) => {
  const [page, SetPage] = useState([1,2,3,4,5]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  return <div></div>;
};

export default Page;
