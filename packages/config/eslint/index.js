module.exports = {
  extends: ["next", "prettier", "alloy", "alloy/react", "alloy/typescript"],
  rules: {
    "no-var": 2,
    "react/jsx-key": "off",
    "@next/next/no-html-link-for-pages": "off",
  },
};
