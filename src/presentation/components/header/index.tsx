import React, { memo } from "react"
import { Header as LoginHeader } from "./styles"
import Image from "@/presentation/components/logo"

const Header = () => {
    return (
        <LoginHeader>
          <Image />
          <h1>Nome do Sistema</h1>
        </LoginHeader>
    )
}

export default memo(Header)