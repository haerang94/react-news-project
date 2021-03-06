import React from "react";
import BookmarkContainer from "containers/BookmarkContainer";
import HeaderContainer from "containers/HeaderContainer";
const BookmarkPage = React.memo(() => {
  return (
    <>
      <HeaderContainer />
      <BookmarkContainer></BookmarkContainer>
    </>
  );
});

export default BookmarkPage;
