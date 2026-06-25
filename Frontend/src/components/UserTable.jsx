import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";

export default function UserTable({
  users,
  handleDelete,
  handleEdit,
}) {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Department</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>

      <Tbody>
        {users?.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.firstName}</Td>
            <Td>{user.lastName}</Td>
            <Td>{user.email}</Td>
            <Td>{user.department}</Td>

            <Td>
              <Button
                size="sm"
                colorScheme="green"
                mr={2}
                onClick={() =>
                  handleEdit(user)
                }
              >
                Edit
              </Button>

              <Button
                size="sm"
                colorScheme="red"
                onClick={() =>
                  handleDelete(user.id)
                }
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}