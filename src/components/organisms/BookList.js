import { Flex } from "@chakra-ui/react";
import { BookCard } from "components/molecules";
import { useQuery } from "react-query";
import { getHighLightedBooks } from "services/api/requests";

export const BookList = () => {
  const { data } = useQuery("highlighted", getHighLightedBooks);
  return (
    <Flex
      marginBottom={"10px"}
      maxWidth="1216px"
      maxHeight="298px"
      flexDirection={"row"}
    >
      {data?.data &&
        data?.data.map((item) => (
          <BookCard key={`book_${item.id}`} {...item} />
        ))}
    </Flex>
  );
};

// export const BookListImage = ({ data }) => {
//   return (
//     <Flex
//       marginBottom={"10px"}
//       maxWidth="1216px"
//       maxHeight="298px"
//       flexDirection={"row"}
//     >
//       {data &&
//         data?.map((item) => (
//           <BookCardImage key={`book_${item.id}`} {...item} />
//         ))}
//     </Flex>
//   );
// };
