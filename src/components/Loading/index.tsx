import  ReactLoading, {  LoadingType }  from "react-loading"
import { LoadContainer } from "./styles";

import React from 'react';
import { UserContext } from "../../contexts/GlobalContext";

interface ILoadingProps {
  type: LoadingType
  color: string;
  w: number;
  h: number
}

export const Loading = ({type, color, w, h}: ILoadingProps) => {
  const {load} = React.useContext(UserContext)

  return(
    <LoadContainer load={load}>
      <ReactLoading  type={type} color={color} height={h} width={w} />
    </LoadContainer>
    ) 
  };
