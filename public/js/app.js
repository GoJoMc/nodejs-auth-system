const token = localStorage.getItem("token");

if (token) {
    window.location.href = "/dashboard.html";
}

const API_URL = "/auth";

const registerTab = document.getElementById("registerTab");

const loginTab = document.getElementById("loginTab");

const registerForm = document.getElementById("registerForm");

const loginForm = document.getElementById("loginForm");

const output = document.getElementById("output");

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");

    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");

    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

registerForm.addEventListener("submit", async e => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username,
                email,
                password
            })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("token", data.token);

            window.location.href = "/dashboard.html";
        }

        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = error.message;
    }
});

loginForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "/dashboard.html";
        }

        output.textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        output.textContent = error.message;
    }
});
