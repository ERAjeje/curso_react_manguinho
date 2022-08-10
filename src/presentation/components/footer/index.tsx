import React, { memo } from "react";
import { Footer as LoginFooter } from "./styles";

function Footer() {
  return (
    <LoginFooter>
      <p>Todos os direitos reservados</p>
    </LoginFooter>
  )
}

export default memo(Footer)