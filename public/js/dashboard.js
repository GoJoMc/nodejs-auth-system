const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "/";
}

const userData = document.getElementById("userData");

async function loadProfile() {
    try {
        const response = await fetch("/auth/profile", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.error) {
            localStorage.removeItem("token");

            window.location.href = "/";

            return;
        }

        userData.innerHTML = `
            <p>ID: ${data.user.id}</p>
            <p>Email: ${data.user.email}</p>
        `;
    } catch (error) {
        console.log(error);
    }
}

loadProfile();

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");

    window.location.href = "/";
});
