
export default function Project() {
    return (
        <main id="calc">
            <title>Project | Resume</title>
            <div id="user-input">
                <h2>Project</h2>
                <h4 className="pd">Calculator</h4>
                <label htmlFor="inputOne"></label><input id="inputOne" placeholder="First Number"/>
                <label htmlFor="inputTwo"></label><input id="inputTwo" placeholder="Second Number"/>
            </div>

            <div id="opp">
                <button onClick="addition()" className="button">+</button>
                <button onClick="subtraction()" className="button">-</button>
                <button onClick="multiplication()" className="button">*</button>
                <button onClick="division()" className="button">/</button>
                <button onClick="power()" className="button">**</button>
                <button onClick="clearVal()" id="clear">Clear</button>
            </div>

            <h3 id="output"></h3>
        </main>
    )
}