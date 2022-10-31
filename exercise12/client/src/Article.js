import "./Article.css";

function Article() {
    return(
        <>
        <div className="aricle">
        <article>
        <table>
            <tr>
                <td>
                    <h1>Java</h1>
                    <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.</p>
                    <p>Java was originally developed by James Gosling at Sun Microsystems.</p>
                </td>
                <td>
                    <h1>C++</h1>
                    <p>C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.</p>
                    <p>C++ was designed with systems programming and embedded.</p>
                </td>
                <td>
                    <h1>Python</h1>
                    <p>Python is a high-level, general-purpose programming language.</p>
                    <p>Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[36] Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support.</p>
                </td>
            </tr>
        </table>
        
        
  </article>
        </div>
        </>
    )
}

export default Article;