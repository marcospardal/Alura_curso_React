import React from "react";
import { useParams } from "react-router-dom";

import ListaPost from "../components/ListaPost";

const SubCategoria = () => {
  const { subCategoria } = useParams();

  return <ListaPost url={`/posts?subcategoria=${subCategoria}`} />;
};

export default SubCategoria;
