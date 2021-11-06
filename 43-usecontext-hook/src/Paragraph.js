import React from "react";

function Paragraph({ theme }) {
  console.log("theme: ", theme);
  return (
    <p className={theme}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eligendi
      ea iure excepturi pariatur blanditiis repudiandae alias! Explicabo,
      doloremque natus adipisci nesciunt, quas sit consequatur iusto ab
      sapiente, provident illum.
    </p>
  );
}

export default Paragraph;
