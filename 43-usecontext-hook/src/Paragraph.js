import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);

  return (
    <p className={context.theme}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur eligendi
      ea iure excepturi pariatur blanditiis repudiandae alias! Explicabo,
      doloremque natus adipisci nesciunt, quas sit consequatur iusto ab
      sapiente, provident illum.
    </p>
  );
}

export default Paragraph;
