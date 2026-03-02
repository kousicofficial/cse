const fs = require('fs');
let html = fs.readFileSync('d:/svs/index.html', 'utf8');

const alumniHTML = `        <!-- ===== ALUMNI EXCELLENCE ===== -->
        <section class="section alumni-section" id="alumni">
            <div class="container">
                <div class="section-header">
                    <span class="section-label">Alumni Network</span>
                    <h2 class="section-title">Alumni Excellence</h2>
                    <p class="section-sub">Our graduates are leading at top organizations worldwide.</p>
                </div>

                <div class="alumni-carousel-wrapper">
                    <div class="alumni-track">
                        <!-- Group 1 -->
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni.jpg" alt="Rama Krishna Sundeep" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Rama Krishna Sundeep</h4>
                                <p class="alumni-role">Sr. Software Engineer</p>
                                <p class="alumni-company">Microsoft, US</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_2(1).png" alt="Maruthi SunilKumar" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Maruthi SunilKumar</h4>
                                <p class="alumni-role">Vice President</p>
                                <p class="alumni-company">JPMorgan Chase, UK</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_3.png" alt="Vikram Keerthi" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Vikram Keerthi</h4>
                                <p class="alumni-role">Assoc. Vice President</p>
                                <p class="alumni-company">Govt. of Tamilnadu</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_4.png" alt="Ajay Balasubramaniam" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Ajay Balasubramaniam</h4>
                                <p class="alumni-role">Team Lead</p>
                                <p class="alumni-company">Subex, London</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_5.png" alt="Pydi Uday Bhaskar" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Pydi Uday Bhaskar</h4>
                                <p class="alumni-role">CEO</p>
                                <p class="alumni-company">Cliperact</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni.jpg" alt="Sai Srinivas" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Sai Srinivas</h4>
                                <p class="alumni-role">Alumnus</p>
                                <p class="alumni-company">NJIT, USA</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_7.png" alt="Vivek Surya S" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Vivek Surya S</h4>
                                <p class="alumni-role">Developer</p>
                                <p class="alumni-company">Zoho Corporation</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_8(1).png" alt="Abishek Murali" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Abishek Murali</h4>
                                <p class="alumni-role">Team Lead</p>
                                <p class="alumni-company">SentinelOne</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_9.png" alt="Barath Ragul B" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Barath Ragul B</h4>
                                <p class="alumni-role">Tech Lead</p>
                                <p class="alumni-company">SWAAS Systems</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_10.png" alt="Rathnam Parthasarathi" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Rathnam Parthasarathi</h4>
                                <p class="alumni-role">Security Architect</p>
                                <p class="alumni-company">Citi Bank, US</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_11.png" alt="Abhishek Singh" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Abhishek Singh</h4>
                                <p class="alumni-role">Technology Lead</p>
                                <p class="alumni-company">Boston Scientific</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_12.png" alt="Mathangi Suresh" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Mathangi Suresh</h4>
                                <p class="alumni-role">Teaching</p>
                                <p class="alumni-company">NJIT</p>
                            </div>
                        </div>
                        <!-- Group 2 (Duplicate for Seamless Loop) -->
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni.jpg" alt="Rama Krishna Sundeep" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Rama Krishna Sundeep</h4>
                                <p class="alumni-role">Sr. Software Engineer</p>
                                <p class="alumni-company">Microsoft, US</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_2(1).png" alt="Maruthi SunilKumar" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Maruthi SunilKumar</h4>
                                <p class="alumni-role">Vice President</p>
                                <p class="alumni-company">JPMorgan Chase, UK</p>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="alumni-photo-wrap">
                                <img src="assets/alumni_3.png" alt="Vikram Keerthi" class="alumni-photo">
                            </div>
                            <div class="alumni-info">
                                <h4 class="alumni-name">Vikram Keerthi</h4>
                                <p class="alumni-role">Assoc. Vice President</p>
                                <p class="alumni-company">Govt. of Tamilnadu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

html = html.replace(/<section class="section alumni-section" id="alumni">[\s\S]*?<\/section>/, alumniHTML);

fs.writeFileSync('d:/svs/index.html', html);
