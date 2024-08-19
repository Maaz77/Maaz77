document.getElementById("load-bio").addEventListener("click", function() {
    const biographies = [
        "John Doe is a software engineer from San Francisco. With over 10 years of experience in web development, John has worked with top tech companies and has a passion for open-source projects.",
        "Jane Smith is a graphic designer and digital artist from New York. She has worked with various renowned brands and is known for her creative approach to visual storytelling.",
        "Michael Johnson, a data scientist based in Austin, Texas, specializes in machine learning and AI. He has published numerous papers and is a frequent speaker at tech conferences.",
        "Emily Davis, a travel blogger and photographer, has visited over 50 countries. Her blog captures the beauty of different cultures and landscapes around the world.",
        "Chris Brown is a cybersecurity expert from London. With years of experience in ethical hacking and network security, Chris is dedicated to making the digital world a safer place."
    ];

    // Get a random biography
    const randomBio = biographies[Math.floor(Math.random() * biographies.length)];

    // Display the biography in the paragraph element
    document.getElementById("bio-content").textContent = randomBio;
});
 