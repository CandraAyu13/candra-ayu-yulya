// const getData = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/client");
//     if (!response.ok) {
//       throw new Error("Error" + response.statusText);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.error("error", err);
//   }
// };

const postData = async () => {
  const dataForm = {
    nama: document.getElementById('nama').value,
    email: document.getElementById('email').value,  
    keterangan: document.getElementById('message').value
  };

  console.log(dataForm)

  try {
    const response = await fetch("https://api-service-murex.vercel.app/client", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataForm),
    });
    if (!response.ok) {
      throw new Error("Error " + response.statusText);
    }
    const data = await response.json();
    alert( data[0].message);
  } catch (err) {
    console.error("error", err);
  }
};
