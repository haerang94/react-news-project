import React from "react";

type Props = {
  match: any;
  // children: React.ReactNode;
};

const DetailPage: React.FC<Props> = ({ match }) => {
  const { idx } = match.params;
  return <div>detail {idx}</div>;
};

export default DetailPage;
