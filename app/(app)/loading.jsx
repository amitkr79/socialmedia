import { Flex } from "antd";
import Image from "next/image";
import React from "react";

const MainLoadingScreen = () => {
  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      <Image
        src="/images/logo.jpg"
        width={30}
        height={30}
        alt="logo"
        style={{
          marginTop: "-5rem",
          filter: "grayscale(100%)",
          opacity: "0.5",
          transform: "scale(0.8)",
        }}
      />
    </Flex>
  );
};

export default MainLoadingScreen;
