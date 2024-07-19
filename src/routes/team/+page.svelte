<svelte:head>
    <title>Team</title>
    <meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
    <h1>Team</h1>
    
    <!-- Founding Team -->
    <div class="team-section">
        <h2>Founding Team</h2>
        <div class="team-grid">
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/john-doe.jpg" alt="John Doe">
                </div>
                <h3>Mei Higashi</h3>
                <p>Founder</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/jane-smith.jpg" alt="Jane Smith">
                </div>
                <h3>Chris Swain</h3>
                <p>Co-Founder</p>
            </div>
        </div>
    </div>

    <!-- Advisory Team -->
    <div class="team-section">
        <h2>Advisory Team</h2>
        <div class="team-grid">
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/emily-davis.jpg" alt="Emily Davis">
                </div>
                <h3>Tina Sharkey</h3>
                <p>EIR from USC IYA</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Jean-Michel Arnault</h3>
                <p>EIR from USC IYA</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Audra Quinn</h3>
                <p>EIR from USC Marshall</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Todd Furuike</h3>
                <p>Financial Advisor from USC's AAPA</p>
            </div>
        </div>
    </div>

    <!-- Board -->
    <div class="team-section">
        <h2>Board of Directors</h2>
        <div class="team-grid">
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/alex-brown.jpg" alt="Alex Brown">
                </div>
                <h3>Mei Higashi</h3>
                <p>President + Undergraduate Representative</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/sam-wilson.jpg" alt="Sam Wilson">
                </div>
                <h3>Jackie Franco</h3>
                <p>Graduate Representative</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/taylor-green.jpg" alt="Taylor Green">
                </div>
                <h3>Leader</h3>
                <p>Taylor Green</p>
            </div>
        </div>
    </div>

    <!-- Student Leadership Committee -->
    <div class="team-section">
        <h2>Student Leadership Committee</h2>
        <div class="team-grid">
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/emily-davis.jpg" alt="Emily Davis">
                </div>
                <h3>LavaLabs</h3>
                <p>EIR from USC IYA</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Blockchain@USC</h3>
                <p>EIR from USC IYA</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>SparkSC</h3>
                <p>EIR from USC Marshall</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Trojan Investment Society (TIS)</h3>
                <p>Financial Advisor from USC's AAPA</p>
            </div>
            <div class="profile">
                <div class="photo-container">
                    <img src="path/to/chris-lee.jpg" alt="Chris Lee">
                </div>
                <h3>Global Investment Society (GIS)</h3>
                <p>Financial Advisor from USC's AAPA</p>
            </div>
        </div>
    </div>
    
</div>


<style>
    .text-column {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .team-section {
        margin-bottom: 40px;
    }
    
    .team-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;
        gap: 20px;
    }
    
    .profile {
        width: calc(33.333% - 20px); /* Ensure three profiles per row */
        box-sizing: border-box;
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        height: 250px; /* Set a fixed height for all profile boxes */
    }
    
    .photo-container {
        width: 100%;
        height: 60%; /* Adjust the height to fit within the profile box */
        position: relative;
        overflow: hidden;
        border-radius: 50%; /* Optional: for circular photos */
    }
    
    .photo-container img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .profile h3 {
        margin: 10px 0 5px; /* Adjust the margin as needed */
    }
    
    .profile p {
        margin: 0; /* Remove margin to decrease spacing */
        line-height: 1.2; /* Adjust line-height as needed */
    }
    
    /* Media Queries for Responsiveness */
    @media (max-width: 1024px) {
        .profile {
            width: calc(50% - 20px); /* Two profiles per row */
            height: 250px; /* Adjust height for smaller screens */
        }
    }
    
    @media (max-width: 768px) {
        .profile {
            width: 100%; /* One profile per row */
            height: 200px; /* Adjust height for smaller screens */
        }
        .photo-container {
            height: 50%; /* Adjust photo height for smaller screens */
        }
    }
</style>