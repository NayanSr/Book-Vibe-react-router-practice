import { useLoaderData } from "react-router"
import Banner from "../../components/Banner/Banner"
import Books from "../Books/Books"

const Home = () => {
  const books= useLoaderData();

  return (
    <div>
        <Banner/>
        <Books books={books}/>
    </div>
  )
}

export default Home