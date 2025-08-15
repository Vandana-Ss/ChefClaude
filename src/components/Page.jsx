import { useState } from "react"

function Page() {
    const [ingredients, setIngredients] = useState([])

    const listItems = ingredients.map(item => (
        <li key={item}>{item}</li>
    ))

    function addItem(e){
        e.preventDefault()
        const formInput = new FormData(e.currentTarget)
        const newItem = formInput.get("ingredient")
        setIngredients(prev => [...prev, newItem])
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input type='text' placeholder='e.g. oregano' className='input-class' name="ingredient"/>
                <button className='add-button'>Add ingredients</button>
            </form>
            <span>add atleast 5 ingredients.</span>

            <ul>
                {listItems}
            </ul>
        </>
    )
}

export default Page