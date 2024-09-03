import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"
import { useEffect, useState } from "react"

const APP_ID = "3298bbb0"
const APP_KEY = "df6a6b2761683fae180f1241d088ece"

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`)
      const data = await res.json();
      console.log(data);      
    } catch (error) {
      console.log(error.message);    
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes("chicken")
  }, [])

  return <div className="bg-[#faf9fb] p-10 flex-1">
    <div className="max-w-screen-lg mx-auto">
      <form>
        <label className="input shadow-md flex items-center gap-2">
          <Search size={"24"} />
          <input type="text"
            className="text-sm md:text-md grow"
            placeholder="What do you want to cook today?"
          />
        </label>
      </form>

      <p className="font-bold text-3xl md:text-5xl mt-4">
        Recommended Recipes
      </p>
      <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
        Popular choices
      </p>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">  
        {/* 1st recipe */}
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>

      </div>
    </div>
  </div>

}

export default HomePage