import { Button, HStack, Text } from "@chakra-ui/react";

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  );

  return (
    <HStack
      mt={5}
      justify="center"
      spacing={2}
      flexWrap="wrap"
    >
      <Button
        colorScheme="gray"
        isDisabled={currentPage === 1}
        onClick={() =>
          setCurrentPage((prev) => prev - 1)
        }
      >
        Prev
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          colorScheme={
            currentPage === page
              ? "blue"
              : "gray"
          }
          onClick={() =>
            setCurrentPage(page)
          }
        >
          {page}
        </Button>
      ))}

      <Button
        colorScheme="gray"
        isDisabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage((prev) => prev + 1)
        }
      >
        Next
      </Button>

      <Text ml={3}>
        Page {currentPage} of {totalPages}
      </Text>
    </HStack>
  );
}