import AnimeInfo from "components/AnimeInfo/AnimeInfo";
import Comentarios from "components/Comentarios/Comentarios";
import Player from "components/Player/Player";

function Anime() {
  return (
    <>
      <Player />
      <AnimeInfo />
      <Comentarios />
    </>
  )
}

export default Anime;