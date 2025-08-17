import ReactMarkdown from "react-markdown"
import "@fontsource/inter"
import { useEffect, useRef } from "react"

function Recipe({ recipe, onReset }) {

    const recipeRef = useRef(null)

    useEffect(() => {
        if (recipe && recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])


    if (!recipe) return null

    return (
        <section
            ref={recipeRef}
            className="recipe-container"
            style={{ fontFamily: "Inter, sans-serif" }}
        >


            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 style={{ fontSize: "2rem", margin: "1rem 0" }} {...props} />,
                    h2: ({ node, ...props }) => <h2 style={{ fontSize: "1.5rem", margin: "1rem 0" }} {...props} />,
                    h3: ({ node, ...props }) => <h3 style={{ fontSize: "1.2rem", margin: "0.75rem 0" }} {...props} />,
                    li: ({ node, ...props }) => <li style={{ marginBottom: "1.0rem" }} {...props} />,
                    p: ({ node, ...props }) => <p style={{ marginBottom: "1rem", lineHeight: "1.6" }} {...props} />,
                }}
            >
                {recipe}
            </ReactMarkdown>


            <label className="reset-container">
                Got more cravings?
                <button className="reset-button" onClick={onReset}>
                    New recipe
                </button>
            </label>
        </section>
    )
}

export default Recipe
