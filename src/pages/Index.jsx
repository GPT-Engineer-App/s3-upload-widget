import React, { useState } from "react";
import { Button, Input, VStack, Text, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Simulate file upload
    if (file) {
      toast({
        title: "File Uploaded",
        description: `${file.name} uploaded successfully.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Here you would typically handle the actual file upload to S3
      // Example:
      // const formData = new FormData();
      // formData.append("file", file);
      // axios.post('/upload-to-s3', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      // .then(response => console.log("File uploaded successfully"))
      // .catch(error => console.error("Error uploading file: ", error));
    } else {
      toast({
        title: "No file selected",
        description: "Please select a file to upload.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="xl">Upload your file to S3</Text>
      <Text fontSize="md">Single File Upload:</Text>
      <Input type="file" onChange={handleFileChange} />
      <Text fontSize="md">Multiple Files Upload:</Text>
      <Input type="file" multiple onChange={handleFileChange} />
      <Text fontSize="md">Image Files Only:</Text>
      <Input type="file" accept="image/*" onChange={handleFileChange} />
      <Button leftIcon={<FaUpload />} colorScheme="blue" onClick={handleUpload}>
        Upload
      </Button>
    </VStack>
  );
};

export default Index;
