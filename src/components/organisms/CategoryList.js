import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Flex } from "@chakra-ui/react";
import { CategoryCard, BookCard } from "components/molecules";
import { getCategories, getBooksByCategory } from "services/api/requests";

export const CategoryList = () => {
  const [selected, setSelected] = useState();
  const { data } = useQuery("categories", getCategories);
  const bookQuery = useQuery(["bookById", selected], () =>
    getBooksByCategory(selected)
  );

  useEffect(() => {
    if (!selected && data?.data) {
      setSelected(data?.data[0].id);
    }
  }, [data]);

  return (
    <Flex flexDirection={"column"}>
      <Flex
        marginBottom={"16px"}
        maxWidth="1216px"
        maxHeight="298px"
        flexDirection={"row"}
      >
        {data?.data &&
          data?.data?.map((item) => (
            <CategoryCard
              key={`book_${item.id}`}
              selected={selected === item.id}
              onClick={() => setSelected(item.id)}
              {...item}
            />
          ))}
      </Flex>

      <Flex
        marginBottom={"10px"}
        maxWidth="1216px"
        maxHeight="298px"
        flexDirection={"row"}
      >
        {bookQuery?.data &&
          bookQuery?.data?.data?.map((item) => (
            <BookCard key={`book_${item.id}`} {...item} />
          ))}
      </Flex>
    </Flex>
  );
};
