module.exports = {
    schema: [
      {
        "https://countries.trevorblades.com": {},
      },
      "src/apollo/client-schema.graphql",
    ],
    documents: ["src/pages/**/*.{ts,tsx}"],
    overwrite: true,
    generates: {
      "src/apollo/graphql.tsx": {
        plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
        config: {
          skipTypename: false,
          withHooks: true,
          withHOC: false,
          withComponent: false,
        },
      },
    },
  };
