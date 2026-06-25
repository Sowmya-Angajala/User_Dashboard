import {
  Box,
  Button,
  Input,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [editingUser, setEditingUser] =
    useState(null);

  const {
    isOpen,
    onOpen,
    onClose,
  } = useDisclosure();

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await API.get("/users");

      const formatted = res.data.map(
        (u) => ({
          ...u,
          firstName:
            u.name.split(" ")[0],
          lastName:
            u.name.split(" ")[1] || "",
          department:
            [
              "HR",
              "IT",
              "Finance",
              "Sales",
            ][
              Math.floor(
                Math.random() * 4
              )
            ],
        })
      );

      let expandedUsers = [];

      for (let i = 0; i < 10; i++) {
        expandedUsers.push(
          ...formatted.map((user) => ({
            ...user,
            id: user.id + i * 10,
          }))
        );
      }

      setUsers(expandedUsers);
    } catch (err) {
      alert("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const saveUser = async (
    form
  ) => {
    try {
      if (editingUser) {
        await API.put(
          `/users/${editingUser.id}`,
          form
        );

        setUsers((prev) =>
          prev.map((u) =>
            u.id === editingUser.id
              ? {
                  ...form,
                  id: editingUser.id,
                }
              : u
          )
        );
      } else {
        await API.post(
          "/users",
          form
        );

        setUsers((prev) => [
          ...prev,
          {
            ...form,
            id: prev.length + 1,
          },
        ]);
      }

      onClose();
      setEditingUser(null);
    } catch {
      alert("Failed");
    }
  };

  const handleDelete = async (
    id
  ) => {
    try {
      await API.delete(
        `/users/${id}`
      );

      setUsers((prev) =>
        prev.filter(
          (u) => u.id !== id
        )
      );
    } catch {
      alert("Delete failed");
    }
  };

  const handleEdit = (
    user
  ) => {
    setEditingUser(user);
    onOpen();
  };

  let filtered = users.filter(
    (user) =>
      user.firstName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      user.lastName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) ||
      user.email
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  if (sort === "asc") {
    filtered.sort((a, b) =>
      a.firstName.localeCompare(
        b.firstName
      )
    );
  }

  if (sort === "desc") {
    filtered.sort((a, b) =>
      b.firstName.localeCompare(
        a.firstName
      )
    );
  }

  const startIndex =
    (page - 1) * Number(limit);

  const endIndex =
    startIndex + Number(limit);

  const paginated =
    filtered.slice(
      startIndex,
      endIndex
    );

  const totalPages =
    Math.ceil(
      filtered.length /
        Number(limit)
    );

  if (loading)
    return <Loader />;

  return (
    <>
      <Navbar />

      <Box p={5}>
        <Stack
          direction={{
            base: "column",
            md: "row",
          }}
          mb={5}
        >
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(
                e.target.value
              );
              setPage(1);
            }}
          />

          <Select
            value={sort}
            onChange={(e) =>
              setSort(
                e.target.value
              )
            }
          >
            <option value="">
              Sort
            </option>
            <option value="asc">
              A-Z
            </option>
            <option value="desc">
              Z-A
            </option>
          </Select>

          <Select
            value={limit}
            onChange={(e) => {
              setLimit(
                Number(
                  e.target.value
                )
              );
              setPage(1);
            }}
          >
            <option value="10">
              10
            </option>
            <option value="25">
              25
            </option>
            <option value="50">
              50
            </option>
            <option value="100">
              100
            </option>
          </Select>

          <Button
  colorScheme="blue"
  flexShrink={0}
  minW="120px"
  onClick={() => {
    setEditingUser(null);
    onOpen();
  }}
>
  Add User
</Button>
        </Stack>

        <Box
  border="1px solid"
  borderColor="gray.200"
  borderRadius="md"
  overflow="hidden"
>
  <Box
    maxH="500px"
    overflowY="auto"
  >
    <UserTable
      users={paginated}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  </Box>

  <Box
    p={4}
    borderTop="1px solid"
    borderColor="gray.200"
    bg="white"
  >
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      setCurrentPage={setPage}
    />
  </Box>
</Box>

        <UserForm
          isOpen={isOpen}
          onClose={onClose}
          user={editingUser}
          saveUser={saveUser}
        />
      </Box>
    </>
  );
}
