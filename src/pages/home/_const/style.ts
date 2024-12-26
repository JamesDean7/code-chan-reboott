export const PAGE_HOME_STYLE = {
  gallery: {
    container: {
      margin: { sm: "0", xl: "0 auto" },
      maxWidth: { sm: "none", xl: "1200px" },
      padding: { sm: "0 20px" },
      columnGap: { sm: "10px", md: "20px", lg: "30px" },
      rowGap: { sm: "10px", md: "20px", lg: "30px" },
      gridTemplateColumns: {
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      },
    },
    image: {
      height: { sm: "400px", md: "500px" },
      width: { sm: "100%" },
    },
  },
};
