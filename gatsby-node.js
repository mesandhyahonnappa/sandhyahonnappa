exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path === "/") {
    // To hide nav links on home page
    page.context.layout = "root";
    createPage(page);
  }
};
