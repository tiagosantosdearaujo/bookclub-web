import { Flex } from "@chakra-ui/react";
import { BookCard, BookCardImage } from "components/molecules";

export const BookList = ({ data }) => {
  return (
    <Flex
      marginBottom={"10px"}
      maxWidth="1216px"
      maxHeight="298px"
      flexDirection={"row"}
    >
      {data &&
        data?.map((item) => <BookCard key={`book_${item.id}`} {...item} />)}
    </Flex>
  );
};

export const BookListImage = ({ data }) => {
  return (
    <Flex
      marginBottom={"10px"}
      maxWidth="1216px"
      maxHeight="298px"
      flexDirection={"row"}
    >
      {data &&
        data?.map((item) => (
          <BookCardImage key={`book_${item.id}`} {...item} />
        ))}
    </Flex>
  );
};
