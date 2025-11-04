const BIN_URL = "https://api.jsonbin.io/v3/b/68cda2d643b1c97be948751f";
const API_KEY = "$2a$10$c.fF5cGZeLx1Ue0tLup8W.H6TdDdYzTaWqpzWJjJJ7/JsYRfaAMjK";
const output = document.getElementById("output");

async function getData() {
    const res = await fetch(BIN_URL,
        {headers: {"X-Master-Key": API_KEY,}}
    );
    const data = await res.json();
    const singleAffiliate = data.record.affiliates.map(
        a =>
            `
                <li>
                    ${a.fName} ${a.lName} (${a.isStudent ? "Student" : "Not Student"})
                </li>
            `
    );
    output.innerHTML+=singleAffiliate;
}