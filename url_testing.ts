document.addEventListener('DOMContentLoaded', function () {
    const checkButton = document.getElementById('submit_url');
    const urlInput = document.getElementById('url_input') as HTMLInputElement;

    if (checkButton) {
        checkButton.addEventListener("click", function() {
            blacklist_testing(urlInput.value);
        });
    }
});

async function blacklist_testing(urlToTest: string) {
    try {
        // API Key pour Safe Browsing
        const apiKey = "AIzaSyBeHxovn11TcUjqfyM34wzcaV9i_V87220";

        // Construire le corps de la requête
        const requestBody = {
            "client": {
                "clientId": "projet-pi2",
                "clientVersion": "1.0.0"
            },
            "threatInfo": {
                "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
                "platformTypes": ["ANY_PLATFORM"],
                "threatEntryTypes": ["URL"],
                "threatEntries": [
                    { "url": urlToTest }
                ]
            }
        };

        // Effectuer la requête POST avec fetch
        const response = await fetch(`https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        // Gérer la réponse
        if (response.ok) {
            const responseData = await response.json();

            // Vérifier si la réponse de l'API contient des menaces
            if (responseData.matches && responseData.matches.length > 0) {
                console.log('Attention site dangereux');
                afficherMessage("Attention site dangereux");
            } else {
                console.log('Site sécurisé');
                afficherMessage("Site sécurisé");
            }
        } else {
            console.error('Erreur lors de la requête Safe Browsing :', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de la requête Safe Browsing :', error);
    }
}

function afficherMessage(message: string) {

    const resultElement = document.getElementById('resultat');

    if (resultElement) {
        resultElement.innerHTML = message;
    }
}
