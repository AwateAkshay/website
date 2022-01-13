const a =
  "data:image/png;base64,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";
export default a;
