import { useContext, useEffect, useState } from "react";
import ContentCreator from "../../components/card-content-creator";

import { UserContext } from "../../contexts/UserContext";
import { NewsContext } from "../../contexts/NewsContext";
import { CardNewsOverview } from "../../components/cardNewOverview";

import Button from "@mui/material/Button";

import "./index.css";

function AllJournalists() {
  const { getAllUsers, allUsers } = useContext(UserContext);

  const { allNews, getAllNews, article } = useContext(NewsContext);

  const [select, setSelect] = useState(false);
  const [aut, setAut] = useState(false);

  const filtrados = allNews?.filter((news) => news?.authorId === select);

  useEffect(() => {
    getAllUsers();
    //console.log(allUsers);
  }, []);

  if (select === false) {
    return (
      <div>
        <h2>Criadores de Conteúdo</h2>
        <div className="apenas-teste">
          {allUsers?.map((user) => {
            if (user.type === "content creator") {
              return (
                <div key={user.id}>
                  <ContentCreator
                    name={user.name}
                    avatar={user.avatar}
                    city={user.data?.adress.city}
                    state={user.data?.adress.state}
                    id={user.id}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                      setSelect(user.id);
                      setAut(user.name);
                    }}
                  >
                    Teste
                  </Button>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }

  if (select) {
    if (filtrados.length > 0) {
      return (
        <div>
          <h3>Publicações de {aut}</h3>
          <Button
            variant="contained"
            size="small"
            onClick={() => setSelect(false)}
          >
            Voltar
          </Button>
          {filtrados &&
            filtrados.map((article) => (
              <CardNewsOverview article={article} key={article.id} />
            ))}
        </div>
      );
    }

    if (filtrados.length === 0) {
      return (
        <div>
          <h3>Publicações de {aut}</h3>
          <Button
            variant="contained"
            size="small"
            onClick={() => setSelect(false)}
          >
            Voltar
          </Button>
          <p>Este autor ainda não possuí publicações.</p>
        </div>
      );
    }
  }
}

export default AllJournalists;
