import { useState } from "react"
import getRecipeFromMistral from "./api.js"
import Recipe from "./Recipe"

function Page() {

    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const [loading, setLoading] = useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient").trim()

        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
    }

    async function handleGetRecipe() {
        setLoading(true)
        try {
            const result = await getRecipeFromMistral(ingredients)
            setRecipe(result ?? "Sorry, could not fetch the recipe. Please try again.")
        } catch (err) {
            setRecipe("Error connecting to AI. Check your settings.")
        }
        setLoading(false)
    }

    function resetPage(){
        setIngredients([])
        setRecipe("")
    }



    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <span className="note-line">*add atleast 4 ingredients*</span>
            {ingredients.length > 0 && (
                <>
                    <section>
                        <h2>Ingredients on hand:</h2>
                        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                        {ingredients.length > 3 &&
                            <div className="get-recipe-container">
                                <div>
                                    <h3>Ready for a recipe?</h3>
                                    <p>Generate a recipe from your list of ingredients.</p>
                                </div>
                                <button onClick={handleGetRecipe}>
                                    {loading ? "Generating..." : "Get a recipe"}
                                </button>
                            </div>
                        }
                    </section>
                    <Recipe recipe={recipe} onReset={resetPage}/>
                </>
            )}

            
        </main>
    )
}


export default Page

