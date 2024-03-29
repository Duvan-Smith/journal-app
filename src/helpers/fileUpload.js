export const fileUpload = async (file) => {
  if (!file) throw new Error("Archivo nulo");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dif9bdkjy/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal-d");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Error al subir la imagen");

    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
