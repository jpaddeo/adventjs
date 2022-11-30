export const fixFiles = (files) => {
  const filesMap = {};
  return files.map((file) => {
    if (!filesMap[file]) {
      filesMap[file] = 0;
    }
    return (file + `(${filesMap[file]++})`).replace('(0)', '');
  });
};
