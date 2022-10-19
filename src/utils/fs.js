export const download = (data, filename = 'file') => {
  const json = JSON.stringify(data);

  const blob = new Blob([json], {
    type: 'text/txt',
  });
  const link = document.createElement('a');

  link.setAttribute('href', URL.createObjectURL(blob));
  link.setAttribute('download', `${filename}.txt`);
  link.click();
};

export const upload = (file, setHandler) => {
  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    const newData = JSON.parse(reader.result);
    setHandler(newData);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
};
